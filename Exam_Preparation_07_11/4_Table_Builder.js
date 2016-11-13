'use strict';
function tableBuilder(selector) {
    let builder = {};
    builder.createTable = function (columnNames) {
        $('<table>').append($('<tr>').attr('id', 'header-row')).appendTo($(selector));
        for (let tableNames of columnNames) {
            $('<th>').text(tableNames).appendTo($('#header-row'));
        }
        $('<th>').text('Action').appendTo($('#header-row'));
    };
    builder.fillData = function (dataRows) {
        for (let dataCells of dataRows) {
            let currentRow = $('<tr>').appendTo($('table'));
            for (let dataText of dataCells) {
                $('<td>').text(dataText).appendTo($(currentRow));
            }
            $('<td>').html($('<button>').text('Delete').on('click', function () {
                $(this).parent().parent().remove();
            })).appendTo($(currentRow));
        }
    };

    return builder;
}