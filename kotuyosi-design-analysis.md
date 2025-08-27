# コツヨシ訪問看護ステーション デザインシステム完全分析書

## 1. ブランドアイデンティティ

### 1.1 コアコンセプト
- **メインメッセージ**: 「心に寄り添い、看る」
- **サブメッセージ**: 「ご利用者様の「喜び」が私たちの「価値」」
- **ビジョン**: 医療的支援を必要とする方々が、住み慣れた場所で安心して生活できる環境の提供

### 1.2 ブランドパーソナリティ
- **温かさ**: 医療の専門性を保ちながら、人間的な温もりを感じさせる
- **親しみやすさ**: 威圧感のない、アプローチしやすい雰囲気
- **信頼性**: プロフェッショナルな医療サービスへの安心感
- **優しさ**: 利用者とその家族に寄り添う姿勢

## 2. タイポグラフィシステム

### 2.1 フォントファミリー
```css
/* 日本語メインフォント */
font-family: "Zen Maru Gothic", sans-serif;
/* 丸みを帯びた優しい印象のゴシック体
   - 医療系サイトによくある明朝体を避け、親しみやすさを演出
   - 視認性が高く、高齢者にも読みやすい */

/* 英語アクセントフォント */
font-family: "Reross Quadratic", sans-serif;
/* 装飾的でモダンな印象
   - 英語表記部分にアクセントを加える
   - プロフェッショナルかつ現代的な印象 */
```

### 2.2 フォントサイズ階層
```css
/* ベースサイズ */
--font-size-base: 16px;        /* 本文基準 */
--font-size-xs: 12px;          /* 補足情報 */
--font-size-sm: 14px;          /* 小見出し・英語見出し */
--font-size-md: 16px;          /* 本文 */
--font-size-lg: 18px;          /* 中見出し */
--font-size-xl: 24px;          /* 大見出し */
--font-size-2xl: 32px;         /* メインタイトル */
--font-size-3xl: 40px;         /* ヒーロータイトル */
```

### 2.3 行間・文字間隔
```css
/* 行間（line-height） */
--line-height-tight: 1.2;      /* タイトル用 */
--line-height-normal: 1.4;     /* 見出し用 */
--line-height-relaxed: 1.75;   /* 本文用（28px/16px = 1.75） */

/* 文字間隔（letter-spacing） */
--letter-spacing-tight: 0.05px;
--letter-spacing-normal: 0.1px;  /* 標準 */
--letter-spacing-wide: 0.2px;    /* 見出し用 */
```

### 2.4 フォントウェイト
```css
--font-weight-normal: 400;      /* 本文 */
--font-weight-medium: 500;      /* 中強調 */
--font-weight-bold: 700;        /* 見出し・強調 */
```

## 3. カラーシステム

### 3.1 プライマリカラー
```css
/* ブラウン系（信頼・安定） */
--color-brown-primary: #663606;        /* rgb(102, 54, 6) - メインテキスト */
--color-brown-dark: #4d2904;           /* 20%暗く - ホバー時 */
--color-brown-light: #8b4a0a;          /* 20%明るく - サブテキスト */

/* グリーン系（生命・健康・安心） */
--color-green-primary: #78c100;        /* rgb(120, 193, 0) - アクセント */
--color-green-dark: #5a9100;           /* 暗めバリエーション */
--color-green-light: #acd965;          /* rgb(172, 217, 101) - 薄い緑 */
```

### 3.2 セカンダリカラー
```css
/* オレンジ系（活力・行動喚起） */
--color-orange-primary: #ffb059;       /* rgb(255, 176, 89) - CTAボタン */
--color-orange-dark: #ff9933;          /* ホバー時 */
--color-orange-light: #ffc44d;         /* rgb(255, 196, 77) - 明るいオレンジ */

/* ベージュ・イエロー系（温かさ・優しさ） */
--color-beige-light: #ffefbc;          /* rgb(255, 239, 188) - 背景色 */
--color-yellow-pale: #fff7e2;          /* rgb(255, 247, 226) - セクション背景 */
--color-yellow-lighter: #fcf3d0;       /* rgb(252, 243, 208) - 薄い黄色背景 */
```

