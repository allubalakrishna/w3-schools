/**
 * Created by balakrishna on 14/10/16.
 */
app.controller('myCtrl', function($scope, $location, $http, $timeout, $interval, hexafy){
    $scope.firstName = 'Bala';
    $scope.lastName = 'krishna';
    $scope.changeName = function(){
        $scope.firstName = 'Allu';
    };
    $scope.fullName = function(){
        return $scope.firstName + $scope.lastName;
    };
    $scope.price = 100;
    $scope.people = [
        {name: 'abc', country: 'india'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
    ];
    $scope.orderByMe = function(name){
        $scope.myOrderBy = name;
    };
    $scope.myUrl = $location.absUrl();
    $http.get('002.html').then(function mySuccess(res){
        $scope.welcomeMsg = res.data;
    },function myError(res){
        $scope.welcomeMsg = res.statusText;
    });
    $scope.myHeader = 'Hello world!!'
    $timeout(function(){
        $scope.myHeader = 'Hello Bala!!'
    }, 2000);
    $scope.currentTime = new Date().toLocaleTimeString();
    $interval(function(){
        $scope.currentTime = new Date().toLocaleTimeString();
    }, 2000);
    $scope.hex = hexafy.myFunction(255);
    $scope.hexa_number = 246;
    $scope.names = [];
    for (i=0; i < $scope.people.length; i++){
        $scope.names.push($scope.people[i]['name']);
    }
    $scope.cars = {
        car01: 'Mahindra',
        car02: 'Maruti',
        car03: 'Tata'
    }
    $scope.showMe = false;
    $scope.myFunc = function(){
        $scope.showMe = !$scope.showMe;
    }
});
app.directive('w3Test', function(){
    return {
        template: 'Hello!!'
    };
});
app.directive('w3Test2', function(){
    return {
        //By default -- EA
        restrict: 'C', // A - Attribute, E - Element, M - Comment, C - Class
        template: '<h1>w3 test2</h1>'
    }
});
app.filter('myFilter', function(){
    return function(x){
        if(x.length % 2 == 0){
            return x.toUpperCase();
        }else{
            return x.toLowerCase();
        }
    };
});
app.service('hexafy', function(){
    this.myFunction = function(x){
        return x.toString(16);
    };
});
app.filter('myFormat',['hexafy', function(hexafy){
    return function(x){
        return hexafy.myFunction(x);
    }
}]);