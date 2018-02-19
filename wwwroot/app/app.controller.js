(function () {
    'use strict';

    angular.module('SampleApp')
        .controller('AppController', appController);

    appController.$inject = ['MenuService'];
    appController.$inject = ['NewMenuService'];

    function appController(MenuService, NewMenuService) {
        var vm = this;
        vm.Menus = [];

        activate();

        vm.getMenus = getNewMenus;

        function getMenus() {
            MenuService.getMenus().then(function (response) {
                vm.Menus = response.data;
            }, function (error) {
                console.log(error);
            })
        }

        function getNewMenus() {
            NewMenuService.getMenus().then(function (response) {
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