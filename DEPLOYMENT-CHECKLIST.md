# 🚀 Deployment Checklist - The Kids Evergreen

## Before Deploying to Production

### 1. Update Domain URLs (CRITICAL)
Replace `https://thekidsevergreen.com` in these files:
- [ ] `app/layout.tsx` - Line 5: `const siteUrl`
- [ ] `app/sitemap.ts` - Line 4: `const baseUrl`
- [ ] `app/robots.ts` - Line 4: `const baseUrl`
- [ ] `app/page.tsx` - All URLs in structured data

### 2. Add Verification Codes
- [ ] Google Search Console verification in `app/layout.tsx`
- [ ] Bing Webmaster Tools verification (optional)

### 3. Update Business Information
In `app/page.tsx`, verify/update:
- [ ] Email address (currently placeholder)
- [ ] Founding date
- [ ] Phone numbers are correct
- [ ] Address is accurate

### 4. Add Social Media (if available)
In `app/page.tsx`, uncomment and add:
- [ ] Facebook URL
- [ ] Instagram URL
- [ ] Twitter handle in `app/layout.tsx`

### 5. Build and Test
```bash
npm run build
npm run start
```
- [ ] No build errors
- [ ] Site loads correctly
- [ ] All sections work
- [ ] Mobile responsive

### 6. Test SEO Implementation
- [ ] Visit `/sitemap.xml` - Should show XML sitemap
- [ ] Visit `/robots.txt` - Should show robots rules
- [ ] Check meta tags in browser inspector
- [ ] Test on mobile device

### 7. After Deployment
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Test with Google Rich Results Test
- [ ] Test with PageSpeed Insights
- [ ] Test with Mobile-Friendly Test

### 8. Optional Enhancements
- [ ] Set up Google Analytics 4
- [ ] Create Google Business Profile
- [ ] Add favicon.ico (16x16, 32x32)
- [ ] Optimize logo.jpeg for different sizes

---

## Quick Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

---

## SEO Testing URLs

After deployment, test these:
- Homepage: `https://yourdomain.com`
- Sitemap: `https://yourdomain.com/sitemap.xml`
- Robots: `https://yourdomain.com/robots.txt`

---

## Important Notes

✅ **No UI changes made** - All design and functionality preserved
✅ **SSR enabled** - Using Next.js App Router (default SSR)
✅ **SEO optimized** - Comprehensive metadata and structured data
✅ **Mobile responsive** - Already optimized, maintained
✅ **Performance enhanced** - Image optimization, caching, compression

---

## Need Help?

Refer to `SEO-IMPLEMENTATION.md` for detailed documentation.
