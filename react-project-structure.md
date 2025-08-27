# React版 訪問看護ステーション プロジェクト構成

## 📁 ディレクトリ構造

```
nursing-station-react/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── index.tsx                      # エントリーポイント
│   ├── App.tsx                        # メインアプリケーション
│   ├── setupTests.ts
│   │
│   ├── assets/                        # 静的アセット
│   │   ├── images/
│   │   │   ├── hero/
│   │   │   ├── services/
│   │   │   ├── staff/
│   │   │   └── icons/
│   │   └── fonts/
│   │
│   ├── components/                    # 再利用可能なコンポーネント
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.styles.ts
│   │   │   │   ├── Button.types.ts
│   │   │   │   ├── Button.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Card/
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Card.styles.ts
│   │   │   │   └── index.ts
│   │   │   ├── Modal/
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Modal.styles.ts
│   │   │   │   └── index.ts
│   │   │   ├── Loading/
│   │   │   │   ├── Loading.tsx
│   │   │   │   └── index.ts
│   │   │   └── Icon/
│   │   │       ├── Icon.tsx
│   │   │       └── index.ts
│   │   │
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Header.styles.ts
│   │   │   │   ├── MobileMenu.tsx
│   │   │   │   ├── Navigation.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Footer.styles.ts
│   │   │   │   ├── FooterNav.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Layout/
│   │   │   │   ├── Layout.tsx
│   │   │   │   ├── Layout.styles.ts
│   │   │   │   └── index.ts
│   │   │   └── Section/
│   │   │       ├── Section.tsx
│   │   │       ├── Section.styles.ts
│   │   │       ├── WaveDecoration.tsx
│   │   │       └── index.ts
│   │   │
│   │   └── features/
│   │       ├── Hero/
│   │       │   ├── Hero.tsx
│   │       │   ├── Hero.styles.ts
│   │       │   ├── HeroContent.tsx
│   │       │   ├── HeroCTA.tsx
│   │       │   └── index.ts
│   │       ├── Services/
│   │       │   ├── ServiceList.tsx
│   │       │   ├── ServiceCard.tsx
│   │       │   ├── ServiceDetail.tsx
│   │       │   ├── Services.styles.ts
│   │       │   └── index.ts
│   │       ├── Flow/
│   │       │   ├── FlowSteps.tsx
│   │       │   ├── FlowStep.tsx
│   │       │   ├── Flow.styles.ts
│   │       │   └── index.ts
│   │       ├── Pricing/
│   │       │   ├── PricingTable.tsx
│   │       │   ├── InsuranceCard.tsx
│   │       │   ├── Pricing.styles.ts
│   │       │   └── index.ts
│   │       ├── Contact/
│   │       │   ├── ContactForm.tsx
│   │       │   ├── ContactInfo.tsx
│   │       │   ├── FormValidation.tsx
│   │       │   ├── Contact.styles.ts
│   │       │   └── index.ts
│   │       ├── News/
│   │       │   ├── NewsList.tsx
│   │       │   ├── NewsItem.tsx
│   │       │   ├── News.styles.ts
│   │       │   └── index.ts
│   │       └── FloatingButtons/
│   │           ├── FloatingButtons.tsx
│   │           ├── ScrollToTop.tsx
│   │           └── index.ts
│   │
│   ├── pages/                         # ページコンポーネント
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   ├── Home.styles.ts
│   │   │   └── index.ts
│   │   ├── Service/
│   │   │   ├── Service.tsx
│   │   │   ├── Service.styles.ts
│   │   │   └── index.ts
│   │   ├── Flow/
│   │   │   ├── Flow.tsx
│   │   │   ├── Flow.styles.ts
│   │   │   └── index.ts
│   │   ├── Company/
│   │   │   ├── Company.tsx
│   │   │   ├── Company.styles.ts
│   │   │   └── index.ts
│   │   └── NotFound/
│   │       ├── NotFound.tsx
│   │       └── index.ts
│   │
│   ├── hooks/                         # カスタムフック
│   │   ├── useScrollAnimation.ts
│   │   ├── useIntersectionObserver.ts
│   │   ├── useWindowSize.ts
│   │   ├── useScrollPosition.ts
│   │   ├── useForm.ts
│   │   └── useLocalStorage.ts
│   │
│   ├── styles/                        # グローバルスタイル・テーマ
│   │   ├── GlobalStyle.ts
│   │   ├── theme/
│   │   │   ├── index.ts
│   │   │   ├── colors.ts
│   │   │   ├── typography.ts
│   │   │   ├── spacing.ts
│   │   │   ├── breakpoints.ts
│   │   │   ├── shadows.ts
│   │   │   └── animations.ts
│   │   ├── mixins/
│   │   │   ├── index.ts
│   │   │   ├── flexbox.ts
│   │   │   ├── responsive.ts
│   │   │   └── transitions.ts
│   │   └── styled.d.ts               # TypeScript用型定義
│   │
│   ├── utils/                         # ユーティリティ関数
│   │   ├── constants.ts
│   │   ├── helpers.ts
│   │   ├── validators.ts
│   │   ├── formatters.ts
│   │   └── seo.ts
│   │
│   ├── services/                      # API・外部サービス
│   │   ├── api/
│   │   │   ├── client.ts
│   │   │   ├── endpoints.ts
│   │   │   └── types.ts
│   │   ├── contact.service.ts
│   │   └── analytics.service.ts
│   │
│   ├── context/                       # React Context
│   │   ├── ThemeContext.tsx
│   │   ├── AppContext.tsx
│   │   └── ModalContext.tsx
│   │
│   ├── types/                         # TypeScript型定義
│   │   ├── index.ts
│   │   ├── common.types.ts
│   │   ├── service.types.ts
│   │   ├── company.types.ts
│   │   └── api.types.ts
│   │
│   └── data/                          # 静的データ
│       ├── services.json
│       ├── faq.json
│       ├── company.json
│       └── navigation.json
│
├── .env                               # 環境変数
├── .env.example
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── tsconfig.json
├── package.json
├── package-lock.json
└── README.md
```

