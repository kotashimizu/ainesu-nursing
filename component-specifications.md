# コツヨシ訪問看護ステーション コンポーネント仕様書

## 1. ヘッダーコンポーネント

### 1.1 構造詳細
```html
<header class="header">
  <div class="header__container">
    <!-- 左側ナビゲーション -->
    <nav class="header__nav header__nav--left">
      <ul class="header__nav-list">
        <li class="header__nav-item">
          <a href="/news" class="header__nav-link">
            <span class="header__nav-text">お知らせ</span>
          </a>
        </li>
        <li class="header__nav-item">
          <a href="/service" class="header__nav-link">
            <span class="header__nav-text">サービス内容</span>
          </a>
        </li>
        <li class="header__nav-item">
          <a href="/#strengths" class="header__nav-link">
            <span class="header__nav-text">コツヨシの特徴</span>
          </a>
        </li>
      </ul>
    </nav>
    
    <!-- 中央ロゴ -->
    <div class="header__logo">
      <a href="/" class="header__logo-link">
        <img src="/logo.svg" alt="コツヨシ訪問看護ステーション" class="header__logo-image">
      </a>
    </div>
    
    <!-- 右側ナビゲーション -->
    <nav class="header__nav header__nav--right">
      <ul class="header__nav-list">
        <li class="header__nav-item">
          <a href="/service#flow" class="header__nav-link">
            <span class="header__nav-text">ご利用までの流れ</span>
          </a>
        </li>
        <li class="header__nav-item">
          <a href="/recruit" class="header__nav-link">
            <span class="header__nav-text">採用情報</span>
          </a>
        </li>
        <li class="header__nav-item">
          <a href="/company" class="header__nav-link">
            <span class="header__nav-text">運営会社</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>
```

### 1.2 スタイル仕様
```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: var(--z-index-sticky);
  transition: all var(--transition-normal) var(--ease-out-cubic);
}

.header__container {
  max-width: var(--container-max);
  height: 100%;
  margin: 0 auto;
  padding: 0 var(--spacing-20);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__nav {
  flex: 1;
}

.header__nav-list {
  display: flex;
  gap: var(--spacing-24);
  list-style: none;
  padding: 0;
  margin: 0;
}

.header__nav--left .header__nav-list {
  justify-content: flex-end;
}

.header__nav--right .header__nav-list {
  justify-content: flex-start;
}

.header__nav-link {
  color: var(--color-brown-600);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  padding: var(--spacing-4) var(--spacing-8);
  position: relative;
  transition: color var(--transition-fast) var(--ease-default);
}

.header__nav-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--color-green-500);
  transform: translateX(-50%);
  transition: width var(--transition-normal) var(--ease-out-cubic);
}

.header__nav-link:hover {
  color: var(--color-green-500);
}

.header__nav-link:hover::after {
  width: 80%;
}

.header__logo {
  padding: 0 var(--spacing-32);
}

.header__logo-image {
  height: 50px;
  width: auto;
}

/* スクロール時のヘッダー縮小 */
.header--scrolled {
  height: 60px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.header--scrolled .header__logo-image {
  height: 40px;
}
```

## 2. ヒーローセクション

### 2.1 構造詳細
```html
<section class="hero">
  <div class="hero__background">
    <!-- 背景画像またはグラデーション -->
    <div class="hero__overlay"></div>
  </div>
  
  <div class="hero__content">
    <div class="hero__text-wrapper">
      <p class="hero__subtitle">コツヨシ訪問看護ステーション</p>
      <h1 class="hero__title">心に寄り添い、看る</h1>
      <h2 class="hero__tagline">
        ご利用者様の<span class="hero__highlight">「喜び」</span>が私たちの「価値」
      </h2>
    </div>
    
    <div class="hero__cta">
      <a href="/contact" class="btn btn--primary btn--large">
        <span class="btn__text">お問い合わせ</span>
        <span class="btn__icon">→</span>
      </a>
    </div>
  </div>
  
  <!-- 波形の装飾 -->
  <div class="hero__wave">
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
      <path d="M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z" 
            fill="var(--bg-section-yellow-pale)"></path>
    </svg>
  </div>
</section>
```

