// サイト設定（非エンジニアでも変更しやすいよう外出し）
// ここを変更すると、ブログ記事の取得元リポジトリが切り替わります。
// 例) ユーザー名: yourname, リポジトリ名: yourrepo
// window.SITE_CONFIG.githubOwner = 'yourname';
// window.SITE_CONFIG.githubRepo  = 'yourrepo';

window.SITE_CONFIG = Object.assign(
  {
    // 現在の既定値（このリポ）
    githubOwner: 'kotashimizu',
    githubRepo: 'ainesu-nursing',
    // Netlify Identity API エンドポイント
    // 本番 Netlify サイトでの既定値（必要に応じて上書きしてください）
    // 例: カスタムドメインを使う場合は、そのドメインに変更
    // identityApiUrl: 'https://your-custom-domain/.netlify/identity'
    identityApiUrl: 'https://ainesu-nursing.netlify.app/.netlify/identity'
  },
  window.SITE_CONFIG || {}
);
