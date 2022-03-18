$(document).ready(function() {

    // methods of chosing elements
    // tags by parent
    //$(".example").parent()
    //cloest element by id and tag example
    //$("li#second_list_item").closest("ul").addClass("selected");
    //$('#second_list_item').closest("li").addClass("selected");
    //$(".green").closest("li").addClass("selected");

    //parents
    //$("#second_list_item").parents().addClass("selected");
    //parent 
    //$("#second_list_item").parent().addClass("selected");

    //find
    //$("ul").find(".green").hide();

    //prev
    //$(".green").prev().addClass("selected");

    //next
    //$("#second_list_item").next().addClass("selected");

    //siblings
    $("#second_list_item").siblings(".green").addClass("selected");


});