### 2.2 スタイル仕様
```css
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 80px; /* ヘッダー分のオフセット */
}

.hero__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    var(--color-yellow-300) 0%,
    var(--color-green-50) 100%
  );
  z-index: -1;
}

.hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
}

.hero__content {
  text-align: center;
  padding: var(--spacing-40);
  max-width: 900px;
  animation: fadeInUp 1s var(--ease-out-expo);
}

.hero__subtitle {
  font-family: var(--font-primary);
  font-size: var(--font-size-lg);
  color: var(--color-green-500);
  margin-bottom: var(--spacing-8);
  letter-spacing: var(--letter-spacing-wide);
}

.hero__title {
  font-family: var(--font-primary);
  font-size: var(--font-size-7xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-brown-600);
  margin-bottom: var(--spacing-24);
  line-height: var(--line-height-tight);
}

.hero__tagline {
  font-family: var(--font-primary);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-medium);
  color: var(--color-brown-600);
  margin-bottom: var(--spacing-40);
  line-height: var(--line-height-normal);
}

.hero__highlight {
  color: var(--color-orange-400);
  font-weight: var(--font-weight-bold);
  position: relative;
}

.hero__highlight::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--color-orange-400);
  opacity: 0.3;
}

.hero__wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 120px;
}

.hero__wave svg {
  width: 100%;
  height: 100%;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## 3. ボタンコンポーネント

### 3.1 プライマリボタン
```html
<button class="btn btn--primary">
  <span class="btn__text">お問い合わせ</span>
  <span class="btn__icon">
    <svg class="btn__arrow" width="16" height="16">
      <path d="M8 4l4 4-4 4" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
  </span>
</button>
```

### 3.2 スタイル仕様
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-8);
  padding: var(--spacing-16) var(--spacing-32);
  border: none;
  border-radius: var(--border-radius-full);
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-normal);
  cursor: pointer;
  transition: all var(--transition-normal) var(--ease-out-cubic);
  position: relative;
  overflow: hidden;
}

.btn--primary {
  background-color: var(--color-orange-400);
  color: var(--color-white);
  padding-right: var(--spacing-40); /* 矢印分の余白 */
}

.btn--primary::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width var(--transition-slow) var(--ease-out-expo),
              height var(--transition-slow) var(--ease-out-expo);
}

.btn--primary:hover {
  background-color: var(--color-orange-500);
  transform: translateY(-2px);
  box-shadow: var(--shadow-orange);
}

.btn--primary:hover::before {
  width: 300px;
  height: 300px;
}

.btn--primary:hover .btn__icon {
  transform: translateX(4px);
}

.btn--primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.btn__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-normal) var(--ease-out-cubic);
}

.btn__arrow {
  width: 16px;
  height: 16px;
}

/* サイズバリエーション */
.btn--small {
  padding: var(--spacing-8) var(--spacing-20);
  font-size: var(--font-size-sm);
}

.btn--large {
  padding: var(--spacing-20) var(--spacing-48);
  font-size: var(--font-size-lg);
}

/* セカンダリボタン */
.btn--secondary {
  background-color: var(--color-white);
  color: var(--color-brown-600);
  border: 2px solid var(--color-brown-600);
}

.btn--secondary:hover {
  background-color: var(--color-brown-600);
  color: var(--color-white);
  transform: translateY(-2px);
  box-shadow: var(--shadow-brown);
}

/* ゴーストボタン */
.btn--ghost {
  background-color: transparent;
  color: var(--color-green-500);
  border: 2px solid var(--color-green-500);
}

.btn--ghost:hover {
  background-color: var(--color-green-500);
  color: var(--color-white);
  transform: translateY(-2px);
  box-shadow: var(--shadow-green);
}
```

## 4. カードコンポーネント

