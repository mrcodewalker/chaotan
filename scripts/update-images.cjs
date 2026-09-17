const fs = require('fs');

let code = fs.readFileSync('scripts/build-rich-slides.cjs', 'utf8');

// Update Slide 2
code = code.replace(
  'assets/images/slide-04-ai-everywhere.jpg',
  'assets/images/slide-02-ai-robot.jpg'
);

// Update Slide 4
code = code.replace(
  'assets/images/slide-20-deep-learning.jpg',
  'assets/images/slide-04-ml-types.png'
);
code = code.replace(
  'imageCaption: "Ba mô thức học máy: Có giám sát, Không giám sát và Học tăng cường",\n    imageAlt: "Mô hình huấn luyện mạng nơ-ron học sâu trên máy tính",\n    mediaFit: "cover",',
  'imageCaption: "Sơ đồ phân loại 3 mô thức học máy: Supervised, Unsupervised và Reinforcement Learning",\n    imageAlt: "Sơ đồ trực quan các nhánh Machine Learning",\n    mediaFit: "contain",'
);

// Update Slide 7
code = code.replace(
  'assets/images/slide-07-generative-ai.jpg',
  'assets/images/transformer-attention.jpg'
);

// Update Slide 12
code = code.replace(
  'assets/images/slide-12-cpp-debug.jpg',
  'assets/images/slide-12-cpp-debug.png'
);
code = code.replace(
  'imageCaption: "Môi trường lập trình Visual Studio Code, gỡ lỗi mã nguồn C++ và trợ lý AI",\n    imageAlt: "Màn hình trình biên dịch mã nguồn C++ với thông báo lỗi và phân tích cú pháp",\n    mediaFit: "cover",',
  'imageCaption: "Gỡ lỗi C++ Segmentation Fault (SIGSEGV) trực tiếp trong Visual Studio Code",\n    imageAlt: "Màn hình thực tế gỡ lỗi C++ Segmentation Fault bằng GDB trong VS Code",\n    mediaFit: "contain",'
);

// Update Slide 17
code = code.replace(
  'assets/images/slide-19-reading-papers.jpg',
  'assets/images/slide-17-reading-standards.jpg'
);

// Update Slide 21
code = code.replace(
  'assets/images/slide-21-flashcards-quiz.jpg',
  'assets/images/slide-21-feynman-real.png'
);
code = code.replace(
  'imageCaption: "Phương pháp học chủ động qua tự kiểm tra và giải thích khái niệm",\n    imageAlt: "Sinh viên ôn tập thảo luận các chủ đề khoa học máy tính",\n    mediaFit: "cover",',
  'imageCaption: "Sơ đồ 4 bước phương pháp học tập Feynman (The Feynman Learning Technique)",\n    imageAlt: "Sơ đồ trực quan 4 bước Feynman method",\n    mediaFit: "contain",'
);

// Update Slide 29
code = code.replace(
  'assets/images/slide-32-methodology-data.jpg',
  'assets/images/slide-29-data-analytics.jpg'
);

// Update Slide 36
code = code.replace(
  'image: "assets/images/slide-37-privacy-security.jpg",\n    onlineImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",\n    imageCaption: "Trung tâm giám sát an ninh mạng (SOC) và phân tích nguy cơ bảo mật",',
  'image: "assets/images/slide-36-cybersecurity-soc.jpg",\n    onlineImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",\n    imageCaption: "Trung tâm điều hành an ninh mạng (SOC) và phân tích nguy cơ an ninh ATTT",'
);

// Update Slide 37
code = code.replace(
  'image: "assets/images/slide-04-ai-everywhere.jpg",\n    onlineImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",\n    imageCaption: "Phần cứng viễn thông, mạch điện tử và hệ thống truyền thông không dây 5G/6G",',
  'image: "assets/images/slide-37-electronics-lab.jpg",\n    onlineImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",\n    imageCaption: "Phòng thí nghiệm phần cứng điện tử, vi mạch và xử lý tín hiệu ĐTVT",'
);

fs.writeFileSync('scripts/build-rich-slides.cjs', code, 'utf8');
console.log('Successfully updated build-rich-slides.cjs!');
