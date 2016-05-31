'use strict';
const _ = require('lodash');
const fs = require('fs');
const Path = require('path');
const rmdir = require('rmdir');
const cheerio = require('cheerio');
require('generator-bind').polyfill();
const JsonFn = require('json-fn');
const multer = require('multer');

/**
 *
 * @param {{}} cms
 */
module.exports = cms => {
    const {Q, Types} = cms;
    cms.app.use('/build', cms.express.static('frontend/build'));
    cms.app.use('/lib/jquery', cms.express.static('node_modules/jquery'));
    cms.app.use('/lib/tether', cms.express.static('node_modules/tether'));
    cms.app.use('/lib/bootstrap', cms.express.static('node_modules/bootstrap'));

    cms.server = function (path, urlPath, onlyGetTree = false) {
        let _tree = {
            text: 'root', children: [],
            state: {opened: true},
            path: ''
        };
        let _templates = [];

        function _server(path, urlPath, tree, onlyGetTree = false, getFileContent = false) {
            const items = fs.readdirSync(path);
            let isContainerDirectory = false;
            for (const item of items) {
                const node = {text: item};
                if (getFileContent) {
                    if (!fs.lstatSync(`${path}/${item}`).isDirectory()) {
                        const bitmap = fs.readFileSync(`${path}/${item}`);
                        node.file = new Buffer(bitmap).toString('base64');
                    }
                }
                if (item === 'index.json') {
                    isContainerDirectory = true;
                    if (!onlyGetTree) {
                        cms.app.get([urlPath, `${urlPath}/index.html`], function*(req, res) {
                            const content = JSON.parse(cms.readFile(`${path}/index.json`));
                            let adminMode = req.session.adminMode || !cms.data.security ? true : false;
                            const html = yield* render(content, {req, res, adminMode});
                            res.send(html);
                        })
                    }
                    if (getFileContent) tree.push(node);
                } else {
                    if (fs.lstatSync(`${path}/${item}`).isDirectory()) {
                        node.children = [];
                        const result = _server(`${path}/${item}`, `${urlPath}/${item}`, node.children, onlyGetTree, getFileContent);
                        node.type = 'directory';
                        if (result) {
                            node.type = 'containerDirectory';
                            node.icon = 'fa fa-html5';
                            // node.icon = 'glyphicon glyphicon-leaf';
                        }
                    }
                    node.path = path.replace(`${cms.data.basePath}`, '') + `/${item}`;
                    if (node.path[0] === '/') node.path = node.path.substring(1);
                    if (node.path.split('/')[0] === '.template-page' && node.path !== '.template-page') {
                        _templates.push(item.replace('.tpl.json', ''));
                    }
                    tree.push(node);
                }
            }
            return isContainerDirectory;
        }

        cms.data.basePath = path;
        cms.data.baseUrlPath = urlPath;
        cms.data.tree = _tree;
        cms.data.templates = _templates;

        if (_server(path, urlPath, _tree.children, onlyGetTree)) _tree.type = 'containerDirectory';
        if (!onlyGetTree) {
            cms._server = () => cms.server(path, urlPath, true);
            cms.app.use(urlPath, cms.express.static(path));
            cms.app.get('/cms-site-map', function*(req, res) {
                cms._server();
                res.send({tree: cms.data.tree, templates: cms.data.templates, baseUrlPath: cms.data.baseUrlPath});
            })
        }

        cms.app.post('/cms-files/*', multer({storage: multer.memoryStorage()}).single('file'), function (req, res) {
            const {basePath, baseUrlPath} = cms.data;
            // req.files is array of `photos` files
            // req.body will contain the text fields, if there were any
            let _path = req.url.replace('/cms-files', '').replace(baseUrlPath, '');
            _path = `${basePath}${_path[0] === '/' ? '' : '/'}${_path}/${req.file.originalname}`;
            fs.writeFileSync(_path, req.file.buffer, 'binary');

            cms.clearCache();
            res.send();
        })

        cms.app.get('/cms-mobile', function*(req, res) {
            const noTree = req.query.tree === 'false';
            const _tree = {
                text: 'root', children: [],
                type: 'directory',
                path: ''
            };
            _server(path, urlPath, _tree.children, true, true);
            const Types = {};
            for (const type of Object.keys(cms.Types)) {
                Types[type] = {};
                Types[type].list = yield cms.Types[type].Model.find({});
                Types[type].template = cms.Types[type].mTemplate;
                Types[type].fn = cms.Types[type].fn;
                Types[type].serverFn = cms.Types[type].serverFnForClient;
                if (type === 'Wrapper') {
                    Types[type].store = {};
                    _.each(cms.Wrapper.list, ({mTemplate: template, fn = {}, serverFnForClient}, k) => {
                        Types[type].store[k] = {template, serverFn: serverFnForClient, fn}
                    })
                }
            }
            if (noTree) {
                res.send(JsonFn.stringify({Types}));
            } else {
                res.send(JsonFn.stringify({tree: _tree, Types}));
            }
            // todo: Types :Array<{template,list}>

        });
    }

    cms.app.post('/cms-container-page/*', function*(req, res) {
        const {basePath, baseUrlPath} = cms.data;
        let _path = req.url.replace('/cms-container-page', '').replace(baseUrlPath, '');
        _path = `${basePath}${_path[0] === '/' ? '' : '/'}${_path}`;

        const content = JSON.parse(fs.readFileSync(`${_path}/index.json`, 'utf8'));
        content.containers = req.body.containers;
        fs.writeFileSync(`${_path}/index.json`, JSON.stringify(content), 'utf8');
        cms.clearCache();
        res.send();
    })

    cms.app.post('/cms-make-template/', function*(req, res) {
        const {basePath} = cms.data;
        const {path:_path, name} = req.body;

        const content = JSON.parse(fs.readFileSync(`${basePath}/${_path}/index.json`, 'utf8'));
        yield* render(content, {useForTemplate: true});
        fs.writeFileSync(`${basePath}/.template-page/${name}.tpl.json`, JSON.stringify(content), 'utf8');
        cms.clearCache();
        res.send();
    })

    cms.app.post('/cms-create-page/', function*(req, res) {
        const {basePath} = cms.data;
        const {templatePage, path} = req.body;

        const content = JSON.parse(fs.readFileSync(`${basePath}/.template-page/${templatePage}.tpl.json`, 'utf8'));
        yield* render(content, {useForCreatePage: true});
        fs.mkdirSync(`${basePath}/${path}`);
        fs.writeFileSync(`${basePath}/${path}/index.json`, JSON.stringify(content), 'utf8');
        cms.clearCache();
        res.send();
    })

    cms.app.post('/cms-delete-page/', function*({body: {path}}, res) {
        rmdir(`${cms.data.basePath}/${path}`, (e) => {
            if (e) throw e;
            cms.clearCache();
            res.send();
        });
    })

    cms.app.post('/cms-rename-page/', function*({body: {path, name}}, res) {
        const arr = path.split('/');
        arr.pop();
        arr.push(name);
        const path2 = arr.join('/');
        fs.renameSync(`${cms.data.basePath}/${path}`, `${cms.data.basePath}/${path2}`);
        res.send();
    })


    function injectCmsToHtml($) {
        const menu = cms.compile(Path.resolve(__dirname, 'menu.jade'));
        $('body').prepend(menu);
        $('html').attr('data-ng-app', 'app');
        $('body').append(`
            <script src="build/bundle.js"></script>
        `);
        $('body').attr('ng-controller', 'appCtrl');
    }

    /**
     *
     * @param content
     * @param options
     * @param options.useForTemplate
     * @param options.useForCreatePage
     * @param options.adminMode
     * @returns {*|string}
     */
    function* render(content, options) {
        const {req, res, useForTemplate = false, useForCreatePage = false, adminMode = true} =options;
        const html = cms.compile(cms.resolvePath(content.path))();
        const $ = cheerio.load(html);

        content.containers = content.containers || [];
        // yield* renderContainers(content.containers, $);

        // resolve
        const types = yield* resolve($, content.containers);

        if (adminMode) {
            $('body').prepend(`
                <script id="cms-data" type="application/json">
                    {
                        "types": ${JsonFn.stringify(types)},
                        "containers": ${JsonFn.stringify(content.containers)},
                        "serverFn": ${JsonFn.stringify(_.map(cms.serverFn, (fn, k) => k))},
                        "setupServerFn": ${JsonFn.stringify(cms.utils.setupServerFn)}
                    }
                </script>
            `);
            injectCmsToHtml($);
            cms.filters.page.forEach(fn => fn($, content));
        } else {
            $('head').append(`
                <link rel="stylesheet" href="build/angular.css"/>
                <script src="/lib/jquery/dist/jquery.js"></script>
                <script src="/lib/bootstrap/dist/js/bootstrap.js"></script>
            `);
        }

        return $.html();

        function* resolve($, containers) {
            
            const html = yield* cms.ng.$compile($.html(), $rootScope => {
                $rootScope.containers = containers;
                $rootScope.typesBuilder = new cms.TypesBuilder();
            })({});
            
            return cms.ng.services.$rootScope.typesBuilder.Types;
        }
    }
};
