/**
 * Created by Jackist on 10/1/16.
 */
(function () {
    angular
        .module("StoryGenerator")
        .controller("MainController", function ($timeout, $anchorScroll, $location, ClientService) {

            var Model = this;

            function init() {
                $(document.body).css({
                    "background-image": "url('image/bg.jpg')",
                "background-opacity": "0.5",
                "color": "white",
                "font-family": "'Lora', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                    "font-size": "16px",
                "background-repeat": "no-repeat",
                "background-size": "100%"
                });

                $(document).ready(function(){
                    $("#myBtn").click(function(){
                        $("#myModal").modal();
                    });
                    $("#about").mouseenter(function() {
                        $("#abouttext").fadeIn();
                    });
                });
            }

            init();
            
            this.goToTop = function () {
                $location.hash('page-top');
                $anchorScroll();
            };

            this.goToAbout = function () {
                $location.hash('about');
                $anchorScroll();
            };

            this.goToTeam = function () {
                $location.hash('team');
                $anchorScroll();
            };

            this.goToContact = function () {
                $location.hash('contact');
                $anchorScroll();
            };

            this.generate = function () {
                var name = document.getElementById('usrname').value;
                var x = document.getElementById("male").checked;
                var y = document.getElementById("female").checked;
                var gender;
                if(x){
                    gender = 1;
                }
                if(y){
                    gender = 2;
                }
                if(name != "") {
                    var z = Math.floor(Math.random() * 10) + 1;
                    if(gender == 1) {
                        switch (z) {
                            case 1:
                                $location.url("/result1/" + name);
                                break;
                            case 2:
                                $location.url("/result2/" + name);
                                break;
                            case 3:
                                $location.url("/result3/" + name);
                                break;
                            case 4:
                                $location.url("/result4/" + name);
                                break;
                            case 5:
                                $location.url("/result5/" + name);
                                break;
                            case 6:
                                $location.url("/result6/" + name);
                                break;
                            case 7:
                                $location.url("/result7/" + name);
                                break;
                            case 8:
                                $location.url("/result8/" + name);
                                break;
                            case 9:
                                $location.url("/result9/" + name);
                                break;
                            case 10:
                                $location.url("/result10/" + name);
                                break;
                            default:
                                break;
                        }
                    }
                    if(gender == 2) {
                        switch (z) {
                            case 1:
                                $location.url("/result11/" + name);
                                break;
                            case 2:
                                $location.url("/result12/" + name);
                                break;
                            case 3:
                                $location.url("/result13/" + name);
                                break;
                            case 4:
                                $location.url("/result14/" + name);
                                break;
                            case 5:
                                $location.url("/result15/" + name);
                                break;
                            case 6:
                                $location.url("/result16/" + name);
                                break;
                            case 7:
                                $location.url("/result17/" + name);
                                break;
                            case 8:
                                $location.url("/result18/" + name);
                                break;
                            case 9:
                                $location.url("/result19/" + name);
                                break;
                            case 10:
                                $location.url("/result20/" + name);
                                break;
                            default:
                                break;
                        }
                    }
                }
            };

            Model.success = false;
            Model.alert = false;
            
            this.submit = function () {
                ClientService
                    .submit(Model.name, Model.email, Model.phone, Model.message)
                    .then(function (res) {
                        Model.success = "Your information has been submitted. You will be contacted shortly.";
                        $timeout(function () {
                            Model.success = false;
                        }, 5000);
                    }, function (res) {
                        Model.alert = "Something went wrong while submitting your information. Please try again later.";
                        $timeout(function () {
                            Model.alert = false;
                        }, 5000);
                    });
            };

        });
})();