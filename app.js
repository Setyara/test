angular.module("myApp",[])
.controller("firstCtrl", function($scope){
	//Временная переменная
	$scope.tempInput = "test";
	//Хранилище задач
	$scope.tasksArray = ["temp", "temp new"];
	//Функция переноса из временного в общий 
	$scope.addNew = function(){
		if ($scope.tempInput){
			$scope.tasksArray.push($scope.tempInput);
			$scope.tempInput = "";
		} else {
			console.log("В инпуте пусто")
		}
	}
	$scope.deliteItem = function(item){
		var index = $scope.tasksArray.indexOf(item);
		console.log(index);
		$scope.tasksArray.splice(index, 1);

	};

});
