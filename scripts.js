
// A $( document ).ready() block.
$(document).ready(function() {
   
lightGallery(document.getElementById('lightgallery'), {
        speed: 500,
       download: false
       });
       
$('.fa-bars').click(function(){
    $('.mobile-nav').slideToggle(500);  
    $('.mobile-menu-button').toggleClass('nav-open'); 
    });
 
$('.fa-times').click(function(){
    $('.mobile-nav').slideToggle(500);  
    $('.mobile-menu-button').toggleClass('nav-open'); 
    });    
});


