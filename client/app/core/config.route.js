(function () {
    'use strict';

    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            var routes, setRoutes;

            routes = [
                //'order/order',
                'page/404', 'page/500', 'page/blank'
            ]

            setRoutes = function(route) {
                var config, url;
                url = '/' + route;
                config = {
                    url: url,
                    templateUrl: 'app/' + route + '.html'
                };
                $stateProvider.state(route, config);
                return $stateProvider;
            };

            routes.forEach(function(route) {
                return setRoutes(route);
            });

            $urlRouterProvider
                .when('/', '/order')
                .otherwise('/order');


            $stateProvider.state('order', {
                url: '/order',
                templateUrl: 'app/order/order.html'
            });

        }]
    );

})(); 