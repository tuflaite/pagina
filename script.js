document.addEventListener('DOMContentLoaded', function() {
    const sliderImages = document.querySelector('.slider-images');
    const images = document.querySelectorAll('.slider-images img');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let currentIndex = 0;
    const imageWidth = images[0].clientWidth;

    function updateSlider() {
        sliderImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`;

        if (prevButton && nextButton) {
            if (currentIndex === 0) {
                prevButton.classList.add('hidden');
            } else {
                prevButton.classList.remove('hidden');
            }

            if (currentIndex === images.length - 1) {
                nextButton.classList.add('hidden');
            } else {
                nextButton.classList.remove('hidden');
            }
        }
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            if (currentIndex < images.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = images.length - 1;
            }
            updateSlider();
        });
    }

    window.addEventListener('resize', function() {
        updateSlider();
    });

    updateSlider();
});