$(document).ready(function() {

    $("#formSum").on("submit", function(event) {
        event.preventDefault();

        let numberOne,
            numberTwo,
            summ;

        numberOne = $("#numberOne").val();
        numberTwo = $("#numberTwo").val();

        numberOne = parseInt(numberOne);
        numberTwo = parseInt(numberTwo);


        if (Number.isNaN(numberOne)) {
            numberOne = 0;
        };

        if (Number.isNaN(numberTwo)) {
            numberTwo = 0;
        };


        summ = numberOne + numberTwo;

        $("#sumResult").text(summ);
    });

});