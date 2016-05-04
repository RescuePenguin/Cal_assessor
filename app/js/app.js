'use strict';

/* App Module */

var jakeApp = angular.module('jakeApp', [
  'ngRoute',
  'jakeControllers',
  'ui.bootstrap'
]);

jakeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/intro', {
        templateUrl: 'partials/intro.html',
        controller: 'introCtrl'
      }).
      when('/form', {
        templateUrl: 'partials/form.html',
        controller: 'formCtrl'
      }).
      when('/result', {
        templateUrl: 'partials/result.html',
        controller: 'resultCtrl'
      }).
      otherwise({
        redirectTo: '/intro'
      });
  }]);


/* Set validation defaults */

$.validator.setDefaults({
    highlight: function(element) {
        $(element).closest('.form-group, .input-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group, .input-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});

$.validator.addMethod(
    "isMoney",
    function(value, element) {
        var isValidMoney = /^\d{0,10}(\.\d{0,2})?$/.test(value);
        return this.optional(element) || isValidMoney;
    },
    "Insert a valid money amount."
);
