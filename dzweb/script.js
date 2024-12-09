let currentIndex = 2; // Начинаем с третьего слайда
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.transform = `translateX(${-currentIndex * 100}%)`;
    });

    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentIndex) {
            dot.classList.add('active');
        }
    });
}

function changeSlide(step) {
    showSlide(currentIndex + step);
}

function currentSlide(index) {
    showSlide(index - 1);
}

const autoChange = setInterval(() => {
    showSlide(currentIndex + 1);
}, 8000);

// Инициализация
showSlide(currentIndex);
