/**
 * Created by songyechun on 17/2/7.
 */
(function (angular) {

    angular.module('comAlert', []);

    angular.module('comAlert')
        .directive('alert', config);

    function config() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: '../src/components/alert/alert.tpl.html',
            scope: {
                type: '=',
                close: '&'
            }
        }
    }

})(window.angular);