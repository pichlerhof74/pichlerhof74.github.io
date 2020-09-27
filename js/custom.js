// Change Navbar on scroll

$(window).scroll(function(){
    if ($(this).scrollTop() > 35) {
       $('#Navigation').removeClass('hide');
       $('#Navigation').addClass('show');
    } else {
       $('#Navigation').removeClass('show');
       $('#Navigation').addClass('hide');
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 35) {
       $('#bannertext').removeClass('show');
       $('#bannertext').addClass('hide');
    } else {
       $('#bannertext').removeClass('hide');
       $('#bannertext').addClass('show');
    }
});


// gallery
$(function() {
var selectedClass = "";
$(".filter").click(function(){
selectedClass = $(this).attr("data-rel");
$("#gallery").fadeTo(100, 0.1);
$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
setTimeout(function() {
$("."+selectedClass).fadeIn().addClass('animation');
$("#gallery").fadeTo(300, 1);
}, 300);
});
});

//ekko-Lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
