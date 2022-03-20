$(document).ready(function() {

    let modelSpecs,
        modelPrice,
        modelSpecsHolder,
        modelPriceHolder;

    modelSpecsHolder = $("#modelSpecs");
    modelPriceHolder = $("#modelPrice");

    modelPrice = 0;
    modelSpecs = "";

    const calculatePrice = () => {
        let modelPriceEngine = $("input[name=engine]:checked", "#autoForm").val();
        let modelPriceTransmission = $("input[name=transmission]:checked", "#autoForm").val();
        let modelPricePackage = $("input[name=package]:checked", "#autoForm").val();

        modelPriceEngine = parseInt(modelPriceEngine);
        modelPriceTransmission = parseInt(modelPriceTransmission);
        modelPricePackage = parseInt(modelPricePackage);

        modelPrice = modelPriceEngine + modelPriceTransmission + modelPricePackage;

        modelPriceHolder.text(modelPrice + " lei");
    };

    const compileSpecs = () => {
        modelSpecs = $("input[name=engine]:checked + label", "#autoForm").text();
        modelSpecs = modelSpecs + ", " + $("input[name=transmission]:checked + label", "#autoForm").text();
        modelSpecs = modelSpecs + ", " + $("input[name=package]:checked + label", "#autoForm").text();
        modelSpecsHolder.text(modelSpecs);
    };

    const changeColor = () => {
        $("#colorsSelector .colorItem").on("click", function() {
            let imgPath = $(this).attr("data-img-path");
            $("#imgHolder img").attr("src", imgPath);
        });
    }

    $("#autoForm input").on("change", function() {
        calculatePrice();
        compileSpecs();
    });
    calculatePrice();
    compileSpecs();
    changeColor();
    //not working
    // let currencyUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%3D%22USDINR%2C%20EURINR%2CCADINR%2CJPYINR%2CGBPINR%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    // let rurUsdRate = 0;

    // $.ajax({
    //     url: currencyUrl,
    //     cache: false,
    //     succes: function(html) {
    //         console.log(html.query.results.rate[0].rate);
    //         rurUsdRate = html.query.results.rate[0].rate;
    //         calculateUSD();
    //     }
    // });

    // const calculateUSD = () => {
    //     let modelPriceUSD = modelPrice / rurUsdRate;
    //     alert(modelPriceUSD);
    // };

});