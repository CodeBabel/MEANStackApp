angular.module('app',[]);

angular.module('app').controller('testCtrl', function($scope){
//$scope.test = "working!!!";

$scope.authors = [{name: 'Ravindranath Barathy', role:'Admin1'},{name: 'Kaviya Kulothungan', role:'Admin2'},{name: 'Vivek Cherarajan', role:'Admin3'}];
});