$(document).ready(function() {
    const envelope = $('#envelope');
    const music = document.getElementById("musica");

    function openEnv() {
        envelope.removeClass("close").addClass("open");
        if (music.paused) {
            music.play().catch(e => console.log("Audio interact required"));
        }
    }

    function closeEnv() {
        envelope.removeClass("open").addClass("close");
        music.pause();
    }

    // CORRECCIÓN: Se eliminó 'touchstart' para evitar doble ejecución en móviles
    $('#envelope, #open').on('click', function(e) {
        e.stopPropagation();
        openEnv();
    });

    $('#reset').on('click', function(e) {
        e.stopPropagation();
        closeEnv();
    });
});
