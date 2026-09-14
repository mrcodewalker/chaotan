# ỨNG DỤNG AI TRONG HỌC TẬP VÀ NGHIÊN CỨU
## Website Trình Chiếu Keynote 50 Slide Dành Cho Tân Sinh Viên Học Viện Kỹ Thuật Mật Mã (KMA)

> **Chủ đề**: *Ứng Dụng Trí Tuệ Nhân Tạo Trong Học Tập Và Nghiên Cứu: Từ Tân Sinh Viên KMA Đến Người Học Chủ Động — AI Làm Được Gì Và Hoàn Toàn Bất Lực Trước Điều Gì?*  
> **Đơn vị**: Khoa Công Nghệ Thông Tin • Học Viện Kỹ Thuật Mật Mã (KMA)  
> **Người trình bày**: TS. Lê Đức Thuận - Giảng viên Khoa Công nghệ Thông tin  
> **Thời lượng bài giảng**: 1.5 – 2.0 giờ  
> **Số lượng**: Đúng 50 Slide chuẩn Keynote hội thảo công nghệ giáo dục  
> **Công nghệ**: HTML5, CSS3 Vanilla Glassmorphism, JavaScript thuần (Không phụ thuộc thư viện nặng, chạy offline 100%)

---

## 🌟 ĐIỂM NỔI BẬT CỦA BÀI GIẢNG

1. **Văn Phong Thân Tình, Gần Gũi & Thực Tế**:
   - Thầy Thuận chia sẻ mộc mạc, thẳng thắn như một người đi trước dặn dò đàn em: nói về chuyện trượt môn, chuyện con trỏ C++, chuyện thi vấn đáp, chuyện học dồn đêm trước thi và bẫy 'tưởng mình đã hiểu'.
   - Không dùng từ ngữ sáo rỗng, hình thức hay thần thánh hóa AI.
2. **Ví Dụ Sống Động: AI Làm Được Gì vs AI Bó Tay Điều Gì**:
   - **Trong học tập**: AI sửa lỗi cú pháp C++ rất nhanh, giải thích công thức toán bằng ẩn dụ đời thường; nhưng AI bất lực trước đề thi phòng máy offline, không hiểu bẫy logic nghiệp vụ và không thể nạp kiến thức vào não thay sinh viên.
   - **Trong nghiên cứu**: AI hỗ trợ tìm tài liệu, vẽ biểu đồ Python; nhưng AI không thể tự đi lấy dữ liệu thật, không thể làm thí nghiệm lab thật và không thể chịu trách nhiệm trước Hội đồng phản biện.
3. **Presenter Mode (Góc Giảng Viên Chuyên Nghiệp)**:
   - Tích hợp sẵn **Lời Thầy Dặn (Speaker Notes)** chi tiết cho từng slide trong 50 slide giúp giảng viên làm chủ bài nói 90-120 phút.
   - Đồng hồ bấm giờ thời gian thực (Presentation Stopwatch Timer).
4. **Slide Tương Tác Sinh Động**:
   - **Quiz & Poll Hội Trường** (Slide 5, Slide 35): Sinh viên/giảng viên click chọn đáp án A/B/C -> Hiện ngay phân tích học thuật và lời bình của Thầy.
   - **So Sánh Trước & Sau (Before / After)** (Slide 16): Đối chiếu trực quan giữa Prompt hời hợt và Prompt xuất sắc.
   - **Workshop Countdown Timer** (Slide 40 & 46): Đồng hồ đếm ngược 20 phút / 5 phút có nút Play, Tạm dừng, Đặt lại và âm thanh BEEP khi hết giờ.
   - **Checklist Tương Tác** (Slide 39 & 49): Click đánh dấu hoàn thành từng cam kết danh dự và lộ trình thử thách 7 ngày.
5. **Hệ Thống 50 Ảnh Assets Đã Tải Về Cục Bộ**:
   - 50/50 ảnh độ phân giải cao 16:9 từ nguồn Unsplash License miễn phí sử dụng, lưu trữ sẵn trong thư mục `assets/images/`.
   - Có cơ chế Fallback thông minh: Tự động chuyển đổi mượt mà nếu offline.

---

## 📂 CẤU TRÚC THƯ MỤC DỰ ÁN

```text
ai-learning-presentation/
├── index.html                  # Khung giao diện HTML5 ngữ nghĩa, controls, drawer, modal
├── style.css                   # Thiết kế CSS3: layout 16:9, typography, glassmorphism, responsive
├── js/
│   ├── slides-data.js          # Master dataset 50 slide (nội dung, speaker notes, quiz, hình ảnh)
│   └── script.js               # Logic điều khiển: chuyển slide, phím tắt, presenter notes, timer
├── assets/
│   ├── images/                 # Thư mục chứa 50 ảnh chất lượng cao (slide-01-cover.jpg -> slide-50.jpg)
│   ├── icons/                  # Các icon SVG
│   ├── logos/                  # Logo thương hiệu AI & Education
│   └── image-sources.json      # Danh mục gốc 50 ảnh kèm tác giả và giấy phép Unsplash
├── scripts/
│   └── download-images.js      # Script Node.js tự động tải và kiểm tra toàn bộ ảnh assets
└── README.md                   # Hướng dẫn chi tiết vận hành và thuyết trình
```

---

## 🚀 HƯỚNG DẪN CHẠY TRỰC TIẾP

