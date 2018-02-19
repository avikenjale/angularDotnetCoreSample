(function(){
    'use strict';

    angular.module('app.services')
    .factory('NewMenuService', NewmenuService);

    NewmenuService.$inject = ['$http']

    function NewmenuService($http)
    {
        var baseUrl = "http://localhost:5000/api/Newmenus";

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