### 4.1 サービスカード
```html
<article class="card card--service">
  <div class="card__image-wrapper">
    <img src="/service-image.jpg" alt="看護サービス" class="card__image">
    <div class="card__image-overlay"></div>
  </div>
  
  <div class="card__content">
    <h3 class="card__title">看護サービスについて</h3>
    <p class="card__description">
      沖縄で訪問看護を行うコツヨシ訪問看護ステーションでは、
      看護師がご自宅に訪問して、病気や障害の状態に応じた看護を行うサービスです。
    </p>
    
    <div class="card__footer">
      <a href="/service" class="card__link">
        詳しく見る
        <span class="card__link-arrow">→</span>
      </a>
    </div>
  </div>
</article>
```

### 4.2 スタイル仕様
```css
.card {
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: all var(--transition-normal) var(--ease-out-cubic);
  position: relative;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.card__image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: var(--aspect-video);
  overflow: hidden;
}

.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow) var(--ease-out-cubic);
}

.card:hover .card__image {
  transform: scale(1.05);
}

.card__image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
  opacity: 0;
  transition: opacity var(--transition-normal) var(--ease-default);
}

.card:hover .card__image-overlay {
  opacity: 1;
}

.card__content {
  padding: var(--spacing-24);
}

.card__title {
  font-family: var(--font-primary);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-brown-600);
  margin-bottom: var(--spacing-12);
  line-height: var(--line-height-snug);
}

.card__description {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  color: var(--color-brown-600);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-20);
}

.card__footer {
  padding-top: var(--spacing-16);
  border-top: 1px solid var(--color-gray-100);
}

.card__link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-4);
  color: var(--color-green-500);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  transition: all var(--transition-fast) var(--ease-default);
}

.card__link:hover {
  gap: var(--spacing-8);
  color: var(--color-green-600);
}

.card__link-arrow {
  transition: transform var(--transition-fast) var(--ease-out-cubic);
}

.card__link:hover .card__link-arrow {
  transform: translateX(4px);
}

/* カードグリッドレイアウト */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-32);
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-24);
  }
}
```

## 5. セクションコンポーネント

### 5.1 セクション構造
```html
<section class="section section--yellow">
  <div class="section__container">
    <div class="section__header">
      <h2 class="section__title">私たちの想い</h2>
      <p class="section__subtitle">thought</p>
    </div>
    
    <div class="section__content">
      <!-- セクションコンテンツ -->
    </div>
  </div>
  
  <!-- 波形装飾 -->
  <div class="section__wave section__wave--bottom">
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
      <path d="M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z"></path>
    </svg>
  </div>
</section>
```

### 5.2 スタイル仕様
```css
.section {
  position: relative;
  padding: var(--spacing-80) 0;
  overflow: hidden;
}

.section__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--spacing-20);
}

.section__header {
  text-align: center;
  margin-bottom: var(--spacing-48);
}

.section__title {
  font-family: var(--font-primary);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-brown-600);
  margin-bottom: var(--spacing-8);
  line-height: var(--line-height-tight);
}

.section__subtitle {
  font-family: var(--font-accent);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  color: var(--color-green-500);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wider);
}

/* 背景カラーバリエーション */
.section--white {
  background-color: var(--color-white);
}

.section--yellow {
  background-color: var(--bg-section-yellow-pale);
}

.section--green {
  background-color: var(--bg-section-green-pale);
}

.section--cream {
  background-color: var(--bg-section-cream);
}

.section--blue {
  background-color: var(--bg-section-blue-cool);
}

/* 波形装飾 */
.section__wave {
  position: absolute;
  left: 0;
  width: 100%;
  height: 120px;
  pointer-events: none;
}

.section__wave--top {
  top: -1px;
  transform: rotate(180deg);
}

.section__wave--bottom {
  bottom: -1px;
}

.section__wave svg {
  width: 100%;
  height: 100%;
}

.section__wave path {
  fill: var(--color-white);
}

/* アニメーション */
.section__content > * {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s var(--ease-out-expo) forwards;
}

.section__content > *:nth-child(1) { animation-delay: 0.1s; }
.section__content > *:nth-child(2) { animation-delay: 0.2s; }
.section__content > *:nth-child(3) { animation-delay: 0.3s; }
.section__content > *:nth-child(4) { animation-delay: 0.4s; }
.section__content > *:nth-child(5) { animation-delay: 0.5s; }
```

