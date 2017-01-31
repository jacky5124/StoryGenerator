/**
 * Created by Jackist on 10/1/16.
 */
(function () {
    angular
        .module("StoryGenerator")
        .controller("ResultController", function ($routeParams, $location) {

            function init() {
                $('#modal-id').modal('toggle'); //Hide the modal dialog
                $('.modal-backdrop').remove(); //Hide the backdrop
                $("body").removeClass( "modal-open" ); //Put scroll back on the Body
                $(document.body).css({
                    "background-image": "url('../image/rs.jpg')",
                    "background-color": "black",
                    "font-size": "16px"});
                document.getElementById("a1").innerHTML = $routeParams["name"];
                document.getElementById("a2").innerHTML = $routeParams["name"];
            }

            init();
            
            this.getReturn = function () {
                $location.url("/");
            }

        });
})();