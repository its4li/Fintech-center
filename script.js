document.addEventListener('DOMContentLoaded', function() {
    // انیمیشن چرخش با حرکت موس
    const serviceSections = document.querySelectorAll('.service-section');
    
    serviceSections.forEach(section => {
        // اضافه کردن کلاس برای انیمیشن هنگام ورود موس
        section.addEventListener('mouseenter', function() {
            this.querySelector('.service-content').style.transform = 'rotateY(180deg)';
        });
        
        // حذف کلاس برای برگشت به حالت اولیه هنگام خروج موس
        section.addEventListener('mouseleave', function() {
            this.querySelector('.service-content').style.transform = 'rotateY(0)';
        });
    });
    
    // اضافه کردن عملکرد به دکمه‌ها
    const serviceButtons = document.querySelectorAll('.service-btn');
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('فرم درخواست به زودی فعال خواهد شد!');
        });
    });
    
    // افکت پارالاکس برای المان‌های شیشه‌ای
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.querySelectorAll('.liquid-glass').forEach(element => {
            // حرکت سایه با موس
            element.style.boxShadow = `
                ${x * 20 - 10}px ${y * 20 - 10}px 30px rgba(0, 0, 0, 0.15),
                0 1px 8px rgba(255, 255, 255, 0.2) inset,
                0 -4px 5px rgba(0, 0, 0, 0.1) inset
            `;
            
            // حرکت گرادیان با موس
            const gradientX = x * 100;
            const gradientY = y * 100;
            element.style.backgroundPosition = `${gradientX}% ${gradientY}%`;
        });
    });
    
    // افکت درخشش برای لوگو
    const logo = document.querySelector('.logo');
    setInterval(() => {
        logo.style.textShadow = '0 0 15px rgba(255, 255, 255, 0.8)';
        setTimeout(() => {
            logo.style.textShadow = '0 0 5px rgba(255, 255, 255, 0.3)';
        }, 500);
    }, 2000);
    
    // افکت موج برای المان‌های شیشه‌ای
    const liquidElements = document.querySelectorAll('.liquid-glass');
    liquidElements.forEach(element => {
        // ایجاد افکت موج با CSS Animation
        const wave = document.createElement('div');
        wave.classList.add('liquid-wave');
        element.appendChild(wave);
    });
});
