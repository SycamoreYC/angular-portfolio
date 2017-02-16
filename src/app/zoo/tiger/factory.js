/**
 * Created by songyechun on 17/2/10.
 */
(function (angular) {

    angular.module('app.zoo.tiger')
        // .factory('food', food1)
        .factory('food', food2);


    function food1() {
        return {
            meet: 'meet from tiger',
        }
    }

    function food2() {
        return {
            meet: 'meet from tiger factory food2',
        }
    }
})(window.angular);