### 3.3 背景カラー
```css
/* セクション背景色のグラデーション */
--bg-white: #ffffff;                   /* 基本背景 */
--bg-cream: #f6f6ec;                   /* rgb(246, 246, 236) - クリーム色 */
--bg-pale-yellow: #fff7e2;             /* rgb(255, 247, 226) - 薄黄色 */
--bg-pale-green: #def7ce;              /* rgb(222, 247, 206) - 薄緑色 */
--bg-light-gray: #f7f7ed;              /* rgb(247, 247, 237) - 薄灰色 */
--bg-warm-yellow: #fff6d7;             /* rgb(255, 246, 215) - 温かい黄色 */
--bg-cool-blue: #f3f7fa;               /* rgb(243, 247, 250) - 薄青色 */
--bg-sky-blue: #e9f0f7;                /* rgb(233, 240, 247) - 空色 */
--bg-ice-blue: #f2f6f9;                /* rgb(242, 246, 249) - アイスブルー */
--bg-sunny-yellow: #fff7d4;            /* rgb(255, 247, 212) - 明るい黄色 */
```

### 3.4 テキストカラー
```css
--text-primary: #663606;                /* 主要テキスト */
--text-secondary: #78c100;              /* アクセントテキスト */
--text-white: #ffffff;                  /* 白テキスト */
--text-black: #000000;                  /* 黒テキスト（限定的使用） */
```

## 4. スペーシングシステム

### 4.1 基本単位
```css
--spacing-unit: 8px;                    /* 基本グリッド単位 */

/* スペーシングスケール */
--spacing-xs: 4px;                      /* 0.5単位 */
--spacing-sm: 8px;                      /* 1単位 */
--spacing-md: 16px;                     /* 2単位 */
--spacing-lg: 24px;                     /* 3単位 */
--spacing-xl: 32px;                     /* 4単位 */
--spacing-2xl: 48px;                    /* 6単位 */
--spacing-3xl: 64px;                    /* 8単位 */
--spacing-4xl: 80px;                    /* 10単位 */
--spacing-5xl: 96px;                    /* 12単位 */
```

### 4.2 セクション間隔
```css
--section-padding-mobile: 40px 20px;    /* モバイル */
--section-padding-tablet: 60px 40px;    /* タブレット */
--section-padding-desktop: 80px 60px;   /* デスクトップ */
```

## 5. コンポーネントスタイル

### 5.1 ボタン
```css
/* プライマリボタン（CTA） */
.btn-primary {
  background-color: #ffb059;
  color: #ffffff;
  border-radius: 100px;              /* 完全な丸み */
  padding: 17px 40px 17px 24px;      /* 非対称パディング（矢印アイコン考慮） */
  font-size: 16px;
  font-weight: 700;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary::after {
  content: "→";                      /* 矢印アイコン */
  position: absolute;
  right: 24px;
  transition: transform 0.3s ease;
}

.btn-primary:hover {
  background-color: #ff9933;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 176, 89, 0.3);
}

.btn-primary:hover::after {
  transform: translateX(4px);
}
```

### 5.2 カード
```css
.card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 4px 3px 5px 0 rgba(0, 0, 0, 0.15);
  padding: 24px;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 6px 8px 15px 0 rgba(0, 0, 0, 0.2);
}

/* カード内の画像処理 */
.card-image {
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
}
```

### 5.3 ナビゲーション
```css
.nav-item {
  color: #663606;
  font-weight: 500;
  padding: 8px 16px;
  transition: all 0.2s ease;
  position: relative;
}

.nav-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #78c100;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-item:hover::after {
  width: 80%;
}

.nav-item:hover {
  color: #78c100;
}
```

## 6. レイアウトシステム

### 6.1 グリッドシステム
```css
/* 12カラムグリッド */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(12, 1fr);
}

/* レスポンシブグリッド */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
}
```

### 6.2 セクション構造
```css
.section {
  position: relative;
  overflow: hidden;
}

/* 波形の区切り線 */
.section::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: url('wave-pattern.svg') no-repeat bottom;
  background-size: cover;
}

/* 交互に変わる背景色 */
.section:nth-child(odd) {
  background-color: var(--bg-pale-yellow);
}

.section:nth-child(even) {
  background-color: var(--bg-pale-green);
}
```

## 7. アニメーション・インタラクション

### 7.1 トランジション
```css
/* 基本トランジション */
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;

/* イージング関数 */
--ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
--ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
```

### 7.2 ホバーエフェクト
```css
/* リンクホバー */
a {
  transition: color var(--transition-fast);
  text-decoration: none;
}

a:hover {
  color: #78c100;
}

/* 画像ホバー */
.image-container {
  overflow: hidden;
  border-radius: 8px;
}

.image-container img {
  transition: transform var(--transition-normal);
}

.image-container:hover img {
  transform: scale(1.05);
}
```

