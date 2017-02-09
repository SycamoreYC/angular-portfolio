/**
 * Created by songyechun on 17/2/7.
 */
(function (angular) {

    angular.module('comAccordionGroup', []);

    angular.module('comAccordionGroup')
        .directive('accordionGroup', config);

    function config() {
        return {
            restrict: 'E',
            require: '^accordion',
            transclude: true,
            replace: true,
            templateUrl: './src/components/accordionGroup/accGroup.tpl.html',
            scope: {
                heading: '@'
            },
            link: function (scope, ele, attrs, accordionCtrl) {
                accordionCtrl.addGroup(scope);
                scope.isOpen = false;
                scope.$watch('isOpen', function (value) {
                    if (value) {
                        accordionCtrl.closeOthers(scope);
                    }
                });
                scope.remove = function () {
                    var groups = accordionCtrl.groups;
                    var index = accordionCtrl.groups.indexOf(scope);
                    if (index != -1) {
                        groups.splice(index, 1);
                        ele.remove();
                        console.log(groups);
                    }
                }
            }
        }
    }

})(window.angular);