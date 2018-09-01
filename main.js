$(document).ready(() => {
    $('.housing-button').on('click', (event) => {
        $('.nav-housing').toggleClass('hide');
        $(event.currentTarget).find('i').toggleClass('rotate');
        $('.nav-commercial').addClass('hide');
        $('.nav-hospital').addClass('hide');
    });


    $('.commercial-button').on('click', (event) => {
        $('.nav-commercial').toggleClass('hide');
        $(event.currentTarget).find('i').toggleClass('rotate');
        $('.nav-housing').addClass('hide');
        $('.nav-hospital').addClass('hide');
    });


    $('.hospital-button').on('click', (event) => {
        $('.nav-hospital').toggleClass('hide');
        $(event.currentTarget).find('i').toggleClass('rotate');
        $('.nav-commercial').addClass('hide');
        $('.nav-housing').addClass('hide');
    });



});