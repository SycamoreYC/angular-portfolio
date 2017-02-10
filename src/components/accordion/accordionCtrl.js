/**
 * Created by songyechun on 17/2/7.
 */
(function (angular) {


    angular.module('comAccordion')
        .controller('accordionCtrl', ['$scope', '$attr', accordionCtrl]);

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
            groupScope.$on('$destroy', function () {
                vm.removeGroup(groupScope);
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