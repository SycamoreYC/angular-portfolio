/**
 * Created by songyechun on 17/2/7.
 */
(function (angular) {

    angular.module('comEmails', []);

    angular.module('comEmails')
        .directive('uniqueEmail', ['Users', config]);

    function config(Users) {
        return {
            require: 'ngModel',
            link: function (scope, ele, attr, ngModelCtrl) {

                var original;
                ngModelCtrl.$formatters.unshift(function (modelValue) {
                    original = modelValue;
                    return modelValue;
                });

                ngModelCtrl.$parsers.push(function (viewValue) {
                    if (viewValue && viewValue !== original) {
                        console.log(original);
                        console.log(viewValue);

                        Users.query({ email: viewValue } , function (users) {
                            if (users.length === 0) {
                                ngModelCtrl.$setValidity('uniqueEmail', true);
                            } else {
                                ngModelCtrl.$setValidity('uniqueEmail', false);
                            }
                        });
                        return viewValue;
                    }
                });
            }
        }
    }

})(window.angular);