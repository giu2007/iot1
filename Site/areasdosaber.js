let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    const newTransformValue = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}%)`;
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.info-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
}
