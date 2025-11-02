document.addEventListener('DOMContentLoaded', function() {
    // اسکرول نرم به بخش محتوا
    document.querySelector('.scroll-down a').addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