### Cách 1: Mở Trực Tiếp Bằng Trình Duyệt (Đơn Giản Nhất)
- Nhấp đúp chuột vào file **`index.html`** hoặc kéo thả vào trình duyệt (Google Chrome, Microsoft Edge, Safari, Firefox).
- Website hoạt động ngay lập tức mà **không cần cài đặt bất kỳ phần mềm nào hay internet**!

### Cách 2: Chạy Bằng Local Server
Nếu bạn muốn môi trường máy chủ cục bộ:
```bash
# Sử dụng npx serve
npx serve .

# Hoặc dùng Python
python -m http.server 8000
```
Mở trình duyệt truy cập: `http://localhost:3000` hoặc `http://localhost:8000`.

---

## ⌨️ BẢNG PHÍM TẮT TRÌNH CHIẾU (SHORTCUTS)

| Phím Bấm | Chức Năng |
|---|---|
| `→` hoặc `Space` hoặc `PageDown` | Chuyển sang **Slide Kế Tiếp** |
| `←` hoặc `PageUp` | Quay lại **Slide Trước Đó** |
| `F` | Bật / Tắt chế độ **Toàn Màn Hình (Fullscreen)** |
| `N` | Bật / Tắt ngăn **Ghi Chú Giảng Viên (Speaker Notes)** |
| `T` | Mở danh mục **50 Slide Thu Nhỏ (Thumbnail Grid)** |
| `Home` | Nhảy về ngay **Slide Đầu Tiên** (Slide Bìa) |
| `End` | Nhảy tới ngay **Slide Cuối Cùng** (Slide Lời Kết) |
| `?` | Bật hộp thoại **Trợ Giúp Phím Tắt** |
| `Esc` | Đóng các bảng bật lên / Thoát Toàn màn hình |

---

## 📸 QUẢN LÝ VÀ TẢI LẠI ẢNH ASSETS

Dự án đã tải sẵn đủ **50 ảnh** chất lượng cao vào `assets/images/`. Nếu bạn muốn tải lại hoặc làm mới danh mục ảnh:

1. Đảm bảo máy tính có cài đặt [Node.js](https://nodejs.org/).
2. Mở terminal tại thư mục dự án và chạy:
```bash
node scripts/download-images.js
```
Script sẽ tự động:
- Đọc danh sách từ `assets/image-sources.json`.
- Tải ảnh từ Unsplash CDN với kiểm tra HTTP 200, Content-Type hình ảnh.
- Bỏ qua các file đã tồn tại hợp lệ để tiết kiệm dữ liệu.
- Tự động sinh đồ họa Vector SVG công nghệ nếu mạng gián đoạn.

---

## 🌐 HƯỚNG DẪN DEPLOY LÊN INTERNET MIỄN PHÍ

### 1. GitHub Pages
1. Tạo một repository mới trên GitHub.
2. Đẩy toàn bộ mã nguồn lên nhánh `main`.
3. Vào **Settings** -> **Pages** -> Tại *Branch* chọn `main` và thư mục `/(root)` -> Bấm **Save**.
4. Website của bạn sẽ hoạt động tại: `https://<ten-user>.github.io/<ten-repo>/`.

### 2. Netlify / Vercel
1. Truy cập [Netlify Drop](https://app.netlify.com/drop).
2. Kéo thả toàn bộ thư mục `ai-learning-presentation` vào trình duyệt.
3. Website sẽ được cấp phát tên miền trực tiếp trong 10 giây.

---

## 📚 TỔNG QUAN 4 PHẦN NỘI DUNG BÀI GIẢNG

- **PHẦN 1: AI VÀ TÂN SINH VIÊN (Slide 1–13)**: Khám phá bức tranh tổng thể, tâm lý đêm trước kỳ thi, phân biệt AI tạo sinh, cơ chế Next-token prediction, nguy cơ ảo giác (Hallucination) và 3 nguyên tắc vàng dùng AI.
- **PHẦN 2: AI TRONG HỌC TẬP CHỦ ĐỘNG (Slide 14–26)**: Biến AI thành gia sư cá nhân 1-kèm-1, nghệ thuật câu lệnh với công thức CLEAR 5 thành phần, phương pháp Feynman, đọc tài liệu dày, Active Recall, Spaced Repetition, luyện ngoại ngữ đàm thoại và debug code.
- **PHẦN 3: AI TRONG NGHIÊN CỨU VÀ ĐẠO ĐỨC HỌC THUẬT (Slide 27–39)**: Khám phá khoảng trống nghiên cứu (Research Gap), xây dựng câu hỏi nghiên cứu sắc bén, tra cứu bài báo khoa học qua Consensus & Semantic Scholar, liêm chính học thuật, đạo văn, bảo mật dữ liệu và chuẩn trích dẫn APA/IEEE.
- **PHẦN 4: WORKSHOP THỰC HÀNH VÀ HÀNH ĐỘNG (Slide 40–50)**: Thử thách 20 phút giải quyết bài toán khó tại hội trường, 5 bước thực chiến, showcase báo cáo trực tiếp, 10 điều cốt lõi tân sinh viên cần nhớ, chân dung sinh viên thời đại mới, thử thách 7 ngày và lời kết truyền cảm hứng của Thầy.

---

*Chúc Thầy và các bạn tân sinh viên có một buổi trình chiếu bài giảng đầy cảm hứng, trí tuệ và bứt phá!*
#   c h a o t a n  
 