'use strict';

$(function fades() {
    $('.traits').fadeIn(2000, fadeout());
    heroFadeIn();
    $('.portfolio').on('mousewheel DOMMouseScroll', function(event){

        var delta = Math.max(-1, Math.min(1, (event.originalEvent.wheelDelta || -event.originalEvent.detail)));
    
        $(this).scrollLeft( $(this).scrollLeft() - ( delta * 40 ) );
        event.preventDefault();
    
    });
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
