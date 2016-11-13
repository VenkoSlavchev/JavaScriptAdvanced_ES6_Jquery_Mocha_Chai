'use strict';
function colorize() {
    if($('tr:even').css('background-color') == 'rgb(0, 128, 128)'){
        $('tr:even').css('background-color','white');
    }else {
        $('tr:even').css('background-color','Teal');
    }
}