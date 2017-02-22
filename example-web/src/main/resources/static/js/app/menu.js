define(['appModule'],function(moduleName) {

    angular.module(moduleName)
        .controller('MenuCtrl', ['$scope', function($scope) {
        }])

        .component('exampleMenu', {
            templateUrl: "components/menu.html",
            controller: 'MenuCtrl'
        });

});
