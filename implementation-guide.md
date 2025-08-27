# コツヨシ訪問看護ステーション 実装ガイドライン

## 1. プロジェクトセットアップ

### 1.1 必要な技術スタック
```json
{
  "frontend": {
    "framework": "Next.js 14+ または Astro 3+",
    "styling": "CSS Modules + PostCSS または Tailwind CSS",
    "animations": "Framer Motion または CSS Animations",
    "fonts": "Google Fonts",
    "icons": "React Icons または Heroicons"
  },
  "build": {
    "bundler": "Vite または Webpack 5",
    "css": "PostCSS with Autoprefixer",
    "images": "Sharp for optimization"
  },
  "development": {
    "typescript": "5.0+",
    "eslint": "8.0+",
    "prettier": "3.0+",
    "husky": "pre-commit hooks"
  }
}
```

### 1.2 ディレクトリ構造
```
project-root/
├── public/
│   ├── fonts/
│   ├── images/
│   └── icons/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   └── Modal/
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   └── Section/
│   │   └── features/
│   │       ├── Hero/
│   │       ├── Services/
│   │       └── Contact/
│   ├── styles/
│   │   ├── tokens/
│   │   │   ├── colors.css
│   │   │   ├── typography.css
│   │   │   └── spacing.css
│   │   ├── base/
│   │   │   ├── reset.css
│   │   │   └── global.css
│   │   └── utilities/
│   │       ├── animations.css
│   │       └── mixins.css
│   ├── hooks/
│   ├── utils/
│   └── pages/
```

## 2. HTML構造の実装

### 2.1 セマンティックHTML
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="沖縄で訪問看護を行うコツヨシ訪問看護ステーション。心に寄り添い、看る。24時間365日、自分らしい生活をサポートします。">
  <meta name="keywords" content="訪問看護,沖縄,那覇,在宅医療,看護サービス">
  
  <!-- OGP -->
  <meta property="og:title" content="コツヨシ訪問看護ステーション">
  <meta property="og:description" content="心に寄り添い、看る。沖縄の訪問看護サービス">
  <meta property="og:image" content="/og-image.jpg">
  <meta property="og:type" content="website">
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&display=swap" rel="stylesheet">
  
  <title>コツヨシ訪問看護ステーション - 沖縄 訪問看護</title>
</head>
<body>
  <a href="#main" class="skip-link">メインコンテンツへスキップ</a>
  
  <header role="banner">
    <!-- ヘッダー実装 -->
  </header>
  
  <main id="main" role="main">
    <!-- メインコンテンツ -->
  </main>
  
  <footer role="contentinfo">
    <!-- フッター実装 -->
  </footer>
</body>
</html>
```

### 2.2 アクセシビリティ実装
```html
<!-- ARIAラベルとロール -->
<nav role="navigation" aria-label="メインナビゲーション">
  <ul role="list">
    <li role="listitem">
      <a href="/service" aria-current="page">サービス内容</a>
    </li>
  </ul>
</nav>

<!-- フォーカス管理 -->
<button 
  type="button" 
  aria-expanded="false" 
  aria-controls="mobile-menu"
  aria-label="メニューを開く"
>
  <span class="hamburger"></span>
</button>

<!-- スクリーンリーダー用テキスト -->
<span class="sr-only">このリンクは新しいウィンドウで開きます</span>

<!-- ランドマーク -->
<section aria-labelledby="services-heading">
  <h2 id="services-heading">私たちのサービス</h2>
</section>
```

## 3. CSS実装戦略

### 3.1 CSS設計手法（BEM + ITCSS）
```css
/* Block */
.card {}

/* Element */
.card__title {}
.card__content {}
.card__footer {}

/* Modifier */
.card--featured {}
.card--disabled {}

/* State */
.card.is-active {}
.card.is-loading {}

/* JavaScript hooks */
.js-modal-trigger {}
```

### 3.2 レスポンシブ実装
```css
/* モバイルファースト */
.container {
  width: 100%;
  padding: 0 16px;
}

/* タブレット */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}

/* デスクトップ */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

/* ラージデスクトップ */
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

/* コンテナクエリ（新しいアプローチ） */
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

