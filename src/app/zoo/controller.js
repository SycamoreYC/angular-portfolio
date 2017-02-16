/**
 * Created by songyechun on 17/2/10.
 */
(function (angular) {

    angular.module('app.zoo')
        .config(['reptilesProvider', function (reptilesProvider) {
            reptilesProvider.reptileName = 'crocodile ';
            reptilesProvider.weight = 100;
            reptilesProvider.long = 2;
        }])
        .controller('zooCtrl', ['mammal', 'birds', 'fish', 'reptiles', 'zooConfig', zooCtrl]);



    function zooCtrl(mammal, birds, fish, reptiles, zooConfig) {
        console.log(mammal);
        birds.area();
        console.log(birds.birdName);
        fish.area();
        console.log(fish.fishName);
        reptiles.getReptile();
        console.log(zooConfig);
    }
})(window.angular);
