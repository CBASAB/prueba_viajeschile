const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(function () {

    $("#boton_enviar").on("click", function () {
        alert("El correo fue enviado correctamente...");
    });

    $(".card-img-top").on("click", function () {
        $(".card-text").toggle("slow");
    })
});