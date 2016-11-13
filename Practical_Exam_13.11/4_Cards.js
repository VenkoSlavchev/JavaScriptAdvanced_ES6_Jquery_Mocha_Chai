'use strict';
function cardDeckBuilder(selector) {
    function addCard(face, suit) {
        switch (suit) {
            case 'S':
                $('<div>').addClass('card').text(`${face} ${'\u2660'}`).on('click', function () {
                    let arr = [];
                    $('.card').each(function () {
                        arr.push($(this).text());
                    });
                    arr.reverse();
                    let index = 0;
                    $('.card').each(function () {
                        $(this).text(arr[index]);
                        index++;
                    });
                }).appendTo($(selector));
                break;
            case 'H':
                $('<div>').addClass('card').text(`${face} ${'\u2665'}`).on('click', function () {
                    let arr = [];
                    $('.card').each(function () {
                        arr.push($(this).text());
                    });
                    arr.reverse();
                    let index = 0;
                    $('.card').each(function () {
                        $(this).text(arr[index]);
                        index++;
                    });
                }).appendTo($(selector));
                break;
            case 'D':
                $('<div>').addClass('card').text(`${face} ${'\u2666'}`).on('click', function () {
                    let arr = [];
                    $('.card').each(function () {
                        arr.push($(this).text());
                    });
                    arr.reverse();
                    let index = 0;
                    $('.card').each(function () {
                        $(this).text(arr[index]);
                        index++;
                    });
                }).appendTo($(selector));
                break;
            case 'C':
                $('<div>').addClass('card').text(`${face} ${'\u2663'}`).on('click', function () {
                    let arr = [];
                    $('.card').each(function () {
                        arr.push($(this).text());
                    });
                    arr.reverse();
                    let index = 0;
                    $('.card').each(function () {
                        $(this).text(arr[index]);
                        index++;
                    });
                }).appendTo($(selector));
                break;
        }
    }

    return {
        addCard
    }
}
//Test the code in the given html