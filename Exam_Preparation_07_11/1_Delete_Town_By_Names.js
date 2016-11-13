"use strict";
function attachEvents() {
    $('#btnDelete').on('click', function () {
        $('#result').empty();
        let value = $('#townName').val();
        $.each($('option'), function () {
            if (value === $(this).text()) {
                $('#result').text(`${$(this).text()} deleted.`);
                $(this).remove();

            } else if ($('#result').is(':empty')) {
                $('#result').text(`${value} not found.`);
            }

        });

        $('#townName').val('');
    });
}