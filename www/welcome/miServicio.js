var app = angular.module('starter');
app.service('miServicioWeb', function($resource){
	this.obtenerDatos=function(){

		return $resource("https://randomuser.me/api/?results=10").get();
	}
});