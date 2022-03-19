$(document).ready(function() {

    $("#button_1").on("click", function() {
        $(this).toggleClass("orange")
    })

    $("#testArea").on("mouseenter", function() {
        $(this).toggleClass("orange");
    });

    $("#testArea").on("mouseleave", function() {
        $(this).toggleClass("orange");
    });

    $("#inputName").on("focus", function() {
        $(this).toggleClass("focus");
    });

    $("#inputName").on("blur", function() {
        $(this).removeClass("focus");
    });

    $("#inputName").on("keyup", function() {
        //alert("hello world")
        $("#textHolder").text($(this).val())
    });

    //each key has its own id
    $("#inputName").on("keyup", function(event) {
        if (event.which == 27 /* escape */ ) {
            //alert("ESC!");
            $("#textHolder").text("")
        }
    });

});