## 6. フォームコンポーネント

### 6.1 お問い合わせフォーム
```html
<form class="form form--contact">
  <div class="form__group">
    <label for="name" class="form__label">
      お名前
      <span class="form__required">必須</span>
    </label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      class="form__input" 
      required
      placeholder="山田 太郎"
    >
  </div>
  
  <div class="form__group">
    <label for="email" class="form__label">
      メールアドレス
      <span class="form__required">必須</span>
    </label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      class="form__input" 
      required
      placeholder="example@email.com"
    >
  </div>
  
  <div class="form__group">
    <label for="tel" class="form__label">
      電話番号
    </label>
    <input 
      type="tel" 
      id="tel" 
      name="tel" 
      class="form__input"
      placeholder="098-000-0000"
    >
  </div>
  
  <div class="form__group">
    <label for="message" class="form__label">
      お問い合わせ内容
      <span class="form__required">必須</span>
    </label>
    <textarea 
      id="message" 
      name="message" 
      class="form__textarea" 
      rows="6"
      required
      placeholder="お問い合わせ内容をご記入ください"
    ></textarea>
  </div>
  
  <div class="form__actions">
    <button type="submit" class="btn btn--primary btn--large">
      <span class="btn__text">送信する</span>
      <span class="btn__icon">→</span>
    </button>
  </div>
</form>
```

### 6.2 スタイル仕様
```css
.form {
  max-width: 600px;
  margin: 0 auto;
}

.form__group {
  margin-bottom: var(--spacing-24);
}

.form__label {
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-brown-600);
  margin-bottom: var(--spacing-8);
}

.form__required {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2) var(--spacing-6);
  background-color: var(--color-orange-400);
  color: var(--color-white);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  border-radius: var(--border-radius-sm);
}

.form__input,
.form__textarea {
  width: 100%;
  padding: var(--spacing-12) var(--spacing-16);
  background-color: var(--color-white);
  border: 2px solid var(--color-gray-200);
  border-radius: var(--border-radius-md);
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  color: var(--color-brown-600);
  transition: all var(--transition-fast) var(--ease-default);
}

.form__input::placeholder,
.form__textarea::placeholder {
  color: var(--color-gray-400);
}

.form__input:focus,
.form__textarea:focus {
  outline: none;
  border-color: var(--color-green-500);
  box-shadow: 0 0 0 3px rgba(120, 193, 0, 0.1);
}

.form__input:hover,
.form__textarea:hover {
  border-color: var(--color-green-300);
}

.form__textarea {
  resize: vertical;
  min-height: 120px;
  line-height: var(--line-height-relaxed);
}

.form__actions {
  margin-top: var(--spacing-32);
  text-align: center;
}

/* エラー状態 */
.form__group--error .form__input,
.form__group--error .form__textarea {
  border-color: #e74c3c;
}

.form__error {
  display: block;
  margin-top: var(--spacing-4);
  font-size: var(--font-size-sm);
  color: #e74c3c;
}

/* 成功状態 */
.form__success {
  padding: var(--spacing-16);
  background-color: var(--color-green-50);
  border: 2px solid var(--color-green-500);
  border-radius: var(--border-radius-md);
  text-align: center;
  color: var(--color-green-700);
  font-weight: var(--font-weight-medium);
}
```

## 7. フッターコンポーネント

