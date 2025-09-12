// 個別記事表示用のスクリプト
document.addEventListener('DOMContentLoaded', async () => {
    // URLパラメータから記事のスラグを取得
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    
    if (!slug) {
        displayError('記事が見つかりません');
        return;
    }
    
    // BlogManagerを使用して記事を取得
    const blogManager = new BlogManager();
    const posts = await blogManager.fetchPosts();
    
    // スラグに一致する記事を探す
    const post = posts.find(p => p.slug === slug);
    
    if (!post) {
        displayError('記事が見つかりません');
        return;
    }
    
    // 記事を表示
    displayPost(post);
});

function displayPost(post) {
    const container = document.getElementById('postContent');
    const date = new Date(post.date);
    const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
    
    const categoryClass = post.category === 'お知らせ' ? 'post-header__category--news' : '';
    
    // Markdownを簡単にHTMLに変換（基本的な変換のみ）
    let bodyHtml = post.body;
    
    // 見出しの変換
    bodyHtml = bodyHtml.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    bodyHtml = bodyHtml.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    bodyHtml = bodyHtml.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
    
    // リストの変換
    bodyHtml = bodyHtml.replace(/^- (.*?)$/gm, '<li>$1</li>');
    bodyHtml = bodyHtml.replace(/(<li>.*<\/li>\n?)+/g, (match) => {
        return '<ul>' + match + '</ul>';
    });
    
    // 段落の変換
    bodyHtml = bodyHtml.split('\n\n').map(paragraph => {
        if (!paragraph.trim()) return '';
        if (paragraph.startsWith('<')) return paragraph; // 既にHTMLタグがある場合
        return `<p>${paragraph.trim()}</p>`;
    }).join('\n');
    
    // リンクの変換
    bodyHtml = bodyHtml.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    
    // 太字の変換
    bodyHtml = bodyHtml.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // 斜体の変換
    bodyHtml = bodyHtml.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    const html = `
        <div class="post-header">
            <div class="post-header__container">
                <div class="post-header__meta">
                    <time class="post-header__date">${formattedDate}</time>
                    <span class="post-header__category ${categoryClass}">${post.category}</span>
                </div>
                <h1 class="post-header__title">${post.title}</h1>
            </div>
        </div>
        
        ${post.thumbnail ? `
        <div class="post-featured-image">
            <div class="post-featured-image__container">
                <img src="${post.thumbnail}" alt="${post.title}" class="post-featured-image__img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="post-featured-image__placeholder" style="display: none;">
                    <svg width="64" height="64" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                    <span>画像が読み込めませんでした</span>
                </div>
            </div>
        </div>
        ` : ''}
        
        <div class="post-content">
            <div class="post-content__body">
                ${bodyHtml}
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    
    // ページタイトルを更新
    document.title = `${post.title} - あいねすの家`;
}

function displayError(message) {
    const container = document.getElementById('postContent');
    container.innerHTML = `
        <div class="post-error">
            <p class="post-error__message">${message}</p>
            <a href="/blog.html" class="post-nav__link">記事一覧に戻る</a>
        </div>
    `;
}