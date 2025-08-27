# Decap CMS Migration Notes

## Important Changes (as of 2025)

### Netlify CMS → Decap CMS
- **February 2023**: Netlify CMS was rebranded as **Decap CMS**
- Same functionality, just a name change
- Now maintained as an open-source project

### Current Setup
- Using Decap CMS v3.0.0
- Configuration remains largely the same
- Using `window.DecapCMS` instead of direct `CMS` global

### Deprecation Warnings
1. **Netlify Identity**: Being deprecated, Auth0 recommended instead
2. **Development pace**: Decap CMS development is slow
3. **Future alternative**: Sveltia CMS (Decap successor) expected late 2025

### Authentication Options for 2025
1. **Netlify Identity** (still works but deprecated)
   - Easy setup through Netlify dashboard
   - Will eventually be removed

2. **GitHub OAuth** (recommended)
   - More future-proof
   - Direct GitHub authentication
   - No dependency on Netlify services

3. **GitLab/Bitbucket OAuth**
   - Alternative Git providers
   - Similar to GitHub setup

### Current Implementation
- Using Decap CMS v3.0.0
- Netlify Identity for authentication (works for now)
- Git Gateway for repository access
- Japanese localization configured