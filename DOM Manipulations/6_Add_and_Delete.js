'use strict';
function addItem() {
    let   value = $('#newText').val(),
        newListItem = $('<li>').attr('id', value).text(value).appendTo($('#items')),
        newLink = $('<a/>').attr({
            href : void(0)
        }).text('[DELETE]').appendTo(newListItem);


    newLink.on('click',function deleteItem() {
        newListItem.remove();
    });

}