## 📦 package.json

```json
{
  "name": "nursing-station-react",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "styled-components": "^6.1.0",
    "framer-motion": "^10.16.0",
    "react-hook-form": "^7.48.0",
    "react-intersection-observer": "^9.5.0",
    "react-helmet-async": "^2.0.0",
    "axios": "^1.6.0",
    "@emotion/react": "^11.11.0",
    "@emotion/styled": "^11.11.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@types/node": "^20.10.0",
    "@types/styled-components": "^5.1.0",
    "@typescript-eslint/eslint-plugin": "^6.13.0",
    "@typescript-eslint/parser": "^6.13.0",
    "@testing-library/react": "^14.1.0",
    "@testing-library/jest-dom": "^6.1.0",
    "@testing-library/user-event": "^14.5.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.2.0",
    "eslint": "^8.55.0",
    "eslint-plugin-react": "^7.33.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "prettier": "^3.1.0",
    "husky": "^8.0.0",
    "lint-staged": "^15.2.0"
  },
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:coverage": "vitest --coverage",
    "lint": "eslint . --ext .ts,.tsx",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit"
  }
}
```

## 🎨 テーマ設定ファイル例

### src/styles/theme/index.ts
```typescript
export const theme = {
  colors: {
    primary: {
      brown: '#663606',
      green: '#78c100',
      orange: '#ffb059',
    },
    neutral: {
      white: '#ffffff',
      black: '#000000',
      gray: {
        50: '#f6f6ec',
        100: '#e6e6e6',
        200: '#cccccc',
        300: '#b3b3b3',
        400: '#999999',
        600: '#666666',
      },
    },
    background: {
      yellow: '#fff7e2',
      green: '#def7ce',
      cream: '#f6f6ec',
    },
  },
  typography: {
    fontFamily: {
      primary: '"Zen Maru Gothic", "ヒラギノ丸ゴ ProN", sans-serif',
      accent: '"Roboto", "Arial", sans-serif',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '36px',
      '6xl': '40px',
      '7xl': '48px',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      snug: 1.35,
      normal: 1.4,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '80px',
    '5xl': '96px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    full: '100px',
    circle: '50%',
  },
  shadows: {
    sm: '0 2px 4px 0 rgba(0, 0, 0, 0.08)',
    md: '4px 3px 5px 0 rgba(0, 0, 0, 0.15)',
    lg: '6px 8px 15px 0 rgba(0, 0, 0, 0.2)',
    xl: '0 10px 25px 0 rgba(0, 0, 0, 0.25)',
    orange: '0 8px 20px rgba(255, 176, 89, 0.3)',
    green: '0 8px 20px rgba(120, 193, 0, 0.2)',
  },
  transitions: {
    fast: '200ms ease',
    normal: '300ms ease',
    slow: '500ms ease',
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1440px',
  },
  container: {
    maxWidth: '1200px',
  },
  zIndex: {
    dropdown: 100,
    sticky: 200,
    fixed: 300,
    modal: 500,
    tooltip: 600,
  },
};

export type Theme = typeof theme;
```

