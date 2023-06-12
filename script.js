document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide() {
        const previousSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        const nextSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add("active");
        slides[previousSlide].classList.remove("active");
        slides[previousSlide].classList.add("previous");
        slides[nextSlide].classList.add("next");

        setTimeout(function() {
            slides[previousSlide].classList.remove("previous");
            slides[nextSlide].classList.remove("next");
        }, 1000);

        currentSlide = nextSlide;
    }

    showSlide();
    setInterval(showSlide, 10000); // Change slide every 5 seconds
});
