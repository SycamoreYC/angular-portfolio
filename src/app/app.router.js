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
        var zoo =  {
            url: '/zoo',
            templateUrl: '../src/app/zoo/index.html',
            controller: 'zooCtrl',
            controllerAs: 'vm'
        };
        var park ={
            url: '/park',
            templateUrl: '../src/app/park/index.html',
            controller: 'parkCtrl',
            controllerAs: 'vm'
        };

        $stateProvider.state('home', home);
        $stateProvider.state('portfolio', portfolio);
        $stateProvider.state('zoo', zoo);
        $stateProvider.state('park', park);

        $urlRouterProvider.otherwise('/');
    }

})(window.angular);