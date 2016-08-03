import template from './container-edit.html';

import traverse from  'traverse';

directive.$inject = ['cms', '$timeout'];
function directive(cms, $timeout) {
    function link(scope, element, attr) {
        $(element).find('.cms-container-panel').draggable({
            cancel: ".panel-body",
            handle: ".panel-heading",
        });
        scope.vm.editState = cms.editState;
        const {vm} = scope;

        const test = {
            main: {
                elements: [
                    {
                        "type": "Article",
                        "ref": "579109d67babc20c5a7f8673",
                        "containers": {
                            tab: {
                                elements: [
                                    {
                                        "type": "Article",
                                        "ref": "579109d67babc20c5a7f8673"
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }

        vm.treeConfig = {
            core: {
                themes: {name: 'proton', responsive: true},
                animation: true,
                check_callback: true
            },
            plugins: ["dnd", "types"],
            version: 1
        }

        vm.tree = traverse(cms.data.containers).map(function (node) {
            if (!node) return;
            if (!this.key || (this.key === 'children' && this.parent.parent.node[0].type === 'element')) {
                const _node = _.map(node, (v, k) => ({text: k, type: 'container', children: v.elements}));
                this.update(_node);
            } else if (this.parent && this.parent.key === 'children' && node.ref) {
                const _node = {
                    content: _.pick(node, ['type', 'ref']),
                    text: `${node.type} - ${cms.getTitle(node.type, node.ref)}`,
                    type: 'element',
                    children: node.containers
                };
                this.update(_node);
            }
        });

        $timeout(() => vm.treeConfig.version++);
    }

    return {
        replace: false,
        restrict: 'A',
        scope: {},
        bindToController: {},
        template,
        controller: function () {
        },
        controllerAs: 'vm',
        link
    };
}


export default directive;