### 7.1 構造詳細
```html
<footer class="footer">
  <div class="footer__main">
    <div class="footer__container">
      <!-- 左側：ロゴとコンタクト -->
      <div class="footer__brand">
        <div class="footer__logo">
          <img src="/logo-white.svg" alt="コツヨシ訪問看護ステーション">
        </div>
        <p class="footer__tagline">心に寄り添い、看る</p>
        <div class="footer__contact">
          <p class="footer__address">
            〒900-0022<br>
            沖縄県那覇市樋川2丁目2番18号
          </p>
          <a href="tel:098-854-5678" class="footer__tel">
            098-854-5678
          </a>
          <p class="footer__hours">
            お電話対応時間/8:30~17:30
          </p>
        </div>
      </div>
      
      <!-- 右側：サイトマップ -->
      <nav class="footer__nav">
        <div class="footer__nav-column">
          <h3 class="footer__nav-title">サービス</h3>
          <ul class="footer__nav-list">
            <li><a href="/service">サービス内容</a></li>
            <li><a href="/service#flow">ご利用までの流れ</a></li>
            <li><a href="/#strengths">コツヨシの特徴</a></li>
          </ul>
        </div>
        
        <div class="footer__nav-column">
          <h3 class="footer__nav-title">企業情報</h3>
          <ul class="footer__nav-list">
            <li><a href="/company">運営会社</a></li>
            <li><a href="/recruit">採用情報</a></li>
            <li><a href="/news">お知らせ</a></li>
          </ul>
        </div>
        
        <div class="footer__nav-column">
          <h3 class="footer__nav-title">その他</h3>
          <ul class="footer__nav-list">
            <li><a href="/contact">お問い合わせ</a></li>
            <li><a href="/privacy">プライバシーポリシー</a></li>
            <li><a href="/sitemap">サイトマップ</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  
  <div class="footer__bottom">
    <div class="footer__container">
      <p class="footer__copyright">
        Copyright © 2023 kotuyosi home nursing station All Rights Reserved.
      </p>
    </div>
  </div>
  
  <!-- フローティングボタン -->
  <div class="footer__floating">
    <a href="/contact" class="floating-btn floating-btn--contact">
      お問い合わせ
    </a>
    <a href="/bosihoukan" class="floating-btn floating-btn--special">
      <span>訪問看護</span>
      <span>小児・母子特化型</span>
    </a>
  </div>
</footer>
```

### 7.2 スタイル仕様
```css
.footer {
  background-color: var(--color-brown-600);
  color: var(--color-white);
  position: relative;
  margin-top: var(--spacing-80);
}

.footer__main {
  padding: var(--spacing-64) 0 var(--spacing-48);
}

.footer__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--spacing-20);
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-64);
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
}

.footer__logo img {
  height: 60px;
  width: auto;
}

.footer__tagline {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-green-200);
}

.footer__contact {
  margin-top: var(--spacing-24);
}

.footer__address {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-12);
}

.footer__tel {
  display: inline-block;
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-orange-300);
  text-decoration: none;
  margin-bottom: var(--spacing-8);
  transition: color var(--transition-fast) var(--ease-default);
}

.footer__tel:hover {
  color: var(--color-orange-400);
}

.footer__hours {
  font-size: var(--font-size-sm);
  color: var(--color-gray-300);
}

.footer__nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-40);
}

.footer__nav-title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  color: var(--color-green-200);
  margin-bottom: var(--spacing-16);
  padding-bottom: var(--spacing-8);
  border-bottom: 2px solid var(--color-brown-400);
}

.footer__nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__nav-list li {
  margin-bottom: var(--spacing-12);
}

.footer__nav-list a {
  color: var(--color-white);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: color var(--transition-fast) var(--ease-default);
  position: relative;
  padding-left: var(--spacing-16);
}

.footer__nav-list a::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: var(--color-green-300);
  transition: transform var(--transition-fast) var(--ease-out-cubic);
}

.footer__nav-list a:hover {
  color: var(--color-green-200);
}

.footer__nav-list a:hover::before {
  transform: translateX(4px);
}

.footer__bottom {
  background-color: var(--color-brown-800);
  padding: var(--spacing-20) 0;
  text-align: center;
}

.footer__copyright {
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
}

/* フローティングボタン */
.footer__floating {
  position: fixed;
  bottom: var(--spacing-20);
  right: var(--spacing-20);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
  z-index: var(--z-index-fixed);
}

.floating-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-12) var(--spacing-20);
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal) var(--ease-out-cubic);
}

.floating-btn--contact {
  background-color: var(--color-orange-400);
  color: var(--color-white);
}

.floating-btn--contact:hover {
  background-color: var(--color-orange-500);
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.floating-btn--special {
  background-color: var(--color-green-500);
  color: var(--color-white);
}

.floating-btn--special:hover {
  background-color: var(--color-green-600);
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .footer__container {
    grid-template-columns: 1fr;
    gap: var(--spacing-40);
  }
  
  .footer__nav {
    grid-template-columns: 1fr;
    gap: var(--spacing-24);
  }
  
  .footer__floating {
    bottom: var(--spacing-12);
    right: var(--spacing-12);
  }
  
  .floating-btn {
    padding: var(--spacing-8) var(--spacing-16);
    font-size: var(--font-size-xs);
  }
}
```

