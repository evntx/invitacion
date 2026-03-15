$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var music = document.getElementById("musica");

    function openEnv() {
        envelope.addClass("open").removeClass("close");
        // En móviles, el audio solo inicia tras un toque del usuario
        music.play();
    }

    function closeEnv() {
        envelope.addClass("close").removeClass("open");
        music.pause();
    }

    // Soporta clic y toque táctil
    envelope.on('click touchstart', function(e) {
        openEnv();
    });

    btn_open.on('click touchstart', function(e) {
        openEnv();
    });

    btn_reset.on('click touchstart', function(e) {
        closeEnv();
    });
});
