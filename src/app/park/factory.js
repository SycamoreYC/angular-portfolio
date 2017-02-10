/**
 * Created by songyechun on 17/2/10.
 */
(function (angular) {

    angular.module('app.park')
        .factory('food', food);

    function food() {
        return {
            meet: 'meet from park'
        }
    }
})(window.angular);