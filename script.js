
// function handleSubmit() {
//     alert("Form submitted successfully!");
// }
// let slideIndex = 0;
// let autoSlideInterval;


// function showSlide(index) {
//     let slides = document.getElementsByClassName("slide");

    
//     if (index >= slides.length) {
//         slideIndex = 0;
//     } else if (index < 0) {
//         slideIndex = slides.length - 1;
//     } else {
//         slideIndex = index;
//     }

    
//     for (let slide of slides) {
//         slide.style.display = "none";
//     }

   
//     slides[slideIndex].style.display = "block";
// }


// function changeSlide(step) {
//     showSlide(slideIndex + step);
//     resetAutoSlide();
// }


// function startAutoSlide() {
//     autoSlideInterval = setInterval(() => {
//         showSlide(slideIndex + 1);
//     }, 3000); 
// }


// function resetAutoSlide() {
//     clearInterval(autoSlideInterval); 
//     startAutoSlide(3000); 
// }


// showSlide(slideIndex);
