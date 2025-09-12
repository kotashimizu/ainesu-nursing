// ブログ記事の取得と表示
class BlogManager {
    constructor() {
        this.posts = [];
        this.postsDirectory = '_posts';
    }

    // GitHubから記事一覧を取得
    async fetchPosts() {
        try {
            // 参照先（owner/repo）は設定ファイルから取得（未設定時は既定値）
            const owner = (window.SITE_CONFIG && window.SITE_CONFIG.githubOwner) || 'kotashimizu';
            const repo  = (window.SITE_CONFIG && window.SITE_CONFIG.githubRepo)  || 'ainesu-nursing';

            // GitHub APIを使用して_postsディレクトリの内容を取得
            const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${this.postsDirectory}`;
            const response = await fetch(apiUrl);
            
            if (!response.ok) {
                console.log('GitHub APIから記事を取得できませんでした');
                return [];
            }

            const files = await response.json();
            const posts = [];

            // 各ファイルの内容を取得
            for (const file of files) {
                if (file.name.endsWith('.md')) {
                    const postResponse = await fetch(file.download_url);
                    const content = await postResponse.text();
                    const post = this.parsePost(content, file.name);
                    if (post && post.draft !== true) {
                        posts.push(post);
                    }
                }
            }

            // 日付で降順ソート
            posts.sort((a, b) => new Date(b.date) - new Date(a.date));
            return posts;
        } catch (error) {
            console.error('記事の取得に失敗しました:', error);
            return [];
        }
    }

    // Markdownファイルをパース
    parsePost(content, filename) {
        try {
            // Front matterを抽出
            const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
            if (!frontMatterMatch) return null;

            const frontMatter = frontMatterMatch[1];
            const body = content.slice(frontMatterMatch[0].length).trim();

            // Front matterをパース
            const post = {};
            const lines = frontMatter.split('\n');
            
            for (const line of lines) {
                const match = line.match(/^(\w+):\s*(.*)$/);
                if (match) {
                    const key = match[1];
                    let value = match[2].replace(/^["']|["']$/g, '').trim();
                    
                    // booleanの値を適切に変換
                    if (value === 'true') value = true;
                    else if (value === 'false') value = false;
                    
                    post[key] = value;
                }
            }

            // ファイル名からスラグを生成
            post.slug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
            post.body = body;

            // 本文から最初の150文字を概要として使用（descriptionがない場合）
            if (!post.description) {
                const plainText = body.replace(/[#*_`[\]()]/g, '').trim();
                post.description = plainText.slice(0, 150) + (plainText.length > 150 ? '...' : '');
            }

            return post;
        } catch (error) {
            console.error('記事のパースに失敗しました:', error);
            return null;
        }
    }

    // 記事カードのHTMLを生成
    createPostCard(post) {
        const date = new Date(post.date);
        const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
        
        const categoryClass = post.category === 'お知らせ' ? 'blog-card__category--news' : '';
        
        return `
            <article class="blog-card">
                <a href="/post.html?slug=${post.slug}" class="blog-card__link">
                    ${post.thumbnail ? `
                        <div class="blog-card__image">
                            <img src="${post.thumbnail}" alt="${post.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <div class="blog-card__placeholder" style="display: none;">
                                <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                                </svg>
                                <span>画像なし</span>
                            </div>
                        </div>
                    ` : `
                        <div class="blog-card__image">
                            <div class="blog-card__placeholder">
                                <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                                </svg>
                                <span>画像なし</span>
                            </div>
                        </div>
                    `}
                    <div class="blog-card__content">
                        <div class="blog-card__header">
                            <time class="blog-card__date">${formattedDate}</time>
                            <span class="blog-card__category ${categoryClass}">${post.category}</span>
                        </div>
                        <h3 class="blog-card__title">${post.title}</h3>
                        <p class="blog-card__description">${post.description}</p>
                    </div>
                </a>
            </article>
        `;
    }

    // ホームページ用のニュースアイテムHTMLを生成
    createNewsItem(post) {
        const date = new Date(post.date);
        const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
        
        return `
            <a href="/post.html?slug=${post.slug}" class="news__item">
                <time class="news__date">${formattedDate}</time>
                <span class="news__category">${post.category}</span>
                <span class="news__title">${post.title}</span>
            </a>
        `;
    }

    // ブログページに記事を表示
    async displayOnBlogPage() {
        const container = document.getElementById('blogList');
        if (!container) return;

        container.innerHTML = '<div class="loading">記事を読み込み中...</div>';
        
        const posts = await this.fetchPosts();
        
        if (posts.length === 0) {
            container.innerHTML = `
                <div class="blog-empty">
                    <p class="blog-empty__message">
                        現在、お知らせ・ブログ記事はありません。
                    </p>
                    <p class="blog-empty__submessage">
                        最新の情報は随時更新していきます。
                    </p>
                </div>
            `;
            return;
        }

        const postsHtml = posts.map(post => this.createPostCard(post)).join('');
        container.innerHTML = postsHtml;
    }

    // ホームページに最新記事を表示
    async displayOnHomePage() {
        const container = document.querySelector('.news__list');
        if (!container) return;

        const posts = await this.fetchPosts();
        
        if (posts.length === 0) {
            container.innerHTML = '<p class="news__empty">お知らせはありません</p>';
            return;
        }

        // 最新3件を表示
        const latestPosts = posts.slice(0, 3);
        const newsHtml = latestPosts.map(post => this.createNewsItem(post)).join('');
        container.innerHTML = newsHtml;
    }
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', () => {
    const blogManager = new BlogManager();
    
    // ブログページの場合
    if (document.getElementById('blogList')) {
        blogManager.displayOnBlogPage();
    }
    
    // ホームページの場合
    if (document.querySelector('.news__list')) {
        blogManager.displayOnHomePage();
    }
});
