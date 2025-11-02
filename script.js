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
    
    // افکت پارالاکس برای پس‌زمینه
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.querySelectorAll('.front-face').forEach(face => {
            face.style.backgroundPosition = `${x * 10}px ${y * 10}px`;
        });
    });
    
    // منوی همبرگری
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    
    hamburgerIcon.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
    });
    
    // بستن منو با کلیک خارج از آن
    document.addEventListener('click', function(event) {
        if (!hamburgerMenu.contains(event.target) && hamburgerMenu.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
        }
    });
});
