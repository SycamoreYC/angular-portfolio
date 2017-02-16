/**
 * Created by songyechun on 17/2/10.
 */
(function (angular) {

    angular.module('app.zoo')
        .value('mammal', '这里都是哺乳动物')
        .factory('birds', function () {

            var NUMBER = '10';

            return {
                area: function () {
                    console.log('birds from Asian ' + NUMBER);
                },
                birdName: 'Pavo'
            }
        })
        .service('fish', function () {
            this.area = function () {
                console.log('fish from Pacific.')
            };
            this.fishName = 'Clown fish';
        })
        .provider('reptiles', function () {
            this.reptileName = '- ';
            this.weight = '0';
            this.long = '0';

            this.$get = function () {
                var that = this;
                return {
                    getReptile: function () {
                        var info = 'this ' + that.reptileName + 'is ' + that.weight + 'kg ' + that.long + 'm';
                        console.log(info);
                    }
                }
            }
        })
        .constant('zooConfig', {
            name: 'QinMountain Wild Zoo',
            time: '2002年1月1日',
            transports: '100, 101, 103 buses'
        });




})(window.angular);