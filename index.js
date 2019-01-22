'use strict';

$(function fades() {
    $('.traits').fadeIn(2000, fadeout() );
    heroFadeIn();
})

function fadeout() {
    setTimeout( () => {
        $('.traits').fadeOut(2300);
    }, 2000);
    
}

function heroFadeIn() {
    setTimeout( () => {
        $('.hero-section').fadeIn(1500);
    }, 4000);

}