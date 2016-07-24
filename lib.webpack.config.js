const webpack = require('webpack');

module.exports = {
    context: __dirname + "/frontend",
    entry: {
        // create two library bundles, one with jQuery and
        // another with Angular and related libraries
        'lib': [
            'jquery',
            'angular',
            'lodash',
            'lodash/unionWith',
            'lodash/pickBy',
            'json-fn',
            'bootstrap-sass',
            'bootstrap/dist/css/bootstrap.css',
            'bootstrap/dist/css/bootstrap-theme.css',
            'font-awesome/css/font-awesome.css',
            'ng-file-upload',
            'jshint',
            './components/formly/ecma6.json',
            './components/formly/ecma5.json',
            './components/formly/cms-def.json',
            'jquery-ui/effect',
            'angular-ui-bootstrap',
            'jstree',
            'jstree-bootstrap-theme/dist/themes/proton/style.min.css',
            'ng-js-tree',
            'ui-select',
            'ui-select/dist/select.min.css',
            'angular-filter',
            'angular-formly',
            'angular-formly-templates-bootstrap',
            'angularjs-color-picker',
            'angularjs-color-picker/angularjs-color-picker.css',
            'angular-sanitize',
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
            'angular-ui-bootstrap',
            'angular-bootstrap-contextmenu',
            'bootstrap/dist/js/bootstrap',
            'angular-websocket'
        ]
    },
    output: {
        path: './frontend',
        filename: 'build/[name].bundle.js',
        library: '[name]_lib',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {test: /\.json$/, loader: "json"},
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {test: /\.(png|gif)$/, loader: "url-loader?limit=100000"},
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&name=build/fonts/[name].[ext]"
            },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?name=build/fonts/[name].[ext]"}
        ]
    },
    plugins: [
        new webpack.DllPlugin({
            // The path to the manifest file which maps between
            // modules included in a bundle and the internal IDs
            // within that bundle
            path: 'frontend/build/[name]-manifest.json',
            // The name of the global variable which the library's
            // require function has been assigned to. This must match the
            // output.library option above
            name: '[name]_lib'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery'
        })
    ]
};
