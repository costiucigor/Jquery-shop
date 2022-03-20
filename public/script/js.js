$(document).ready(function() {

    //1. getting the value of the src of img
    //let srcValue = $("#imgHolder img").attr("src");


    //2. change the attribute value of the image
    // $("#imgHolder img").on("click", function() {
    //     $(this).attr("src", "img/blueBMW.png");
    // });

    //3. separate action for each colour
    // $("#colorsSelector .colorItem.colorBlue").on("click", function() {
    //     $("#imgHolder img").attr("src", "img/blueBMW.png");
    // });

    // $("#colorsSelector .colorItem.colorWhite").on("click", function() {
    //     $("#imgHolder img").attr("src", "img/whiteBMW.png");
    // });

    // $("#colorsSelector .colorItem.colorBlack").on("click", function() {
    //     $("#imgHolder img").attr("src", "img/blackBMW.png");
    // });

    //4. one function for all colours

    $("#colorsSelector .colorItem").on("click", function() {
        let imgPath;

        imgPath = $(this).attr("data-img-path");
        $("#imgHolder img").attr("src", imgPath);
    })



})