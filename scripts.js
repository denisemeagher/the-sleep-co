// A $( document ).ready() block.
$( document ).ready(function() {

    $('.hamburger-button').click(function(){
        $('.mobile-menu').fadeToggle(100);
        $(this).toggleClass('active');
    });

    // animate on scroll - activate
    AOS.init({
        duration: 600 // values from 0 to 3000, with steps 50ms
    });

});


lightGallery(document.getElementById('lightgallery'), {
	speed: 500,
	download: false
});

lightGallery(document.getElementById('lightgallery-2'), {
	speed: 500,
	download: false
});