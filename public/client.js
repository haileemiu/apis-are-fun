console.log('client.js has been loaded')

let swapiApp = angular.module('SWAPIApp', []);

swapiApp.controller ("SWAPIController", [function() {
  const vm = this; 

  vm.message = 'taco';
}]);