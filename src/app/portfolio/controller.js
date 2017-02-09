/**
 * Created by songyechun on 16/12/2.
 */
(function (angular) {
    angular
        .module('app.portfolio')
        .run(['$anchorScroll', function ($anchorScroll) {
            $anchorScroll.yOffset = 50;
        }])
        .controller('portfolioCtrl', portfolioCtrl);

    portfolioCtrl.$inject = ['$anchorScroll', '$location', '$scope'];

    function portfolioCtrl($anchorScroll, $location, $scope) {
        var vm = this;
        var scope = $scope;
        vm.goHome = function () {
            $location.hash('home');
        };
        vm.changeBlock = function (param) {
            $location.hash(param);
            $anchorScroll();
        };

        vm.users = [
            { firstName: 'Jo', lastName: 'Jordan', email: 'jo@jordan.com', sex:"Female"},
            { firstName: 'Anne', lastName: 'Asher', email: 'anne@asher.com', sex:"Female"},
            { firstName: 'Steve', lastName: 'Stone', email: 'steve@stone.com', sex:"Male"},
            { firstName: 'Kev', lastName: 'King', email: 'kev@king.com', sex:"Male"}
        ];
        vm.getFullName = function(user) {
            return user.firstName + ' ' + user.lastName;
        };

        vm.selectUser = function (user) {
            vm.selectedUser = user;
        };
        vm.isSelected = function (user) {
            return vm.selectedUser === user;
        };
        vm.logPosition = function (a, $event) {
            console.log(a.name + ' was clicked at: ' + $event.clientX + ',' + $event.clientY);
        };

        // filter
        vm.friends = [
            {name: 'John',   phone: '555-1212',  age: 10},
            {name: 'Mary',   phone: '555-9876',  age: 19},
            {name: 'Mike',   phone: '555-4321',  age: 21},
            {name: 'Adam',   phone: '555-5678',  age: 35},
            {name: 'Julie',  phone: '555-8765',  age: 29}
        ];
        vm.sortField = undefined;
        vm.reverse = false;
        vm.sort = function (fieldName) {
            if (vm.sortField === fieldName) {
                vm.reverse = !vm.reverse;
            } else {
                vm.sortField = fieldName;
                vm.reverse = false;
            }
        };
        vm.sortType = function (name, type) {
            if (type === 'up') {
                return vm.sortField === name && !vm.reverse;
            }
            if (type === 'down') {
                return vm.sortField === name && vm.reverse;
            }
        };

        // select
        vm.countriesByCode = {
            'AF' : 'AFGHANISTAN',
            'AX' : 'ALAND ISLANDS',
            'AL' : 'ALBANIA',
            'DZ' : 'ALGERIA',
            'AS' : 'AMERICAN SAMOA',
            'AD' : 'ANDORRA',
            'AO' : 'ANGOLA',
            'AI' : 'ANGUILLA',
            'AQ' : 'ANTARCTICA',
            'AG' : 'ANTIGUA AND BARBUDA',
            'AR' : 'ARGENTINA',
            'AM' : 'ARMENIA',
            'AW' : 'ARUBA',
            'AU' : 'AUSTRALIA',
            'AT' : 'AUSTRIA',
            'AZ' : 'AZERBAIJAN',
            'BS' : 'BAHAMAS',
            'BH' : 'BAHRAIN',
            'BD' : 'BANGLADESH',
            'BB' : 'BARBADOS',
            'BY' : 'BELARUS',
            'BE' : 'BELGIUM',
            'BZ' : 'BELIZE',
            'BJ' : 'BENIN',
            'BM' : 'BERMUDA'
        };

        vm.countriesByName = {
            'AFGHANISTAN' : 'AF',
            'ALAND ISLANDS' : 'AX',
            'ALBANIA' : 'AL',
            'ALGERIA' : 'DZ',
            'AMERICAN SAMOA' : 'AS',
            'ANDORRA' : 'AD',
            'ANGOLA' : 'AO',
            'ANGUILLA' : 'AI',
            'ANTARCTICA' : 'AQ',
            'ANTIGUA AND BARBUDA' : 'AG',
            'ARGENTINA' : 'AR',
            'ARMENIA' : 'AM',
            'ARUBA' : 'AW',
            'AUSTRALIA' : 'AU',
            'AUSTRIA' : 'AT',
            'AZERBAIJAN' : 'AZ',
            'BAHAMAS' : 'BS',
            'BAHRAIN' : 'BH',
            'BANGLADESH' : 'BD',
            'BARBADOS' : 'BB',
            'BELARUS' : 'BY',
            'BELGIUM' : 'BE',
            'BELIZE' : 'BZ',
            'BENIN' : 'BJ',
            'BERMUDA' : 'BM'
        };
        // default select
        vm.user = {
            password: ''
        };
        // 为清空表单做准备
        vm.repeatPassword = vm.user.password;
        var original = angular.copy(vm.user);

        vm.user.countryName = vm.countriesByCode.AF;
        // 表单校验
        vm.getCssClasses = function (ngModelController) {
            return {
                error: ngModelController.$invalid && ngModelController.$dirty,
                success: ngModelController.$valid && ngModelController.$dirty
            };
        };
        vm.showError = function (ngModelController, error) {
            return ngModelController.$error[error];
        };
        vm.canSave = function () {
            return scope.userInfoForm.$dirty && scope.userInfoForm.$valid;
        };
        // 嵌套表单
        vm.user.websites = [
            { url: 'http://www.bloggs.com'},
            { url: 'http://www.jo-b.com'}
        ];
        // 删除websites
        vm.remove = function (index) {
            vm.user.websites.splice(index, 1);
        };
        // 添加websites
        vm.add = function () {
            vm.user.websites.push({ url: '' });
        };

        /***
         *  提交表单
         */
        // ng-submit 提交表单
        vm.showAlert = function (q) {
            alert(q);
        };

        // 清空表单
        vm.revert = function () {
            vm.user = angular.copy(original);
            vm.passwordRepeat = vm.user.password;
            scope.userInfoForm.$setPristine();
        };

        // 指令
        vm.currentPage = 1;
        vm.selectPage = function (p) {
            console.log(p + 'from controller');
        };
        vm.equalPassword = function () {
            if (vm.user.password !== vm.confirmPassword) {
                alert('输入密码不一致');
            }
        };

        // alert指令
        vm.alerts = [
            {
                msg: '111',
                type: 'info'
            },
            {
                msg: '222',
                type: 'info'
            },
            {
                msg: '333',
                type: 'info'
            }
        ];
        vm.closeAlert = function (index) {
            console.log(111);
            vm.alerts.splice(index, 1);
        }
    }

})(window.angular);