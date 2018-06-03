const webpack = require('webpack');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
    context: __dirname + "/frontend",
    //context: __dirname,
    entry: {
        // create two library bundles, one with jQuery and
        // another with Angular and related libraries
        'lib': [
            'jquery',
            'angular',
            'angular-i18n/de-de',
            'angular-bind-notifier',
            'lodash',
            'lodash/unionWith',
            'lodash/pickBy',
            'json-fn',
            /*'bootstrap-sass',
             'bootstrap/dist/css/bootstrap.css',
             'bootstrap/dist/css/bootstrap-theme.css',*/
            'ng-file-upload',
            'jshint',
            './components/formly/ecma6.json',
            './components/formly/ecma5.json',
            './components/formly/cms-def.json',
            'jquery-ui/ui/effect',
            'jquery-ui/ui/widgets/draggable',
            'jquery-ui/ui/widgets/resizable',
            'angular-ui-bootstrap',
            'angular-ui-switch',
            'angular-ui-switch/angular-ui-switch.min.css',
            'jstree',
            'jstree-bootstrap-theme/dist/themes/proton/style.min.css',
            'ng-js-tree',
            'ui-select',
            'angular-filter',
            'api-check',
            'angular-formly',
            'angular-formly-templates-bootstrap',
            'angularjs-color-picker',
            'angularjs-color-picker/angularjs-color-picker.css',
            'angular-sanitize',
            'angular-file-saver',
            'angular-ui-notification',
            'angular-ui-notification/dist/angular-ui-notification.min.css',
            'codemirror/addon/edit/matchbrackets',
            'codemirror/addon/edit/closebrackets',
            'codemirror/addon/hint/show-hint.css',
            'codemirror/addon/hint/show-hint',
            'codemirror/mode/javascript/javascript',
            'codemirror/lib/codemirror.css',
            'codemirror/addon/display/fullscreen.css',
            'codemirror/addon/display/fullscreen.js',
            'codemirror/addon/lint/lint.css',
            'codemirror/addon/lint/lint.js',
            'codemirror/addon/lint/javascript-lint',
            'codemirror/addon/dialog/dialog.css',
            'codemirror/addon/dialog/dialog.js',
            'acorn/dist/acorn',
            'acorn/dist/acorn_loose',
            'acorn/dist/walk',
            'tern/doc/demo/polyfill',
            'tern/lib/signal',
            'tern/lib/def',
            'tern/lib/comment',
            'tern/lib/infer',
            'tern/plugin/doc_comment',
            'codemirror/addon/tern/tern.css',
            'codemirror/addon/tern/tern.js',
            'angular-ui-codemirror',
            'angular-drag-and-drop-lists',
            'angular-bootstrap-contextmenu',
            'bootstrap/dist/js/bootstrap',
            'traverse',
            'moment',
            'printthis',
            'selectize/dist/css/selectize.css',
            'selectize/dist/js/standalone/selectize.js',
            //'angular-selectize2/dist/angular-selectize',
            'angular-translate',
            'extend',
            'socket.io-client',
            'tinycolor2'
        ]
    },
    output: {
        path: __dirname + '/frontend/build',
        filename: '[name].bundle.js',
        library: '[name]_lib',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', {modules: false}]
                        ]
                    }
                }]
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {test: /\.json$/, loader: "json-loader"},
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {test: /\.(png|gif)$/, loader: "url-loader?limit=100000"},
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&name=build/fonts/[name].[ext]"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?name=build/fonts/[name].[ext]"
            }
        ]
    },
    plugins: [
        new webpack.DllPlugin({
            path: __dirname + '/frontend/build/[name]-manifest.json',
            name: '[name]_lib'
        }),
        //new HardSourceWebpackPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false}
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery'
        })
    ]
};
