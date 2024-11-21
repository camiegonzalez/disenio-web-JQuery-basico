$(document).ready(function () {
    $("#hideBtn").click(function () {
        $("#image").hide();
        $("#pageTitle").text("¡No tenemos ninguna imagen!");
    });

    $("#showBtn").click(function () {
        $("#image").show();
        $("#pageTitle").text("¡Mirá la siguiente imagen!");
    });
});
