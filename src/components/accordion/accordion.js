/**
 * Created by songyechun on 17/2/7.
 */
(function (angular) {

    angular.module('comAccordion', []);

    angular.module('comAccordion')
        .directive('accordion',  config);

    function config() {
        return {
            restrict: 'E',
            controller: accordionCtrl,
            link: function (scope, ele) {
                ele.addClass('accordion');
            }
        }
    }

    function accordionCtrl() {
        var vm = this;
        vm.groups = [];
        vm.closeOthers = function (openGroup) {
            angular.forEach(vm.groups, function (group) {
                if (group !== openGroup) {
                    group.isOpen = false;
                }
            });
        };
        vm.addGroup = function (groupScope) {
            vm.groups.push(groupScope);
            groupScope.$on('$destroy', function (event) {
                this.removeGroup(groupScope);
            });
        };
        vm.removeGroup = function (group) {
            var index = vm.groups.indexOf(group);
            if(index !== -1) {
                vm.groups.splice(index, 1)
            }
        }
    }

})(window.angular);