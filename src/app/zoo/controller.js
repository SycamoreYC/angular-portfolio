/**
 * Created by songyechun on 17/2/10.
 */
(function (angular) {

    angular.module('app.zoo')
        .controller('zooCtrl', ['food', config]);

    function config(food) {
        var vm = this;
        console.log('zoo');
        vm.notice = function () {
            console.log(food.meet);
        }
    }
})(window.angular);
