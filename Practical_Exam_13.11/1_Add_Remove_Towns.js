'use strict';
function attachEvents() {
    $('#btnAdd').on('click', function () {
        let addValue = $('#newItem').val();
        if (addValue.length > 0) {
            $('<option>').text(addValue).appendTo($('#towns'));
        }
        $('#newItem').val('');
    });

    $('#btnDelete').on('click', function () {
        $('#towns option:selected').remove();
    });
}