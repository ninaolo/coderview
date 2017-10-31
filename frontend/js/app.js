var coderview = angular.module('coderview', ['ngRoute', 'ngResource', 'ngCookies', 'slick', 'ngSanitize']);

coderview.directive('ngPrism', [function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            element.ready(function() {
                Prism.highlightElement(element[0]);
            });
        }
    }
}]);

/**
 * ROUTING
 */
coderview.config(['$routeProvider',
    function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'partials/welcome.html'
        });

        $routeProvider.when('/main', {
            templateUrl: 'partials/main.html'
        });

        $routeProvider.when('/:name', {
            templateUrl: function (url) {
                return "partials/" + url.name + ".html";
            }
        });

        $routeProvider.when('/:category/:name', {
            templateUrl: function (url) {
                return "partials/" + url.category + "/" + url.name + ".html";
            }
        });

        $routeProvider.when('/:category/:sub/:name', {
            templateUrl: function (url) {
                return "partials/" + url.category + "/" + url.sub + "/" + url.name + ".html";
            }
        });


    }
]);

