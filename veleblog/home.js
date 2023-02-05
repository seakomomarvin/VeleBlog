//filter Js
$(document).ready(function () {
$(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
    $(".post-box").show("1000");    
    } else {
        $(".post-box")
        .not("." + value)
        .hide("1000");
        $(".post-box")
        .filter("." + value)
        .show("1000");
    }
});
//Add active to btn
$(".filter-item").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
});
});

//Header Background Change on scroll
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}