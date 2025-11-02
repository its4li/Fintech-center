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
        
        document.querySelectorAll('.glass-effect').forEach(element => {
            element.style.backgroundPosition = `${x * 20}px ${y * 20}px`;
            element.style.boxShadow = `${x * 10 - 5}px ${y * 10 - 5}px 30px rgba(0, 0, 0, 0.3)`;
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
});
