/**
 * あいねすの家 - メインJavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // 認証トークンが含まれるURLは全ページで auth.html に集約
    try {
        if (window.location.hash && (
            window.location.hash.includes('invite_token') ||
            window.location.hash.includes('recovery_token') ||
            window.location.hash.includes('confirmation_token')
        )) {
            // 既にauth.htmlであれば何もしない
            if (!/\/auth\.html$/.test(window.location.pathname)) {
                window.location.href = '/auth.html' + window.location.hash;
                return; // 以降の処理は不要
            }
        }
    } catch (e) {
        // 何もしない（安全にフォールバック）
    }
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
    
    // フォーム処理
    const contactForm = document.querySelector('.form--contact');
    if (contactForm) {
        // URLパラメータをチェックして成功メッセージを表示
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === 'true') {
            // 成功メッセージを表示
            const formContainer = contactForm.parentElement;
            contactForm.style.display = 'none';
            
            const successMessage = document.createElement('div');
            successMessage.style.cssText = `
                text-align: center;
                padding: 60px 20px;
                background: #f0f8f0;
                border-radius: 16px;
                border: 2px solid #78c100;
                margin-top: 20px;
            `;
            
            successMessage.innerHTML = `
                <svg width="80" height="80" viewBox="0 0 80 80" style="margin-bottom: 24px;">
                    <circle cx="40" cy="40" r="38" fill="#78c100" opacity="0.1"/>
                    <circle cx="40" cy="40" r="30" fill="none" stroke="#78c100" stroke-width="3"/>
                    <path d="M26 40 L34 48 L54 28" stroke="#78c100" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3 style="color: #78c100; margin-bottom: 20px; font-size: 28px; font-weight: 700;">送信完了しました</h3>
                <p style="color: #333; font-size: 16px; line-height: 1.8; margin-bottom: 12px;">
                    お問い合わせありがとうございました。<br>
                    内容を確認の上、担当者より2営業日以内にご連絡させていただきます。
                </p>
                <p style="font-size: 14px; color: #666; margin-bottom: 32px;">
                    お急ぎの場合は、お電話（0532-43-6020）にてお問い合わせください。<br>
                    受付時間: 平日 8:30〜17:30
                </p>
                <a href="/" class="btn btn--primary" style="display: inline-block; padding: 12px 32px; background: #ffb059; color: white; text-decoration: none; border-radius: 100px; font-weight: 700;">
                    トップページへ戻る
                </a>
            `;
            
            formContainer.appendChild(successMessage);
            
            // お問い合わせセクションまでスクロール
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                setTimeout(() => {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
        
        // フォームバリデーション（送信は阻止しない）
        contactForm.addEventListener('submit', function(e) {
            const required = contactForm.querySelectorAll('[required]');
            let isValid = true;
            
            required.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    field.style.borderColor = '#ff4444';
                } else {
                    field.classList.remove('error');
                    field.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
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
