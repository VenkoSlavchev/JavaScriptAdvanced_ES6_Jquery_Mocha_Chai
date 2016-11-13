'use strict';
window.onload = function () {
    function increment(parent) {
        $('<textarea>').addClass('counter').val('0').prop('disabled', true)
            .appendTo($(parent));
        $('<button>').addClass('btn').attr('id', 'incrementBtn').text('Increment')
            .appendTo($(parent));
        $('<button>').addClass('btn').attr('id', 'AddBtn').text('Add')
            .appendTo($(parent));
        $('<ul>').addClass('results')
            .appendTo($(parent));

        $('#incrementBtn').on('click', function () {
            $('.counter').val(Number($('.counter').val()) + 1);
        });
        $('#AddBtn').on('click', function () {
            $('<li>').text($('.counter').val()).appendTo($('.results'));
        })
    }
    //Test the code
    //increment("#wrapper");
};

