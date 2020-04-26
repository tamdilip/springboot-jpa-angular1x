var app = angular.module("myApp", []);

app.run(function ($rootScope, subTitle) {
    $rootScope.title = subTitle;
})




