'use strict';

window.onload = function () {
    function createBook(parent, title, author, isbn) {
        let bookCounter = $('#wrapper div').length + 1;

        $('<div>').attr('id', 'book' + bookCounter).css('border', 'medium none')
            .appendTo($(parent));
        $('<p>').addClass('title').text(title)
            .appendTo($('#' + 'book' + bookCounter));
        console.log($(`#wrapper:nth-child(${bookCounter})`));
        $('<p>').addClass('author').text(author)
            .appendTo($('#' + 'book' + bookCounter));
        $('<p>').addClass('isbn').text(isbn)
            .appendTo($('#' + 'book' + bookCounter));
        $('<button>').text('Select').on('click', function () {
            $(this).parent().css('border', '2px solid blue')
        }).appendTo($('#' + 'book' + bookCounter));
        $('<button>').text('Deselect').on('click', function () {
            $(this).parent().css('border', 'none')
        }).appendTo($('#' + 'book' + bookCounter));
        bookCounter += 1;
    }

//Test the code
//     createBook("#wrapper", "Alice in Wonderland", "Lewis Carroll", 1111);

//     createBook("#wrapper", "Alice in Wonderland", "Lewis Carroll", 1111);

};