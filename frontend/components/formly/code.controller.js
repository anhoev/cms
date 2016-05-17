import {JSHINT} from 'jshint';
window.JSHINT = JSHINT;
import es6 from './ecma6.json';
import es5 from './ecma5.json';
import cmsdef from './cms-def.json';
import 'jquery-ui/effect';

controller.$inject = ['$scope', '$http', 'size'];
function controller($scope, $http, size) {

    $scope.size = size;
    $scope.hasError = false;
    $scope._model = $scope.model[$scope.options.key] ? $scope.model[$scope.options.key].toString().replace('"use strict";\n\n', '') : 'function () {\n}';


    $scope.$watch('_model', function (value) {
        if ($scope._model || $scope._model !== '') {
            try {
                const escape = s => s.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\f/g, "\\f");
                $scope.model[$scope.options.key] = JsonFn.parse(`{"fn":"${escape(value)}"}`).fn;
                $scope.hasError = false;
            } catch (e) {
                $scope.hasError = true;
            }
        }
    })
    $scope.editorOptions = {
        lineWrapping: true,
        lineNumbers: true,
        autoCloseBrackets: true,
        showHint: true,
        mode: 'javascript',
        tabSize: 2,
        gutters: ["CodeMirror-lint-markers"],
        lint: function (text, options, cm) {
            const linter = cm.getHelper(CodeMirror.Pos(0, 0), 'lint');
            _.merge(options, {
                esversion: 6,
                debug: true,
                '-W025': true,
                asi: true
            });
            return linter(text, options);
        }
    };


    $scope.codemirrorLoaded = function (editor) {
        $scope.editor = editor;
        const server = new CodeMirror.TernServer({defs: [es5, es6, cmsdef]});
        editor.setOption("extraKeys", {
            "Ctrl-Space": function (cm) {
                server.complete(cm);
            },
            "Ctrl-I": function (cm) {
                server.showType(cm);
            },
            "Ctrl-O": function (cm) {
                server.showDocs(cm);
            },
            "Alt-.": function (cm) {
                server.jumpToDef(cm);
            },
            "Alt-,": function (cm) {
                server.jumpBack(cm);
            },
            "Ctrl-Q": function (cm) {
                server.rename(cm);
            },
            "Ctrl-.": function (cm) {
                server.selectName(cm);
            },
            'Ctrl-L': function (cm) {
                if ($('.cms-window-placeholder').hasClass('cms-window')) {
                    $('.cms-window-placeholder').removeClass('cms-window');
                } else {
                    $('.cms-window-placeholder').addClass('cms-window');
                }
                cm.setOption("fullScreen", !cm.getOption("fullScreen"));
            },
            'Esc': function (cm) {
                $('.cms-window-placeholder').removeClass('cms-window');
                if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
            }
        })
        editor.on("cursorActivity", function (cm) {
            server.updateArgHints(cm);
        });
    };

    $scope.selectTab = function () {
        $scope.refresh = !$scope.refresh;
    };

    $scope.show = false;
    $scope.showCode = function () {
        /*if ($scope.show === false) {
            $('.cms-window-placeholder').switchClass(null, 'cms-window', 500, "easeInOutQuad");
        } else {
            $('.cms-window-placeholder').switchClass('cms-window', null, 500, "easeInOutQuad");
        }*/
        $scope.show = !$scope.show
    }

}

export default controller;