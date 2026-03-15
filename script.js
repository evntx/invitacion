$(document).ready(function() {
    const envelope = $('#envelope');
    const envScreen = $('#envelope-screen');
    const fullInv = $('#full-invitation');
    const music = document.getElementById("musica");

    function openEnv() {
        // Abre el sobre
        envelope.removeClass("close").addClass("open");

        // Reproduce música automáticamente (sin interfaz visual)
        if (music.paused) {
            music.play().catch(e => console.log("Audio interact required"));
        }

        // Transición a pantalla completa
        setTimeout(function() {
            envScreen.css('opacity', '0');
            
            setTimeout(function() {
                envScreen.hide();
                fullInv.css('display', 'block');
                fullInv[0].offsetHeight; 
                fullInv.css('opacity', '1');
            }, 800); 

        }, 1500); 
    }

    // Funciona tocando la carta o el botón
    $('#envelope, #open-btn').on('click', function(e) {
        e.stopPropagation();
        openEnv();
    });

    // ================= LÓGICA DE CUENTA REGRESIVA =================
    // Fecha del evento: 15 de Mayo de 2026, 6:00 PM
    const eventDate = new Date(2026, 4, 15, 18, 0, 0).getTime();

    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            $("#countdown").html("<div style='width:100%; font-size:1.8rem; color:var(--color-primary); font-weight:bold; letter-spacing: 2px;'>¡ES HOY!</div>");
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#days').text(days < 10 ? '0' + days : days);
        $('#hours').text(hours < 10 ? '0' + hours : hours);
        $('#minutes').text(minutes < 10 ? '0' + minutes : minutes);
        $('#seconds').text(seconds < 10 ? '0' + seconds : seconds);
        
    }, 1000);
});
