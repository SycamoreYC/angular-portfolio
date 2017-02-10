/**
 * Created by songyechun on 17/2/10.
 */
(function (angular) {
    
    angular.module('app.zoo.tiger')
        .controller('tigerCtrl', ['food', config]);
    
    function config(food) {
        console.log('tiger');
        var vm = this;
        vm.say = function () {
            console.log(food.meet);
        }
    }
})(window.angular);