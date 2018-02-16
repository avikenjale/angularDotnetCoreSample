(function(){
    'use strict';

    angular.module('app.services')
    .factory('MenuService', menuService);

    menuService.$inject = ['$http']

    function menuService($http)
    {
        var baseUrl = "http://localhost:5000/api/menus";

        var menuService = {
            getMenus: getMenus
        };

        return menuService;

        function getMenus()
        {
            return $http.get(baseUrl);
        }
    }
})();