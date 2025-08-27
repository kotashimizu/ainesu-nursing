# React版 訪問看護ステーション プレビュー手順

## 🚀 クイックスタート（最も簡単な方法）

### 方法1: Create React App を使う場合

```bash
# 1. 新しいReactプロジェクトを作成
npx create-react-app nursing-station-react --template typescript
cd nursing-station-react

# 2. 必要なパッケージをインストール
npm install styled-components react-router-dom
npm install --save-dev @types/styled-components

# 3. 開発サーバーを起動
npm start
```

**ブラウザが自動的に開いて http://localhost:3000 でプレビューが表示されます**

### 方法2: Vite を使う場合（推奨・高速）

```bash
# 1. Viteでプロジェクトを作成
npm create vite@latest nursing-station-react -- --template react-ts
cd nursing-station-react

# 2. 依存関係をインストール
npm install

# 3. 追加パッケージをインストール
npm install styled-components react-router-dom
npm install --save-dev @types/styled-components

# 4. 開発サーバーを起動
npm run dev
```

**ブラウザで http://localhost:5173 を開いてプレビュー**

---

## 📦 既存のHTMLからReactへの移行手順

### STEP 1: プロジェクトセットアップ

```bash
# プロジェクトフォルダに移動
cd /Users/kota5656/projects/nursinghome_hp

# Reactプロジェクトを作成
npx create-react-app . --template typescript
# または既存ファイルがある場合は新しいフォルダに
npx create-react-app nursing-react --template typescript
cd nursing-react
```

### STEP 2: package.json を設定

```json
{
  "name": "nursing-station-react",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "styled-components": "^6.1.0",
    "web-vitals": "^3.5.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

### STEP 3: 基本的なApp.tsxを作成

```typescript
// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Service } from './pages/Service';
import { Flow } from './pages/Flow';
import { Company } from './pages/Company';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/flow" element={<Flow />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
```

### STEP 4: グローバルスタイルを設定

```typescript
// src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: "Zen Maru Gothic", "ヒラギノ丸ゴ ProN", sans-serif;
    color: #663606;
    background-color: #ffffff;
    line-height: 1.75;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul, ol {
    list-style: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }
`;
```

### STEP 5: テーマファイルを作成

```typescript
// src/styles/theme.ts
export const theme = {
  colors: {
    brown: '#663606',
    green: '#78c100',
    orange: '#ffb059',
    white: '#ffffff',
    yellowPale: '#fff7e2',
    greenPale: '#def7ce',
  },
  fonts: {
    primary: '"Zen Maru Gothic", sans-serif',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '100px',
  },
};
```

### STEP 6: 簡単なホームページコンポーネント

```typescript
// src/pages/Home/index.tsx
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const Hero = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fff7e2 0%, #def7ce 100%);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.colors.brown};
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  color: ${props => props.theme.colors.brown};
  margin-bottom: 32px;
`;

const CTAButton = styled.button`
  background-color: ${props => props.theme.colors.orange};
  color: white;
  padding: 16px 48px;
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 176, 89, 0.3);
  }
`;

export const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Hero>
        <div>
          <Title>心に寄り添い、看る</Title>
          <Subtitle>24時間365日、あなたの在宅生活を支援します</Subtitle>
          <CTAButton>お問い合わせ</CTAButton>
        </div>
      </Hero>
    </HomeContainer>
  );
};
```

---

## 🖥️ プレビューの確認方法

### 1. ターミナルでの起動

```bash
# プロジェクトフォルダで
npm start
# または
npm run dev  # Viteの場合
```

### 2. ブラウザでの確認

- **Create React App**: http://localhost:3000
- **Vite**: http://localhost:5173

### 3. 自動リロード
- ファイルを保存すると自動的にブラウザがリロードされます
- Hot Module Replacement (HMR) により、状態を保持したまま更新

---

## 🛠️ トラブルシューティング

### エラー: ポートが使用中
```bash
# 別のポートを指定
PORT=3001 npm start
```

### エラー: node_modules が見つからない
```bash
# 依存関係を再インストール
rm -rf node_modules package-lock.json
npm install
```

### エラー: TypeScriptエラー
```bash
# 型定義をインストール
npm install --save-dev @types/react @types/react-dom @types/node
```

---

## 📱 デバイスプレビュー

### 同じネットワーク内の他デバイスから確認

1. 自分のIPアドレスを確認
```bash
# Macの場合
ifconfig | grep inet
```

2. 開発サーバーを起動
```bash
npm start
```

3. 他のデバイスのブラウザで開く
```
http://[あなたのIPアドレス]:3000
```

### Chrome DevToolsでモバイル表示
1. Chrome でプレビューを開く
2. F12 または右クリック→「検証」
3. デバイスツールバーをクリック（Ctrl+Shift+M）
4. デバイスを選択（iPhone、iPad等）

---

## 🚢 本番環境へのデプロイ

### ビルド
```bash
npm run build
# buildフォルダが作成される
```

### プレビュー（ビルド後）
```bash
# serve パッケージをインストール
npm install -g serve

# ビルドしたファイルをプレビュー
serve -s build
```

### デプロイ先の例
- **Vercel**: `vercel`
- **Netlify**: ドラッグ&ドロップ
- **GitHub Pages**: `npm run deploy`

---

## 📝 VSCode拡張機能（推奨）

開発効率を上げる拡張機能：
- **ES7+ React/Redux/React-Native snippets**
- **Styled Components**
- **Auto Rename Tag**
- **Prettier**
- **ESLint**

これらをインストールすると、開発体験が大幅に向上します。