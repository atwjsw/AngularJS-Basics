var app2 = angular.module('myApp2', []);
app2.controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];

}); 

//angular.bootstrap(document.getElementById("app1div"), ['myApp1']);
angular.bootstrap(document.getElementById("app2div"), ['myApp2']);