## 🧩 コンポーネント例

### src/components/common/Button/Button.tsx
```typescript
import React from 'react';
import { StyledButton, ButtonIcon } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  onClick,
  disabled = false,
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
      {icon && <ButtonIcon>{icon}</ButtonIcon>}
    </StyledButton>
  );
};
```

### src/components/common/Button/Button.styles.ts
```typescript
import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary.orange};
    color: ${({ theme }) => theme.colors.neutral.white};
    
    &:hover:not(:disabled) {
      background-color: #ff9933;
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.orange};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.neutral.white};
    color: ${({ theme }) => theme.colors.primary.brown};
    border: 2px solid ${({ theme }) => theme.colors.primary.brown};
    
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primary.brown};
      color: ${({ theme }) => theme.colors.neutral.white};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary.green};
    border: 2px solid ${({ theme }) => theme.colors.primary.green};
    
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primary.green};
      color: ${({ theme }) => theme.colors.neutral.white};
    }
  `,
};

const sizeStyles = {
  small: css`
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  `,
  medium: css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  `,
  large: css`
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  position: relative;
  overflow: hidden;
  
  ${({ variant = 'primary' }) => variantStyles[variant]}
  ${({ size = 'medium' }) => sizeStyles[size]}
  
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  transition: transform ${({ theme }) => theme.transitions.normal};
  
  ${StyledButton}:hover &:not(:disabled) {
    transform: translateX(4px);
  }
`;
```

### src/components/common/Button/Button.types.ts
```typescript
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}
```

## 📱 レスポンシブ対応ミックスイン

### src/styles/mixins/responsive.ts
```typescript
import { css } from 'styled-components';

export const media = {
  xs: (styles: TemplateStringsArray | string) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
      ${styles}
    }
  `,
  sm: (styles: TemplateStringsArray | string) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      ${styles}
    }
  `,
  md: (styles: TemplateStringsArray | string) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      ${styles}
    }
  `,
  lg: (styles: TemplateStringsArray | string) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      ${styles}
    }
  `,
  xl: (styles: TemplateStringsArray | string) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
      ${styles}
    }
  `,
};
```

## 🚀 主な特徴

1. **TypeScript完全対応** - 型安全な開発
2. **Styled Components** - CSS-in-JSでのスタイリング
3. **コンポーネント駆動開発** - 再利用可能な設計
4. **テーマシステム** - 一貫したデザイントークン
5. **パフォーマンス最適化** - Code Splitting, Lazy Loading
6. **テスト環境** - Jest + React Testing Library
7. **アクセシビリティ** - ARIA属性、キーボード操作対応
8. **SEO対応** - React Helmet Async
9. **フォーム管理** - React Hook Form
10. **アニメーション** - Framer Motion

## 🔧 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# テスト実行
npm run test

# リント
npm run lint

# フォーマット
npm run format

# 型チェック
npm run type-check
```

この構成により、保守性が高く、スケーラブルなReactアプリケーションが構築できます。