### 3.3 カスタムプロパティの活用
```css
/* テーマ切り替え対応 */
:root {
  --theme-primary: var(--color-brown-600);
  --theme-secondary: var(--color-green-500);
  --theme-accent: var(--color-orange-400);
}

/* コンポーネントスコープ変数 */
.card {
  --card-padding: var(--spacing-24);
  --card-radius: var(--border-radius-lg);
  --card-shadow: var(--shadow-md);
  
  padding: var(--card-padding);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
}

/* 動的な値の計算 */
.hero {
  --hero-height: calc(100vh - var(--header-height));
  min-height: var(--hero-height);
}
```

## 4. JavaScript実装

### 4.1 インタラクション実装
```javascript
// スムーススクロール
class SmoothScroll {
  constructor() {
    this.links = document.querySelectorAll('a[href^="#"]');
    this.init();
  }
  
  init() {
    this.links.forEach(link => {
      link.addEventListener('click', this.handleClick.bind(this));
    });
  }
  
  handleClick(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const offset = 80; // ヘッダーの高さ
      const targetPosition = targetElement.offsetTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
}

// スクロールアニメーション
class ScrollAnimation {
  constructor() {
    this.elements = document.querySelectorAll('[data-animate]');
    this.observer = null;
    this.init();
  }
  
  init() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    this.observer = new IntersectionObserver(
      this.handleIntersect.bind(this),
      options
    );
    
    this.elements.forEach(element => {
      this.observer.observe(element);
    });
  }
  
  handleIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        this.observer.unobserve(entry.target);
      }
    });
  }
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
  new SmoothScroll();
  new ScrollAnimation();
});
```

### 4.2 フォーム実装
```javascript
class ContactForm {
  constructor(formElement) {
    this.form = formElement;
    this.inputs = this.form.querySelectorAll('input, textarea');
    this.submitButton = this.form.querySelector('[type="submit"]');
    this.init();
  }
  
  init() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
    this.inputs.forEach(input => {
      input.addEventListener('blur', this.validateField.bind(this));
    });
  }
  
  validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const type = field.type;
    const required = field.hasAttribute('required');
    
    // エラーメッセージをクリア
    this.clearError(field);
    
    // 必須チェック
    if (required && !value) {
      this.showError(field, 'この項目は必須です');
      return false;
    }
    
    // メールバリデーション
    if (type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        this.showError(field, '正しいメールアドレスを入力してください');
        return false;
      }
    }
    
    // 電話番号バリデーション
    if (type === 'tel' && value) {
      const telRegex = /^[0-9-]+$/;
      if (!telRegex.test(value)) {
        this.showError(field, '正しい電話番号を入力してください');
        return false;
      }
    }
    
    return true;
  }
  
  showError(field, message) {
    const group = field.closest('.form__group');
    group.classList.add('form__group--error');
    
    const error = document.createElement('span');
    error.className = 'form__error';
    error.textContent = message;
    group.appendChild(error);
  }
  
  clearError(field) {
    const group = field.closest('.form__group');
    group.classList.remove('form__group--error');
    
    const error = group.querySelector('.form__error');
    if (error) {
      error.remove();
    }
  }
  
  async handleSubmit(e) {
    e.preventDefault();
    
    // 全フィールドをバリデーション
    let isValid = true;
    this.inputs.forEach(input => {
      if (!this.validateField({ target: input })) {
        isValid = false;
      }
    });
    
    if (!isValid) {
      return;
    }
    
    // 送信処理
    this.submitButton.disabled = true;
    this.submitButton.textContent = '送信中...';
    
    try {
      const formData = new FormData(this.form);
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        this.showSuccess();
        this.form.reset();
      } else {
        throw new Error('送信に失敗しました');
      }
    } catch (error) {
      this.showError(this.submitButton, error.message);
    } finally {
      this.submitButton.disabled = false;
      this.submitButton.textContent = '送信する';
    }
  }
  
  showSuccess() {
    const success = document.createElement('div');
    success.className = 'form__success';
    success.textContent = 'お問い合わせありがとうございます。担当者より連絡させていただきます。';
    this.form.appendChild(success);
    
    setTimeout(() => {
      success.remove();
    }, 5000);
  }
}
```

## 5. パフォーマンス最適化

### 5.1 画像最適化
```html
<!-- レスポンシブ画像 -->
<picture>
  <source 
    media="(max-width: 768px)" 
    srcset="/images/hero-mobile.webp"
    type="image/webp"
  >
  <source 
    media="(max-width: 768px)" 
    srcset="/images/hero-mobile.jpg"
    type="image/jpeg"
  >
  <source 
    srcset="/images/hero-desktop.webp"
    type="image/webp"
  >
  <img 
    src="/images/hero-desktop.jpg" 
    alt="訪問看護の様子"
    loading="lazy"
    decoding="async"
    width="1920"
    height="1080"
  >
</picture>

<!-- アートディレクション -->
<picture>
  <source 
    media="(orientation: portrait)" 
    srcset="/images/service-portrait.jpg"
  >
  <source 
    media="(orientation: landscape)" 
    srcset="/images/service-landscape.jpg"
  >
  <img src="/images/service-default.jpg" alt="サービス内容">
</picture>
```

