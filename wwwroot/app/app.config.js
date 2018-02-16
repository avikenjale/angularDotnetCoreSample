(function () {
    'use strict';

    angular
        .module('SampleApp')
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider.otherwise('/home');

            var homeState = {
                name: 'Home',
                url: '/home',
                templateUrl: 'app/views/home/home.html'
            };

            var homeListState = {
                name: 'Home.list',
                url: '/list',
                template: '<h3>This is list</h3>'
            };

            var homeParagraphState = {
                name: 'Home.paragraph',
                url: '/paragraph',
                template: '<h2>This is paragraph</h2>'
            };

            var aboutState = {
                name: 'About',
                url: '/about',
                templateUrl: 'app/views/about/about.html'
            };

            var productState = {
                name: 'Products',
                url: '/products',
                templateUrl: 'app/views/products/products.html'
            };

            var partnersState = {
                name: 'Partners',
                url: '/partners',
                templateUrl: 'app/views/partners/partners.html'
            };

            var contactUsState = {
                name: 'Contact Us',
                url: '/contactUs',
                views: {
                    '': {
                        templateUrl: 'app/views/contactUs/contactUs.html'
                    },
                    'contactUsa@Contact Us': {
                        template: '<p class="lead">Please contact here for USA</p>'
                    }, 
                    'contactIndia@Contact Us': {
                        template: '<p class="lead">Please contract here for India </p>'
                    }
                }
            };

            $stateProvider.state(homeState);
            $stateProvider.state(homeListState);
            $stateProvider.state(homeParagraphState);
            $stateProvider.state(aboutState);
            $stateProvider.state(productState);
            $stateProvider.state(partnersState);
            $stateProvider.state(contactUsState);

            $locationProvider.html5Mode(true);

            //Comment added.
        });
})();