# Netlify Webhook通知設定ガイド

## 📧 無料でメール通知を受け取る設定方法

### 方法1: Google Apps Script（推奨）

#### 1. Google Apps Scriptプロジェクトの作成
1. [Google Apps Script](https://script.google.com/)にアクセス
2. 「新しいプロジェクト」をクリック
3. プロジェクト名を「あいねすの家 - フォーム通知」に変更

#### 2. コードの設置
1. デフォルトのコードを全て削除
2. `webhook-script.gs`の内容を全てコピー＆ペースト
3. 3行目の`NOTIFICATION_EMAIL`を実際のメールアドレスに変更：
   ```javascript
   const NOTIFICATION_EMAIL = 'your-email@example.com'; // ← あなたのメールアドレス
   ```

#### 3. デプロイ
1. 右上の「デプロイ」→「新しいデプロイ」をクリック
2. 設定:
   - 種類: **ウェブアプリ**
   - 説明: 「Netlifyフォーム通知」
   - 実行ユーザー: **自分**
   - アクセスできるユーザー: **全員**
3. 「デプロイ」をクリック
4. 承認画面が出たら承認
5. **WebアプリのURL**をコピー（重要！）

#### 4. Netlifyでの設定
1. [Netlify管理画面](https://app.netlify.com/)にログイン
2. サイトを選択 → Forms → Settings & usage
3. 「Form notifications」セクションで「Add notification」
4. 「Outgoing webhook」を選択
5. 設定:
   - Event to listen for: **New form submission**
   - URL to notify: **先ほどコピーしたGoogle Apps ScriptのURL**
   - Form: **contact**
6. 「Save」をクリック

#### 5. テスト方法
1. Google Apps Scriptエディタで`testWebhook()`関数を実行
2. 実際のフォームから送信してみる

---

### 方法2: Zapier（月100件まで無料）

#### 設定手順
1. [Zapier](https://zapier.com/)でアカウント作成
2. 新しいZapを作成:
   - Trigger: Webhooks by Zapier → Catch Hook
   - Action: Gmail → Send Email
3. WebhookのURLをNetlifyに設定
4. テスト送信して動作確認

---

### 方法3: Make（旧Integromat）（月1000件まで無料）

#### 設定手順
1. [Make](https://www.make.com/)でアカウント作成
2. 新しいシナリオを作成:
   - Webhooks → Custom webhook
   - Email → Send an email
3. WebhookのURLをNetlifyに設定

---

## 🔧 トラブルシューティング

### メールが届かない場合
1. **迷惑メールフォルダを確認**
2. **Google Apps Scriptの実行ログを確認**:
   - Apps Scriptエディタ → 実行数 → ログを確認
3. **Netlifyのフォーム送信履歴を確認**:
   - Forms → Verified submissions

### エラーが発生する場合
- WebhookのURLが正しいか確認
- Google Apps Scriptの承認が完了しているか確認
- フォームのname属性が`contact`になっているか確認

---

## 📝 送信データの形式

Netlifyから送信されるデータ:
```json
{
  "data": {
    "name": "山田太郎",
    "kana": "ヤマダタロウ",
    "tel": "090-1234-5678",
    "email": "yamada@example.com",
    "contact_type": "service",
    "message": "サービスについて質問があります。",
    "ip": "203.0.113.0",
    "user_agent": "Mozilla/5.0...",
    "referrer": "https://ainesu-nursing.netlify.app/company.html"
  },
  "created_at": "2024-01-01T12:00:00.000Z",
  "human_fields": {
    "名前": "山田太郎",
    "電話番号": "090-1234-5678"
  }
}
```

---

## 💡 カスタマイズ例

### 複数のメールアドレスに送信
```javascript
const NOTIFICATION_EMAILS = [
  'admin@example.com',
  'support@example.com'
];

// sendNotificationEmail関数内で
MailApp.sendEmail({
  to: NOTIFICATION_EMAILS.join(','),
  // ...
});
```

### Slackに通知を送る
```javascript
function sendToSlack(formData) {
  const SLACK_WEBHOOK_URL = 'YOUR_SLACK_WEBHOOK_URL';
  
  UrlFetchApp.fetch(SLACK_WEBHOOK_URL, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      text: `新規お問い合わせ: ${formData.name}様`,
      attachments: [{
        color: '#78c100',
        fields: [
          { title: '名前', value: formData.name, short: true },
          { title: '電話', value: formData.tel, short: true },
          { title: '内容', value: formData.message }
        ]
      }]
    })
  });
}
```

### Google Sheetsに保存
```javascript
function saveToSheet(formData) {
  const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID';
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  
  sheet.appendRow([
    new Date(),
    formData.name,
    formData.kana,
    formData.tel,
    formData.email,
    formData.contact_type,
    formData.message
  ]);
}
```