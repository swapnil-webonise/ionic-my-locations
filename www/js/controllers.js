angular.module('MyLocationsApp').controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});

angular.module('MyLocationsApp').controller('LocationsCtrl', function($scope) {

  $scope.initLocations = function() {
    $scope.locations = JSON.parse(localStorage.getItem('locations'))['locations'];
  };

});

angular.module('MyLocationsApp').controller('HomepageCtrl', function($scope) {
    var map = null;
    var defaultMapLocation ={
      lat: 18.5203,
      lng: 73.8567
    };
    var styles = [
      {
        stylers: [
          { hue: "#00ffe6" },
          { saturation: -20 }
        ]
      },{
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 100 },
          { visibility: "simplified" }
        ]
      },{
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "on" }
        ]
      }
    ];

    $scope.initHomepage = function() {
      var myLatLng = {lat: 18.5203, lng: 73.8567};

      map = new google.maps.Map(document.getElementById('map'), {
                center: myLatLng,
                scrollwheel: false,
                disableDefaultUI: true,
                zoom: 8
              });
              map.setOptions({styles: styles});

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
      });
    };
});

angular.module('MyLocationsApp').controller('PlaylistCtrl', function($scope, $stateParams) {
});
