app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();
  $scope.coffees = [
    {
      name: 'Americano',
      price: 4.99
    },
    {
      name: 'Cafe Mocha',
      price: 5.99
    },
    {
      name: 'Cafe Latte',
      price: 5.99
    },
    {
      name: 'Cappuccino',
      price: 6.75
    },
    {
      name: 'Expresso',
      price: 3.00
    },
    {
      name: 'Vanilla Latte',
      price: 4.75
    }
  ];
  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];

  $scope.mains = [
    {
      name: 'margherita',
      description: 'Marinara sauce, mozzarella, fresh basil.',
      price: 6.95
    },
    {
      name: 'pepperoni',
      description: 'Pepperoni, marinara sauce, mozzarella, fresh oregano.',
      price: 7.95
    },
    {
      name: 'rustica',
      description: 'Marinara sauce, kalamata olives, roasted garlic, fresh oregano.',
      price: 8.95
    }
  ];

  $scope.extras = [
    {
      name: 'Breadsticks',
      description: 'Served with marinara sauce.',
      price: 4.95
    },
    {
      name: 'Soup of the Day',
      description: 'Take a chance',
      price: 4.95
    },
    {
      name: 'Buffallo Wings',
      description: 'Feel the power of wings.',
      price: 6.95
    }
  ];

}]);
