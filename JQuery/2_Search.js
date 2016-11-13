'use strict';
function search() {
    let searchValue = $('#searchText').val(),
        countMatches = 0;
    $('#towns li').each(function () {
        if ($(this).text().indexOf(searchValue) > -1) {
            $(this).css('font-weight', 'bold');
            countMatches++;
        }
    });
    $('#result').append(countMatches + ' matches found. ');
}