## 8. モーダル・オーバーレイ

### 8.1 モーダル構造
```html
<div class="modal" id="modal-contact" aria-hidden="true">
  <div class="modal__overlay" data-modal-close></div>
  <div class="modal__content">
    <button class="modal__close" data-modal-close aria-label="閉じる">
      <svg width="24" height="24">
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2"/>
      </svg>
    </button>
    
    <div class="modal__header">
      <h2 class="modal__title">お問い合わせ</h2>
    </div>
    
    <div class="modal__body">
      <!-- モーダルコンテンツ -->
    </div>
    
    <div class="modal__footer">
      <button class="btn btn--secondary" data-modal-close>
        キャンセル
      </button>
      <button class="btn btn--primary">
        送信する
      </button>
    </div>
  </div>
</div>
```

### 8.2 スタイル仕様
```css
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-index-modal);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-normal) var(--ease-default);
}

.modal[aria-hidden="false"] {
  opacity: 1;
  visibility: visible;
}

.modal__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal__content {
  position: relative;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  background-color: var(--color-white);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-2xl);
  overflow: auto;
  transform: scale(0.9);
  transition: transform var(--transition-normal) var(--ease-out-expo);
}

.modal[aria-hidden="false"] .modal__content {
  transform: scale(1);
}

.modal__close {
  position: absolute;
  top: var(--spacing-16);
  right: var(--spacing-16);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  border-radius: var(--border-radius-circle);
  color: var(--color-gray-600);
  cursor: pointer;
  transition: all var(--transition-fast) var(--ease-default);
}

.modal__close:hover {
  background-color: var(--color-gray-100);
  color: var(--color-brown-600);
}

.modal__header {
  padding: var(--spacing-32) var(--spacing-32) var(--spacing-16);
  border-bottom: 1px solid var(--color-gray-100);
}

.modal__title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-brown-600);
}

.modal__body {
  padding: var(--spacing-32);
}

.modal__footer {
  padding: var(--spacing-16) var(--spacing-32) var(--spacing-32);
  display: flex;
  gap: var(--spacing-16);
  justify-content: flex-end;
}
```

## まとめ

これらのコンポーネント仕様は、コツヨシ訪問看護ステーションのデザインシステムを完全に再現するための詳細な設計書です。各コンポーネントは：

1. **一貫性**: デザイントークンを使用して統一感を保つ
2. **再利用性**: モジュラー設計で様々な場面で使い回し可能
3. **アクセシビリティ**: ARIA属性、キーボード操作対応
4. **レスポンシブ**: モバイルファーストで全デバイス対応
5. **パフォーマンス**: 最適化されたアニメーションとトランジション

すべてのコンポーネントは、温かみと親しみやすさを表現しながら、医療サービスとしての信頼性を保つよう設計されています。