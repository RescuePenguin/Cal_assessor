'use strict';

/* Controllers */

var jakeControllers = angular.module('jakeControllers', ['ui.bootstrap']);

jakeControllers.controller('introCtrl', ['$scope',
  function($scope) {
    $scope.form = "FORM BOE-64-SES - REV.03 (9-14)"
  }
]);

jakeControllers.controller('formCtrl', ['$scope', '$uibModal', '$log', '$location', '$http',
  function($scope, $uibModal, $log, $location, $http) {
    $scope.form = "FORM BOE-64-SES - REV.03 (9-14)"
    $('#phone, #builderPhone').mask('(999) 999-9999')
    $('#purchaseDate, #installationDate').datepicker();

    $scope.submit = function(claiment, builder, agree, $http) {
      claiment = angular.copy(claiment);
      builder = angular.copy(builder);
      agree = angular.copy(agree);
      $scope.data = { claiment: claiment, builder: builder, agree: agree };
      $location.path('/result')

      // Since there is no server to communicate with at the time being, I have commented out my use of the $http service,
      // Which would be used for receiving and storing the information pertained in the form.
      // $http.post('/results', $scope.data).success(function(data) {
      //   $location.path('/result')
      // });
    };

    $scope.open = function () {

      var modalInstance = $uibModal.open({
        templateUrl: 'generalInformation.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg'
      });

      modalInstance.result.then(function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  }
]);

jakeControllers.controller('resultCtrl', ['$scope',
  function($scope) {
    $scope.form = "FORM BOE-64-SES - REV.03 (9-14)"
  }
]);

jakeControllers.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {
  $scope.ok = function () {
    $uibModalInstance.close('ok');
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
