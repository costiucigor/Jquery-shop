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


        if (isNaN(numberOne, numberTwo)) {
            numberOne = 0
            numberTwo = 0
        };

        summ = numberOne + numberTwo;

        $("#sumResult").text(summ);
    });

});