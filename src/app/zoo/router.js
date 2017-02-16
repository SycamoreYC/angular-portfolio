/**
 * Created by songyechun on 17/2/10.
 */
(function (angular) {

    angular.module('app.zoo')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        var tiger = {
            url: '/zoo/tiger',
            controller: 'tigerCtrl',
            controllerAs: 'vm',
            templateUrl: '/src/app/zoo/tiger/index.html'
        };
    $stateProvider.state('tiger',tiger);
}

})(window.angular);