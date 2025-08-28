/**
 * Google Apps Script - Netlifyフォーム通知用Webhookエンドポイント
 * 
 * 使い方:
 * 1. Google Driveで新しいGoogle Apps Scriptプロジェクトを作成
 * 2. このコードを貼り付け
 * 3. デプロイ → 新しいデプロイ
 * 4. 種類: ウェブアプリ
 * 5. アクセス権: 全員
 * 6. デプロイ後のURLをNetlifyのWebhook設定に登録
 */

// 通知先メールアドレスを設定
const NOTIFICATION_EMAIL = 'your-email@example.com'; // ← ここを変更してください

// デバッグモードを有効化（問題解決後はfalseに）
const DEBUG_MODE = true;

/**
 * POSTリクエストを処理
 */
function doPost(e) {
  try {
    // デバッグログ
    if (DEBUG_MODE) {
      console.log('Webhook received:', new Date().toISOString());
      console.log('Raw data:', e.postData.contents);
    }
    
    // Netlifyから送信されたデータを解析
    const data = JSON.parse(e.postData.contents);
    
    // フォームデータを整形
    const formData = data.data || data;
    
    if (DEBUG_MODE) {
      console.log('Parsed form data:', JSON.stringify(formData));
    }
    
    // メール本文を作成
    const emailBody = createEmailBody(formData);
    
    // メールを送信
    sendNotificationEmail(formData, emailBody);
    
    if (DEBUG_MODE) {
      console.log('Email sent successfully to:', NOTIFICATION_EMAIL);
    }
    
    // 成功レスポンスを返す
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // エラーログを記録
    console.error('Error processing webhook:', error);
    console.error('Error stack:', error.stack);
    
    // エラー通知メールを送信（デバッグ用）
    if (DEBUG_MODE) {
      try {
        MailApp.sendEmail({
          to: NOTIFICATION_EMAIL,
          subject: '【エラー】Webhook処理でエラーが発生しました',
          body: `エラー内容:\n${error.toString()}\n\nスタック:\n${error.stack}\n\nデータ:\n${e.postData ? e.postData.contents : 'No data'}`
        });
      } catch (mailError) {
        console.error('Failed to send error email:', mailError);
      }
    }
    
    // エラーレスポンスを返す
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error', 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * メール本文を作成
 */
function createEmailBody(formData) {
  const timestamp = new Date().toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo'
  });
  
  let body = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
あいねすの家 - お問い合わせ通知
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

受信日時: ${timestamp}

【お問い合わせ内容】
──────────────────────────────────

■ お問い合わせ種別
${formData.contact_type || '未選択'}

■ お名前
${formData.name || '未入力'}

■ フリガナ
${formData.kana || '未入力'}

■ 電話番号
${formData.tel || '未入力'}

■ メールアドレス
${formData.email || '未入力'}

■ お問い合わせ内容
──────────────────────────────────
${formData.message || '未入力'}
──────────────────────────────────

【対応について】
このお問い合わせには2営業日以内にご連絡をお願いします。

【Netlify管理画面】
https://app.netlify.com/sites/ainesu-nursing/forms

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

  return body;
}

/**
 * HTML形式のメール本文を作成（オプション）
 */
