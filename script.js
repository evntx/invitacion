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

    // Funciona en el sobre y en los botones
    $('#envelope, #open').on('click touchstart', function(e) {
        e.stopPropagation();
        openEnv();
    });

    $('#reset').on('click touchstart', function(e) {
        e.stopPropagation();
        closeEnv();
    });
});
