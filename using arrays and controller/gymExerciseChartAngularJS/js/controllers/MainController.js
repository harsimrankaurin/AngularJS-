app.controller('MainController', ['$scope', function($scope) {
  $scope.exercises = [
    {
      icon: 'img/logo.jpg',
      name: 'Pushups',
      count: 20
    },
    {
      icon: 'img/logo.jpg',
      name: 'Squats',
      count: 15
    },
    {
      icon: 'img/logo.jpg',
      name: 'Pullups',
      count: 10
    },
    {
      icon: 'img/logo.jpg',
      name: 'Rows',
      count: 10
    },
    {
      icon: 'img/logo.jpg',
      name: 'Lunges',
      count: 10
    },
    {
      icon: 'img/logo.jpg',
      name: 'Step Ups',
      count: 10
    },
    {
      icon: 'img/logo.jpg',
      name: 'Sit Ups',
      count: 15
    }
  ];
  $scope.increase = function(index) {$scope.exercises[index].count += 1; };
  $scope.decrease = function(index) {$scope.exercises[index].count -= 1; };
}]);
