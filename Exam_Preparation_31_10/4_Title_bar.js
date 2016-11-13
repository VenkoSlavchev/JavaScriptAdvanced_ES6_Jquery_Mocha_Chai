'use strict';
class TitleBar {
    constructor(title) {
        this.title = title;
        this.arrayOfLinks = [];
    }

    addLink(href, name) {
        this.arrayOfLinks.push($('<a>').addClass('menu-link').attr('href', href).text(name));
    }

    appendTo(selector) {
        $('<header>').addClass('header').prependTo(selector);
        $('<div>').addClass('header-row').append($(`<a class="button">&#9776;</a>`),
            $('<span>').addClass('title').text(`${this.title}`)).appendTo($('.header'));
        $('<div>').addClass('drawer').css('display', 'none').append($('<nav>').addClass('menu')).appendTo($('.header'));
        for (let link of this.arrayOfLinks) {
            $(link).appendTo($('.menu'));
        }
        $('.button').on('click', function () {
            if ($('.drawer').is(':hidden')) {
                $('.drawer').css('display', 'block')
            } else {
                $('.drawer').css('display', 'none');
            }
        })
    }

}
//Test the code
// let header = new TitleBar('Title Bar Problem');
// header.addLink('/', 'Home');
// header.addLink('about', 'About');
// header.addLink('results', 'Results');
// header.addLink('faq', 'FAQ');
// header.appendTo('#container');




