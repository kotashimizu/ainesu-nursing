# 推奨コマンド一覧

## Git操作
```bash
# ステータス確認
git status

# 変更を追加
git add .

# コミット
git commit -m "メッセージ"

# GitHubにプッシュ
git push origin main

# 変更履歴確認
git log --oneline
```

## ファイル操作
```bash
# ディレクトリ内容確認
ls -la

# ファイル内容確認
cat ファイル名

# ファイル検索
find . -name "*.html"

# テキスト検索
grep -r "検索文字" .
```

## 開発サーバー
```bash
# Python簡易サーバー（macOS標準）
python3 -m http.server 8000

# ブラウザで開く
open http://localhost:8000
```

## デプロイ
```bash
# Netlifyは自動デプロイのため、以下でトリガー
git push origin main
```

## 画像最適化
```bash
# 画像サイズ確認
file images/*

# 画像圧縮（要imagemagick）
convert input.jpg -quality 85 output.jpg
```

## その他
```bash
# ファイル数カウント
find . -type f -name "*.html" | wc -l

# プロジェクトサイズ確認
du -sh .
```