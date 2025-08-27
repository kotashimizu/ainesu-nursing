# プロジェクト構造

```
nursinghome_hp/
├── index.html          # トップページ
├── service.html        # サービス内容ページ
├── flow.html          # ご利用の流れページ  
├── company.html       # 会社概要ページ
├── css/
│   └── style.css      # 統合スタイルシート（全ページ共通）
├── js/
│   └── main.js        # JavaScriptファイル（全ページ共通）
├── images/            # 画像ファイル格納
│   └── .gitkeep       # 空ディレクトリ保持用
├── doc/               # ドキュメント類
├── data/              # データファイル
├── .serena/           # Serena MCP設定
├── .gitignore         # Git除外設定
└── README.md          # プロジェクト説明
```

## ページ構成
- **4つの主要ページ**: index, service, flow, company
- **共通ヘッダー・フッター**: 全ページで統一
- **レスポンシブ対応**: モバイル/タブレット/デスクトップ