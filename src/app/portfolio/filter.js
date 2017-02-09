/**
 * Created by songyechun on 17/1/25.
 */
(function (angular) {
    angular.module('app.portfolio')
        .filter('logUpperCase', uppercase);

    function uppercase(uppercaseFilter) {
        return function (input) {
            console.log('Calling uppercase on: ' + input);
            return uppercaseFilter(input);
        }
    }

})(window.angular);