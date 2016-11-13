'use strict';
window.onload = function() {
    $('#startBtn').on('click',function () {
        $('#stopBtn').prop("disabled", false);
        let currentTime = new Date();
        $('#stopBtn').on('click',function () {
            $('#stopBtn').prop("disabled", 'true');
            clearInterval(interval);
        });
        var interval = setInterval(function(){
            let seconds = Math.round((new Date - currentTime) / 1000);

            if (seconds%60<10 && seconds/60 < 10) {
                $('#time').text('0' + Math.floor(seconds/60) + ':' + '0' + seconds%60);
            } else if (seconds%60>=10 && seconds%60 < 60 && seconds/60 < 10){
                $('#time').text('0' + Math.floor(seconds/60) + ':' + seconds%60);
            }else if (seconds%60<10 && seconds/60 > 10) {
                $('#time').text(Math.floor(seconds/60) + ':' + '0' + seconds%60);
            } else {
                $('#time').text(Math.floor(seconds/60) + ':'  + seconds%60);
            }

        },1000);
    });
}