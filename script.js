$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var music = document.getElementById("musica");

    function open() {
        envelope.addClass("open").removeClass("close");
        music.play().catch(function(error) {
            console.log("El navegador bloqueó el inicio automático hasta que el usuario interactúe.");
        });
    }

    function close() {
        envelope.addClass("close").removeClass("open");
        music.pause();
    }

    envelope.click(open);
    btn_open.click(open);
    btn_reset.click(close);
});
