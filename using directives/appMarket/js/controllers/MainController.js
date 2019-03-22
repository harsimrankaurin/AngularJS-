app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [
  	{
    	icon: 'img/1.jpg',
    	title: 'MOVE',
    	developer: 'MOVE, Inc.',
    	price: 0.99
  	},
 	 	{
    	icon: 'img/2.jpg',
    	title: 'Shutterbugg',
    	developer: 'Chico Dusty',
    	price: 2.99
  	},
 	 	{
    	icon: 'img/3.jpg',
    	title: 'Gameboard',
    	developer: 'Armando Perez',
    	price: 1.99
  	},
 	 	{
      icon: 'img/4.png',
      title: 'Forecast',
      developer: 'Forecast',
      price: 1.99
    }
	]
}]);
