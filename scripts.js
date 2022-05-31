
// A $( document ).ready() block.
$(document).ready(function() {
   
lightGallery(document.getElementById('lightgallery'), {
        speed: 500,
       download: false
       });
       
$('.fa-bars').click(function(){
    $('.mobile-nav').slideToggle(500);  
    $('.fa-times').slideToggle(500); 
    $('.fa-bars').fadeToggle(500); 
    });


    
});