### 5.2 CSS最適化
```css
/* Critical CSS（インライン化） */
<style>
  /* ファーストビューに必要な最小限のCSS */
  :root {
    --color-brown-600: #663606;
    --color-green-500: #78c100;
    --color-white: #ffffff;
  }
  
  body {
    margin: 0;
    font-family: "Zen Maru Gothic", sans-serif;
    color: var(--color-brown-600);
  }
  
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    background: var(--color-white);
    z-index: 100;
  }
</style>

<!-- 非同期CSS読み込み -->
<link 
  rel="preload" 
  href="/styles/main.css" 
  as="style" 
  onload="this.onload=null;this.rel='stylesheet'"
>
<noscript>
  <link rel="stylesheet" href="/styles/main.css">
</noscript>
```

### 5.3 JavaScript最適化
```javascript
// 遅延読み込み
const lazyImages = document.querySelectorAll('img[data-lazy]');
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.lazy;
      img.removeAttribute('data-lazy');
      imageObserver.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));

// デバウンス処理
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// スクロールイベントの最適化
const handleScroll = debounce(() => {
  const scrollY = window.scrollY;
  const header = document.querySelector('.header');
  
  if (scrollY > 100) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
}, 10);

window.addEventListener('scroll', handleScroll, { passive: true });
```

## 6. SEO最適化

### 6.1 構造化データ
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "コツヨシ訪問看護ステーション",
  "url": "https://kotuyosi-houkan.com",
  "logo": "https://kotuyosi-houkan.com/logo.png",
  "description": "沖縄で訪問看護を行うコツヨシ訪問看護ステーション",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "樋川2丁目2番18号",
    "addressLocality": "那覇市",
    "addressRegion": "沖縄県",
    "postalCode": "900-0022",
    "addressCountry": "JP"
  },
  "telephone": "+81-98-854-5678",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:30",
    "closes": "17:30"
  },
  "medicalSpecialty": "Nursing"
}
</script>
```

### 6.2 サイトマップ
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://kotuyosi-houkan.com/</loc>
    <lastmod>2023-12-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://kotuyosi-houkan.com/service</loc>
    <lastmod>2023-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://kotuyosi-houkan.com/company</loc>
    <lastmod>2023-12-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

## 7. テスト実装

### 7.1 ビジュアルリグレッションテスト
```javascript
// Playwright設定
import { test, expect } from '@playwright/test';

test.describe('ビジュアルテスト', () => {
  test('ホームページのスクリーンショット', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });
  
  test('モバイル表示', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(page).toHaveScreenshot('homepage-mobile.png');
  });
});
```

### 7.2 アクセシビリティテスト
```javascript
// axe-coreを使用
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('アクセシビリティテスト', () => {
  test('WCAG 2.1 AA準拠', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
```

## 8. デプロイメント

### 8.1 ビルド設定
```json
// package.json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "format": "prettier --write .",
    "test": "jest",
    "test:e2e": "playwright test",
    "analyze": "ANALYZE=true next build"
  }
}
```

### 8.2 環境変数
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://kotuyosi-houkan.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_API_URL=https://api.kotuyosi-houkan.com

# .env.production
DATABASE_URL=postgresql://...
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user@example.com
SMTP_PASS=password
```

### 8.3 CI/CD設定
```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_SITE_URL: ${{ secrets.SITE_URL }}
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## まとめ

この実装ガイドラインは、コツヨシ訪問看護ステーションのデザインを完全に再現するための包括的な指針です。以下の点に特に注意を払って実装してください：

1. **デザイントークンの厳密な使用** - 一貫性を保つため
2. **アクセシビリティの確保** - すべてのユーザーが利用可能に
3. **パフォーマンスの最適化** - 快適なユーザー体験
4. **レスポンシブデザイン** - 全デバイスで最適な表示
5. **SEO対策** - 検索エンジンでの可視性向上

これらのガイドラインに従うことで、オリジナルのサイトと同等の品質と雰囲気を持つウェブサイトを構築できます。