var app = angular.module('starter');
app.directive('fairytail', function(){

	return {
		 link: function(scope, element) {
          element.on('click', function() {
            window.location.href= "fairytail.html"; 
          });
        },
	}

});

app.directive('anohana', function(){

	return {
		 link: function(scope, element) {
          element.on('click', function() {
            window.location.href= "anohana.html"; 
          });
        },
	}

});

app.directive('deathnote', function(){

	return {
		 link: function(scope, element) {
          element.on('click', function() {
            window.location.href= "deathnote.html"; 
          });
        },
	}

});