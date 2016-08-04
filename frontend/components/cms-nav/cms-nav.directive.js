import template from './cms-nav.html';
directive.$inject = ['cms'];
function directive(cms) {
    function link(scope, element, attr) {
        const menu = cms.data.online.menu;
        $('.main-nav').css('top', menu.top);
        $('body').css('padding-top', menu.bodyPaddingTop);
        if (menu.inverse) $(element).find('.cms-menu').addClass('navbar-inverse');
        if (menu.bottom) $(element).find('.cms-menu').removeClass('navbar-fixed-top').addClass('navbar-fixed-bottom');

        const vm = scope.vm;
        vm.toggleContainer = function () {
            cms.editState.showContainerEdit = !cms.editState.showContainerEdit;
        }

        $(element).find('.cms-types-dropdown').on('show.bs.dropdown', function () {
            $('body').addClass('dnd-mode');
        });

        $(element).find('.cms-types-dropdown').on('hide.bs.dropdown', function () {
            $('body').removeClass('dnd-mode');
        });
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