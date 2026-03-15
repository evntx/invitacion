$(document).ready(function() {
    const envelope = $('#envelope');
    const btn_open = $("#open");
    const btn_reset = $("#reset");
    const music = document.getElementById("musica");

    function openEnv() {
        envelope.removeClass("close").addClass("open");
        // Forzamos reproducción tras el toque del usuario
        if (music.paused) {
            music.play().catch(e => console.log("Audio play blocked"));
        }
    }

    function closeEnv() {
        envelope.removeClass("open").addClass("close");
        music.pause();
    }

    // Usamos Click para compatibilidad universal
    envelope.on('click', function(e) {
        e.stopPropagation();
        openEnv();
    });

    btn_open.on('click', function(e) {
        e.stopPropagation();
        openEnv();
    });

    btn_reset.on('click', function(e) {
        e.stopPropagation();
        closeEnv();
    });
});
