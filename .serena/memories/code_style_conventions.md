# コードスタイルと規約

## HTML
- **セマンティックHTML5**: header, main, section, nav等を使用
- **アクセシビリティ**: alt属性、aria-label、role属性を適切に使用
- **BEM記法**: クラス名は`block__element--modifier`形式

## CSS
- **BEMメソドロジー**: コンポーネント指向のCSS設計
- **CSS変数**: デザイントークンを`:root`で定義
- **命名規則**:
  - ブロック: `.header`, `.section`, `.footer`
  - エレメント: `.header__logo`, `.section__title`
  - モディファイア: `.btn--primary`, `.section--yellow`

## JavaScript
- **ES6+**: アロー関数、const/let使用
- **イベントリスナー**: DOMContentLoaded後に設定
- **関数型プログラミング**: 副作用を最小限に

## ファイル命名
- **HTML**: kebab-case（例: company.html）
- **CSS/JS**: kebab-case（例: style.css, main.js）

## コメント
- 日本語でのコメント記載
- セクション区切りには装飾的コメントを使用