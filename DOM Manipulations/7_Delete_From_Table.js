'use strict';
function deleteByEmail() {
    let value = $('input').val();
    if (value === ''){
        $('#result').text('Not Found');
    } else {
        $('#customers td').each(function () {
            if (value === $(this).text()) {
                $(this).parent().remove();
                $('#result').text('Deleted.');
            }
        })
    }
}