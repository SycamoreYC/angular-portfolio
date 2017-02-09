/**
 * Created by songyechun on 17/2/6.
 */
(function (angular) {
    angular.module('comPassword', []);

    angular.module('comPassword')
        .directive('validateEquals', config);

    function config() {
        return {
            require: 'ngModel',
            link: function (scope, ele, attr, ngModelCtrl) {

                // 比较传入的值与属性表达式指定的值是否相等，
                // 将该函数压入$parsers，$formatters管线，这样每次模型值或输入值发生变化时都会调用该验证函数。
                function validateEqual(myValue) {
                    var valid = (myValue === scope.$eval(attr.validateEquals));
                    ngModelCtrl.$setValidity('equals', valid);
                    return valid ? myValue : undefined;
                }

                ngModelCtrl.$parsers.push(validateEqual);
                ngModelCtrl.$formatters.push(validateEqual);

                // 特别注意，用于对比参考模型发生变化的情况。
                // 当该模型发生变化时，可以通过故意调用$setViewValue() 来手工触发$parsers管线
                scope.$watch(attr.validateEquals, function () {
                    ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
                });
            }
        }
    }
})(window.angular);