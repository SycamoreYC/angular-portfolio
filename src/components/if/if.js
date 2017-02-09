/**
 * Created by songyechun on 17/2/7.
 */
(function (angular) {

    angular.module('comIf', []);

    angular.module('comIf')
        .directive('if', config);

    function config() {
        return {
            transclude: 'element',
            priority: 500,
            compile: function (ele, attr, transclude) {
                return function postLink(scope, ele, attr) {
                    var childEle, childScope;

                    scope.$watch(attr['if'], function (newValue) {
                        if (childEle) {
                            childEle.remove();
                            childScope.$destroy();
                            childEle = undefined;
                            childScope = undefined;
                        }
                        if (newValue) {
                            childScope = scope.$new();
                            childEle = transclude(childScope, function (clone) {
                                ele.after(clone);
                            })
                        }
                    })
                }
            }
        }
    }
})(window.angular);