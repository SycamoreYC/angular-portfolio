/**
 * Created by songyechun on 17/2/10.
 */
(function (angular) {

    angular.module('app.zoo')
        // .factory('restaurant', config)
        .factory('food', food);

    // function config(food) {
    //     return {
    //         menu: function () {
    //             console.log('Menu: Today we provide ' + food.meet);
    //         }
    //     }
    // }

    function food() {
        return {
            meet: 'meet from zoo'
        }
    }
})(window.angular);