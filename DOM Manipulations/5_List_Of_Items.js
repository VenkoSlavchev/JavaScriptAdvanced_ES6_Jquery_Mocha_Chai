'use strict';
function addItem() {
    let value = $('#newItemText').val();
    $('<li>').text(value).appendTo($('#items'));
    $('#newItemText').focus(function () {
        $(this).val('');
    })
}