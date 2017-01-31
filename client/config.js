/**
 * Created by Jackist on 10/1/16.
 */
(function () {
    angular
        .module("StoryGenerator")
        .config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "view/main.client.view.html",
                    controller: "MainController",
                    controllerAs: "Model"})
                .when("/result1/:name", {
                    templateUrl: "view/result1.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result2/:name", {
                    templateUrl: "view/result2.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result3/:name", {
                    templateUrl: "view/result3.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result4/:name", {
                    templateUrl: "view/result4.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result5/:name", {
                    templateUrl: "view/result5.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result6/:name", {
                    templateUrl: "view/result6.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result7/:name", {
                    templateUrl: "view/result7.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result8/:name", {
                    templateUrl: "view/result8.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result9/:name", {
                    templateUrl: "view/result9.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result10/:name", {
                    templateUrl: "view/result10.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result11/:name", {
                    templateUrl: "view/result11.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result12/:name", {
                    templateUrl: "view/result12.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result13/:name", {
                    templateUrl: "view/result13.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result14/:name", {
                    templateUrl: "view/result14.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result15/:name", {
                    templateUrl: "view/result15.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result16/:name", {
                    templateUrl: "view/result16.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result17/:name", {
                    templateUrl: "view/result17.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result18/:name", {
                    templateUrl: "view/result18.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result19/:name", {
                    templateUrl: "view/result19.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"})
                .when("/result20/:name", {
                    templateUrl: "view/result20.client.view.html",
                    controller: "ResultController",
                    controllerAs: "Model"});
        });
})();