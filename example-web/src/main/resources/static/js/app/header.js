define(['appModule'],function(moduleName) {

    angular.module(moduleName)

        .controller('HeaderCtrl',  [function() {

            this.userInfo = "User Test";
        }])

        .component('exampleHeader', {
            templateUrl: "components/header.html",
            controller: 'HeaderCtrl'
        });

});
