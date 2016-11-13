'use strict';
window.onload = function () {
    function domSearch(parent, caseSensitive = false) {
        $('<div>').addClass('add-controls').appendTo($(parent));
        $('<label>').text('Enter text:').appendTo($('.add-controls'));
        $('<input>').attr('type', 'text').appendTo($('.add-controls'));
        $('<a>').addClass('button').css('display', 'inline-block').text('Add')
            .appendTo($('.add-controls'));

        $('<div>').addClass('search-controls').appendTo($(parent));
        $('<label>').text('Search:').appendTo($('.search-controls'));
        $('<input>').attr('type', 'text').appendTo($('.search-controls'));

        $('<div>').addClass('result-controls').appendTo($(parent));
        $('<ul>').addClass('items-list').appendTo($('.result-controls'));
        $('.add-controls > a').on('click', function () {
            $('<li>').addClass('list-item').appendTo($('.items-list'))
                .append($('<a>').addClass('button').css('display', 'inline-block')
                        .text('X').on('click', function () {
                            $(this).parent().remove()
                        }),
                    $('<strong>').text($('.add-controls input').val())
                )
        });
        $('.add-controls input').on('focus', function () {
            $(this).val('');
        });
        $('.search-controls input').on('keyup', function () {
            let searchValue = $('.search-controls input').val();
            let regExpSearchValue,
                matches = [];
            if (!caseSensitive) {
                regExpSearchValue = new RegExp(searchValue, 'gi');
            } else {
                regExpSearchValue = new RegExp(searchValue, 'g');
            }
            $('.list-item').each(function () {
                matches = $(this).children(':last').text().match(regExpSearchValue);

                if (matches !== null) {
                    $(this).addClass('matched');
                }
            });
            $('li:not(.matched)').css('display', 'none');
            if (searchValue === '') {
                $('li').removeClass('matched').css('display', 'block');
            }
        }).on('focus', function () {

            $(this).val('');
        })


    }
//Test the code
    //domSearch("#content", false);
};
