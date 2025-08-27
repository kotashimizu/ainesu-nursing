/**
 * あいねすの家 - メインJavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // モバイルメニューの制御
    const mobileMenuButton = document.querySelector('.header__mobile-menu');
    const header = document.querySelector('.header');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            header.classList.toggle('header--menu-open');
        });
    }
    
    // スムーススクロール
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = 80;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ページトップへ戻るボタン
    const topButton = document.querySelector('.floating-btn--top');
    if (topButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                topButton.style.display = 'flex';
            } else {
                topButton.style.display = 'none';
            }
        });
        
        topButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // フォームバリデーション
    const contactForm = document.querySelector('.form--contact');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 簡単なバリデーション
            const required = contactForm.querySelectorAll('[required]');
            let isValid = true;
            
            required.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                alert('お問い合わせありがとうございます。内容を確認後、ご連絡させていただきます。');
                contactForm.reset();
            } else {
                alert('必須項目をご入力ください。');
            }
        });
    }
    
    // スクロールアニメーション
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll('.section');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});