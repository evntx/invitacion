$(document).ready(function() {
    const envelope = $('#envelope');
    const envScreen = $('#envelope-screen');
    const fullInv = $('#full-invitation');
    const music = document.getElementById("musica");
    const musicBtn = $('#musicBtn');
    const musicIcon = musicBtn.find('i');

    function openEnv() {
        // 1. Abre el sobre
        envelope.removeClass("close").addClass("open");

        // 2. Reproduce música
        if (music.paused) {
            music.play().catch(e => console.log("Audio interact required"));
        }

        // 3. Espera a que termine la animación de la carta y hace la transición
        setTimeout(function() {
            // Desvanece la pantalla del sobre
            envScreen.css('opacity', '0');
            
            setTimeout(function() {
                // Oculta el sobre por completo y muestra la invitación full screen
                envScreen.hide();
                fullInv.css('display', 'block');
                
                // Forzamos un reflow del navegador para que funcione la transición de opacidad
                fullInv[0].offsetHeight; 
                fullInv.css('opacity', '1');
            }, 800); // 800ms es el tiempo que tarda en desvanecer el sobre

        }, 1500); // Espera 1.5 segundos después del clic para iniciar la transición
    }

    // Funciona tocando la carta o el botón
    $('#envelope, #open-btn').on('click', function(e) {
        e.stopPropagation();
        openEnv();
    });

    // Control del botón de música en la pantalla completa
    musicBtn.on('click', function() {
        if (!music.paused) {
            music.pause();
            musicIcon.removeClass("fa-pause").addClass("fa-play");
        } else {
            music.play();
            musicIcon.removeClass("fa-play").addClass("fa-pause");
        }
    });

    // ================= LÓGICA DE CUENTA REGRESIVA =================
    // Fecha del evento: 15 de Mayo de 2026, 6:00 PM (El mes empieza en 0, por lo que Mayo es 4)
    const eventDate = new Date(2026, 4, 15, 18, 0, 0).getTime();

    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            $("#countdown").html("<div style='width:100%; font-size:1.5rem; color:var(--color-primary); font-weight:bold; letter-spacing: 2px;'>¡ES HOY!</div>");
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Agrega ceros a la izquierda si es menor a 10
        $('#days').text(days < 10 ? '0' + days : days);
        $('#hours').text(hours < 10 ? '0' + hours : hours);
        $('#minutes').text(minutes < 10 ? '0' + minutes : minutes);
        $('#seconds').text(seconds < 10 ? '0' + seconds : seconds);
        
    }, 1000);
});
