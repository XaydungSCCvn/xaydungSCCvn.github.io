// Hero Slideshow
const heroImages = [
    'images/PHỔI CẢNH 3D  - 160126 final-trang_page-0011.jpg',
    'images/PHỔI CẢNH 3D  - 160126 final-trang_page-0017.jpg', 
    'images/PHỔI CẢNH 3D  - 160126 final-trang_page-0020.jpg'
];

let currentHeroIndex = 0;

function initHeroSlideshow() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    // Tạo container cho slideshow
    const slideshowContainer = document.createElement('div');
    slideshowContainer.className = 'hero-slideshow';
    slideshowContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    `;
    
    // Tạo các slide
    heroImages.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = 'hero-slide';
        slide.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('${img}') center/cover no-repeat;
            opacity: ${index === 0 ? '1' : '0'};
            transition: opacity 1s ease-in-out;
        `;
        slideshowContainer.appendChild(slide);
    });
    
    // Chèn vào hero
    heroSection.insertBefore(slideshowContainer, heroSection.firstChild);
    
    // Auto chuyển slide
    setInterval(() => {
        const slides = document.querySelectorAll('.hero-slide');
        slides[currentHeroIndex].style.opacity = '0';
        currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
        slides[currentHeroIndex].style.opacity = '1';
    }, 5000); // 5 giây chuyển 1 lần
}

// Khởi chạy khi DOM ready
document.addEventListener('DOMContentLoaded', initHeroSlideshow);