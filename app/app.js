//angular.module('app', []);
//angular.module('app', []);
angular.module('app', ['ngResource']);


// angular.module('app').controller('testCtrl', function($scope) {
angular.module('app').controller('testCtrl', function($scope, $resource) {
//$scope.test = "working!!!";

//$scope.authors = [{name: 'Ravindranath Barathy', role:'Admin1'},{name: 'Kaviya Kulothungan', role:'Admin2'},{name: 'Vivek Cherarajan', role:'Admin3'}];

$scope.authors = $resource('/api/authors').query();
});