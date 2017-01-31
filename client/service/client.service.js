/**
 * Created by Jackist on 10/1/16.
 */
(function () {
    angular
        .module("StoryGenerator")
        .factory("ClientService", function ($http) {
            var api = {
                submit : submit
            };

            return api;

            function submit(name, email, phone, message) {
                var object = {
                    name : name,
                    email : email,
                    phone : phone,
                    message : message
                };
                return $http.post('/contact', object);
            }
        });
})();