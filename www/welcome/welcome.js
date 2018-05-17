angular.module('starter').controller('welcomeCtrl', ['$scope', 'miConfiguracion', 'titulo_obra', 'miServicioWeb', function($scope, miConfiguracion, titulo_obra, miServicioWeb){
	$scope.welcome = 'Bienvenidos al SENA';

	console.log(miConfiguracion);
	console.log(titulo_obra);
	console.log(miServicioWeb);

}]);