# Website Công Ty TNHH Xây Dựng SCC

## Tổng quan

Website giới thiệu công ty xây dựng SCC - chuyên sửa chữa, cải tạo nhà và nội thất tại TP.HCM.

**Tên miền tạm thời:** `xaydungscc.github.io`

---

## Cấu trúc

```
website-scc/
├── index.html          # Trang chủ
├── css/
│   └── style.css       # Stylesheet chính
├── js/
│   └── main.js         # JavaScript tương tác
├── images/             # Folder chứa hình ảnh
└── README.md           # File này
```

---

## Các trang/section

1. **Trang chủ (Hero)**
   - Giới thiệu tổng quan
   - CTA buttons

2. **Giới thiệu**
   - Thông tin công ty
   - Thống kê (100+ dự án, 5+ năm...)

3. **Dịch vụ**
   - Sửa chữa nhà
   - Cải tạo nhà
   - Nội thất
   - Xây dựng mới

4. **Dự án**
   - Portfolio công trình (placeholder)

5. **Liên hệ**
   - Form báo giá
   - Thông tin Zalo OA
   - Email liên hệ

---

## Cách deploy lên GitHub Pages

### Bước 1: Tạo GitHub repository
1. Vào https://github.com/new
2. Tên repo: `xaydungscc` (sẽ tạo ra xaydungscc.github.io)
3. Để chế độ Public
4. Click "Create repository"

### Bước 2: Upload files
```bash
# Trên máy local (hoặc server)
cd website-scc
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[username]/xaydungscc.git
git push -u origin main
```

### Bước 3: Bật GitHub Pages
1. Vào repo trên GitHub
2. Settings → Pages
3. Source: Chọn "Deploy from a branch"
4. Branch: Chọn "main" → "/ (root)" → Save
5. Đợi 5-10 phút, truy cập: https://xaydungscc.github.io

---

## Tính năng đã có

- ✅ Responsive design (mobile/tablet/desktop)
- ✅ Smooth scrolling navigation
- ✅ Animation khi scroll
- ✅ Form liên hệ (dạng static)
- ✅ Tích hợp Zalo OA
- ✅ Mobile menu toggle

---

## Cần bổ sung sau

- [ ] Thêm hình ảnh dự án thực tế (thay placeholder)
- [ ] Cấu hình form gửi email (cần backend hoặc Netlify Forms)
- [ ] SEO optimization (meta tags, sitemap)
- [ ] Favicon cho website
- [ ] Google Analytics

---

## Liên hệ

- **Zalo OA:** Sửa chữa & cải tạo nhà SCC
- **Email:** xaydungscc23@gmail.com
- **TP.HCM, Việt Nam**

---

© 2026 Công Ty TNHH Xây Dựng SCC