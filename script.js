document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide() {
        const previousSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        const nextSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add("active");
        slides[previousSlide].classList.remove("active");

        currentSlide = nextSlide;
    }

    showSlide();
    setInterval(showSlide, 5000); // Change slide every 5 seconds
});
