var app = angular.module('starter');
app.directive('fairytail', function(){

	return {
		templateUrl: '/cliente/cliente.html',
		restict: 'AE',
		scope:{
			nombre: '='
		}
	}


});

app.directive('anohana', function(){

	return {
		templateUrl: '/cliente/cliente.html',
		restict: 'AE',
		scope:{
			nombre: '='
		}
	}
});

app.directive('deathnote', function(){

	return {
		templateUrl: '/cliente/cliente.html',
		restict: 'AE',
		scope:{
			nombre: '='
		}
	}
});



