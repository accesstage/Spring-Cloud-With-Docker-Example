define(['appModule'],function(moduleName) {
    angular.module(moduleName)

        .config(['$stateProvider', function($stateProvider) {
            $stateProvider.state('create-usuario', {
                url: '/create-usuario',
                templateUrl: 'components/create-usuario/create-usuario.html',
                controller: 'CreateUsuarioController'
            });
        }])

        .controller('CreateUsuarioController', ['$scope', '$http', function($scope, $http) {

            var self = this;
            this.usuario = {};

            this.addUsuario = function() {

                console.log(JSON.stringify(this.usuario));

                $http.post('user', this.usuario)
                    .success(function(response) {
                        alert("Cadastro realizado com sucesso!");
                        self.usuario = {};

                    }).error(function(data, status, headers, config) {
                        alert("Ocorreu um erro inesperado.");
                    });
            }
        }]);//Controller
});
