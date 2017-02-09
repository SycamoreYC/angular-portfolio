/**
 * Created by songyechun on 17/2/6.
 */
(function (angular) {

    angular.module('com-button', []);

    angular
        .module('com-button')
        .directive('button', config);

    function config() {
        return {
            restrict: 'E',
            compile: function (ele, attr) {
                ele.addClass('btn');
                if (attr.type === 'submit') {
                    ele.addClass('btn-primary');
                }
                if (attr.size) {
                    ele.addClass('btn-' + attr.size);
                }
            }
        }
    }

})(window.angular);