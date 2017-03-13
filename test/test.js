var myApp = angular.module('myApp', []);
    myApp.controller('TestCtrl', function ($scope) {
            $scope.contentSwitch = 'content1';
            $scope.contentSwitch = 'content2';
            $scope.data={visible : false};
        });