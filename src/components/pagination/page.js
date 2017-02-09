/**
 * Created by songyechun on 17/2/6.
 */
(function (angular) {

    angular.module('comPagination', []);

    angular.module('comPagination')
        .directive('pagination', config);

    function config() {
        return {
            restrict: 'E',
            templateUrl: '../src/components/pagination/page.tpl.html',
            scope: {
                pageNum: '=',
                currentPage: '=',
                onSelectPage: '&'
            },
            replace: true,
            link: function (scope) {
                scope.$watch('pageNum', function (value) {
                    scope.pages = [];
                    for (var i = 0; i <= value; i++) {
                        scope.pages.push(i + 1);
                        if (scope.currentPage > value) {
                            scope.selectPage(value);
                        }
                    }
                });

                scope.isActive = function (page) {
                    return scope.currentPage === page;
                };

                scope.selectPage = function (p) {
                    if (!scope.isActive(p)) {
                        scope.currentPage = p;
                        scope.onSelectPage({page: p});
                        console.log(scope.currentPage + 'from link');
                    } else {
                        console.log('已经在这一页了');
                    }
                };

                scope.noNext = function () {
                    return scope.currentPage === scope.pageNum + 1;
                };

                scope.selectNext = function () {
                  if (! scope.noNext()) {
                      scope.selectPage(scope.currentPage + 1);
                  }
                };

                scope.noPrevious = function () {
                    return scope.currentPage === 1;
                };
                scope.selectPrevious = function () {
                    if (!scope.noPrevious()) {
                        scope.selectPage(scope.currentPage - 1);
                    }
                }
            }
        }
    }
})(window.angular);