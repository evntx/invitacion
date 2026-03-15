$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        openEnvelope();
    });

    btn_open.click(function() {
        openEnvelope();
    });

    btn_reset.click(function() {
        closeEnvelope();
    });

    function openEnvelope() {
        envelope.addClass("open").removeClass("close");
    }

    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
    }
});