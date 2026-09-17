/**
 * Dữ liệu bài giảng: Ứng dụng AI trong học tập và nghiên cứu khoa học.
 * Giảng viên: TS. Lê Đức Thuận • Khoa Công nghệ Thông tin • Học viện Kỹ thuật Mật mã (KMA).
 * 40 slide hoàn chỉnh, 100% hình ảnh thực tế chất lượng cao, không có sơ đồ mã vẽ nhân tạo.
 * Đầy đủ dữ liệu học thuật chuyên sâu cho sinh viên CNTT, ATTT và ĐTVT.
 */

const SLIDES_DATA = [
  {
    "id": 1,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "title": "ỨNG DỤNG TRÍ TUỆ NHÂN TẠO TRONG HỌC TẬP VÀ NGHIÊN CỨU KHOA HỌC",
    "subtitle": "Xây dựng phương pháp học tập chủ động, tư duy phản biện và năng lực nghiên cứu thực chứng cho sinh viên KMA",
    "type": "cover",
    "tag": "BÀI GIẢNG TỔNG QUAN · HỌC VIỆN KỸ THUẬT MẬT MÃ",
    "image": "assets/images/slide-01-cover.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    "imageAlt": "Sinh viên đại học học tập và công nghệ hiện đại",
    "imageCaption": "Khoa Công nghệ Thông tin • Học viện Kỹ thuật Mật mã",
    "mediaFit": "cover",
    "speakerInfo": {
      "lecturer": "TS. Lê Đức Thuận",
      "role": "Khoa Công Nghệ Thông Tin • Học Viện Kỹ Thuật Mật Mã",
      "target": "Sinh viên CNTT, An Toàn Thông Tin và Điện Tử Viễn Thông"
    },
    "speakerNotes": "Chào mừng các bạn tân sinh viên KMA. Bài giảng này trang bị phương pháp luận làm chủ AI có kiểm chứng: hiểu rõ bản chất toán học, nhận diện ranh giới kỹ thuật, rèn luyện tư duy phản biện và liêm chính học thuật."
  },
  {
    "id": 2,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "standard",
    "tag": "TỔNG QUAN VỀ AI",
    "title": "AI là gì và đang làm được những gì?",
    "subtitle": "Từ hệ thống máy học thống kê đến các mô hình nền tảng tạo sinh đa phương thức",
    "image": "assets/images/slide-02-ai-robot.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Trí tuệ nhân tạo và hạ tầng tính toán trong đời sống số hiện đại",
    "imageAlt": "Hạ tầng vi mạch và không gian công nghệ số",
    "mediaFit": "cover",
    "points": [
      {
        "icon": "◎",
        "title": "Nhận diện mẫu và phân loại đa miền",
        "desc": "AI trích xuất đặc trưng trong ảnh, giọng nói, văn bản và nhật ký mạng (Logs). Ứng dụng phát hiện bất thường an ninh, nhận diện mã độc và chẩn đoán lỗi hệ thống."
      },
      {
        "icon": "◇",
        "title": "Dự đoán và tối ưu hóa quyết định",
        "desc": "Mô hình ước lượng xác suất chuỗi thời gian, dự báo tải mạng viễn thông, tối ưu hóa định tuyến gói tin và hỗ trợ ra quyết định kỹ thuật dựa trên dữ liệu lớn."
      },
      {
        "icon": "✦",
        "title": "Tạo nội dung và tương tác đàm thoại",
        "desc": "Generative AI (LLMs, Diffusion Models) tạo bản nháp mã nguồn C++/Python, tóm tắt giáo trình kỹ thuật nghìn trang, gợi ý ca kiểm thử biên và đối thoại tự nhiên."
      },
      {
        "icon": "⚠",
        "title": "Ranh giới kỹ thuật hiện hữu",
        "desc": "AI không có ý thức hay khả năng thấu cảm chân lý; mô hình vận hành thuần túy dựa trên tối ưu hóa hàm toán học và phân phối thống kê từ tập dữ liệu huấn luyện."
      }
    ],
    "highlight": "AI là công cụ khuếch đại năng lực tư duy, nhưng chất lượng kết quả phụ thuộc 100% vào dữ liệu đầu vào và năng lực kiểm soát của người học.",
    "speakerNotes": "Nhấn mạnh với tân sinh viên: AI không phải chiếc đũa thần biết tuốt. Đó là một công cụ tính toán thống kê tinh vi, cần người dùng đặt bài toán rõ ràng và kiểm chứng kết quả."
  },
  {
    "id": 3,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "standard",
    "tag": "TỔNG QUAN VỀ AI",
    "title": "AI, Machine Learning, Deep Learning và Generative AI",
    "subtitle": "Cấu trúc phân tầng bao hàm và ranh giới kỹ thuật giữa các miền công nghệ",
    "image": "assets/visuals/ai-ml-dl.png",
    "onlineImage": "https://uwf-fang.github.io/presentations/_images/ai-hierarchy.png",
    "imageCaption": "Quan hệ bao hàm: AI chứa ML, ML chứa Deep Learning, Deep Learning chứa GenAI",
    "imageAlt": "Biểu đồ phân cấp từ Trí tuệ nhân tạo tổng quát đến Generative AI",
    "mediaFit": "contain",
    "points": [
      {
        "icon": "AI",
        "title": "Trí tuệ nhân tạo (Artificial Intelligence - 1956)",
        "desc": "Khái niệm rộng nhất bao trùm mọi nỗ lực chế tạo máy tính thông minh, gồm cả các hệ chuyên gia dựa trên luật (Rule-based), tìm kiếm đồ thị và lý thuyết trò chơi."
      },
      {
        "icon": "ML",
        "title": "Học máy (Machine Learning - 1980s)",
        "desc": "Tập con của AI tập trung vào các giải thuật có khả năng tự học quy luật từ dữ liệu thực nghiệm để phân loại hoặc dự đoán mà không cần lập trình luật thủ công."
      },
      {
        "icon": "DL",
        "title": "Học sâu (Deep Learning - 2010s)",
        "desc": "Nhánh ML sử dụng mạng nơ-ron sâu nhiều tầng (Deep Neural Networks), tự động học biểu diễn đặc trưng phân cấp từ dữ liệu thô (ảnh, âm thanh, văn bản)."
      },
      {
        "icon": "GEN",
        "title": "AI tạo sinh (Generative AI - 2020s)",
        "desc": "Phân nhánh bứt phá của Deep Learning (Transformer, Diffusion) chuyển từ phân tích dữ liệu sang tổng hợp và tạo mới các mẫu dữ liệu chưa từng có."
      }
    ],
    "highlight": "Không đánh đồng mọi AI với ChatGPT. GenAI là đỉnh nhọn của kim tự tháp, được xây dựng trên nền móng toán học vững chắc của Machine Learning và Deep Learning.",
    "speakerNotes": "Giải thích rõ sơ đồ phân cấp: Kỹ sư KMA cần nắm vững nền tảng ML truyền thống trước khi đi sâu vào các mô hình tạo sinh hiện đại."
  },
  {
    "id": 4,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "standard",
    "tag": "TỔNG QUAN VỀ AI",
    "title": "Ba cách học máy phổ biến trong thực tế",
    "subtitle": "Bản chất toán học, dữ liệu đầu vào và ứng dụng thực tiễn trong ngành kỹ thuật",
    "image": "assets/images/slide-04-ml-types.png",
    "onlineImage": "https://images.unsplash.com/photo-1499750310107-5f?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Sơ đồ phân loại 3 mô thức học máy: Supervised, Unsupervised và Reinforcement Learning",
    "imageAlt": "Sơ đồ trực quan các nhánh Machine Learning",
    "mediaFit": "contain",
    "points": [
      {
        "icon": "🎯",
        "title": "Học có giám sát (Supervised Learning)",
        "desc": "Huấn luyện trên tập dữ liệu gắn nhãn (X, Y). Giải quyết bài toán Phân loại (nhận diện spam, phân loại chữ số) và Hồi quy (dự báo dung lượng lưu lượng mạng)."
      },
      {
        "icon": "🔍",
        "title": "Học không giám sát (Unsupervised Learning)",
        "desc": "Học trên dữ liệu không nhãn X để tìm cấu trúc ẩn. Áp dụng Phân cụm (Clustering phân nhóm hành vi người dùng), Giảm chiều (PCA) và Phát hiện bất thường an ninh mạng."
      },
      {
        "icon": "⚡",
        "title": "Học tăng cường (Reinforcement Learning - RL)",
        "desc": "Tác tử (Agent) tương tác với môi trường thông qua hàm thưởng/phạt (Reward). Ứng dụng trong điều khiển robot, AlphaGo và giai đoạn căn chỉnh RLHF của các mô hình LLM."
      },
      {
        "icon": "🔄",
        "title": "Học tự giám sát (Self-Supervised Learning)",
        "desc": "Mô hình tự che giấu một phần dữ liệu (mask tokens) để dự đoán phần còn lại, mở đường cho việc tiền huấn luyện các Foundation Model khổng lồ hiện nay."
      }
    ],
    "highlight": "Mỗi mô thức giải quyết một lớp bài toán khác nhau. Lựa chọn đúng phương pháp học máy là bước quyết định 80% thành công của một đề tài nghiên cứu.",
    "speakerNotes": "Liên hệ ví dụ ngành KMA: Phát hiện mã độc có thể dùng Supervised (nếu có mẫu nhãn), Unsupervised (phát hiện hành vi lạ), và RLHF để tinh chỉnh trợ lý học tập."
  },
  {
    "id": 5,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "standard",
    "tag": "CƠ CHẾ HOẠT ĐỘNG",
    "title": "Một mô hình học máy học từ dữ liệu như thế nào?",
    "subtitle": "Vòng lặp toán học: Dữ liệu, hàm mất mát, lan truyền ngược và tối ưu hóa trọng số",
    "image": "assets/visuals/ml-workflow.png",
    "onlineImage": "https://mle4217-5219.matsci.dev/machine-learning-i/introduction/",
    "imageCaption": "Quy trình huấn luyện và tối ưu hóa mô hình Machine Learning chuẩn mực",
    "imageAlt": "Sơ đồ luồng từ Data Preprocessing, Loss Minimization đến Inference",
    "mediaFit": "contain",
    "points": [
      {
        "icon": "📊",
        "title": "Thu thập và tiền xử lý dữ liệu (Data Pipeline)",
        "desc": "Làm sạch, chuẩn hóa vector đặc trưng và phân chia tập dữ liệu nghiêm ngặt: Tập Huấn luyện (Train), Tập Thẩm định (Validation) và Tập Kiểm thử (Test)."
      },
      {
        "icon": "📉",
        "title": "Lan truyền tiến và Hàm mất mát (Loss Function)",
        "desc": "Dữ liệu đi qua mô hình sinh ra dự báo. Hàm mất mát đo lường độ lệch giữa dự báo và nhãn thực, chuyển bài toán học máy thành bài toán tối ưu hóa toán học."
      },
      {
        "icon": "⚙️",
        "title": "Lan truyền ngược (Backpropagation & Gradient Descent)",
        "desc": "Thuật toán tính đạo hàm riêng (Gradients) của hàm mất mát theo từng trọng số để cập nhật thông số mô hình theo hướng giảm dần sai số."
      },
      {
        "icon": "🛡️",
        "title": "Kiểm soát quá khớp (Overfitting Prevention)",
        "desc": "Áp dụng kỹ thuật điều hòa (Regularization, Dropout, Early Stopping) để đảm bảo mô hình có khả năng khái quát hóa tốt trên dữ liệu mới trong thực tế."
      }
    ],
    "highlight": "Mô hình AI không hiểu biết theo cách con người suy nghĩ; mô hình hoạt động dựa trên quá trình hạ độ dốc (Gradient Descent) để tìm điểm cực tiểu của hàm mất mát.",
    "speakerNotes": "Phân tích cho sinh viên: Nền tảng cốt lõi của AI là Giải tích đa biến, Đại số tuyến tính và Xác suất thống kê - những môn học cơ sở tại KMA."
  },
  {
    "id": 6,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "standard",
    "tag": "CƠ CHẾ HOẠT ĐỘNG",
    "title": "Deep Learning: Mạng nơ-ron sâu và trích xuất đặc trưng",
    "subtitle": "Sức mạnh biểu diễn phi tuyến tự động trích xuất đặc trưng phân tầng từ dữ liệu thô",
    "image": "assets/images/deep-learning-network.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Cấu trúc mạng nơ-ron sâu nhiều tầng (Deep Neural Network Architecture)",
    "imageAlt": "Hình ảnh trực quan các tầng nơ-ron nhân tạo liên kết đa chiều",
    "mediaFit": "contain",
    "points": [
      {
        "icon": "🧠",
        "title": "Đơn vị nơ-ron nhân tạo (Perceptron)",
        "desc": "Thực hiện phép tính z = W·x + b, kích hoạt phi tuyến qua hàm ReLU/GELU mô phỏng nơ-ron sinh học."
      },
      {
        "icon": "📶",
        "title": "Trích xuất đặc trưng phân tầng (Hierarchical Learning)",
        "desc": "Tầng đầu nhận diện cạnh và góc; tầng giữa ghép thành bộ phận; tầng sâu nhận diện toàn thể đối tượng."
      },
      {
        "icon": "🧩",
        "title": "Các kiến trúc nơ-ron kinh điển",
        "desc": "CNN cho thị giác & radar; RNN/LSTM cho chuỗi thời gian; Transformer cho ngôn ngữ và đa phương thức."
      },
      {
        "icon": "⚡",
        "title": "Hạ tầng tính toán song song GPU/TPU",
        "desc": "Hàng tỷ phép nhân ma trận được tăng tốc đồng thời, cho phép huấn luyện mô hình sâu nhiều tầng hiệu quả."
      }
    ],
    "highlight": "Bước ngoặt của Deep Learning: Tự động học biểu diễn đặc trưng từ dữ liệu thô mà không phụ thuộc vào bộ đặc trưng thủ công.",
    "speakerNotes": "Nhấn mạnh: Deep Learning vượt qua giới hạn của Machine Learning truyền thống nhờ khả năng tự động học biểu diễn đặc trưng phức tạp khi có đủ dữ liệu và GPU."
  },
  {
    "id": 7,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "standard",
    "tag": "CƠ CHẾ HOẠT ĐỘNG",
    "title": "Generative AI tạo nội dung như thế nào?",
    "subtitle": "Cơ chế xác suất, không gian vector tiềm ẩn và kiến trúc Transformer Self-Attention",
    "image": "assets/images/transformer-attention.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Trực quan hóa không gian tiềm ẩn và dòng dữ liệu sáng tạo của Generative AI",
    "imageAlt": "Dòng chảy sóng số đa chiều thể hiện sự biến đổi dữ liệu của GenAI",
    "mediaFit": "contain",
    "points": [
      {
        "icon": "📐",
        "title": "Vector hóa & Không gian tiềm ẩn (Latent Embeddings)",
        "desc": "Mọi từ ngữ và hình ảnh được mã hóa thành vector đa chiều; các khái niệm gần nghĩa nằm sát nhau."
      },
      {
        "icon": "👁️",
        "title": "Cơ chế Tự chú ý (Self-Attention Mechanism)",
        "desc": "Tính toán trọng số liên hệ giữa mọi từ trong câu; từ 'ngân hàng' sẽ liên kết với 'lãi suất' hay 'bờ sông' theo ngữ cảnh."
      },
      {
        "icon": "🎲",
        "title": "Sinh tự hồi quy (Autoregressive Generation)",
        "desc": "Dự đoán phân phối xác suất P(từ tiếp theo | ngữ cảnh). Tham số Temperature điều chỉnh độ chính xác hay sáng tạo."
      },
      {
        "icon": "🌊",
        "title": "Mô hình khuếch tán (Diffusion Models)",
        "desc": "Khử nhiễu Gaussian từng bước từ khung hình ngẫu nhiên để phục dựng tác phẩm hình ảnh sắc nét."
      }
    ],
    "highlight": "GenAI không sao chép nguyên văn; mô hình tổng hợp tri thức mới qua phép suy luận xác suất trong không gian toán học đa chiều.",
    "speakerNotes": "Giải thích cơ chế cốt lõi: LLM bản chất là 'cỗ máy đoán từ tiếp theo có điều kiện'. Nắm được điều này sinh viên sẽ hiểu ngay tại sao AI có thể bị ảo giác."
  },
  {
    "id": 8,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "standard",
    "tag": "CÔNG NGHỆ ĐA PHƯƠNG THỨC",
    "title": "AI đa phương thức: Hội tụ Văn bản, Ảnh, Mã nguồn và Âm thanh",
    "subtitle": "Các mô hình nền tảng hiện đại có khả năng tiếp nhận và liên kết nhiều giác quan số",
    "image": "assets/visuals/mnist.png",
    "onlineImage": "https://commons.wikimedia.org/wiki/File:MnistExamples.png",
    "imageCaption": "Tập dữ liệu chữ số viết tay MNIST - cái nôi của thị giác máy tính và phân loại số",
    "imageAlt": "Bảng mẫu các chữ số từ 0 đến 9 trong tập dữ liệu thị giác MNIST",
    "mediaFit": "contain",
    "points": [
      {
        "icon": "🖼️",
        "title": "Mô hình Thị giác - Ngôn ngữ (Vision-Language Models)",
        "desc": "Mô hình như GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro có khả năng đọc sơ đồ kiến trúc phần mềm, phân tích giản đồ sóng vô tuyến, phát hiện lỗi mạch điện và biểu đồ khoa học."
      },
      {
        "icon": "💻",
        "title": "Hiểu và chuyển dịch mã nguồn đa ngữ",
        "desc": "Đọc mã Assembly, C/C++, Python và chuyển đổi tự động; tạo tài liệu kỹ thuật từ mã nguồn mở hoặc phân tích lưu đồ thuật toán thành các hàm lập trình tương ứng."
      },
      {
        "icon": "🎙️",
        "title": "Xử lý âm thanh trực tiếp (Native Audio Tokens)",
        "desc": "Giao tiếp giọng nói với độ trễ thấp dưới 300ms, nhận biết ngữ điệu, cảm xúc và hỗ trợ luyện phát âm tiếng Anh chuyên ngành chuẩn xác cho sinh viên."
      },
      {
        "icon": "🔗",
        "title": "Hợp nhất không gian biểu diễn (Cross-modal Embeddings)",
        "desc": "Ánh xạ ảnh, âm thanh và văn bản vào chung một không gian vector đa chiều (CLIP architecture), giúp tìm kiếm và đối chiếu thông tin liên giác quan."
      }
    ],
    "highlight": "Sinh viên KMA cần tận dụng năng lực đa phương thức: nạp ảnh chụp lỗi màn hình IDE, sơ đồ mạng hoặc bảng thông số phần cứng để AI phân tích toàn diện.",
    "speakerNotes": "Gợi ý sinh viên: Khi code bị lỗi, hãy chụp ảnh màn hình hoặc gửi sơ đồ khối vào AI để được phân tích trực quan hơn là chỉ mô tả bằng văn bản ngắn."
  },
  {
    "id": 9,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "comparison",
    "tag": "SO SÁNH CÔNG NGHỆ",
    "title": "AI tạo sinh và Công cụ tìm kiếm: Hai bản chất khác biệt",
    "subtitle": "Phân biệt cơ chế truy xuất theo chỉ mục và cơ chế tổng hợp dự đoán xác suất",
    "image": "assets/images/slide-08-llm-models.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Mô hình ngôn ngữ lớn tổng hợp tri thức so với cơ sở dữ liệu tìm kiếm truyền thống",
    "imageAlt": "Giao diện các mô hình ngôn ngữ và mã nguồn terminal",
    "mediaFit": "cover",
    "comparison": {
      "leftTitle": "Công cụ tìm kiếm truyền thống (Google, Bing)",
      "leftSubtitle": "Truy xuất chỉ mục nguyên văn (Index-based Retrieval)",
      "leftItems": [
        "Trả về danh sách liên kết gốc (URLs) trỏ đến tài liệu sơ cấp của tác giả.",
        "Dữ liệu cập nhật liên tục từng giây theo thời gian thực (Real-time).",
        "Người đọc phải tự đọc, tổng hợp, trích xuất và tự chịu trách nhiệm đánh giá.",
        "Độ tin cậy nguồn cao: có thể kiểm tra trực tiếp nguồn gốc tác giả và bài viết.",
        "Không thể tự viết mã, tái cấu trúc câu chữ hay suy luận giải toán linh hoạt."
      ],
      "rightTitle": "AI tạo sinh (ChatGPT, Claude, Gemini)",
      "rightSubtitle": "Tổng hợp tái cấu trúc tri thức (Knowledge Synthesis)",
      "rightItems": [
        "Đọc hiểu ngữ cảnh phức tạp và trực tiếp trả lời câu hỏi tổng hợp tức thì.",
        "Tri thức đóng băng tại mốc huấn luyện (trừ khi kết hợp công cụ tìm kiếm web).",
        "Có nguy cơ ảo giác (Hallucination), bịa số liệu hoặc trích dẫn nguồn không có thật.",
        "Khả năng viết mã C++/Python, chuyển ngữ, tóm tắt và biến đổi định dạng xuất sắc.",
        "Cần con người kiểm chứng lại 100% tính chính xác của dữ liệu và logic toán học."
      ]
    },
    "highlight": "Mô hình tối ưu nhất hiện nay là RAG (Search + GenAI): Công cụ tìm kiếm tài liệu gốc chuẩn xác, sau đó AI đọc và tổng hợp kèm trích dẫn có thể kiểm chứng.",
    "speakerNotes": "Lưu ý quan trọng: Không dùng ChatGPT làm nguồn sơ cấp trong nghiên cứu khoa học. Phải dùng Google Scholar để lấy bài báo gốc, rồi mới đưa vào AI tóm tắt."
  },
  {
    "id": 10,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "standard",
    "tag": "GIỚI HẠN KỸ THUẬT",
    "title": "Vì sao câu trả lời của AI có thể sai?",
    "subtitle": "Bốn nguồn gốc kỹ thuật dẫn đến hiện tượng sai lệch, ảo giác và ngụy biện logic",
    "image": "assets/images/slide-10-hallucination.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Hiện tượng ảo giác (Hallucination) trong các mô hình học sâu xác suất",
    "imageAlt": "Minh họa ảo ảnh thị giác và hiện tượng sai lệch thông tin trong không gian số",
    "mediaFit": "cover",
    "points": [
      {
        "icon": "🎭",
        "title": "Tối ưu hóa độ trôi chảy thay vì tính chân lý",
        "desc": "LLM được huấn luyện để chuỗi từ tiếp theo nghe tự nhiên và thuyết phục nhất theo ngữ pháp; mô hình không có cơ chế 'kiểm chứng sự thật khách quan' nội tại."
      },
      {
        "icon": "👻",
        "title": "Ảo giác học thuật (Hallucination)",
        "desc": "Khi thiếu dữ liệu, AI tự động ghép nối tên giáo sư nổi tiếng, tên bài báo, chỉ số DOI và số trang nghe rất hợp lý nhưng hoàn toàn không tồn tại trong thực tế."
      },
      {
        "icon": "🔒",
        "title": "Thiếu dữ liệu chuyên sâu và vùng kiến thức hẹp",
        "desc": "Các tài liệu kỹ thuật nội bộ, giáo trình đặc thù của KMA hoặc chuẩn mật mã mật không có trên Internet công cộng khiến AI phải suy diễn chung chung."
      },
      {
        "icon": "🤝",
        "title": "Xu hướng chiều lòng người dùng (Sycophancy)",
        "desc": "AI có khuynh hướng đồng thuận với giả định sai trong câu hỏi của sinh viên thay vì phản bác (ví dụ: 'Hãy chứng minh thuật toán này O(1)' dù nó là O(N))."
      }
    ],
    "highlight": "AI là chuyên gia tạo văn bản mượt mà, không phải trọng tài chân lý. Mọi con số, công thức và mã nguồn đều phải được con người kiểm chứng trước khi áp dụng.",
    "speakerNotes": "Chia sẻ câu chuyện cảnh giác: Sinh viên nộp khóa luận bị phát hiện 5 bài báo tài liệu tham khảo hoàn toàn do AI bịa đặt, dẫn đến bị đình chỉ bảo vệ."
  },
  {
    "id": 11,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "matrix",
    "tag": "QUẢN TRỊ RỦI RO",
    "title": "Ma trận kiểm chứng theo mức độ hậu quả",
    "subtitle": "Phân loại mức độ rủi ro để xác định cường độ và quy trình kiểm thử bắt buộc",
    "image": "assets/images/slide-37-privacy-security.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Quản trị rủi ro và an toàn dữ liệu trong môi trường học thuật kỹ thuật",
    "imageAlt": "Không gian kiểm soát an ninh thông tin và an toàn hệ thống",
    "mediaFit": "cover",
    "matrix": {
      "quadrants": [
        {
          "title": "Mức 1: Hậu quả Thấp (Ý tưởng & Ngôn ngữ)",
          "icon": "🌱",
          "type": "positive",
          "items": [
            "Động não (Brainstorming), tìm ý tưởng đề tài, lập dàn ý ban đầu.",
            "Tra cứu từ đồng nghĩa, sửa lỗi ngữ pháp tiếng Anh.",
            "Quy tắc: Đọc lướt kiểm tra nhanh, chọn lọc ý phù hợp, không cần đối chiếu tài liệu gốc."
          ]
        },
        {
          "title": "Mức 2: Hậu quả Trung bình (Bài tập & Script)",
          "icon": "⚡",
          "type": "warning",
          "items": [
            "Viết hàm tiện ích (utility functions), script tự động hóa Bash/Python.",
            "Tóm tắt các chương sách giáo trình chuyên ngành cơ sở.",
            "Quy tắc: Biên dịch chạy thử, viết vài test case kiểm tra biên, đối chiếu giáo trình môn học."
          ]
        },
        {
          "title": "Mức 3: Hậu quả Cao (Đồ án & Nghiên cứu)",
          "icon": "🔥",
          "type": "negative",
          "items": [
            "Thuật toán cốt lõi trong khóa luận tốt nghiệp, bài báo khoa học.",
            "Số liệu đo kiểm thực nghiệm, module mã hóa mật mã KMA.",
            "Quy tắc: Kiểm chứng 100% dòng mã, chạy GDB/Valgrind, đối chiếu bài báo gốc có DOI."
          ]
        },
        {
          "title": "Mức 4: Tuyệt đối cấm ủy thác (Nghiêm ngặt)",
          "icon": "⛔",
          "type": "negative",
          "items": [
            "Khóa mật mã bí mật, mật khẩu máy chủ, cấu hình tường lửa production.",
            "Đánh giá liêm chính học thuật, dữ liệu bí mật nhà nước và quốc phòng.",
            "Quy tắc: Cấm nạp vào cloud AI công cộng; kỹ sư phải tự kiểm duyệt thủ công 100%."
          ]
        }
      ]
    },
    "highlight": "Mức độ hậu quả sai sót càng cao thì tỷ lệ kiểm chứng của con người phải càng tiệm cận 100%. Không bao giờ đưa dữ liệu nhạy cảm lên AI công cộng.",
    "speakerNotes": "Khắc sâu cho sinh viên KMA: Là trường bảo mật, ý thức về phân loại mức rủi ro dữ liệu phải ngấm vào máu ngay từ những dòng code đầu tiên."
  },
  {
    "id": 12,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "quiz",
    "tag": "TÌNH HUỐNG THỰC TẾ",
    "title": "Tình huống: Dùng AI hỗ trợ lập trình C++ đúng cách",
    "subtitle": "Phân tích phương pháp tiếp cận chuyên nghiệp: Học để làm chủ hay copy mù quáng?",
    "image": "assets/images/slide-12-cpp-debug.png",
    "onlineImage": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Gỡ lỗi C++ Segmentation Fault (SIGSEGV) trực tiếp trong Visual Studio Code",
    "imageAlt": "Màn hình thực tế gỡ lỗi C++ Segmentation Fault bằng GDB trong VS Code",
    "mediaFit": "contain",
    "quizData": {
      "question": "Hàm C++ xử lý chuỗi của bạn bị lỗi Segmentation Fault (Core Dumped) khi chạy thử. Cách xử lý nào thể hiện năng lực kỹ sư chuẩn mực?",
      "options": [
        {
          "key": "A",
          "text": "Copy nguyên xi thông báo lỗi và cả file mã nguồn ném cho AI, copy đoạn code AI sửa dán đè vào file rồi nộp bài ngay.",
          "feedback": "Cực kỳ nguy hiểm! Bạn không hiểu vì sao lỗi xảy ra, có thể đưa vào lỗ hổng bảo mật rò rỉ bộ nhớ (Memory Leak) và vi phạm liêm chính học thuật.",
          "isRecommended": false
        },
        {
          "key": "B",
          "text": "Chạy GDB/AddressSanitizer xác định dòng lệnh lỗi bộ nhớ, đưa hàm lỗi cho AI nhờ giải thích nguyên nhân, tự mình sửa lại và viết thêm 5 ca kiểm thử biên.",
          "feedback": "Xuất sắc! Bạn làm chủ mã nguồn, hiểu sâu cơ chế cấp phát con trỏ trong C++, dùng AI như một người cố vấn kỹ thuật và kiểm thử nghiêm ngặt.",
          "isRecommended": true
        },
        {
          "key": "C",
          "text": "Kiên quyết không dùng AI hay tài liệu trực tuyến nào vì sợ bị coi là phụ thuộc công nghệ, chấp nhận bế tắc nhiều ngày.",
          "feedback": "Không phù hợp với thời đại! Kỹ sư hiện đại cần biết tận dụng công cụ để tăng tốc độ giải quyết vấn đề, điều quan trọng là phương pháp tiếp cận có kiểm chứng.",
          "isRecommended": false
        }
      ],
      "lecturerComment": "AI hỗ trợ chẩn đoán và gợi ý giải pháp. Kỹ sư chịu trách nhiệm 100% về tính an toàn bộ nhớ, độ phức tạp thuật toán và giải thích mã nguồn trước hội đồng."
    },
    "speakerNotes": "Gợi ý giảng viên: Mở rộng về cờ biên dịch gcc -fsanitize=address, hướng dẫn sinh viên cách hỏi AI: 'Tại sao dòng lệnh này gây tràn bộ nhớ đệm?' thay vì 'Hãy viết hộ tôi bài tập này'."
  },
  {
    "id": 13,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "matrix",
    "tag": "PHƯƠNG PHÁP HỌC TẬP",
    "title": "Bốn nhóm nhiệm vụ AI hỗ trợ sinh viên hiệu quả",
    "subtitle": "Tối ưu hóa thời gian và nâng cao chất lượng học tập trong môi trường đại học",
    "image": "assets/images/slide-14-personal-tutor.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Học tập chủ động và tương tác cùng gia sư trí tuệ nhân tạo",
    "imageAlt": "Sinh viên đại học làm việc cùng máy tính xách tay và tài liệu học thuật",
    "mediaFit": "cover",
    "matrix": {
      "quadrants": [
        {
          "title": "1. Khai phá & Định hướng đề tài",
          "icon": "🧭",
          "type": "positive",
          "items": [
            "Đề xuất các góc nhìn nghiên cứu mới từ một bài báo khoa học.",
            "Giải thích thuật ngữ chuyên ngành khó hiểu bằng nhiều ví dụ trực quan.",
            "Gợi ý từ khóa học thuật tiếng Anh để tra cứu trên IEEE Xplore, ACM."
          ]
        },
        {
          "title": "2. Lập trình & Kỹ thuật thực hành",
          "icon": "💻",
          "type": "positive",
          "items": [
            "Viết mã khung mẫu (Boilerplate code) cho kết nối mạng Socket, đọc file CSV.",
            "Giải thích các thông báo lỗi trình biên dịch GCC/Clang phức tạp.",
            "Gợi ý các ca kiểm thử biên (Boundary edge cases) và sinh dữ liệu giả lập."
          ]
        },
        {
          "title": "3. Soạn thảo & Ngôn ngữ học thuật",
          "icon": "✍️",
          "type": "guideline",
          "items": [
            "Nâng cấp văn phong bài báo tiếng Anh theo chuẩn ngữ pháp quốc tế.",
            "Chuyển đổi định dạng dữ liệu (bảng Markdown sang bảng LaTeX / JSON).",
            "Tóm tắt các luận điểm cốt lõi của tài liệu kỹ thuật nhiều trăm trang."
          ]
        },
        {
          "title": "4. Tự đánh giá & Ôn luyện phản biện",
          "icon": "🎯",
          "type": "guideline",
          "items": [
            "Tạo các câu hỏi trắc nghiệm kiểm tra nhận thức sau mỗi buổi học.",
            "Đóng vai giảng viên phản biện, đặt các câu hỏi hóc búa về đồ án.",
            "Xây dựng bộ thẻ ghi nhớ thông minh (Flashcards) phục vụ spaced repetition."
          ]
        }
      ]
    },
    "highlight": "Hãy biến AI thành trợ lý cá nhân đa năng: gia sư giải thích khái niệm, trợ lý review mã nguồn và bạn học cùng phản biện.",
    "speakerNotes": "Khuyến khích sinh viên áp dụng ngay 4 nhóm nhiệm vụ này vào kỳ học đầu tiên để tăng tốc độ làm chủ kiến thức đại học."
  },
  {
    "id": 14,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "matrix",
    "tag": "GIỚI HẠN NHẬN THỨC",
    "title": "Những việc AI không thể làm thay người học",
    "subtitle": "Ranh giới bất khả xâm phạm giữa năng lực tư duy con người và hệ thống tính toán máy móc",
    "image": "assets/images/slide-11-human-thinking.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Tư duy phản biện, trực giác khoa học và liêm chính của con người",
    "imageAlt": "Minh họa tư duy chiều sâu và não bộ con người trong kỷ nguyên máy móc",
    "mediaFit": "cover",
    "matrix": {
      "quadrants": [
        {
          "title": "1. Trực giác sâu & Trăn trở nhận thức",
          "icon": "🧠",
          "type": "negative",
          "items": [
            "Quá trình não bộ trăn trở, bế tắc và tự mình tìm ra lời giải cho bài toán khó.",
            "Nếu để AI giải thay mọi bài tập, sinh viên sẽ bị 'teo rụi nhận thức' (Cognitive Atrophy) và mất khả năng tư duy độc lập."
          ]
        },
        {
          "title": "2. Liêm chính & Trách nhiệm đạo đức",
          "icon": "⚖️",
          "type": "negative",
          "items": [
            "Chữ ký trên báo cáo nghiên cứu và đồ án tốt nghiệp là danh dự của sinh viên.",
            "AI không chịu trách nhiệm pháp lý khi hệ thống bị treo, bảo mật bị thủng hay đồ án bị phát hiện đạo văn."
          ]
        },
        {
          "title": "3. Sáng tạo đột phá vượt ngoài dữ liệu cũ",
          "icon": "💡",
          "type": "warning",
          "items": [
            "AI chỉ có thể nội suy và tái kết hợp các tri thức đã tồn tại trong tập dữ liệu huấn luyện.",
            "Những phát minh khoa học mới, thuật toán mật mã đột phá đòi hỏi bước nhảy vọt tư duy của nhà nghiên cứu."
          ]
        },
        {
          "title": "4. Thực nghiệm Lab & Bản lĩnh bảo vệ",
          "icon": "🛡️",
          "type": "warning",
          "items": [
            "Kỹ năng đo kiểm vi mạch dao động ký, đấu nối thiết bị viễn thông, triển khai mạng thực.",
            "Bản lĩnh bảo vệ luận điểm và ứng biến sắc bén trước hội đồng khoa học chấm đồ án KMA."
          ]
        }
      ]
    },
    "highlight": "Giá trị của tấm bằng kỹ sư KMA nằm ở năng lực tư duy của chính bạn, không nằm ở số lượng câu trả lời AI sinh ra thay bạn.",
    "speakerNotes": "Cảnh báo hiện tượng lạm dụng: Sinh viên ỷ lại vào AI sẽ mất khả năng viết mã khi thi trên giấy hoặc khi phỏng vấn trực tiếp trước nhà tuyển dụng."
  },
  {
    "id": 15,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "standard",
    "tag": "CÔNG CỤ HỌC TẬP",
    "title": "Đọc tài liệu dài bằng NotebookLM (Gemini Notebook)",
    "subtitle": "Khai thác mô hình RAG cá nhân hóa với nguồn tài liệu được kiểm soát nghiêm ngặt",
    "image": "assets/visuals/notebooklm.png",
    "onlineImage": "https://workspace.google.com/products/gemini-notebook/",
    "imageCaption": "Giao diện Google NotebookLM - công cụ học tập bám sát nguồn tài liệu",
    "imageAlt": "Chụp giao diện công cụ NotebookLM với tài liệu tải lên và phần trích dẫn",
    "mediaFit": "contain",
    "points": [
      {
        "icon": "📌",
        "title": "Nguyên lý Grounded AI (Có neo nguồn gốc)",
        "desc": "Chỉ trả lời dựa trên tập tài liệu PDF, Slide hoặc Web do người học tải lên, triệt tiêu nguy cơ ảo giác lan man từ Internet công cộng."
      },
      {
        "icon": "🔍",
        "title": "Trích dẫn trực tiếp từng đoạn (In-line Citations)",
        "desc": "Mỗi câu trả lời đều có chỉ mục bấm thẳng vào trang và đoạn văn gốc của tài liệu, giúp sinh viên đối chiếu và xác thực tức thì."
      },
      {
        "icon": "🎙️",
        "title": "Audio Overview (Podcast học thuật)",
        "desc": "Tự động chuyển đổi tài liệu nghiên cứu dày cộp thành cuộc trò chuyện sinh động giữa hai chuyên gia AI, hỗ trợ nghe lại khi di chuyển."
      },
      {
        "icon": "📋",
        "title": "Tạo hướng dẫn học tập tự động",
        "desc": "Tự động tạo mục lục tóm tắt, hướng dẫn ôn tập (Study Guide), bảng câu hỏi FAQ và dòng thời gian sự kiện của toàn bộ tập tài liệu."
      }
    ],
    "highlight": "Đây là công cụ lý tưởng để tân sinh viên đọc giáo trình mật mã, chuẩn mạng RFC hoặc các bài báo khoa học dài hàng chục trang mà không sợ bị ảo giác.",
    "speakerNotes": "Hướng dẫn thực hành: Tải 3 file PDF giáo trình KMA lên NotebookLM, sau đó hỏi: 'So sánh độ an toàn của thuật toán DES và AES dựa trên các tài liệu đã nạp'."
  },
  {
    "id": 16,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "standard",
    "tag": "PHƯƠNG PHÁP HỌC TẬP",
    "title": "Dùng AI để học lập trình đúng cách",
    "subtitle": "Xây dựng vòng lặp phản hồi: Tự thiết kế -> Mã hóa -> AI phản biện -> Kiểm thử thực tế",
    "image": "assets/images/slide-24-coding-logic.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Lập trình thuật toán, cấu trúc dữ liệu và phân tích mã nguồn chuyên sâu",
    "imageAlt": "Màn hình lập trình hiển thị các hàm thuật toán và kiểm thử phần mềm",
    "mediaFit": "cover",
    "points": [
      {
        "icon": "1️⃣",
        "title": "Bước 1: Tự thiết kế thuật toán trước khi mở AI",
        "desc": "Vẽ lưu đồ khối hoặc viết mã giả (Pseudocode). Sinh viên phải nắm rõ luồng dữ liệu vào/ra và độ phức tạp tính toán O(N) mong muốn."
      },
      {
        "icon": "2️⃣",
        "title": "Bước 2: Yêu cầu AI đóng vai Code Reviewer khắt khe",
        "desc": "Thay vì bảo AI 'viết hộ code', hãy hỏi: 'Hãy tìm ra 3 điểm nghẽn hiệu năng và 2 nguy cơ rò rỉ bộ nhớ trong đoạn mã C++ tôi vừa viết'."
      },
      {
        "icon": "3️⃣",
        "title": "Bước 3: Tận dụng AI sinh các ca kiểm thử biên (Edge Cases)",
        "desc": "Yêu cầu AI liệt kê các trường hợp ngoại lệ: mảng rỗng, chuỗi quá dài, giá trị âm, tràn số nguyên INT_MAX, con trỏ nullptr."
      },
      {
        "icon": "4️⃣",
        "title": "Bước 4: Kiểm thử bắt buộc trong Runtime thực tế",
        "desc": "Biên dịch với cờ -Wall -Wextra -fsanitize=address, chạy gdb và kiểm tra rò rỉ bộ nhớ với Valgrind trên hệ điều hành Linux."
      }
    ],
    "highlight": "Mục tiêu của môn học lập trình là rèn luyện tư duy logic cho bạn; AI chỉ là chiếc kính lúp giúp bạn soi rõ các điểm thiếu sót trong mã nguồn.",
    "speakerNotes": "Lời khuyên vàng: Sinh viên hãy lưu lại nhật ký lỗi (Bug Log) do AI chỉ ra để không bao giờ lặp lại lỗi đó trong các kỳ thi thực hành."
  },
  {
    "id": 17,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "standard",
    "tag": "PHƯƠNG PHÁP HỌC TẬP",
    "title": "Phương pháp đọc tài liệu kỹ thuật theo ba lượt",
    "subtitle": "Kỹ năng then chốt để giải mã các chuẩn công nghệ IETF RFC, IEEE Std và bài báo khoa học",
    "image": "assets/images/slide-17-reading-standards.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Đọc tài liệu học thuật và giáo trình chuyên khảo kỹ thuật có phương pháp",
    "imageAlt": "Bàn học với tài liệu nghiên cứu in sẵn và bút dạ đánh dấu",
    "mediaFit": "cover",
    "points": [
      {
        "icon": "🔭",
        "title": "Lượt 1: Quét cấu trúc tổng thể (Surveying - 10 phút)",
        "desc": "Đọc Tiêu đề, Tóm tắt (Abstract), Các đề mục lớn, Biểu đồ và Kết luận. Dùng AI hỗ trợ: 'Tóm tắt trong 3 gạch đầu dòng bài báo này giải quyết bài toán gì và đóng góp mới là gì?'."
      },
      {
        "icon": "🔬",
        "title": "Lượt 2: Nắm bắt chi tiết và cơ chế (Grasping - 1 đến 2 giờ)",
        "desc": "Đọc kỹ phần Phương pháp luận và Kiến trúc hệ thống. Dùng AI làm từ điển tra cứu: 'Giải thích ký hiệu toán học ở phương trình số 3' hoặc 'Giải thích từ viết tắt TLS-PSK theo chuẩn RFC 8446'."
      },
      {
        "icon": "⚖️",
        "title": "Lượt 3: Tái lập và phản biện (Critical Synthesis - Nhiều ngày)",
        "desc": "Đặt câu hỏi nghi vấn: Giả định của tác giả có còn đúng trong thực tế? Tải mã nguồn mở trên GitHub của bài báo về chạy thử nghiệm đối chứng."
      },
      {
        "icon": "📓",
        "title": "Lưu trữ tri thức chủ động",
        "desc": "Tổng hợp lại bằng ngôn từ của chính mình vào hệ thống ghi chú cá nhân (Obsidian, Notion hoặc sổ tay học tập) để tích lũy lâu dài."
      }
    ],
    "highlight": "Đọc tài liệu khoa học là một kỹ năng cần rèn luyện. Đừng đọc từng từ từ đầu đến cuối như đọc truyện tranh; hãy tiếp cận có chiến lược theo 3 lượt.",
    "speakerNotes": "Kỹ năng đọc 3 lượt (Three-pass approach) của GS. Srinivasan Keshav (Đại học Waterloo) là cẩm nang gối đầu giường của mọi nghiên cứu sinh quốc tế."
  },
  {
    "id": 18,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "standard",
    "tag": "PHƯƠNG PHÁP HỌC TẬP",
    "title": "Một khái niệm, ba tầng giải thích",
    "subtitle": "Phương pháp học sâu đa tầng: Từ trực quan đời thường đến chuẩn mực kỹ thuật và toán học",
    "image": "assets/images/slide-18-feynman-concept.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Tiếp cận bản chất khái niệm theo nhiều góc độ nhận thức",
    "imageAlt": "Minh họa quá trình tư duy và giải thích khái niệm khoa học",
    "mediaFit": "cover",
    "points": [
      {
        "icon": "🌟",
        "title": "Tầng 1: Trực quan đời thường (ELI5 - Analogy)",
        "desc": "Yêu cầu AI: 'Hãy giải thích cơ chế Bắt tay 3 bước TCP (Three-way Handshake) bằng phép ẩn dụ cuộc gọi điện thoại'. Giúp não bộ hình thành mô hình tâm trí ban đầu trực quan."
      },
      {
        "icon": "📐",
        "title": "Tầng 2: Chuẩn mực kỹ thuật (Technical Specs)",
        "desc": "Yêu cầu AI: 'Nêu các cờ SYN, ACK, số thứ tự tuần tự Sequence Number và sơ đồ trạng thái kết nối theo tài liệu chuẩn RFC 793'. Giúp sinh viên nắm đúng ngôn ngữ chuyên ngành."
      },
      {
        "icon": "⚙️",
        "title": "Tầng 3: Bản chất toán học và ranh giới hệ thống (Deep Mechanics)",
        "desc": "Yêu cầu AI: 'Phân tích bài toán Byzantine Generals, nguy cơ tấn công SYN Flood và kỹ thuật SYN Cookies chống từ chối dịch vụ'. Đạt tới tầm mức chuyên gia bảo mật."
      },
      {
        "icon": "🔄",
        "title": "Vòng lặp đối chiếu và thẩm thấu",
        "desc": "Tự kiểm tra xem mình có thể chuyển dịch nhịp nhàng giữa cả 3 tầng này khi thuyết trình trước người khác hay không."
      }
    ],
    "highlight": "Khi học một khái niệm kỹ thuật mới, hãy luôn yêu cầu AI giải thích ở cả 3 tầng để vừa hiểu trực quan, vừa nắm vững ngôn ngữ kỹ thuật chuẩn xác.",
    "speakerNotes": "Nhắc nhở: Khi đi thi vấn đáp hoặc phỏng vấn xin việc, trả lời được ở cả Tầng 2 và Tầng 3 sẽ giúp bạn đạt điểm tuyệt đối trước hội đồng."
  },
  {
    "id": 19,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "standard",
    "tag": "KỸ THUẬT PROMPTING",
    "title": "Cấu trúc một yêu cầu (Prompt) hiệu quả",
    "subtitle": "Áp dụng khung công thức CLEAR để tối ưu hóa độ chính xác và tính chuyên nghiệp của câu trả lời",
    "image": "assets/images/slide-17-prompt-framework.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Khung công thức thiết kế câu lệnh chuẩn mực cho kỹ sư công nghệ",
    "imageAlt": "Sơ đồ cấu trúc câu lệnh prompt với các trường thông tin rõ ràng",
    "mediaFit": "cover",
    "points": [
      {
        "icon": "C",
        "title": "C - Context (Bối cảnh & Vai trò)",
        "desc": "Xác định rõ vai trò chuyên môn: 'Bạn là giảng viên hướng dẫn môn An toàn mạng tại KMA... đang hướng dẫn sinh viên năm thứ hai'."
      },
      {
        "icon": "L",
        "title": "L - Limits (Ràng buộc kỹ thuật khắt khe)",
        "desc": "Nêu rõ điều kiện biên: 'Chỉ sử dụng thư viện chuẩn C++17, không dùng thư viện ngoài, tối ưu hóa bộ nhớ RAM, mã nguồn dưới 50 dòng'."
      },
      {
        "icon": "E",
        "title": "E - Expected Output (Định dạng mong muốn)",
        "desc": "Yêu cầu cấu trúc đầu ra: 'Trình bày dưới dạng bảng so sánh Markdown gồm 4 cột: Tiêu chí, Thuật toán RSA, Thuật toán ECC, và Đánh giá hiệu năng'."
      },
      {
        "icon": "A",
        "title": "A - Action (Hành động mệnh lệnh cụ thể)",
        "desc": "Động từ rõ ràng: 'Phân tích, chỉ ra 3 lỗ hổng bảo mật tiềm ẩn trong đoạn code sau và đề xuất phương án vá lỗi cụ thể'."
      },
      {
        "icon": "R",
        "title": "R - Reference Data (Dữ liệu đính kèm kiểm chứng)",
        "desc": "Cung cấp trực tiếp đoạn code lỗi, bảng thông số hoặc đoạn trích tài liệu để AI bám sát dữ kiện, không để AI suy đoán tự do."
      }
    ],
    "highlight": "Chất lượng câu trả lời của AI phản ánh chính xác chất lượng câu hỏi của bạn. Kỹ năng giao tiếp với AI là kỹ năng mềm sống còn của kỹ sư thế kỷ 21.",
    "speakerNotes": "Gợi ý sinh viên tạo một file Prompt Template riêng trong máy để dùng lại hàng ngày khi học các môn lập trình và mạng máy tính."
  },
  {
    "id": 20,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "comparison",
    "tag": "KỸ THUẬT PROMPTING",
    "title": "Đối chiếu: Yêu cầu mơ hồ và Yêu cầu có cấu trúc",
    "subtitle": "So sánh kết quả đầu ra giữa câu lệnh tùy tiện và câu lệnh kỹ thuật chuẩn mực",
    "image": "assets/images/slide-16-prompt-comparison.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Thử nghiệm đối chiếu kết quả giữa prompt yếu và prompt xuất sắc",
    "imageAlt": "So sánh hai bảng kết quả đầu ra của mô hình ngôn ngữ lớn",
    "mediaFit": "cover",
    "comparison": {
      "leftTitle": "Yêu cầu sơ sài / Mơ hồ (Poor Prompt)",
      "leftSubtitle": "Thiếu bối cảnh, không có ràng buộc kỹ thuật",
      "leftItems": [
        "Câu lệnh: 'Viết cho tôi hàm kiểm tra mật khẩu trong C++.'",
        "Thiếu bối cảnh: Không rõ chuẩn an toàn nào, phiên bản C++ nào.",
        "Thiếu tiêu chí: Không quy định độ dài, ký tự đặc biệt, xử lý ngoại lệ.",
        "Kết quả nhận được: Đoạn code mẫu sơ sài dùng cin/cout, dễ bị tràn bộ nhớ đệm.",
        "Mã nguồn không an toàn, không thể dùng trong đồ án thực tế tại KMA."
      ],
      "rightTitle": "Yêu cầu kỹ thuật chuẩn mực (Engineered Prompt)",
      "rightSubtitle": "Áp dụng đầy đủ khung CLEAR chuyên nghiệp",
      "rightItems": [
        "Câu lệnh: 'Đóng vai kỹ sư ATTT KMA, hãy viết hàm C++20 validatePassword theo chuẩn NIST SP 800-63B. Ràng buộc: độ dài >= 12, kiểm tra ký tự đa dạng, không lưu plaintext trong RAM, kèm 5 unit tests với Google Test.'",
        "Kết quả nhận được: Mã nguồn C++20 chuẩn mực dùng std::string_view.",
        "Có xử lý ngoại lệ an toàn, xóa vùng nhớ nhạy cảm sau khi dùng.",
        "Có sẵn bộ kiểm thử Google Test hoàn chỉnh, sẵn sàng biên dịch ngay."
      ]
    },
    "highlight": "Một prompt chuẩn kỹ sư tiết kiệm 90% thời gian chỉnh sửa lại mã nguồn và loại bỏ nguy cơ đưa mã độc/mã lỗi vào hệ thống.",
    "speakerNotes": "Lấy ví dụ trực tiếp: Prompt bên phải nhận được câu trả lời chất lượng tương đương với tài liệu của một kỹ sư bảo mật 5 năm kinh nghiệm."
  },
  {
    "id": 21,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "standard",
    "tag": "PHƯƠNG PHÁP HỌC TẬP",
    "title": "Kỹ thuật Feynman: Học sâu qua giảng dạy cùng AI",
    "subtitle": "Phương pháp 4 bước làm chủ mọi khái niệm phức tạp bằng cách biến AI thành bạn phản biện",
    "image": "assets/images/slide-21-feynman-real.png",
    "onlineImage": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Sơ đồ 4 bước phương pháp học tập Feynman (The Feynman Learning Technique)",
    "imageAlt": "Sơ đồ trực quan 4 bước Feynman method",
    "mediaFit": "contain",
    "points": [
      {
        "icon": "1️⃣",
        "title": "Bước 1: Chọn khái niệm và tự diễn giải",
        "desc": "Viết một đoạn văn ngắn tự giải thích khái niệm (ví dụ: 'Cơ chế hoạt động của Hàm băm mật mã SHA-256') bằng ngôn ngữ đơn giản nhất của chính mình."
      },
      {
        "icon": "2️⃣",
        "title": "Bước 2: Yêu cầu AI đóng vai người nghe phản biện",
        "desc": "Nạp đoạn văn cho AI với câu lệnh: 'Tôi đang giải thích khái niệm này. Hãy đóng vai một tân sinh viên tò mò, hãy chỉ ra 3 điểm tôi giải thích còn mơ hồ hoặc thiếu chính xác'."
      },
      {
        "icon": "3️⃣",
        "title": "Bước 3: Lấp đầy các lỗ hổng tri thức",
        "desc": "Khi AI chỉ ra điểm bạn chưa rõ (ví dụ: cơ chế nén Merkle–Damgård), quay lại đọc tài liệu giáo trình gốc để bổ sung kiến thức thiếu hụt."
      },
      {
        "icon": "4️⃣",
        "title": "Bước 4: Tinh chỉnh và đơn giản hóa bằng phép ẩn dụ",
        "desc": "Viết lại lần hai súc tích hơn, dùng phép so sánh độc đáo và kiểm tra lại lần cuối với AI để khắc sâu vào trí nhớ dài hạn."
      }
    ],
    "highlight": "Nếu bạn không thể giải thích một khái niệm kỹ thuật cho người khác hiểu một cách đơn giản, nghĩa là bạn vẫn chưa thực sự hiểu sâu khái niệm đó.",
    "speakerNotes": "Phương pháp Feynman do nhà vật lý đoạt giải Nobel Richard Feynman khởi xướng. AI chính là người học trò kiên nhẫn nhất thế giới để bạn luyện tập."
  },
  {
    "id": 22,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "standard",
    "tag": "CÔNG CỤ HỌC TẬP",
    "title": "Ôn tập bằng Lặp lại ngắt quãng (Spaced Repetition) và Anki",
    "subtitle": "Khắc phục đường cong lãng quên Ebbinghaus bằng việc kết hợp AI và thuật toán FSRS",
    "image": "assets/visuals/anki.png",
    "onlineImage": "https://apps.ankiweb.net/",
    "imageCaption": "Giao diện phần mềm Anki - công cụ ghi nhớ dài hạn hàng đầu thế giới",
    "imageAlt": "Thống kê chu kỳ ôn tập và các thẻ ghi nhớ flashcards trên Anki",
    "mediaFit": "contain",
    "points": [
      {
        "icon": "📉",
        "title": "Quy luật đường cong lãng quên Ebbinghaus",
        "desc": "70% lượng kiến thức mới học sẽ bị quên sau 48 giờ nếu không có hoạt động truy hồi chủ động (Active Recall) đúng các điểm ngắt thời gian."
      },
      {
        "icon": "🤖",
        "title": "Dùng AI tạo bộ thẻ Anki tự động",
        "desc": "Cung cấp giáo trình cho AI và yêu cầu: 'Tạo 20 thẻ Anki định dạng CSV (Front, Back) về các giao thức tầng Transport (TCP/UDP), chú trọng câu hỏi ngắn và bài toán biên'."
      },
      {
        "icon": "🎯",
        "title": "Nguyên tắc thiết kế thẻ hiệu quả (Minimum Information)",
        "desc": "Mỗi thẻ chỉ hỏi duy nhất 1 ý cốt lõi. Tránh làm thẻ dạng đoạn văn dài lê thê khiến não bộ quá tải và khó đánh giá mức độ nhớ."
      },
      {
        "icon": "⏰",
        "title": "Kỷ luật 15 phút mỗi ngày",
        "desc": "Duy trì thói quen mở Anki trên điện thoại ôn bài mỗi sáng để biến tri thức ngắn hạn thành phản xạ nghề nghiệp dài hạn."
      }
    ],
    "highlight": "AI giúp bạn tạo 100 thẻ flashcards chất lượng cao chỉ trong 30 giây; việc duy trì ôn tập hàng ngày là cam kết kỷ luật của riêng bạn.",
    "speakerNotes": "Khuyên sinh viên KMA nên cài ngay Anki trên điện thoại và máy tính, dùng đồng bộ hóa AnkiWeb để học từ vựng tiếng Anh và thuật ngữ mạng."
  },
  {
    "id": 23,
    "sectionId": 1,
    "sectionName": "Chương 1: Ứng dụng AI trong học tập",
    "type": "standard",
    "tag": "TÀI LIỆU CHUẨN",
    "title": "Đọc tài liệu chuẩn quốc tế bằng tiếng Anh chuyên ngành",
    "subtitle": "Phân tích chuẩn IETF RFC 8446 (TLS 1.3) và phương pháp đọc hiểu văn bản pháp quy kỹ thuật",
    "image": "assets/visuals/rfc-editor.png",
    "onlineImage": "https://www.rfc-editor.org/rfc/rfc8446.html",
    "imageCaption": "Trang chuẩn RFC 8446 của IETF quy định giao thức bảo mật tầng truyền vận TLS 1.3",
    "imageAlt": "Văn bản kỹ thuật chuẩn RFC Editor với các đề mục và định dạng chuẩn hóa",
    "mediaFit": "contain",
    "points": [
      {
        "icon": "🌐",
        "title": "Vai trò của chuẩn quốc tế IETF RFC và IEEE",
        "desc": "Toàn bộ mạng Internet toàn cầu vận hành dựa trên các chuẩn này. Kỹ sư CNTT/ATTT giỏi bắt buộc phải đọc được tài liệu gốc tiếng Anh."
      },
      {
        "icon": "🗣️",
        "title": "Dùng AI làm trợ lý dịch thuật thuật ngữ",
        "desc": "Khi gặp các thuật ngữ khó như 'Zero Round Trip Time (0-RTT)', 'Diffie-Hellman Ephemeral', yêu cầu AI giải thích cơ chế và so sánh với phiên bản TLS 1.2 cũ."
      },
      {
        "icon": "⚖️",
        "title": "Tập trung vào các từ khóa quy chuẩn (RFC 2119)",
        "desc": "Chú ý các từ khóa mang tính pháp lý kỹ thuật: MUST (bắt buộc), SHOULD (khuyến nghị), MAY (tùy chọn) để không hiểu sai logic triển khai hệ thống."
      },
      {
        "icon": "📚",
        "title": "Xây dựng vốn từ vựng chuyên ngành cá nhân",
        "desc": "Ghi lại các mẫu câu học thuật thường gặp để áp dụng khi viết tài liệu thiết kế phần mềm hoặc bài báo nghiên cứu khoa học sau này."
      }
    ],
    "highlight": "Đừng sợ đọc tiếng Anh kỹ thuật; với sự hỗ trợ giải nghĩa của AI, sinh viên năm nhất hoàn toàn có thể đọc hiểu các chuẩn công nghệ quốc tế.",
    "speakerNotes": "Cho sinh viên xem trực tiếp RFC 8446: Đây là giao thức bảo vệ toàn bộ giao dịch ngân hàng và web HTTPS hiện nay."
  },
  {
    "id": 24,
    "sectionId": 2,
    "sectionName": "Chương 2: Ứng dụng AI trong nghiên cứu",
    "type": "pipeline",
    "tag": "QUY TRÌNH NGHIÊN CỨU",
    "title": "Quy trình nghiên cứu khoa học và vị trí của AI",
    "subtitle": "5 giai đoạn nghiên cứu thực chứng và cách ứng dụng AI có trách nhiệm ở từng bước",
    "image": "assets/images/slide-27-what-is-research.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Nghiên cứu khoa học trong môi trường đại học và viện nghiên cứu",
    "imageAlt": "Không gian nghiên cứu khoa học với tài liệu và thiết bị phân tích",
    "mediaFit": "cover",
    "pipeline": {
      "steps": [
        {
          "stepNum": "01",
          "title": "Khám phá ý tưởng",
          "tool": "Connected Papers, AI Chat",
          "desc": "Đọc tổng quan các bài báo mới nhất, phát hiện khoảng trống nghiên cứu (Research Gap).",
          "output": "Câu hỏi nghiên cứu (Research Question) rõ ràng và khả thi."
        },
        {
          "stepNum": "02",
          "title": "Tổng quan tài liệu",
          "tool": "Semantic Scholar, NotebookLM",
          "desc": "Thu thập 20-30 bài báo uy tín, trích xuất ma trận so sánh các phương pháp đã có.",
          "output": "Bảng tổng quan trạng thái nghiên cứu (State-of-the-Art)."
        },
        {
          "stepNum": "03",
          "title": "Thiết kế & Thực nghiệm",
          "tool": "Python, PyTorch, Lab KMA",
          "desc": "Xây dựng mô hình, viết mã nguồn giải thuật, thu thập bộ dữ liệu kiểm thử.",
          "output": "Mã nguồn hoàn chỉnh, bộ log thực nghiệm và biểu đồ đo lường."
        },
        {
          "stepNum": "04",
          "title": "Phân tích & Thẩm định",
          "tool": "Pandas, Scipy, Valgrind",
          "desc": "Kiểm định thống kê, phân tích sai số, đánh giá độ trễ và độ an toàn.",
          "output": "Bảng số liệu định lượng có ý nghĩa thống kê (p < 0.05)."
        },
        {
          "stepNum": "05",
          "title": "Công bố & Báo cáo",
          "tool": "Overleaf LaTeX, Zotero",
          "desc": "Viết bài báo chuẩn IEEE/ACM, tạo slide thuyết trình, bảo vệ trước hội đồng.",
          "output": "Bài báo khoa học hoàn chỉnh kèm tuyên bố minh bạch sử dụng AI."
        }
      ]
    },
    "highlight": "AI hỗ trợ tăng tốc ở tất cả các khâu kỹ thuật, nhưng con người là người định hướng đề tài, thiết kế thí nghiệm và chịu trách nhiệm về kết quả.",
    "speakerNotes": "Giới thiệu chương 2: Chuyển từ việc dùng AI học bài hàng ngày sang dùng AI làm công cụ hỗ trợ nghiên cứu khoa học sinh viên và làm đồ án tốt nghiệp."
  },
  {
    "id": 25,
    "sectionId": 2,
    "sectionName": "Chương 2: Ứng dụng AI trong nghiên cứu",
    "type": "standard",
    "tag": "TÌM KIẾM TÀI LIỆU",
    "title": "Tìm kiếm tài liệu học thuật với Semantic Scholar",
    "subtitle": "Khai thác đồ thị tri thức khoa học và chỉ số trích dẫn có ảnh hưởng thực chất",
    "image": "assets/visuals/semantic-scholar.png",
    "onlineImage": "https://www.semanticscholar.org/",
    "imageCaption": "Giao diện công cụ tìm kiếm học thuật ứng dụng AI Semantic Scholar",
    "imageAlt": "Trang tìm kiếm bài báo với các bộ lọc năm, tác giả và chỉ số Highly Influential Citations",
    "mediaFit": "contain",
    "points": [
      {
        "icon": "⭐",
        "title": "Chỉ số trích dẫn có tầm ảnh hưởng (Highly Influential Citations)",
        "desc": "AI của Semantic Scholar lọc bỏ các trích dẫn mang tính liệt kê hình thức, chỉ đếm các bài báo thực sự sử dụng phương pháp hoặc kế thừa kết quả của tác giả."
      },
      {
        "icon": "⚡",
        "title": "Trích xuất tóm tắt tự động (TLDR)",
        "desc": "Tóm tắt 1 câu ngắn gọn bản chất đóng góp của bài báo, giúp sinh viên quét nhanh 50 bài báo trong 15 phút mà không mất thời gian đọc toàn văn."
      },
      {
        "icon": "🔍",
        "title": "Bộ lọc chuyên sâu cho ngành máy tính",
        "desc": "Lọc theo chuyên ngành (Computer Science, Cryptography), mã nguồn mở đính kèm (has GitHub code) và tài liệu mở (Open Access PDF)."
      },
      {
        "icon": "🔔",
        "title": "Khởi tạo cảnh báo học thuật (Research Feeds)",
        "desc": "Theo dõi các hướng nghiên cứu then chốt để nhận thông báo bài báo mới nhất từ các hội nghị đầu ngành (CVPR, USENIX, CCS, ICML)."
      }
    ],
    "highlight": "Bỏ thói quen tìm tài liệu bằng Google thông thường; hãy bắt đầu nghiên cứu bằng các công cụ chuyên dụng như Semantic Scholar và Google Scholar.",
    "speakerNotes": "Hướng dẫn sinh viên: Khi chọn đề tài NCKH, hãy tìm các bài báo có mã nguồn GitHub để có thể chạy thử nghiệm đối chứng ngay lập tức."
  },
  {
    "id": 26,
    "sectionId": 2,
    "sectionName": "Chương 2: Ứng dụng AI trong nghiên cứu",
    "type": "standard",
    "tag": "TỔNG QUAN TÀI LIỆU",
    "title": "Khám phá mạng lưới bài báo với Connected Papers",
    "subtitle": "Trực quan hóa đồ thị đồng trích dẫn và phát hiện các công trình nền tảng",
    "image": "assets/visuals/connected-papers.png",
    "onlineImage": "https://www.connectedpapers.com/",
    "imageCaption": "Đồ thị trực quan hóa quan hệ giữa các bài báo khoa học trên Connected Papers",
    "imageAlt": "Mạng lưới các nút tròn liên kết biểu diễn các bài báo tương đồng về học thuật",
    "mediaFit": "contain",
    "points": [
      {
        "icon": "🕸️",
        "title": "Đồ thị tương đồng học thuật (Similarity Graph)",
        "desc": "Không chỉ dựa trên chuỗi trích dẫn trực tiếp mà sử dụng độ tương đồng vector trong không gian khái niệm; bài báo tương đồng nằm gần nhau."
      },
      {
        "icon": "⚪",
        "title": "Kích thước và độ đậm của nút",
        "desc": "Nút càng lớn thể hiện số lượng trích dẫn càng cao; nút màu càng đậm thể hiện bài báo được xuất bản càng gần thời điểm hiện tại."
      },
      {
        "icon": "🏛️",
        "title": "Tìm kiếm công trình nền tảng (Prior Works)",
        "desc": "Tự động chỉ ra các bài báo cổ điển quan trọng nhất mà hầu hết các bài báo trong đồ thị đều phải kế thừa và trích dẫn."
      },
      {
        "icon": "🚀",
        "title": "Khám phá hướng phát triển mới (Derivative Works)",
        "desc": "Tìm các công trình mới nhất được phát triển tiếp nối từ hướng nghiên cứu này trong vòng 1-2 năm gần đây."
      }
    ],
    "highlight": "Connected Papers giúp sinh viên nắm trọn bức tranh toàn cảnh của một nhánh nghiên cứu chỉ sau 5 phút quan sát đồ thị trực quan.",
    "speakerNotes": "Minh họa thao tác: Nhập bài báo 'Attention Is All You Need', Connected Papers sẽ vẽ ra toàn bộ hệ sinh thái mô hình ngôn ngữ lớn chỉ trong vài giây."
  },
  {
    "id": 27,
    "sectionId": 2,
    "sectionName": "Chương 2: Ứng dụng AI trong nghiên cứu",
    "type": "standard",
    "tag": "PHƯƠNG PHÁP ĐỌC BÀI BÁO",
    "title": "Đọc bài báo khoa học theo cấu trúc IMRAD",
    "subtitle": "Phân tích bài báo kinh điển 'Attention Is All You Need' (Transformer) trên arXiv",
    "image": "assets/visuals/arxiv-transformer.png",
    "onlineImage": "https://arxiv.org/abs/1706.03762",
    "imageCaption": "Bài báo lịch sử 'Attention Is All You Need' trên hệ thống xuất bản mở arXiv",
    "imageAlt": "Tiêu đề bài báo của nhóm nghiên cứu Google Brain giới thiệu kiến trúc Transformer",
    "mediaFit": "contain",
    "points": [
      {
        "icon": "📜",
        "title": "Cấu trúc kinh điển IMRAD",
        "desc": "Introduction (Đặt vấn đề & Khoảng trống), Methods (Phương pháp đề xuất), Results (Kết quả đo kiểm thực nghiệm), and Discussion (Thảo luận & Hạn chế)."
      },
      {
        "icon": "🎯",
        "title": "Cách đọc phần Giới thiệu (Introduction)",
        "desc": "Tìm câu trả lời cho hai câu hỏi quyết định: 'Phương pháp cũ (RNN/CNN) gặp bế tắc ở đâu?' và 'Đóng góp mới cốt lõi (Novelty) của tác giả là gì?'."
      },
      {
        "icon": "📐",
        "title": "Phân tích phần Phương pháp (Methods / Architecture)",
        "desc": "Tập trung vào công thức toán học cốt lõi (ví dụ: Softmax(QK^T / √d_k)V) và sơ đồ khối luồng dữ liệu giữa Encoder và Decoder."
      },
      {
        "icon": "📊",
        "title": "Đánh giá phần Thực nghiệm (Results & Experiments)",
        "desc": "Xem xét tập dữ liệu chuẩn (Benchmark: WMT 2014), cấu hình phần cứng đo kiểm (8 GPU P100) và thước đo định lượng (BLEU score)."
      }
    ],
    "highlight": "Một bài báo hay luôn có cấu trúc lập luận chặt chẽ: Nêu rõ bài toán -> Chứng minh giải pháp cũ chưa tốt -> Đề xuất giải pháp mới -> Thực nghiệm số liệu thuyết phục.",
    "speakerNotes": "Phân tích bài báo Transformer: Tác giả chỉ ra RNN không thể tính toán song song, và họ đề xuất loại bỏ hoàn toàn RNN để dùng cơ chế Self-Attention."
  },
  {
    "id": 28,
    "sectionId": 2,
    "sectionName": "Chương 2: Ứng dụng AI trong nghiên cứu",
    "type": "standard",
    "tag": "LIÊM CHÍNH HỌC THUẬT",
    "title": "Xác thực nguồn trích dẫn bằng mã định danh DOI",
    "subtitle": "Nhận diện và loại bỏ cạm bẫy bài báo ma do AI tự bịa đặt trong danh mục tài liệu tham khảo",
    "image": "assets/visuals/doi.png",
    "onlineImage": "https://www.doi.org/the-identifier/what-is-a-doi/",
    "imageCaption": "Trang tra cứu hệ thống mã định danh đối tượng số toàn cầu (doi.org)",
    "imageAlt": "Giao diện giải mã DOI dẫn tới trang xuất bản chính thức của nhà xuất bản",
    "mediaFit": "contain",
    "points": [
      {
        "icon": "🆔",
        "title": "Mã định danh DOI (Digital Object Identifier)",
        "desc": "Chuỗi định danh số học vĩnh viễn duy nhất cho mọi tài liệu học thuật chuẩn quốc tế (ví dụ: 10.1145/3318464.3389700 do ACM/IEEE cấp)."
      },
      {
        "icon": "🔗",
        "title": "Cơ chế kiểm tra tính xác thực",
        "desc": "Gõ https://doi.org/[chuỗi_DOI] vào trình duyệt; nếu dẫn thẳng đến trang xuất bản chính thức trên IEEE, Springer, ACM thì nguồn đó là có thật."
      },
      {
        "icon": "⚠️",
        "title": "Cảnh giác với trích dẫn do AI sinh ra",
        "desc": "LLM thường xuyên bịa ra tên bài báo rất kêu kèm tên các giáo sư nổi tiếng nhưng mã DOI không tồn tại hoặc trỏ đến một bài báo hoàn toàn khác."
      },
      {
        "icon": "🛡️",
        "title": "Nguyên tắc liêm chính học thuật bất biến",
        "desc": "Tuyệt đối không đưa vào danh mục Tài liệu tham khảo bất kỳ nguồn nào mà bạn chưa tận mắt mở file PDF ra đọc và đối chiếu mã DOI."
      }
    ],
    "highlight": "Trong nghiên cứu khoa học, một trích dẫn ma (fake citation) có thể hủy hoại toàn bộ danh dự học thuật của tác giả và khiến đồ án bị đánh trượt ngay lập tức.",
    "speakerNotes": "Cảnh báo sinh viên: Các phần mềm chống đạo văn và giáo viên phản biện luôn click thử vào các link DOI trong danh mục tài liệu tham khảo để kiểm tra."
  },
  {
    "id": 29,
    "sectionId": 2,
    "sectionName": "Chương 2: Ứng dụng AI trong nghiên cứu",
    "type": "standard",
    "tag": "PHÂN TÍCH DỮ LIỆU",
    "title": "AI hỗ trợ phân tích và trực quan hóa dữ liệu",
    "subtitle": "Tăng tốc chu trình khoa học dữ liệu: Làm sạch, phân tích thống kê và vẽ biểu đồ chuẩn IEEE",
    "image": "assets/images/slide-29-data-analytics.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Phân tích dữ liệu thực nghiệm và xây dựng biểu đồ nghiên cứu khoa học",
    "imageAlt": "Màn hình máy tính hiển thị biểu đồ phân tích dữ liệu và số liệu thống kê",
    "mediaFit": "cover",
    "points": [
      {
        "icon": "🧹",
        "title": "Viết script làm sạch dữ liệu tự động",
        "desc": "Dùng AI viết mã Python (Pandas/Polars) để xử lý dữ liệu bị khuyết thiếu (Missing values), loại bỏ giá trị dị biệt (Outliers) và chuẩn hóa định dạng."
      },
      {
        "icon": "📐",
        "title": "Phân tích thống kê suy luận",
        "desc": "Yêu cầu AI gợi ý các phép kiểm định thống kê phù hợp (t-test, ANOVA, Mann-Whitney U test) để chứng minh sự cải tiến thuật toán có ý nghĩa thực chất (p < 0.05)."
      },
      {
        "icon": "📊",
        "title": "Vẽ biểu đồ khoa học chuẩn mực (Matplotlib/Seaborn)",
        "desc": "Sinh mã vẽ đồ thị độ phân giải cao 300 DPI, phối màu tương phản cho in đen trắng, ghi nhãn trục có đơn vị rõ ràng và thanh sai số (Error bars)."
      },
      {
        "icon": "⚖️",
        "title": "Tránh ngụy biện dữ liệu (Data Bias)",
        "desc": "Luôn kiểm tra lại mã nguồn phân tích AI viết; không để AI chọn lọc thiên lệch (cherry-picking) số liệu để làm đẹp kết quả nghiên cứu."
      }
    ],
    "highlight": "Đồ thị khoa học đẹp và chính xác là bằng chứng đắt giá nhất chứng minh tính hiệu quả của đề tài nghiên cứu trước hội đồng phản biện.",
    "speakerNotes": "Hướng dẫn thực tế: Xuất đồ thị định dạng vector PDF hoặc SVG từ Python để chèn vào LaTeX, đảm bảo phóng to không bao giờ bị vỡ nét."
  },
  {
    "id": 30,
    "sectionId": 2,
    "sectionName": "Chương 2: Ứng dụng AI trong nghiên cứu",
    "type": "standard",
    "tag": "SOẠN THẢO BÀI BÁO",
    "title": "Soạn thảo bài báo khoa học với LaTeX và Overleaf",
    "subtitle": "Chuẩn hóa văn bản học thuật quốc tế và giải quyết bài toán định dạng công thức phức tạp",
    "image": "assets/visuals/overleaf.png",
    "onlineImage": "https://www.overleaf.com/",
    "imageCaption": "Giao diện trình soạn thảo LaTeX đám mây Overleaf dùng chung trong giới nghiên cứu",
    "imageAlt": "Màn hình chia đôi: mã nguồn LaTeX bên trái và bài báo PDF chuẩn IEEE bên phải",
    "mediaFit": "contain",
    "points": [
      {
        "icon": "📄",
        "title": "Chuẩn mực xuất bản quốc tế IEEE/ACM",
        "desc": "Tất cả các hội thảo và tạp chí uy tín đều yêu cầu nộp bài bằng template LaTeX chính thức, đảm bảo định dạng 2 cột đồng nhất và chuyên nghiệp."
      },
      {
        "icon": "📚",
        "title": "Quản lý trích dẫn tự động qua BibTeX",
        "desc": "Không bao giờ gõ danh mục tài liệu tham khảo thủ công; toàn bộ metadata được lưu trong file .bib và tự động đánh số thứ tự trong bài."
      },
      {
        "icon": "∑",
        "title": "Dùng AI hỗ trợ viết công thức toán LaTeX",
        "desc": "Thay vì gõ tay ma trận hay tích phân nhiều tầng phức tạp, chụp ảnh công thức và yêu cầu AI chuyển thành mã LaTeX chuẩn xác."
      },
      {
        "icon": "🛠️",
        "title": "Gỡ lỗi biên dịch nhanh chóng",
        "desc": "Copy các thông báo lỗi biên dịch LaTeX hóc búa đưa cho AI để được hướng dẫn sửa lỗi thiếu package, thừa dấu ngoặc hoặc cú pháp bảng."
      }
    ],
    "highlight": "Overleaf giúp sinh viên tách bạch phần nội dung và phần định dạng; bạn chỉ cần tập trung vào ý tưởng khoa học, LaTeX sẽ lo phần trình bày đẹp không tì vết.",
    "speakerNotes": "Kêu gọi tân sinh viên KMA: Hãy làm quen với Overleaf ngay từ năm nhất để viết báo cáo môn học, bạn sẽ vượt trội so với việc dùng Word."
  },
  {
    "id": 31,
    "sectionId": 2,
    "sectionName": "Chương 2: Ứng dụng AI trong nghiên cứu",
    "type": "comparison",
    "tag": "BIÊN TẬP HỌC THUẬT",
    "title": "Chuyển đổi: Từ bản nháp AI sang văn phong học thuật",
    "subtitle": "Kỹ năng biên tập và chuẩn hóa câu chữ theo phong cách khách quan, định lượng và chính xác",
    "image": "assets/images/slide-31-literature-review.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Quá trình biên tập và thẩm định văn phong bài báo khoa học",
    "imageAlt": "Bản thảo tài liệu nghiên cứu với các ghi chú chỉnh sửa học thuật",
    "mediaFit": "cover",
    "comparison": {
      "leftTitle": "Văn phong AI sinh tự động (Cảm tính / Tiếp thị)",
      "leftSubtitle": "Thường gặp khi nạp prompt chung chung cho ChatGPT",
      "leftItems": [
        "'Thuật toán đột phá này mang lại hiệu năng vô cùng kinh ngạc và giải quyết triệt để mọi vấn đề bảo mật hiện nay.'",
        "Dùng từ ngữ cảm thán, giật gân (groundbreaking, incredible, revolutionary).",
        "Khẳng định tuyệt đối mà không có số liệu chứng minh cụ thể.",
        "Câu chữ dài dòng, lặp từ, thiếu trích dẫn khoa học đối chứng.",
        "Dễ bị các thầy cô phản biện đánh giá là thiếu nghiêm túc khoa học."
      ],
      "rightTitle": "Văn phong học thuật chuẩn mực (Khách quan / Định lượng)",
      "rightSubtitle": "Sau khi nghiên cứu sinh biên tập và chuẩn hóa",
      "rightItems": [
        "'Kết quả thực nghiệm trên bộ dữ liệu KDD99 cho thấy phương pháp đề xuất giảm tỷ lệ cảnh báo giả 14.2% so với mô hình Random Forest (Smith et al., 2023), với độ trễ xử lý trung bình 1.2ms.'",
        "Khách quan, trung thực, định lượng bằng số đo cụ thể.",
        "Giới hạn rõ ràng phạm vi áp dụng và đối chiếu có nguồn trích dẫn.",
        "Sử dụng đại từ nhân danh phù hợp và cấu trúc câu gãy gọn."
      ]
    },
    "highlight": "Nghiên cứu khoa học không chấp nhận từ ngữ hoa mỹ cảm tính. Mọi kết luận đều phải gắn liền với số liệu đo kiểm cụ thể và điều kiện thực nghiệm rõ ràng.",
    "speakerNotes": "Lưu ý quan trọng: Hội đồng khoa học rất dị ứng với các từ như 'vô cùng hoàn hảo', 'đột phá chưa từng có'. Hãy để số liệu tự nói lên giá trị."
  },
  {
    "id": 32,
    "sectionId": 2,
    "sectionName": "Chương 2: Ứng dụng AI trong nghiên cứu",
    "type": "standard",
    "tag": "CHUẨN MỰC THỰC NGHIỆM",
    "title": "Khả năng tái lập của một kết quả nghiên cứu (Reproducibility)",
    "subtitle": "Tiêu chuẩn vàng của khoa học thực chứng: Người khác chạy lại mã nguồn phải ra đúng kết quả",
    "image": "assets/images/slide-33-case-study.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Thực nghiệm khoa học, mã nguồn mở và khả năng tái lập kết quả nghiên cứu",
    "imageAlt": "Nhóm sinh viên kỹ thuật thực hiện kiểm thử và kiểm tra mã nguồn hệ thống",
    "mediaFit": "cover",
    "points": [
      {
        "icon": "🚨",
        "title": "Khủng hoảng tái lập trong nghiên cứu AI",
        "desc": "Hơn 50% bài báo AI không thể tái lập kết quả do thiếu mã nguồn, thiếu bộ tham số siêu hình (Hyperparameters) hoặc dữ liệu bị giấu kín."
      },
      {
        "icon": "🎲",
        "title": "Cố định hạt giống ngẫu nhiên (Random Seed)",
        "desc": "Luôn thiết lập seed trong Python/PyTorch (torch.manual_seed(42)) để đảm bảo quá trình chia dữ liệu và khởi tạo trọng số luôn cho kết quả đồng nhất."
      },
      {
        "icon": "🐳",
        "title": "Đóng gói môi trường thực thi (Docker & Requirements)",
        "desc": "Lưu lại phiên bản chính xác của mọi thư viện trong requirements.txt hoặc Dockerfile để bất kỳ ai cũng có thể dựng lại môi trường lab nhanh chóng."
      },
      {
        "icon": "🐙",
        "title": "Công bố mã nguồn và dữ liệu công khai",
        "desc": "Đẩy mã nguồn lên GitHub/Zenodo kèm file README.md hướng dẫn chi tiết từng dòng lệnh chạy lại từ đầu đến cuối."
      }
    ],
    "highlight": "Một nghiên cứu không thể tái lập là một nghiên cứu vô giá trị. Tính trung thực và minh bạch của mã nguồn là danh dự của người làm kỹ thuật.",
    "speakerNotes": "Nhắc nhở: Khi chấm đồ án tốt nghiệp tại KMA, các thầy cô thường yêu cầu sinh viên chạy trực tiếp mã nguồn trên máy lab để đối chiếu kết quả trong báo cáo."
  },
  {
    "id": 33,
    "sectionId": 2,
    "sectionName": "Chương 2: Ứng dụng AI trong nghiên cứu",
    "type": "matrix",
    "tag": "ĐẠO ĐỨC XUẤT BẢN",
    "title": "Minh bạch khi sử dụng AI trong nghiên cứu",
    "subtitle": "Tuân thủ hướng dẫn liêm chính học thuật của IEEE, ACM và các trường đại học hàng đầu",
    "image": "assets/images/slide-34-academic-integrity.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Liêm chính học thuật và quy chuẩn minh bạch trong xuất bản khoa học",
    "imageAlt": "Tòa án học thuật và các quy định bảo vệ đạo đức nghiên cứu",
    "mediaFit": "cover",
    "matrix": {
      "quadrants": [
        {
          "title": "1. ĐƯỢC PHÉP & KHUYẾN KHÍCH",
          "icon": "✅",
          "type": "positive",
          "items": [
            "Dùng AI để tra cứu tài liệu, giải thích thuật toán, tìm từ đồng nghĩa.",
            "Sửa lỗi chính tả, cải thiện ngữ pháp tiếng Anh của bài viết.",
            "Hỗ trợ viết script phân tích dữ liệu và vẽ biểu đồ."
          ]
        },
        {
          "title": "2. BẮT BUỘC KHAI BÁO MINH BẠCH",
          "icon": "📝",
          "type": "guideline",
          "items": [
            "Ghi rõ trong mục Lời cảm ơn (Acknowledgements) hoặc Tuyên bố AI (AI Disclosure).",
            "Nêu rõ công cụ AI, phiên bản sử dụng và mục đích hỗ trợ.",
            "Ví dụ: 'Tác giả sử dụng ChatGPT-4 để hỗ trợ chỉnh sửa ngữ pháp bản thảo tiếng Anh'."
          ]
        },
        {
          "title": "3. TUYỆT ĐỐI CẤM (Vi phạm nặng)",
          "icon": "❌",
          "type": "negative",
          "items": [
            "Điền tên AI (ChatGPT/Claude) vào danh sách Đồng tác giả (Co-author).",
            "AI không thể chịu trách nhiệm pháp lý nên không đủ điều kiện làm tác giả.",
            "Để AI tự sinh nội dung rồi nộp mà không đọc hiểu hay kiểm chứng."
          ]
        },
        {
          "title": "4. HẬU QUẢ KHI GIAN LẬN",
          "icon": "⚠️",
          "type": "negative",
          "items": [
            "Rút bài báo khoa học đã xuất bản (Retraction), hủy kết quả đồ án tốt nghiệp.",
            "Ghi biên bản vi phạm quy chế đào tạo, ảnh hưởng vĩnh viễn đến uy tín nghề nghiệp."
          ]
        }
      ]
    },
    "highlight": "Minh bạch không làm giảm giá trị công trình của bạn; ngược lại, sự trung thực khoa học thể hiện tư cách đạo đức vững vàng của người làm kỹ thuật.",
    "speakerNotes": "Khẳng định: Nhà trường không cấm dùng AI, nhưng nhà trường nghiêm cấm sự thiếu trung thực. Khai báo minh bạch là thước đo nhân cách kỹ sư."
  },
  {
    "id": 34,
    "sectionId": 2,
    "sectionName": "Chương 2: Ứng dụng AI trong nghiên cứu",
    "type": "standard",
    "tag": "AN TOÀN DỮ LIỆU",
    "title": "Bảo vệ dữ liệu khi dùng AI trong nghiên cứu",
    "subtitle": "Khung quản trị rủi ro NIST AI RMF và nguyên tắc an toàn thông tin cốt lõi tại KMA",
    "image": "assets/visuals/nist-ai-rmf.png",
    "onlineImage": "https://www.nist.gov/itl/ai-risk-management-framework",
    "imageCaption": "Khung quản lý rủi ro trí tuệ nhân tạo (AI Risk Management Framework) của NIST",
    "imageAlt": "Sơ đồ 4 chức năng cốt lõi: Govern, Map, Measure, Manage của NIST AI RMF",
    "mediaFit": "contain",
    "points": [
      {
        "icon": "🚨",
        "title": "Nguy cơ rò rỉ dữ liệu qua Cloud LLMs",
        "desc": "Mọi dữ liệu bạn gửi vào ChatGPT phiên bản miễn phí đều có thể được nhà cung cấp sử dụng để tái huấn luyện mô hình, vô tình làm lộ bí mật ra ngoài."
      },
      {
        "icon": "⛔",
        "title": "Tuyệt đối không nạp thông tin nhạy cảm",
        "desc": "Không tải lên mã nguồn dự án chưa công bố, thuật toán mật mã nội bộ, tài liệu quân sự hoặc dữ liệu định danh cá nhân (PII)."
      },
      {
        "icon": "💻",
        "title": "Giải pháp triển khai AI cục bộ (Local LLMs)",
        "desc": "Sử dụng các mô hình nguồn mở (Llama 3, DeepSeek-Coder, Qwen) chạy hoàn toàn offline trên máy tính cá nhân thông qua Ollama hoặc LM Studio."
      },
      {
        "icon": "🛡️",
        "title": "Quản trị rủi ro theo chuẩn NIST AI RMF",
        "desc": "Áp dụng 4 chức năng: Định chế (Govern), Ánh xạ rủi ro (Map), Đo lường an toàn (Measure) và Quản lý sự cố (Manage) trong mọi dự án công nghệ."
      }
    ],
    "highlight": "Là sinh viên Học viện Kỹ thuật Mật mã, ý thức bảo mật dữ liệu và an toàn thông tin phải luôn là ưu tiên số một trong mọi hoạt động học tập và nghiên cứu.",
    "speakerNotes": "Nhấn mạnh: Sinh viên ATTT KMA phải gương mẫu đi đầu trong việc sử dụng Local LLM offline để bảo vệ mã nguồn và dữ liệu nghiên cứu."
  },
  {
    "id": 35,
    "sectionId": 2,
    "sectionName": "Chương 2: Ứng dụng AI trong nghiên cứu",
    "type": "matrix",
    "tag": "QUY TRÌNH CHUYÊN NGÀNH",
    "title": "Một quy trình nghiên cứu AI điển hình trong CNTT",
    "subtitle": "Vòng đời từ phát hiện bài toán công nghệ đến tối ưu hóa hệ thống phần mềm thực tế",
    "image": "assets/images/slide-24-coding-logic.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Nghiên cứu phát triển phần mềm và tối ưu hóa hệ thống trong ngành CNTT",
    "imageAlt": "Màn hình phát triển phần mềm với cấu trúc dự án và kiểm thử hiệu năng",
    "mediaFit": "cover",
    "matrix": {
      "quadrants": [
        {
          "title": "1. Đặt bài toán & Khảo sát (Problem)",
          "icon": "🎯",
          "type": "guideline",
          "items": [
            "Đặt bài toán: Tối ưu hóa bộ nhớ đệm (Cache Replacement) cho hệ thống phân tán.",
            "Khảo sát các giải thuật LRU, LFU truyền thống và các điểm nghẽn độ trễ."
          ]
        },
        {
          "title": "2. Thiết kế thuật toán (Methodology)",
          "icon": "⚙️",
          "type": "positive",
          "items": [
            "Ứng dụng mô hình học máy nhẹ để dự đoán trước dữ liệu truy cập (Pre-fetching).",
            "Cân bằng giữa độ chính xác dự báo và chi phí tính toán CPU/RAM."
          ]
        },
        {
          "title": "3. Xây dựng hệ thống & Đo kiểm (System)",
          "icon": "💻",
          "type": "positive",
          "items": [
            "Lập trình module bằng C++/Go; thiết lập môi trường giả lập luồng tải cao.",
            "Đo kiểm 3 chỉ số vàng: Thông lượng (Throughput), Độ trễ (Latency) và Cache Hit Rate."
          ]
        },
        {
          "title": "4. Thẩm định & Đóng gói (Packaging)",
          "icon": "📦",
          "type": "positive",
          "items": [
            "So sánh trực tiếp (Benchmark) với các thư viện nổi tiếng trên thị trường.",
            "Đóng gói mã nguồn mở, viết tài liệu kỹ thuật và báo cáo nghiệm thu."
          ]
        }
      ]
    },
    "highlight": "Nghiên cứu trong CNTT hướng tới tính ứng dụng thực tiễn: Thuật toán mới phải nhanh hơn, tiết kiệm tài nguyên hơn hoặc giải quyết bài toán quy mô lớn hơn.",
    "speakerNotes": "Định hướng sinh viên CNTT: Hãy gắn đề tài NCKH với các bài toán hệ thống thực tế như Cloud Computing, Microservices hoặc Database Engines."
  },
  {
    "id": 36,
    "sectionId": 2,
    "sectionName": "Chương 2: Ứng dụng AI trong nghiên cứu",
    "type": "standard",
    "tag": "QUY TRÌNH CHUYÊN NGÀNH",
    "title": "Một quy trình nghiên cứu AI điển hình trong ATTT",
    "subtitle": "Ứng dụng AI trong an ninh mạng: Phát hiện xâm nhập, phân tích mã độc và đối kháng",
    "image": "assets/images/slide-36-cybersecurity-soc.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Trung tâm điều hành an ninh mạng (SOC) và phân tích nguy cơ an ninh ATTT",
    "imageAlt": "Phòng điều hành an ninh mạng với các màn hình cảnh báo tấn công thời gian thực",
    "mediaFit": "cover",
    "points": [
      {
        "icon": "🧲",
        "title": "Thu thập và tiền xử lý dữ liệu an ninh",
        "desc": "Thu thập mẫu mã độc PE/ELF, nhật ký hệ thống (Syslog, Windows Event Logs) và luồng gói tin mạng (PCAP). Trích xuất đặc trưng Opcode, API calls hoặc flow metrics."
      },
      {
        "icon": "🛡️",
        "title": "Xây dựng mô hình phát hiện bất thường (IDS)",
        "desc": "Huấn luyện mô hình Deep Learning (GNN, Transformer) để phát hiện mã độc đa hình hoặc các cuộc tấn công quét cổng, DDoS với độ chính xác cao."
      },
      {
        "icon": "⚔️",
        "title": "Thử nghiệm tấn công đối kháng (Adversarial Robustness)",
        "desc": "Kiểm tra độ bền vững của mô hình: Thêm các đoạn mã rác (dead code) xem AI có bị đánh lừa bỏ lọt mã độc hay không."
      },
      {
        "icon": "🎯",
        "title": "Tối ưu hóa tỷ lệ cảnh báo sai (False Positive Rate)",
        "desc": "Trong an ninh mạng thực tế, nếu tỷ lệ báo giả quá cao sẽ gây ngập lụt hệ thống giám sát; mô hình tốt phải có độ tin cậy cực cao ở ngưỡng báo động."
      }
    ],
    "highlight": "AI trong ATTT là cuộc chạy đua giữa hai bờ chiến tuyến: Kẻ tấn công dùng AI để tinh vi hóa mã độc, và chuyên gia KMA dùng AI để phòng thủ chủ động.",
    "speakerNotes": "Nhắc nhở sinh viên ATTT: Đừng chỉ quan tâm đến Accuracy 99%; hãy chú ý đến False Positive Rate và khả năng chống chịu tấn công đối kháng."
  },
  {
    "id": 37,
    "sectionId": 2,
    "sectionName": "Chương 2: Ứng dụng AI trong nghiên cứu",
    "type": "standard",
    "tag": "QUY TRÌNH CHUYÊN NGÀNH",
    "title": "Một quy trình nghiên cứu AI điển hình trong ĐTVT",
    "subtitle": "Xử lý tín hiệu số, ước lượng kênh truyền và triển khai AI trên thiết bị nhúng (Edge AI)",
    "image": "assets/images/slide-37-electronics-lab.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Phòng thí nghiệm phần cứng điện tử, vi mạch và xử lý tín hiệu ĐTVT",
    "imageAlt": "Bảng mạch điện tử tích hợp chip xử lý tín hiệu và ăng-ten vô tuyến",
    "mediaFit": "cover",
    "points": [
      {
        "icon": "📡",
        "title": "Thu thập dữ liệu tín hiệu vô tuyến (RF/IQ Data)",
        "desc": "Ghi nhận tín hiệu vô tuyến thực tế từ các thiết bị thu phát SDR (Software Defined Radio) trong các điều kiện môi trường nhiễu và đa đường (Multipath)."
      },
      {
        "icon": "📶",
        "title": "Mô hình hóa kênh truyền bằng Deep Learning",
        "desc": "Ứng dụng mạng nơ-ron để ước lượng thông số kênh MIMO, nhận dạng điều chế tự động (AMC) hoặc lọc nhiễu thích nghi thời gian thực."
      },
      {
        "icon": "⚡",
        "title": "Tối ưu hóa phần cứng & Lượng tử hóa (Quantization)",
        "desc": "Chuyển đổi mô hình AI từ dấu phẩy động 32-bit (FP32) xuống số nguyên 8-bit (INT8) để chạy trực tiếp trên vi điều khiển, FPGA hoặc chip nhúng ARM."
      },
      {
        "icon": "🔬",
        "title": "Đo kiểm thực nghiệm phòng Lab KMA",
        "desc": "Kết nối máy phát tín hiệu, dao động ký để đo mức tiêu thụ công suất (miliwatt), độ trễ thời gian thực (microsecond) và tỷ lệ lỗi bít (BER)."
      }
    ],
    "highlight": "Nghiên cứu AI trong ĐTVT gắn liền với giới hạn phần cứng thực tế: Mô hình không chỉ cần thông minh mà bắt buộc phải nhẹ, tiết kiệm điện và chạy tức thời.",
    "speakerNotes": "Định hướng sinh viên ĐTVT: Xu hướng tương lai là TinyML và Edge AI - đưa trí tuệ nhân tạo trực tiếp vào các cảm biến IoT và thiết bị đầu cuối."
  },
  {
    "id": 38,
    "sectionId": 2,
    "sectionName": "Chương 2: Ứng dụng AI trong nghiên cứu",
    "type": "standard",
    "tag": "CÔNG CỤ NGHIÊN CỨU",
    "title": "Quản lý tài liệu và trích dẫn bằng Zotero",
    "subtitle": "Xây dựng kho tri thức cá nhân và tự động hóa xuất file trích dẫn BibTeX chuẩn xác",
    "image": "assets/visuals/zotero.png",
    "onlineImage": "https://www.zotero.org/",
    "imageCaption": "Giao diện phần mềm quản lý tài liệu tham khảo mã nguồn mở Zotero",
    "imageAlt": "Cấu trúc thư viện Zotero với các bộ sưu tập, metadata bài báo và ghi chú PDF",
    "mediaFit": "contain",
    "points": [
      {
        "icon": "📥",
        "title": "Lưu tài liệu 1-click qua Zotero Connector",
        "desc": "Cài tiện ích trên Chrome/Firefox; bấm 1 nút là lưu trọn gói: file PDF, tiêu đề, tác giả, năm, tóm tắt và link DOI về máy tính cá nhân."
      },
      {
        "icon": "🖍️",
        "title": "Đọc và highlight trực tiếp trong Zotero",
        "desc": "Đánh dấu màu các đoạn trích quan trọng, ghi chú phản biện ngay trên file PDF và tự động đồng bộ hóa trên đám mây để không bao giờ thất lạc."
      },
      {
        "icon": "🔄",
        "title": "Tích hợp Better BibTeX cho Overleaf",
        "desc": "Tự động cập nhật file .bib mỗi khi bạn thêm bài báo mới vào Zotero, giúp quá trình viết bài trên Overleaf luôn mượt mà và chính xác."
      },
      {
        "icon": "📋",
        "title": "Trích xuất trích dẫn tức thì",
        "desc": "Tự động định dạng trích dẫn theo hàng nghìn chuẩn quốc tế (IEEE, APA, Nature, Harvard) chỉ bằng thao tác kéo thả vào tài liệu."
      }
    ],
    "highlight": "Sinh viên đại học chuyên nghiệp không bao giờ lưu bài báo rải rác ngoài Desktop; hãy quản lý toàn bộ tài liệu nghiên cứu trong Zotero ngay từ năm thứ nhất.",
    "speakerNotes": "Khuyến nghị sinh viên KMA: Kết hợp bộ 3 Zotero + Overleaf + NotebookLM để tạo thành dây chuyền nghiên cứu khoa học chuyên nghiệp chuẩn quốc tế."
  },
  {
    "id": 39,
    "sectionId": 2,
    "sectionName": "Chương 2: Ứng dụng AI trong nghiên cứu",
    "type": "standard",
    "tag": "BẢO VỆ ĐỒ ÁN",
    "title": "Trình bày một kết quả nghiên cứu khoa học",
    "subtitle": "Nghệ thuật thuyết trình bảo vệ đồ án: Kể chuyện bằng dữ liệu, trực quan hóa và ứng biến phản biện",
    "image": "assets/images/slide-25-presentation-teamwork.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Thuyết trình báo cáo kết quả nghiên cứu trước hội đồng khoa học",
    "imageAlt": "Sinh viên thuyết trình đồ án trước màn hình trình chiếu và các thầy cô phản biện",
    "mediaFit": "cover",
    "points": [
      {
        "icon": "🎯",
        "title": "Nguyên tắc '1 Slide - 1 Thông điệp cốt lõi'",
        "desc": "Tránh biến slide thành văn bản Word thứ hai đầy chữ; tập trung vào hình ảnh minh họa thực tế, sơ đồ kiến trúc và biểu đồ số liệu sắc nét."
      },
      {
        "icon": "⏱️",
        "title": "Cấu trúc bài báo cáo chuẩn 15 phút",
        "desc": "3 phút nêu bài toán & động lực nghiên cứu -> 4 phút trình bày giải pháp cốt lõi -> 5 phút phân tích kết quả thực nghiệm -> 3 phút kết luận và định hướng."
      },
      {
        "icon": "🛡️",
        "title": "Chuẩn bị kỹ lưỡng các Slide phụ lục (Backup Slides)",
        "desc": "Dự đoán trước các câu hỏi hóc búa của thầy cô hội đồng (về chứng minh toán học, ca biên lỗi, cấu hình lab) và chuẩn bị sẵn slide chi tiết để trả lời."
      },
      {
        "icon": "🤝",
        "title": "Thái độ khoa học khi bị chất vấn",
        "desc": "Lắng nghe trọn vẹn câu hỏi, trung thực thừa nhận các điểm hạn chế mà đề tài chưa giải quyết được, bảo vệ luận điểm bằng số liệu thực nghiệm thay vì cảm xúc."
      }
    ],
    "highlight": "Một kết quả nghiên cứu xuất sắc sẽ bị giảm nửa giá trị nếu không được trình bày mạch lạc, tự tin và thuyết phục trước hội đồng khoa học.",
    "speakerNotes": "Kinh nghiệm từ giảng viên: Người tự tay làm nghiên cứu sẽ nói rất tự tin và say mê; người nhờ AI làm hộ sẽ ngập ngừng ngay ở câu hỏi phản biện đầu tiên."
  },
  {
    "id": 40,
    "sectionId": 2,
    "sectionName": "Chương 2: Ứng dụng AI trong nghiên cứu",
    "type": "standard",
    "tag": "TỔNG KẾT BÀI GIẢNG",
    "title": "Bốn năng lực cốt lõi khi học và nghiên cứu cùng AI",
    "subtitle": "Hành trang bản lĩnh của sinh viên Học viện Kỹ thuật Mật mã trong kỷ nguyên trí tuệ nhân tạo",
    "image": "assets/images/slide-48-ai-student-profile.jpg",
    "onlineImage": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    "imageCaption": "Chân dung sinh viên đại học thế hệ mới làm chủ công nghệ trí tuệ nhân tạo",
    "imageAlt": "Tân sinh viên tự tin bước vào giảng đường với hành trang công nghệ số",
    "mediaFit": "cover",
    "points": [
      {
        "icon": "🏛️",
        "title": "Năng lực kiến thức nền tảng vững chắc (Domain Depth)",
        "desc": "Toán cao cấp, cấu trúc dữ liệu, giải thuật, kiến trúc máy tính và nguyên lý hệ điều hành là gốc rễ giúp bạn hiểu và điều khiển AI."
      },
      {
        "icon": "🔍",
        "title": "Năng lực tư duy phản biện & Thẩm định (Critical Verification)",
        "desc": "Không bao giờ tin tưởng mù quáng vào kết quả AI sinh ra; luôn đặt câu hỏi nghi vấn, kiểm tra dữ liệu gốc và chạy thực nghiệm đối chứng."
      },
      {
        "icon": "⚡",
        "title": "Năng lực làm chủ công cụ thông minh (AI Literacy & Prompting)",
        "desc": "Biết cách đặt đầu bài sắc bén, kết hợp linh hoạt các công cụ (Cursor, NotebookLM, Zotero, Overleaf) để tăng năng suất gấp 5-10 lần."
      },
      {
        "icon": "⚖️",
        "title": "Đạo đức nghề nghiệp & Liêm chính học thuật (Professional Ethics)",
        "desc": "Giữ gìn danh dự người học, minh bạch trong sử dụng công nghệ, bảo vệ dữ liệu an ninh quốc gia và dùng tri thức để phụng sự xã hội."
      }
    ],
    "highlight": "AI không thay thế con người; nhưng những kỹ sư biết làm chủ AI một cách có kiểm chứng và liêm chính sẽ thay thế những người từ chối đổi mới. Chúc các bạn sinh viên KMA có một hành trình học tập và nghiên cứu rực rỡ!",
    "speakerNotes": "Lời kết của TS. Lê Đức Thuận: Thầy chúc toàn thể tân sinh viên KMA luôn giữ vững ngọn lửa đam mê, kỷ luật thép và bản lĩnh làm chủ công nghệ cao."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SLIDES_DATA;
}