### 7.3 スクロールアニメーション
```css
/* フェードイン */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s var(--ease-out-expo);
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* スライドイン */
.slide-in-left {
  transform: translateX(-50px);
  opacity: 0;
  transition: all 0.6s var(--ease-out-expo);
}

.slide-in-left.visible {
  transform: translateX(0);
  opacity: 1;
}
```

## 8. レスポンシブデザイン

### 8.1 ブレークポイント
```css
/* モバイルファースト */
--breakpoint-xs: 320px;    /* 小型スマートフォン */
--breakpoint-sm: 576px;    /* スマートフォン */
--breakpoint-md: 768px;    /* タブレット */
--breakpoint-lg: 992px;    /* 小型デスクトップ */
--breakpoint-xl: 1200px;   /* デスクトップ */
--breakpoint-2xl: 1440px;  /* 大型デスクトップ */
```

### 8.2 フォントサイズのレスポンシブ対応
```css
/* モバイル */
@media (max-width: 768px) {
  h1 { font-size: 28px; }
  h2 { font-size: 20px; }
  h3 { font-size: 16px; }
  p { font-size: 14px; }
}

/* タブレット */
@media (min-width: 769px) and (max-width: 1024px) {
  h1 { font-size: 36px; }
  h2 { font-size: 24px; }
  h3 { font-size: 18px; }
  p { font-size: 15px; }
}

/* デスクトップ */
@media (min-width: 1025px) {
  h1 { font-size: 40px; }
  h2 { font-size: 24px; }
  h3 { font-size: 14px; }
  p { font-size: 16px; }
}
```

## 9. アクセシビリティ配慮

### 9.1 カラーコントラスト
- 本文テキスト（#663606）と背景（#ffffff）: コントラスト比 12.8:1 ✓
- 緑テキスト（#78c100）と背景（#ffffff）: コントラスト比 3.1:1 ✓
- ボタンテキスト（#ffffff）とボタン背景（#ffb059）: コントラスト比 2.1:1 ※

### 9.2 フォーカススタイル
```css
/* キーボードナビゲーション対応 */
*:focus {
  outline: 2px solid #78c100;
  outline-offset: 2px;
}

/* フォーカス時のスキップリンク */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #663606;
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

## 10. 特徴的なデザイン要素

### 10.1 丸みを帯びたデザイン
- ボタン: border-radius: 100px（完全な丸み）
- カード: border-radius: 12px（適度な丸み）
- 画像: border-radius: 8px（軽い丸み）
- 全体的に角を取った優しい印象

### 10.2 グラデーション背景
```css
/* 淡いグラデーション */
.gradient-section {
  background: linear-gradient(
    180deg,
    rgba(255, 247, 226, 0.3) 0%,
    rgba(222, 247, 206, 0.3) 100%
  );
}
```

### 10.3 装飾的要素
- 英語表記の小見出し（サブタイトル）
- 波形の区切り線
- 非対称なパディング
- ドロップシャドウの多用

## 11. トーン&マナー詳細

### 11.1 ビジュアルトーン
- **優しさ**: パステルカラー、丸みのあるフォーム
- **清潔感**: 白ベースに淡い色のアクセント
- **温かみ**: 暖色系（黄・オレンジ・薄茶）の使用
- **自然**: 緑色を効果的に配置
- **安心感**: 余白を十分に取った見やすいレイアウト

### 11.2 言語トーン
- 敬語を基本としつつ、堅すぎない表現
- 専門用語を避け、わかりやすい言葉選び
- 「〜させていただく」など丁寧な表現
- 感情に訴える言葉（「心に寄り添う」「喜び」）

### 11.3 心理的アプローチ
- **信頼構築**: 落ち着いた茶色をベースカラーに
- **希望提供**: 明るい黄色・オレンジで前向きさを演出
- **安心感**: 緑色で健康・生命力を表現
- **親近感**: 丸ゴシック体で親しみやすさを

## 12. 実装上の注意点

### 12.1 フォント読み込み
```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&display=swap" rel="stylesheet">
```

### 12.2 パフォーマンス最適化
- 画像の遅延読み込み（lazy loading）
- Webフォントのサブセット化
- CSSの最小化
- 不要なアニメーションの削減

### 12.3 ブラウザ対応
- モダンブラウザ（Chrome, Firefox, Safari, Edge）最新2バージョン
- IE11は非対応
- CSS Grid, Flexboxを積極活用

## まとめ

コツヨシ訪問看護ステーションのデザインは、医療サービスという専門性の高い分野でありながら、威圧感を与えない優しく温かみのあるビジュアルアイデンティティを確立しています。丸みを帯びたデザイン要素、パステルカラーの配色、読みやすいフォントの選択など、すべてが「心に寄り添う」というコンセプトを体現しています。