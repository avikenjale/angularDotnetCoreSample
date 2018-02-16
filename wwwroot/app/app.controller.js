(function () {
    'use strict';

    angular.module('SampleApp')
        .controller('AppController', appController);

    appController.$inject = ['MenuService'];

    function appController(MenuService) {
        var vm = this;
        vm.Menus = [];

        activate();

        vm.getMenus = getMenus;

        function getMenus() {
            MenuService.getMenus().then(function (response) {
                vm.Menus = response.data;
            }, function (error) {
                console.log(error);
            })
        }

        function activate()
        {
            getMenus();
        }
    }
})();