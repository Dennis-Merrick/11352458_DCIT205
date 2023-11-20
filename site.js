// COURSES PAGE
    let modelbox = document.getElementById("modelbox");
    document.onmouseleave = function(){
        modelbox.style.display = "block";
    }
    function closemodel(){
        modelbox.style.display = "none";

    };




    // Event page

    var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("iambrpslides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3500); // This is for Changing image every 3.5 seconds
};