function createHtmlBody(formData) {
  const timestamp = new Date().toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo'
  });
  
  const contactTypeLabel = {
    'service': 'サービスについて',
    'price': '料金について',
    'recruit': '採用について',
    'other': 'その他'
  };
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #78c100; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #555; margin-bottom: 5px; }
    .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #e0e0e0; }
    .message { white-space: pre-wrap; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #888; }
    .button { display: inline-block; padding: 10px 20px; background: #ffb059; color: white; text-decoration: none; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">🏥 あいねすの家 - 新規お問い合わせ</h2>
      <p style="margin: 10px 0 0 0; font-size: 14px;">受信日時: ${timestamp}</p>
    </div>
    
    <div class="content">
      <div class="field">
        <div class="label">お問い合わせ種別</div>
        <div class="value">${contactTypeLabel[formData.contact_type] || formData.contact_type || '未選択'}</div>
      </div>
      
      <div class="field">
        <div class="label">お名前</div>
        <div class="value">${formData.name || '未入力'}</div>
      </div>
      
      <div class="field">
        <div class="label">フリガナ</div>
        <div class="value">${formData.kana || '未入力'}</div>
      </div>
      
      <div class="field">
        <div class="label">電話番号</div>
        <div class="value">
          ${formData.tel ? `<a href="tel:${formData.tel}">${formData.tel}</a>` : '未入力'}
        </div>
      </div>
      
      <div class="field">
        <div class="label">メールアドレス</div>
        <div class="value">
          ${formData.email ? `<a href="mailto:${formData.email}">${formData.email}</a>` : '未入力'}
        </div>
      </div>
      
      <div class="field">
        <div class="label">お問い合わせ内容</div>
        <div class="value message">${formData.message || '未入力'}</div>
      </div>
      
      <div style="margin-top: 30px; text-align: center;">
        <a href="https://app.netlify.com/sites/ainesu-nursing/forms" class="button">
          Netlify管理画面で詳細を確認
        </a>
      </div>
      
      <div class="footer">
        <p>⚠️ このお問い合わせには2営業日以内にご連絡をお願いします。</p>
        <p>このメールは自動送信されています。</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * 通知メールを送信
 */
function sendNotificationEmail(formData, textBody) {
  const subject = `【お問い合わせ】${formData.name || '名前未入力'} 様より（${getContactTypeLabel(formData.contact_type)}）`;
  
  // HTML版も作成
  const htmlBody = createHtmlBody(formData);
  
  // メール送信
  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: subject,
    body: textBody,
    htmlBody: htmlBody,
    name: 'あいねすの家 お問い合わせフォーム'
  });
  
  // 送信者にも自動返信（オプション）
  if (formData.email && formData.email.includes('@')) {
    sendAutoReply(formData);
  }
}

/**
 * 自動返信メールを送信
 */
function sendAutoReply(formData) {
  const subject = '【あいねすの家】お問い合わせありがとうございます';
  
  const body = `
${formData.name} 様

この度は、あいねすの家へお問い合わせいただき
誠にありがとうございます。

以下の内容でお問い合わせを承りました。

━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ種別: ${getContactTypeLabel(formData.contact_type)}
■ お名前: ${formData.name}
■ お問い合わせ内容:
${formData.message}
━━━━━━━━━━━━━━━━━━━━━━━

内容を確認の上、2営業日以内に担当者より
ご連絡させていただきます。

お急ぎの場合は、下記電話番号へ
直接お問い合わせください。

TEL: 0532-43-6020
受付時間: 平日 8:30〜17:30

今後ともよろしくお願いいたします。

──────────────────────────
あいねすの家 訪問看護ステーション
〒440-0057
愛知県豊橋市旭町字餌指1番地4
TEL: 0532-43-6020
──────────────────────────

※このメールは自動送信されております。
`;
  
  try {
    MailApp.sendEmail({
      to: formData.email,
      subject: subject,
      body: body,
      name: 'あいねすの家',
      noReply: true
    });
  } catch (error) {
    console.error('自動返信エラー:', error);
  }
}

/**
 * お問い合わせ種別のラベルを取得
 */
function getContactTypeLabel(type) {
  const labels = {
    'service': 'サービスについて',
    'price': '料金について',
    'recruit': '採用について',
    'other': 'その他'
  };
  return labels[type] || type || '未選択';
}

/**
 * テスト用関数
 */
function testWebhook() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        data: {
          name: 'テスト太郎',
          kana: 'テストタロウ',
          tel: '090-1234-5678',
          email: 'test@example.com',
          contact_type: 'service',
          message: 'これはテストメッセージです。\n改行も含まれています。'
        }
      })
    }
  };
  
  const result = doPost(testData);
  console.log(result.getContent());
}