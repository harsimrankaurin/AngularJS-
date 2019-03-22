app.controller('MainController', ['$scope', function($scope) {

  $scope.mapCenter = {
  	lat: 40.741934,
  	lng: -74.004897,
  	zoom: 17
	}

	$scope.mapMarkers = [
	  {
	    lat: 40.741389,
	    lng: -74.003056,
	    message: "My Home"
	  },
	  {
	    lat: 40.7425,
	    lng: -74.006111,
	    message: "Epiance Softwares"
	  },
    {
	    lat: 40.7405,
	    lng: -74.008111,
	    message: "Epiance Softwares"
	  }
	]

}]);
