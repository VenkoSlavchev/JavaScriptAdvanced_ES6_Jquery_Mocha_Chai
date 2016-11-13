'use strict';
window.onload = function () {
    function timer() {
        let interval;
        let time;

        $('#start-timer').on('click', function () {
            interval = 0;
            time = setInterval(increase, 1000);

            $('#stop-timer').on('click', function () {
                clearInterval(time);
            });
            function increase() {
                interval++;
                $('#seconds').text(('0' + Math.trunc(interval % 60)).slice(-2));
                $('#minutes').text(('0' + Math.trunc(interval / 60)).slice(-2));
                $('#hours').text(('0' + Math.trunc(interval / 3600)).slice(-2));
            }
        });

    }
    timer();
};




