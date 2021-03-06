var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/PageTab");

    $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "other.html"
        })
        .state("PageTab.Page1", {
            url: "/Page1",
            templateUrl: "other.html"
        })
        .state("PageTab.Page2", {
            url: "/Page2",
            templateUrl: "Page2.html"
         })
        .state("PageTab.Page3", {
            url: "/Page3",
            templateUrl: "Page3.html"
        });
});
