$(document).ready(function() {

    //animate() - change CSS proprety with animation
    //animate({CSS props}), duration in ms)
    $("#customWidth").on("click", function() {
        $("#testBox").animate({ "width": "200px" }, 300);
        $("#testBox").animate({ "height": "200px" }, 300);

    });

    $("#customOpacity").on("click", function() {
        $("#testBox").animate({ "opacity": 0 }, 1000)
    });

    $("#hide").on("click", function() {
        $("#testBox").hide(700)
    });

    $("#show").on("click", function() {
        $("#testBox").show("slow")
    });

    $("#hideAndShow").on("click", function() {
        $("#testBox").hide("1000").delay("100").show("1000")
    });

    $("#fadeOut").on("click", function() {
        $("#testBox").fadeOut("1000")
    });

    $("#fadeIn").on("click", function() {
        $("#testBox").fadeIn("1000")
    });

    $("#fadeToggle").on("click", function() {
        $("#testBox").fadeToggle(1000);
    });

    $("#slideUp").on("click", function() {
        $("#testBox").slideUp(1000);
    });

    $("#slideDown").on("click", function() {
        $("#testBox").slideDown(1000);
    });

    $("#slideToggle").on("click", function() {
        $("#testBox").slideToggle(1000);
    });
});