console.log('client.js has been loaded')

let swapiApp = angular.module('SWAPIApp', []);

swapiApp.controller("SWAPIController", ['$http', function ($http) {
  const vm = this;

  vm.message = 'taco';

  $http({
    method: 'GET',
    url: 'https://swapi.co/api/people/',
    params: {
      search: 'skywalker'
    }
  }).then(function (response) {
    console.log(response);
  })
}]);