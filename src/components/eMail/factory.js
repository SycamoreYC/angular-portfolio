/**
 * Created by songyechun on 17/2/7.
 */
(function (angular) {

    angular.module('mock.Users',[]);
    angular.module('mock.Users')
        .factory('Users', users);

    function users() {
        var Users = { };
        Users.query = function (query, response) {
            Users.respondWith = function (emails) {
                response(emails);
                Users.respondWith = undefined;
            }
        };
        return Users;
    }
})(window.angular);