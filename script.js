document.addEventListener('DOMContentLoaded', function() {
    // انتخاب بخش‌های سرویس
    const rightSection = document.querySelector('.right-section');
    const leftSection = document.querySelector('.left-section');
    
    // افزودن افکت چرخش به بخش‌ها هنگام حرکت موس
    rightSection.addEventListener('mousemove', function(e) {
        rotateElement(e, this);
    });
    
    leftSection.addEventListener('mousemove', function(e) {
        rotateElement(e, this);
    });
    
    // بازگشت به حالت اولیه هنگام خروج موس
    rightSection.addEventListener('mouseleave', resetRotation);
    leftSection.addEventListener('mouseleave', resetRotation);
    
    // افزودن افکت ظاهر شدن به آیتم‌های لیست
    animateListItems();
});

// تابع چرخش المان بر اساس موقعیت موس
function rotateElement(event, element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    // محاسبه میزان چرخش بر اساس فاصله از مرکز
    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * 5; // حداکثر 5 درجه چرخش
    const rotateX = -((mouseY - centerY) / (rect.height / 2)) * 5; // حداکثر 5 درجه چرخش
    
    // اعمال چرخش با انیمیشن
    element.style.transition = 'transform 0.1s ease-out';
    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // افکت سایه متحرک
    const shadowX = (mouseX - centerX) / 10;
    const shadowY = (mouseY - centerY) / 10;
    element.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.4)`;
}

// بازگشت به حالت اولیه
function resetRotation() {
    this.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
}

// انیمیشن ظاهر شدن آیتم‌های لیست
function animateListItems() {
    const listItems = document.querySelectorAll('.service-list li');
    
    listItems.forEach((item, index) => {
        // تاخیر برای هر آیتم
        const delay = index * 100;
        
        // اعمال انیمیشن با تاخیر
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 50);
        }, delay);
    });
}
