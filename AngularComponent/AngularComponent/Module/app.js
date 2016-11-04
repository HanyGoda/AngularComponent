/// <reference path="F:\Hafez\AngularComponent\AngularComponent\scripts/angular.js" />

var myApp = angular.module("myApp", ['ngAnimate']);

myApp.factory("Employee", function ($http) {
    return {
        get: function () {
            return $http.get("../Module/employeeData.json");
        }
    };
});
