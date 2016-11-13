'use strict';
function initializeTable() {
    $(document).ready(function () {
        let count = 2;
        $('#createLink').on('click', function () {
            $('#countriesTable').append
            ($('<tr>').append
            ($('<td>').text($('#newCountryText').val()),
                $('<td>').text($('#newCapitalText').val())
                , $('<td>').append
                ($('<a>').attr('href', 'javascript:void(0)').text('[Up]').on('click', function () {
                    $(this).parent().parent().insertBefore($(this).parent().parent().prev());
                }), $('<a>').attr('href', 'javascript:void(0)').text('[Down]').on('click', function () {
                    $(this).parent().parent().insertAfter($(this).parent().parent().next());
                }), $('<a>').attr('href', 'javascript:void(0)').text('[Delete]').on('click', function () {
                    $(this).parent().parent().remove();
                }))
            ))
        })
        $('#newCountryText').on('focus', function () {
            $(this).val('');
        })
        $('#newCapitalText').on('focus', function () {
            $(this).val('');
        })
    });
}
