// Defina a data-alvo da contagem regressiva (coloque a data desejada)
var targetDate = new Date("2023-06-08T00:00:00");

function countdown() {
    var currentDate = new Date();
    var difference = targetDate - currentDate;

    $("#success").hide();

    if (difference <= 0) {
        $("#countdown").hide();
        $("#success").show();
    }

    // Calcula os dias, horas, minutos e segundos restantes
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((difference / 1000 / 60) % 60);
    var seconds = Math.floor((difference / 1000) % 60);

    // Atualiza o elemento HTML com a contagem regressiva
    var countdownDias = document.getElementById("dias");
    var countdownHoras = document.getElementById("horas");
    var countdownMinutos = document.getElementById("minutos");
    var countdownSegundos = document.getElementById("segundos");

    countdownDias.innerHTML = days + "<br> dias";
    countdownHoras.innerHTML = hours + "<br> horas";
    countdownMinutos.innerHTML = minutes + "<br> minutos";
    countdownSegundos.innerHTML = seconds + "<br> segundos";

    // Atualiza a contagem regressiva a cada segundo
    setTimeout(countdown, 1000);
}

// Inicia a contagem regressiva
countdown();