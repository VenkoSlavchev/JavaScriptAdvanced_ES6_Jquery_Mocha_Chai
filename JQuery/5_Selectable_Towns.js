'use strict';
function attachEvents() {
    $('document').ready(function () {
        $('li').each(function () {
            $(this).on('click', function () {
                if (!($(this)[0].hasAttribute('data-selected'))) {
                    $(this).css('background', 'rgb(221, 221, 221)').attr('data-selected', 'true');
                } else {
                    $(this).css('background', 'white').removeAttr('data-selected');
                }
            })
        });
        $('#showTownsButton').on('click', function () {
            let towns = [];
            $('[data-selected = true]').each(function () {
                towns.push($(this).text());
            });
            $('#selectedTowns').text('Selected towns: ' + towns.join(', '));
        })
    })
}
attachEvents();