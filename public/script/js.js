$(document).ready(function() {

    $("#addGreen").on("click", function() {
        $("#textbox").addClass("greenBg");
    });

    $("#removeGreen").on("click", function() {
        $("#textbox").removeClass("greenBg");
    });

    $("#toggleGreen").on("click", function() {
        $("#textbox").toggleClass("greenBg");
    });
    // bad practice!!
    $("#customCSS").on("click", function() {
        $("#textbox").css("border", "5px solid red")
    })
});