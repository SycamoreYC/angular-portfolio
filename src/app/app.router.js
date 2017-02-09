/**
 * Created by songyechun on 16/12/2.
 */
(function (angular) {
    angular
        .module('app')
        .config(config);

    config.$inject = ['$urlRouterProvider', '$stateProvider'];
    function config($urlRouterProvider, $stateProvider) {
        var home = {
            url: '/'
        };
        var portfolio = {
            url: '/portfolio',
            templateUrl: '../src/app/portfolio/index.html',
            controller: 'portfolioCtrl',
            controllerAs: 'vm'
        };
        $stateProvider.state('home', home);
        $stateProvider.state('portfolio', portfolio);
        $urlRouterProvider.otherwise('/');
    }

})(window.angular);