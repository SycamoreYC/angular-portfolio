/**
 * Created by songyechun on 17/2/10.
 */
(function (angular) {

    angular.module('app.park')
        .controller('parkCtrl', ['food', config]);

    function config(food) {
        console.log(food.meet);
    }
})(window.angular);