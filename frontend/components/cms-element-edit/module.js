import formly from '../formly/module';

const module = angular
    .module('components.cmsElementEdit', [formly])
    .directive('cmsElementEdit', directive)
    .factory('formService', service);

import template from './tpl.html';

directive.$inject = [];

function directive() {
    controller.$inject = [];
    function controller() {
        const vm = this;
        vm.isTab = vm.cmsFields[0].isTab ? true : false;
        vm.fullScreenText = 'Fullscreen';
        vm.changeScreenSize = function () {
            if ($('.cms-window-placeholder').hasClass('cms-window')) {
                $('.cms-window-placeholder').removeClass('cms-window');
                vm.fullScreenText = 'Fullscreen';
            } else {
                $('.cms-window-placeholder').addClass('cms-window');
                vm.fullScreenText = 'Minimize';
            }
        }
        vm.options = {formState: {path: ''}};
    }

    return {
        replace: true,
        restrict: 'A',
        scope: {},
        bindToController: {
            cmsType: '=',
            cmsModel: '=',
            cmsFields: '=',
            onCancel: '&',
            onSubmit: '&',
            onAdd: '&',
            onApply: '&',
            onDelete: '&'
        },
        template,
        controllerAs: 'vm',
        controller
    };
}

service.$inject = ['$http', '$timeout', 'cms', '$uibModal'];
function service($http, $timeout, cms, $uibModal) {
    function manipulate(ref, type, _model, cb) {

        const Type = Types[type];

        function modalCtrl($scope, $uibModalInstance) {
            $scope.$on('saveContainers', (e, obj) => scope.$emit('saveContainersFw', obj));
            $scope.$on('restoreContainers', (e, obj) => scope.$emit('restoreContainersFw', obj));

            $scope.model = {};

            if (ref) {
                cms.getType(type, ref, (model) => {
                    _.assign($scope.model, model);
                })
            } else if (_model) {
                cms.createElement(type, _model, model => {
                    _.assign($scope.model, model);
                })
            }

            $scope.fields = Type.form;

            if (Type.tabs) {
                $scope.fields = _.map(Type.tabs, (tab, i) => {
                    const _tab = {title: tab.title, fields: []};
                    if (i === 0) {
                        _tab.active = true;
                        _tab.isTab = true;
                    }
                    _.merge(tab, {fields: []});
                    for (const field of Type.form) {
                        const inFirstTab = () => {
                            let result = true;
                            Type.tabs.forEach((tab, i) => {
                                if (i !== 0) {
                                    if (tab.fields.indexOf(field.key) !== -1 || field.tab === tab.title) result = false;
                                }
                            })
                            return result;
                        }
                        if (field.tab === tab.title || tab.fields.indexOf(field.key) !== -1 || (i === 0 && inFirstTab())) {
                            _tab.fields.push(field);
                        }
                    }
                    return _tab;
                })
            }

            $scope.type = type;

            $scope.submit = function () {
                cms.updateElement($scope.type, $scope.model, (_model) => {
                    $uibModalInstance.close(_model);
                    console.log('update element successful');
                }, () => $uibModalInstance.dismiss('cancel'));
            };

            $scope.apply = function () {
                cms.updateElement($scope.type, $scope.model);
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };

            $scope.delete = function () {
                cms.removeElement($scope.type, $scope.model._id, () => {
                    $uibModalInstance.close();
                })
            };

            $scope.add = function () {
                $scope.apply()
                cms.createElement(type, {}, model => {
                    $uibModalInstance.close();
                    edit(model._id, type, cb);
                })
            };


        }


        let mouseEnter = false;

        $('body').on('scroll mousewheel touchmove', function (e) {
            if (!mouseEnter) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        });

        const modalInstance = $uibModal.open({
            animation: false,
            size: 'lg',
            template: `
                <div cms-element-edit
                     cms-type="type"
                     cms-model="model"
                     cms-fields="fields"
                     on-cancel="cancel()"
                     on-submit="submit()"
                     on-add="add()"
                     on-apply="apply()"
                     on-delete="delete()">
                </div>
                `,
            controller: modalCtrl,
            windowClass: 'cms-window-placeholder'
        });

        $timeout(() => {
            $('.cms-window-placeholder').find('.modal-content').mouseover(() => {
                mouseEnter = true;
            }).mouseout(() => {
                mouseEnter = false;
            });
        }, 100);

        modalInstance.result.then((model) => {
            if (cb) $timeout(cb(model));
        })['finally'](function () {
            $timeout(()=> {
                $('body').off('scroll mousewheel touchmove');
                $('.cms-window-placeholder').find('.modal-content').off();
            });
        });


    }

    function edit(ref, type, cb) {
        manipulate(ref, type, null, cb);
    }

    function add(model, type, cb) {
        manipulate(null, type, model, cb);
    }

    return {
        edit,
        add
    }
}

export default module.name;
