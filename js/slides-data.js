/**
 * SLIDES DATA - 50 SLIDES FORMAL ACADEMIC MASTER DATASET
 * Chuyên đề: Ứng dụng Trí tuệ Nhân tạo trong Học tập và Nghiên cứu Khoa học
 * Báo cáo viên: TS. Lê Đức Thuận - Khoa Công nghệ Thông tin, Học viện Kỹ thuật Mật mã (KMA)
 * Định dạng: Học thuật chính quy, chuẩn mực khoa học, số liệu thực nghiệm đo kiểm chính xác.
 */

const SLIDES_DATA = [
  // =========================================================================
  // CHƯƠNG 1: BẢN CHẤT TOÁN HỌC & KIẾN TRÚC MÔ HÌNH AI (Slides 1 - 12)
  // =========================================================================
  {
    id: 1,
    sectionId: 1,
    sectionName: "Chương 1: Bản Chất Kỹ Thuật Của AI",
    title: "ỨNG DỤNG TRÍ TUỆ NHÂN TẠO TRONG HỌC TẬP VÀ NGHIÊN CỨU KHOA HỌC",
    subtitle: "Phân tích bản chất toán học, kiến trúc mô hình, ranh giới năng lực và phương pháp luận ứng dụng chuẩn mực",
    type: "cover",
    tag: "BÁO CÁO CHUYÊN ĐỀ HỌC THUẬT • KHOA CÔNG NGHỆ THÔNG TIN - KMA",
    image: "assets/images/slide-01-cover.jpg",
    onlineImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Hội trường học thuật Học viện Kỹ thuật Mật mã",
    imageCaption: "Khoa Công nghệ Thông tin • Học viện Kỹ thuật Mật mã",
    speakerInfo: {
      lecturer: "TS. Lê Đức Thuận",
      role: "Khoa Công Nghệ Thông Tin • Học Viện Kỹ Thuật Mật Mã",
      duration: "Thời lượng: 90 - 120 phút • 50 Chuyên đề học thuật",
      target: "Tân Sinh Viên — Chuyên ngành Công nghệ Thông tin & An toàn Thông tin"
    },
    speakerNotes: "Mục tiêu bài giảng: Báo cáo chuyên đề cung cấp bức tranh toàn cảnh và phân tích sâu về bản chất toán học của Trí tuệ nhân tạo (AI), cơ chế kiến trúc Transformer, các ranh giới năng lực thực tế, phương pháp ứng dụng trong kỹ thuật lập trình C++, toán học đại cương, khảo cứu tài liệu khoa học chuẩn mực quốc tế và các yêu cầu nghiêm ngặt về liêm chính học thuật."
  },
  {
    id: 2,
    sectionId: 1,
    sectionName: "Chương 1: Bản Chất Kỹ Thuật Của AI",
    title: "Bản Chất Toán Học: AI Là Bài Toán Tối Ưu Hóa Hàm Số",
    subtitle: "Xấp xỉ hàm số mục tiêu f(X; W) ≈ Y thông qua tối ưu hóa vi tích phân và đại số tuyến tính",
    type: "standard",
    tag: "ĐỊNH NGHĨA KHOA HỌC",
    image: "assets/images/slide-06-what-is-ai.jpg",
    onlineImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Mô hình mạng nơ-ron và ma trận toán học",
    imageCaption: "Toán học và thống kê đằng sau các mô hình trí tuệ nhân tạo",
    stats: [
      { number: "10¹¹+", label: "Tham số trọng số (Weights)", source: "Cấu trúc mạng LLM", type: "" },
      { number: "0%", label: "Ý thức hoặc tư duy độc lập", source: "Bản chất thuật toán", type: "warning" },
      { number: "100%", label: "Tính toán đại số & xác suất", source: "Linear Algebra & Calculus", type: "success" }
    ],
    points: [
      {
        icon: "📐",
        title: "Nền tảng: Đại số tuyến tính và Giải tích đa biến",
        desc: "Mọi mô hình học máy hiện đại đều vận hành trên nền tảng phép nhân ma trận đa chiều và giải tích đạo hàm riêng (Gradient Descent) nhằm cực tiểu hóa hàm mất mát (Loss Function)."
      },
      {
        icon: "🎯",
        title: "Định lý xấp xỉ phổ quát (Universal Approximation Theorem)",
        desc: "Mạng nơ-ron sâu có khả năng xấp xỉ bất kỳ hàm số liên tục nào với độ chính xác tùy ý, với điều kiện kiến trúc mạng đủ lớn và dữ liệu huấn luyện đủ bao quát."
      },
      {
        icon: "🚫",
        title: "Giới hạn: Không có cơ chế suy luận nhân quả (No Causal Inference)",
        desc: "Hệ thống AI chỉ nhận diện tương quan thống kê (Statistical Correlation) trong kho ngữ liệu, hoàn toàn không có khả năng nắm bắt quy luật nhân quả thực tế."
      }
    ],
    highlight: "Hiểu rõ AI là một hệ phương trình toán học tối ưu giúp người học loại bỏ sự ngộ nhận hoặc kỳ vọng phi thực tế về năng lực nhận thức của cỗ máy.",
    speakerNotes: "Phân tích kỹ thuật: Mô hình AI bản chất là một ánh xạ toán học từ không gian đầu vào X sang không gian đầu ra Y. Kiến thức toán học nền tảng (Đại số tuyến tính, Giải tích, Xác suất thống kê) là điều kiện tiên quyết để làm chủ và phát triển các hệ thống AI chuyên sâu."
  },
  {
    id: 3,
    sectionId: 1,
    sectionName: "Chương 1: Bản Chất Kỹ Thuật Của AI",
    title: "Hệ Thống Phân Tầng: AI ⊃ Machine Learning ⊃ Deep Learning ⊃ GenAI",
    subtitle: "Cấu trúc phân cấp chuẩn mực trong khoa học máy tính từ tổng thể đến các mô hình tạo sinh",
    type: "taxonomy",
    tag: "PHÂN TẦNG KHOA HỌC",
    taxonomy: [
      {
        level: "TẦNG 1: TỔNG QUAN",
        title: "Trí Tuệ Nhân Tạo (AI)",
        period: "Khởi nguồn 1956",
        desc: "Lĩnh vực khoa học máy tính nghiên cứu việc xây dựng các hệ thống có khả năng thực hiện tác vụ đòi hỏi trí tuệ con người.",
        mechanics: "Hệ chuyên gia (Expert Systems), Logic mờ (Fuzzy Logic), Tìm kiếm đồ thị (Graph Search A*).",
        examples: "Hệ thống chơi cờ Deep Blue, định tuyến tối ưu mạng truyền thông.",
        accent: "#38bdf8"
      },
      {
        level: "TẦNG 2: HỌC TỪ DỮ LIỆU",
        title: "Học Máy (Machine Learning)",
        period: "Phát triển từ 1980s",
        desc: "Tập hợp các thuật toán cho phép hệ thống tự hoàn thiện năng lực xử lý từ dữ liệu thực nghiệm mà không cần lập trình luật tường minh.",
        mechanics: "Hồi quy tuyến tính, Cây quyết định (Decision Tree), SVM, K-Means.",
        examples: "Bộ lọc thư rác, phân loại giao dịch tài chính, phát hiện mã độc.",
        accent: "#10b981"
      },
      {
        level: "TẦNG 3: MẠNG NƠ-RON SÂU",
        title: "Học Sâu (Deep Learning)",
        period: "Đột phá từ 2012",
        desc: "Phân ngành học máy sử dụng mạng nơ-ron nhân tạo nhiều tầng ẩn (Deep Neural Networks) để tự động trích xuất đặc trưng bậc cao.",
        mechanics: "Backpropagation, Hàm kích hoạt phi tuyến (ReLU), CNN, RNN, LSTM.",
        examples: "Thị giác máy tính, nhận dạng tiếng nói, phân tích tín hiệu âm thanh.",
        accent: "#8b5cf6"
      },
      {
        level: "TẦNG 4: MÔ HÌNH TẠO SINH",
        title: "AI Tạo Sinh & LLMs",
        period: "Kỷ nguyên từ 2020",
        desc: "Mô hình học phân phối xác suất P(X) để sinh dữ liệu mới (văn bản, mã nguồn, hình ảnh) tương tự phân phối của dữ liệu huấn luyện.",
        mechanics: "Kiến trúc Transformer, Self-Attention, Diffusion Models, VAE.",
        examples: "Claude 3.5, DeepSeek-R1, GPT-4o, GitHub Copilot.",
        accent: "#f43f5e"
      }
    ],
    highlight: "Generative AI và các mô hình ngôn ngữ lớn (LLMs) chỉ là một nhánh ứng dụng chuyên biệt thuộc tầng sâu nhất của cấu trúc phân cấp Trí tuệ nhân tạo.",
    speakerNotes: "Phân tích học thuật: Cần phân định rạch ròi giữa AI cổ điển (dựa trên luật suy diễn logic) và AI hiện đại (dựa trên học sâu và dữ liệu lớn). Việc hiểu rõ ranh giới này giúp định vị chính xác bài toán nghiên cứu."
  },
  {
    id: 4,
    sectionId: 1,
    sectionName: "Chương 1: Bản Chất Kỹ Thuật Của AI",
    title: "Phân Loại Học Máy: Có Giám Sát, Không Giám Sát & Học Tăng Cường",
    subtitle: "Ba phương pháp luận học tập cốt lõi quyết định cấu trúc dữ liệu và giải thuật huấn luyện",
    type: "taxonomy",
    tag: "PHÂN LOẠI MACHINE LEARNING",
    taxonomy: [
      {
        level: "PHƯƠNG PHÁP 1",
        title: "Học Có Giám Sát (Supervised Learning)",
        period: "Dữ liệu gán nhãn: D = {(xᵢ, yᵢ)}",
        desc: "Mô hình học hàm ánh xạ từ không gian đầu vào X sang không gian nhãn Y. Gồm hai bài toán chuẩn: Phân loại (Classification) và Hồi quy (Regression).",
        mechanics: "Tối ưu hóa hàm mất mát (Mean Squared Error, Cross-Entropy).",
        examples: "Phát hiện mã độc (Độc hại / An toàn), dự báo tải lưu lượng mạng.",
        accent: "#06b6d4"
      },
      {
        level: "PHƯƠNG PHÁP 2",
        title: "Học Không Giám Sát (Unsupervised Learning)",
        period: "Dữ liệu không nhãn: D = {xᵢ}",
        desc: "Mô hình tự động phân tích cấu trúc tiềm ẩn, mật độ xác suất hoặc tương quan hình học giữa các điểm dữ liệu trong không gian nhiều chiều.",
        mechanics: "Khoảng cách Euclidean/Cosine, Phân cụm K-Means, Giảm chiều dữ liệu PCA/t-SNE.",
        examples: "Phát hiện hành vi bất thường trong lưu lượng mạng, phân nhóm người dùng.",
        accent: "#a855f7"
      },
      {
        level: "PHƯƠNG PHÁP 3",
        title: "Học Tăng Cường (Reinforcement Learning)",
        period: "Tác tử, Trạng thái, Hành động, Phần thưởng",
        desc: "Tác tử (Agent) tối ưu hóa chiến lược hành động π(a|s) thông qua tương tác với môi trường để tối đa hóa phần thưởng kỳ vọng tích lũy.",
        mechanics: "Markov Decision Process (MDP), Bellman Equation, Q-Learning, Policy Gradient.",
        examples: "Điều khiển robot tự hành, tối ưu hóa định tuyến động trong mạng viễn thông.",
        accent: "#f59e0b"
      },
      {
        level: "KỸ THUẬT QUAN TRỌNG",
        title: "RLHF: Tinh Chỉnh Mô Hình Ngôn Ngữ",
        period: "Reinforcement Learning from Human Feedback",
        desc: "Kỹ thuật sử dụng mô hình chấm điểm (Reward Model) dựa trên đánh giá của con người để định hướng hành vi mô hình ngôn ngữ lớn.",
        mechanics: "Thuật toán tối ưu chính sách PPO (Proximal Policy Optimization).",
        examples: "Định hình tính chính xác, tính an toàn và giảm thiểu độc hại trong các LLM hiện đại.",
        accent: "#10b981"
      }
    ],
    highlight: "Sự kết hợp giữa Học sâu và Học tăng cường từ phản hồi con người (RLHF) là yếu tố quyết định giúp các LLM chuyển đổi từ mô hình đoán từ thô thành các trợ lý có khả năng tương tác hội thoại mạch lạc.",
    speakerNotes: "Phân tích kỹ thuật: Trong an toàn thông tin, Học có giám sát được ứng dụng trực tiếp trong hệ thống phát hiện xâm nhập (IDS/IPS). Học không giám sát được dùng để phát hiện các cuộc tấn công Zero-day dựa trên dị thường thống kê."
  },
  {
    id: 5,
    sectionId: 1,
    sectionName: "Chương 1: Bản Chất Kỹ Thuật Của AI",
    title: "Deep Learning: Cấu Trúc Nơ-ron Nhân Tạo & Thuật Toán Lan Truyền Ngược",
    subtitle: "Cơ chế toán học cơ bản: Phép nhân ma trận, hàm kích hoạt phi tuyến và đạo hàm theo quy tắc chuỗi",
    type: "architecture",
    tag: "CƠ CHẾ NƠ-RON NHÂN TẠO",
    steps: [
      {
        title: "1. Véc-tơ đầu vào và Ma trận trọng số (W · X)",
        desc: "Nơ-ron nhận véc-tơ X ∈ ℝⁿ, thực hiện phép nhân với ma trận trọng số W và cộng thêm véc-tơ độ chệch b: z = W · X + b."
      },
      {
        title: "2. Hàm kích hoạt phi tuyến (Activation Function)",
        desc: "Giá trị z được đưa qua hàm kích hoạt σ(z) như ReLU(z) = max(0, z) nhằm đưa tính phi tuyến vào mạng, cho phép mô hình học các ranh giới quyết định phức tạp."
      },
      {
        title: "3. Đánh giá hàm mất mát (Loss Function Evaluation)",
        desc: "Hàm mất mát L(ŷ, y) đo lường sai số giữa đầu ra dự đoán ŷ và nhãn thực tế y (ví dụ: Binary Cross-Entropy trong bài toán phân loại)."
      },
      {
        title: "4. Thuật toán Lan truyền ngược (Backpropagation)",
        desc: "Tính toán gradient sai số ∂L/∂W bằng quy tắc chuỗi (Chain Rule) từ tầng đầu ra ngược về tầng đầu vào để cập nhật trọng số: W ← W - η · ∇W."
      }
    ],
    highlight: "Công thức nơ-ron tổng quát: ŷ = σ(W · X + b). Thuật toán Backpropagation bản chất là ứng dụng trực tiếp của phép tính vi phân đa biến trong giải tích toán học.",
    diagramTitle: "MÔ HÌNH TOÁN HỌC CỦA NƠ-RON NHÂN TẠO",
    diagramTag: "MATHEMATICAL NEURON",
    flowNodes: [
      { icon: "📥", title: "Input Vector (X)", desc: "Dữ liệu đặc trưng n-chiều", badge: "X ∈ ℝⁿ" },
      { icon: "✖️", title: "Trọng Số & Bias: W·X + b", desc: "Phép biến đổi affine tuyến tính", badge: "Linear Map" },
      { icon: "⚡", title: "Hàm Kích Hoạt: σ(z)", desc: "Ánh xạ phi tuyến (ReLU / GELU)", badge: "Non-linear", highlight: true },
      { icon: "📤", title: "Đầu Ra Dự Đoán (ŷ)", desc: "Xác suất hoặc véc-tơ đặc trưng ẩn", badge: "Output" },
      { icon: "🔄", title: "Gradient Descent: ∇_W L", desc: "Cập nhật trọng số ngược theo đạo hàm", badge: "Chain Rule" }
    ],
    diagramFooter: "Mô hình toán học của mạng nơ-ron sâu nhiều tầng (Multi-Layer Perceptron)",
    speakerNotes: "Phân tích sư phạm: Mọi hệ thống học sâu phức tạp đều được xây dựng từ các phép toán cơ bản này. Việc nắm vững quy tắc chuỗi và phép nhân ma trận là cơ sở để sinh viên hiểu sâu kiến trúc các mô hình thị giác máy tính và xử lý ngôn ngữ tự nhiên."
  },
  {
    id: 6,
    sectionId: 1,
    sectionName: "Chương 1: Bản Chất Kỹ Thuật Của AI",
    title: "Kiến Trúc Transformer: Cơ Chế Tự Chú Ý (Self-Attention Mechanism)",
    subtitle: "Đột phá thay thế hoàn toàn mạng tuần tự (RNN/LSTM), cho phép tính toán song song hóa trên quy mô lớn",
    type: "architecture",
    tag: "KIẾN TRÚC MÔ HÌNH LÕI",
    steps: [
      {
        title: "1. Hạn chế của kiến trúc tuần tự cổ điển (RNN/LSTM)",
        desc: "Xử lý dữ liệu tuần tự từng bước thời gian O(T), không thể song song hóa trên phần cứng GPU và gặp hiện tượng tiêu biến gradient (Vanishing Gradient) trên chuỗi dài."
      },
      {
        title: "2. Nguyên lý Self-Attention (Vaswani et al., 2017)",
        desc: "Cho phép mọi token trong chuỗi tương tác trực tiếp với nhau bất kể khoảng cách vị trí thông qua phép nhân tích vô hướng có tỷ lệ."
      },
      {
        title: "3. Ba ma trận không gian: Query, Key, Value (Q, K, V)",
        desc: "Mỗi token được ánh xạ thành 3 véc-tơ đại diện: Query (yêu cầu tra cứu), Key (chỉ mục đối chiếu), Value (nội dung thông tin ngữ nghĩa)."
      },
      {
        title: "4. Cơ chế Đa đầu chú ý (Multi-Head Attention)",
        desc: "Thực hiện phép tính Self-Attention đồng thời trên h không gian con độc lập để nắm bắt đồng thời các mối quan hệ cú pháp và ngữ nghĩa khác nhau."
      }
    ],
    highlight: "Công thức toán học Self-Attention: Attention(Q, K, V) = softmax( (Q · Kᵀ) / √dₖ ) · V. Đây là phương trình nền tảng của toàn bộ các LLM hiện đại.",
    diagramTitle: "CƠ CHẾ SELF-ATTENTION TRONG TRANSFORMER",
    diagramTag: "ATTENTION MATRIX",
    flowNodes: [
      { icon: "🔤", title: "Input Tokens", desc: "Chuỗi ký hiệu ngôn ngữ đầu vào", badge: "Prompt" },
      { icon: "📊", title: "Vector Embeddings", desc: "Ánh xạ vào không gian d-chiều", badge: "d_model = 4096" },
      { icon: "🔍", title: "Ma Trận Q, K, V", desc: "Phép chiếu tuyến tính với trọng số W_Q, W_K, W_V", badge: "Projections" },
      { icon: "🎯", title: "Tích Vô Hướng: (Q · Kᵀ) / √dₖ", desc: "Ma trận điểm tương quan ngữ cảnh", badge: "Attention Map", highlight: true },
      { icon: "📈", title: "Softmax & Nhân với V", desc: "Tổng hợp thông tin ngữ cảnh có trọng số", badge: "Context Representation" }
    ],
    diagramFooter: "Kiến trúc nền tảng công bố trong bài báo 'Attention Is All You Need' (Google Research)",
    speakerNotes: "Phân tích kỹ thuật: Hệ số chia √dₖ có vai trò cốt lõi trong việc kiểm soát độ lớn của tích vô hướng, tránh hiện tượng gradient rơi vào vùng bão hòa của hàm softmax khi số chiều d_model lớn."
  },
  {
    id: 7,
    sectionId: 1,
    sectionName: "Chương 1: Bản Chất Kỹ Thuật Của AI",
    title: "Mô Hình Ngôn Ngữ Lớn: Tokenization & Không Gian Véc-Tơ Tiềm Ẩn",
    subtitle: "Cơ chế rời rạc hóa văn bản và biểu diễn ngữ nghĩa hình học trong không gian nhiều chiều",
    type: "standard",
    tag: "BIỂU DIỄN DỮ LIỆU",
    image: "assets/images/slide-09-next-token.jpg",
    onlineImage: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Biểu diễn véc-tơ và phân phối dữ liệu",
    imageCaption: "Mỗi từ được biểu diễn thành một tọa độ véc-tơ trong không gian tiềm ẩn",
    stats: [
      { number: "BPE", label: "Thuật toán: Byte-Pair Encoding", source: "Chuẩn Tokenization", type: "" },
      { number: "4096+", label: "Số chiều không gian tiềm ẩn (d_model)", source: "Cấu hình Llama / GPT", type: "success" },
      { number: "Cosine", label: "Độ đo tương đồng ngữ nghĩa: cos(u, v)", source: "Metric hình học", type: "" }
    ],
    points: [
      {
        icon: "✂️",
        title: "Kỹ thuật băm chuỗi (Byte-Pair Encoding - BPE)",
        desc: "Văn bản được phân rã thành các đơn vị token dựa trên tần suất xuất hiện thống kê của các chuỗi con. Tiếng Việt có tỷ lệ nén token trung bình 1.5 - 2.2 token/từ."
      },
      {
        icon: "🌐",
        title: "Không gian tiềm ẩn (Latent Embedding Space)",
        desc: "Mỗi token được ánh xạ thành một véc-tơ thực trong không gian ℝ⁴⁰⁹⁶. Các khái niệm có tương quan ngữ nghĩa cao sẽ có khoảng cách góc Cosine nhỏ."
      },
      {
        icon: "🧮",
        title: "Đại số véc-tơ ngữ nghĩa",
        desc: "Các mối quan hệ cú pháp và ngữ nghĩa được duy trì dưới dạng các phép tịnh tiến véc-tơ hình học: v(Paris) - v(Pháp) + v(Việt Nam) ≈ v(Hà Nội)."
      }
    ],
    highlight: "Mô hình ngôn ngữ không làm việc trực tiếp với ký tự chữ cái mà thao tác thuần túy trên các chỉ số định danh (Token ID) và phép toán véc-tơ hình học.",
    speakerNotes: "Phân tích chuyên sâu: Quá trình Tokenization giải thích nguyên nhân các LLM thường gặp khó khăn với các bài toán đếm ký tự đơn lẻ hoặc xử lý chuỗi nghịch đảo, do mô hình chỉ tiếp nhận các khối token nguyên vẹn."
  },
  {
    id: 8,
    sectionId: 1,
    sectionName: "Chương 1: Bản Chất Kỹ Thuật Của AI",
    title: "Cơ Chế Autoregressive: Dự Đoán Phân Phối Xác Suất Token Kế Tiếp",
    subtitle: "Mô hình ngôn ngữ tự hồi quy ước lượng phân phối có điều kiện P(wᵢ | w₁, w₂, ..., wᵢ₋₁)",
    type: "token-sim",
    tag: "BẢN CHẤT XÁC SUẤT",
    tokenSim: {
      promptText: "Học viện Kỹ thuật Mật mã là cơ sở đào tạo trọng điểm quốc gia về...",
      candidateTokens: [
        { word: "An toàn thông tin", prob: 86.4, isWinner: true, logit: "12.8" },
        { word: "Công nghệ thông tin", prob: 8.2, isWinner: false, logit: "8.4" },
        { word: "Mật mã học", prob: 4.1, isWinner: false, logit: "6.7" },
        { word: "Điện tử viễn thông", prob: 1.0, isWinner: false, logit: "3.1" },
        { word: "Kỹ thuật máy tính", prob: 0.3, isWinner: false, logit: "0.5" }
      ],
      temperatureNote: "Tham số Temperature kiểm soát độ dốc của hàm Softmax: T = 0 tương ứng với phép chọn Greedy (luôn lấy token có xác suất cao nhất). Khi tăng T, phân phối xác suất phẳng dần, tăng tính ngẫu nhiên nhưng cũng gia tăng tỷ lệ phát sinh sai lệch thông tin."
    },
    points: [
      {
        icon: "1",
        title: "Tính chất tự hồi quy (Autoregressive Generation)",
        desc: "Mô hình sinh tuần tự từng token một. Mỗi token mới sinh ra được nối tiếp vào ngữ cảnh đầu vào để tính toán phân phối cho token kế tiếp."
      },
      {
        icon: "2",
        title: "Hàm Softmax chuyển đổi Logits thành Xác suất",
        desc: "Công thức Softmax: P(wᵢ) = exp(zᵢ / T) / ∑ exp(zⱼ / T). Đảm bảo tổng xác suất trên toàn bộ tập từ vựng (Vocabulary V ~ 128.000 tokens) luôn chuẩn hóa bằng 1."
      },
      {
        icon: "3",
        title: "Hệ quả kỹ thuật: Xác suất thống kê cao nhất ≠ Chân lý khách quan",
        desc: "Mô hình lựa chọn chuỗi ký hiệu có độ hợp lý cao nhất theo phân phối ngữ liệu huấn luyện, hoàn toàn không có cơ chế đối soát tính đúng đắn với thực tại khách quan."
      }
    ],
    highlight: "Bản chất toán học của mô hình LLM là bộ xấp xỉ phân phối xác suất thống kê chuỗi ký hiệu, không phải là hệ thống cơ sở tri thức xác định.",
    speakerNotes: "Phân tích học thuật: Cần phân biệt rõ giữa tính 'trôi chảy' (fluency) và tính 'chính xác' (factual accuracy). Một câu văn có xác suất điều kiện cao nhất hoàn toàn có thể là một mệnh đề sai lệch nếu dữ liệu huấn luyện chứa các định kiến hoặc sai số phổ biến."
  },
  {
    id: 9,
    sectionId: 1,
    sectionName: "Chương 1: Bản Chất Kỹ Thuật Của AI",
    title: "Tham Số Suy Luận: Temperature & Sampling Strategy",
    subtitle: "Tác động toán học của Temperature và Top-p (Nucleus Sampling) đến tính ngẫu nhiên của đầu ra",
    type: "comparison",
    tag: "THAM SỐ SUY LUẬN",
    image: "assets/images/slide-04-ai-everywhere.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Thông số điều khiển thuật toán máy tính",
    imageCaption: "Điều chỉnh phân phối xác suất đầu ra qua tham số Temperature",
    comparison: {
      leftTitle: "TEMPERATURE THẤP (T = 0.0 - 0.2): XÁC ĐỊNH & NHẤT QUÁN",
      leftSubtitle: "Phù hợp: Lập trình mã nguồn, Toán học, Khảo cứu học thuật",
      leftItems: [
        "Cơ chế: Làm dốc đường cong Softmax; hội tụ về giải thuật Greedy Search hoặc Beam Search hẹp.",
        "Tính chất: Kết quả có tính lặp lại cao (Deterministic), giảm thiểu tối đa sự phân tán câu từ.",
        "Ưu điểm kỹ thuật: Tối ưu hóa việc sinh mã nguồn C++, kiểm thử giải thuật, giải thích cú pháp.",
        "Rủi ro: Dễ rơi vào vòng lặp câu từ nếu gặp ngữ cảnh có phân phối xác suất chu kỳ."
      ],
      rightTitle: "TEMPERATURE CAO (T = 0.7 - 1.0): PHÂN KỲ & ĐA DẠNG",
      rightSubtitle: "Phù hợp: Đề xuất ý tưởng sơ bộ (Brainstorming), Đa dạng hóa văn phong",
      rightItems: [
        "Cơ chế: Làm phẳng đường cong Softmax; mở rộng không gian lấy mẫu cho các token xác suất thấp.",
        "Tính chất: Mỗi lần thực thi sinh ra cấu trúc câu khác nhau, tăng tính biến hóa văn phong.",
        "Ưu điểm: Đề xuất các hướng tiếp cận bài toán từ nhiều góc nhìn khác nhau.",
        "Rủi ro nghiêm trọng: Tỷ lệ ảo giác (Hallucination) và sai lệch logic kỹ thuật tăng theo hàm số mũ."
      ]
    },
    speakerNotes: "Quy chuẩn thực nghiệm: Trong các bài toán kỹ thuật, lập trình và nghiên cứu khoa học, tham số Temperature luôn được cấu hình cố định ở mức T = 0.0 đến 0.2 nhằm đảm bảo tính xác định và khả năng tái lập (Reproducibility) của kết quả."
  },
  {
    id: 10,
    sectionId: 1,
    sectionName: "Chương 1: Bản Chất Kỹ Thuật Của AI",
    title: "Bản Chất Của Ảo Giác (Hallucination): Góc Nhìn Hàm Mất Mát",
    subtitle: "Nguyên nhân phát sinh sai lệch thông tin từ hàm mục tiêu Cross-Entropy Loss",
    type: "standard",
    tag: "BẢN CHẤT SAI LỆCH DỮ LIỆU",
    image: "assets/images/slide-10-hallucination.jpg",
    onlineImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Hiện tượng ảo giác và sai lệch dữ liệu",
    imageCaption: "Ảo giác xuất phát từ bản chất tối ưu hóa độ trôi chảy ngôn ngữ thay vì kiểm chứng chân lý",
    stats: [
      { number: "Loss", label: "Hàm mất mát: Cross-Entropy = -∑ log P(wᵢ)", source: "Training Objective", type: "" },
      { number: "Coherence", label: "Tối ưu hóa: Độ mạch lạc cú pháp", source: "Language Modeling", type: "success" },
      { number: "Verification", label: "Cơ chế kiểm chứng thực tại: 0", source: "Giới hạn kiến trúc", type: "warning" }
    ],
    points: [
      {
        icon: "📉",
        title: "Sự sai lệch giữa Mục tiêu huấn luyện và Chân lý khách quan",
        desc: "Quá trình tiền huấn luyện (Pre-training) tối ưu hóa khả năng dự đoán từ tiếp theo trên văn bản tĩnh. Mô hình không được trang bị cơ chế kiểm tra tính xác thực đối với thế giới vật lý thực tế."
      },
      {
        icon: "🧩",
        title: "Cơ chế nội suy trong vùng thưa dữ liệu (Data Sparsity)",
        desc: "Khi người dùng truy vấn về các kiến thức chuyên sâu ít xuất hiện trong tập huấn luyện, mô hình tự động nội suy thống kê bằng cách ghép nối các véc-tơ có vẻ hợp lý nhất về mặt cú pháp."
      },
      {
        icon: "🎭",
        title: "Hiện tượng tự tin thái quá (Overconfidence)",
        desc: "Do phân phối Softmax được chuẩn hóa, mô hình luôn xuất ra chuỗi ký tự với độ mượt mà cao, tạo cảm giác thuyết phục ngay cả khi nội dung hoàn toàn sai lệch."
      }
    ],
    highlight: "Ảo giác không phải là một lỗi lập trình thông thường mà là hệ quả tất yếu từ bản chất xác suất thống kê của mô hình ngôn ngữ lớn.",
    speakerNotes: "Phân tích học thuật: Cần làm rõ rằng khái niệm 'ảo giác' trong AI là một thuật ngữ kỹ thuật chỉ việc sinh ra các thông tin không có trong dữ liệu nguồn hoặc mâu thuẫn với sự thật khách quan. Hiện tượng này không thể triệt tiêu hoàn toàn chỉ bằng việc tăng kích thước mô hình."
  },
  {
    id: 11,
    sectionId: 1,
    sectionName: "Chương 1: Bản Chất Kỹ Thuật Của AI",
    title: "Dữ Liệu Thực Nghiệm: Đo Lường Ảo Giác & Benchmark Năng Lực 2024-2025",
    subtitle: "Số liệu đo kiểm chuẩn mực trên các tập dữ liệu HumanEval, GSM8K, SWE-bench và Stanford Study",
    type: "dashboard",
    tag: "BENCHMARK ĐO KIỂM QUỐC TẾ",
    metrics: [
      {
        name: "Lập trình mã nguồn",
        dataset: "HumanEval (Python/C++)",
        mainScore: "93.7%",
        unit: "Pass@1 Accuracy",
        compareBars: [
          { name: "Claude 3.5 Sonnet", score: 93.7, color: "violet" },
          { name: "DeepSeek-R1", score: 90.8, color: "emerald" },
          { name: "GPT-4o", score: 90.2, color: "" },
          { name: "Llama 3.3 70B", score: 82.5, color: "warning" }
        ],
        note: "Dữ liệu đo kiểm khả năng tổng hợp mã nguồn thuật toán và vượt qua các bộ kiểm thử tự động."
      },
      {
        name: "Suy luận toán học",
        dataset: "GSM8K (Multi-step Math)",
        mainScore: "94.8%",
        unit: "Độ chính xác suy luận logic",
        compareBars: [
          { name: "OpenAI o1", score: 94.8, color: "emerald" },
          { name: "DeepSeek-R1", score: 93.5, color: "emerald" },
          { name: "Claude 3.5 Sonnet", score: 91.2, color: "violet" },
          { name: "GPT-4o", score: 92.3, color: "" }
        ],
        note: "Cơ chế suy luận chuỗi (Chain-of-Thought) cải thiện đáng kể năng lực giải toán và biến đổi đại số."
      },
      {
        name: "Tỷ lệ Ảo giác theo Lĩnh vực",
        dataset: "Stanford Law & TruthfulQA",
        mainScore: "18.6%",
        unit: "Tỷ lệ thông tin sai lệch",
        compareBars: [
          { name: "Hội thoại đời thường", score: 4.2, color: "emerald" },
          { name: "Trích dẫn bài báo khoa học", score: 18.6, color: "warning" },
          { name: "Án lệ & Điều luật chuyên sâu", score: 31.4, color: "rose" }
        ],
        note: "Tỷ lệ sai lệch tăng vọt khi đi vào các lĩnh vực chuyên sâu đòi hỏi tính chính xác tuyệt đối."
      }
    ],
    highlight: "Dữ liệu thực nghiệm cho thấy: AI đạt hiệu năng cao trong việc sinh mã nguồn và giải toán có cấu trúc, nhưng có tỷ lệ sai lệch nghiêm trọng đối với việc trích dẫn học thuật.",
    speakerNotes: "Phân tích số liệu: Báo cáo của Đại học Stanford (2024) chỉ ra rằng trong lĩnh vực pháp lý và trích dẫn khoa học, tỷ lệ ảo giác của các mô hình thương mại dao động từ 18% đến trên 30%. Đây là bằng chứng thực nghiệm rõ ràng bác bỏ việc sử dụng LLMs làm công cụ tra cứu nguồn học thuật trực tiếp."
  },
  {
    id: 12,
    sectionId: 1,
    sectionName: "Chương 1: Bản Chất Kỹ Thuật Của AI",
    title: "Đánh Giá Phương Pháp Luận: Xử Lý Bài Toán Thuật Toán Kỹ Thuật",
    subtitle: "Lựa chọn phương thức tiếp cận tối ưu khi đối diện bài toán cấu trúc dữ liệu và giải thuật",
    type: "quiz",
    tag: "ĐÁNH GIÁ PHƯƠNG PHÁP LUẬN",
    image: "assets/images/slide-05-interactive-poll.jpg",
    onlineImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Sinh viên thảo luận và tương tác cùng giảng viên",
    imageCaption: "Đánh giá phương pháp luận xử lý bài toán kỹ thuật",
    quizData: {
      question: "Yêu cầu bài toán: 'Thiết kế cấu trúc dữ liệu danh sách liên kết đơn trong C++ và đảo ngược danh sách với độ phức tạp thời gian O(N), bộ nhớ phụ O(1)'. Phương pháp luận nào là chuẩn mực?",
      options: [
        {
          key: "A",
          text: "Chuyển giao toàn bộ yêu cầu bài toán cho mô hình AI, sao chép trực tiếp mã nguồn đầu ra vào hệ thống nộp bài mà không qua bước thẩm định.",
          feedback: "Phương pháp không đạt tiêu chuẩn kỹ thuật: Người học hoàn toàn bị động, không nắm được cơ chế quản lý con trỏ, thất bại trước các bài kiểm thử độc lập hoặc phỏng vấn kỹ thuật.",
          isRecommended: false
        },
        {
          key: "B",
          text: "Thiết kế giải thuật trên sơ đồ bộ nhớ; tự xây dựng mã giả; sử dụng AI để kiểm tra các trường hợp biên (Edge Cases) và phân tích tính an toàn con trỏ.",
          feedback: "Phương pháp luận chuẩn mực của kỹ sư công nghệ: Người học làm chủ logic bài toán; công cụ AI được sử dụng có kiểm soát để gia tăng độ tin cậy của mã nguồn.",
          isRecommended: true
        },
        {
          key: "C",
          text: "Từ chối hoàn toàn việc tham khảo tài liệu và công cụ hỗ trợ kể cả khi bế tắc cú pháp hoặc không tối ưu được độ phức tạp thuật toán.",
          feedback: "Phương pháp thiếu hiệu quả: Không tận dụng được các công cụ hỗ trợ hiện đại để rút ngắn thời gian làm rõ cú pháp và tiếp cận chuẩn mực lập trình tối ưu.",
          isRecommended: false
        }
      ],
      lecturerComment: "Phương án B đại diện cho phương pháp luận chuẩn mực: Làm chủ tư duy giải thuật, sử dụng AI như công cụ kiểm chứng và tối ưu hóa có chọn lọc."
    },
    speakerNotes: "Mục tiêu sư phạm: Rèn luyện cho sinh viên tư duy độc lập trong thiết kế giải thuật. Mọi công cụ tự động hóa chỉ có giá trị khi người kỹ sư hiểu thấu đáo kiến trúc bên dưới."
  },

  // =========================================================================
  // CHƯƠNG 2: ỨNG DỤNG AI TRONG HỌC TẬP — LẬP TRÌNH & TOÁN HỌC (Slides 13 - 25)
  // =========================================================================
  {
    id: 13,
    sectionId: 2,
    sectionName: "Chương 2: AI Trong Học Tập & Kỹ Thuật",
    title: "Thực Tiễn Đời Sống Học Đường: 4 Tác Vụ AI Hỗ Trợ Đắc Lực Nhất Cho Sinh Viên",
    subtitle: "Phân tích các kịch bản thực tế giúp sinh viên giải quyết áp lực học tập, khối lượng bài vở và kỹ năng kỹ thuật",
    type: "matrix",
    tag: "ỨNG DỤNG THỰC TIỄN • ĐỜI SỐNG HỌC ĐƯỜNG",
    matrix: {
      quadrants: [
        {
          title: "TIÊU HÓA TÀI LIỆU & GIÁO TRÌNH ĐỒ SỘ",
          type: "positive",
          icon: "📚",
          items: [
            "Bóc tách mục lục, khung sườn tri thức (Knowledge Tree) từ tài liệu 300–500 trang trong vài phút.",
            "Tóm tắt các định lý, công thức và tiên đề trọng tâm phục vụ lập đề cương ôn thi học kỳ.",
            "Chuyển đổi định dạng dữ liệu: từ ghi chú bài giảng rời rạc thành bảng biểu so sánh trực quan.",
            "Giải thích các thuật ngữ chuyên ngành hóc búa theo nhiều cấp độ nhận thức khác nhau."
          ]
        },
        {
          title: "GIA SƯ CÁ NHÂN HÓA 24/7 KIÊN NHẪN",
          type: "guideline",
          icon: "🎙️",
          items: [
            "Đóng vai người đồng hành giải đáp thắc mắc liên tục mà không bao giờ mất kiên nhẫn.",
            "Diễn giải khái niệm khó hiểu bằng nhiều lăng kính: từ ẩn dụ trực quan đến công thức toán học.",
            "Đặt câu hỏi kiểm tra ngược (Active Recall) để sinh viên tự nhận diện lỗ hổng kiến thức.",
            "Thiết kế lộ trình ôn tập phân bổ thời gian hợp lý cho từng môn học đại cương và chuyên ngành."
          ]
        },
        {
          title: "TRỢ LÝ GỠ LỖI COMPILER & LẬP TRÌNH",
          type: "positive",
          icon: "💻",
          items: [
            "Dịch các thông báo lỗi biên dịch phức tạp (g++, clang, valgrind) sang tiếng Việt rõ ràng, chỉ rõ dòng lỗi.",
            "Giải thích nguyên nhân gốc rễ của các lỗi thời gian chạy kinh điển: Segmentation fault, Stack overflow.",
            "Tự động sinh các bộ dữ liệu kiểm thử biên (Edge Cases: mảng rỗng, giá trị âm, tràn số nguyên).",
            "Đề xuất các kỹ thuật tối ưu hóa thuật toán từ O(N²) xuống O(N log N) có phân tích lý do."
          ]
        },
        {
          title: "LUYỆN NGOẠI NGỮ & ĐỜI SỐNG NGHỀ NGHIỆP",
          type: "guideline",
          icon: "🌐",
          items: [
            "Đóng vai Tech Lead phỏng vấn thử (Mock Interview) 1-1 các câu hỏi kỹ thuật chuyên ngành IT/Mật mã.",
            "Rà soát lỗi ngữ pháp, chuẩn hóa câu từ trong CV/Resume và thư xin thực tập gửi doanh nghiệp.",
            "Dịch và tóm tắt nhanh các chuẩn kỹ thuật quốc tế (RFC, NIST, CVE, IEEE/ACM).",
            "Soạn thảo email học thuật chuẩn mực gửi giảng viên hướng dẫn hoặc hội đồng nghiên cứu."
          ]
        }
      ]
    },
    highlight: "Trí tuệ nhân tạo là công cụ trợ lực tuyệt vời trong đời sống học đường nếu được sử dụng như một trợ lý thông minh để giảm tải các tác vụ thủ công và kích hoạt tư duy chủ động.",
    speakerNotes: "Phân tích thực tiễn: 4 nhóm tác vụ này phản ánh chính xác các khó khăn hàng ngày của sinh viên: áp lực đọc tài liệu mùa thi, bế tắc khi gặp lỗi compiler lúc nửa đêm, thiếu môi trường luyện phỏng vấn kỹ thuật và rào cản tiếng Anh chuyên ngành. AI giải quyết triệt để các rào cản này."
  },
  {
    id: 14,
    sectionId: 2,
    sectionName: "Chương 2: AI Trong Học Tập & Kỹ Thuật",
    title: "Ranh Giới Bất Lực Tuyệt Đối: 4 Điều AI Hoàn Toàn Không Thể Làm Thay Sinh Viên KMA",
    subtitle: "Nhận diện các ranh giới sống còn mà phụ thuộc vào AI sẽ dẫn đến hậu quả nghiêm trọng trong học tập và rèn luyện",
    type: "matrix",
    tag: "RANH GIỚI BẤT LỰC • BẢN LĨNH HỌC THUẬT",
    matrix: {
      quadrants: [
        {
          title: "PHÒNG THI NGẮT MẠNG (OFFLINE EXAMS)",
          type: "negative",
          icon: "🚫",
          items: [
            "Tại Học viện Kỹ thuật Mật mã, các kỳ thi lập trình và lý thuyết diễn ra trên giấy hoặc phòng máy ngắt Internet.",
            "Không có mạng đồng nghĩa với việc AI hoàn toàn bị vô hiệu hóa trong giờ phút quyết định điểm số.",
            "Sinh viên phụ thuộc AI khi làm bài tập ở nhà sẽ bị 'liệt tư duy', bế tắc hoàn toàn trước đề thi và nhận điểm 0.",
            "Chỉ có kỹ năng tự viết mã nguồn và tự suy luận trên giấy mới chuyển hóa thành điểm số thực tế."
          ]
        },
        {
          title: "BẢO VỆ ĐỒ ÁN & VẤN ĐÁP TRỰC TIẾP",
          type: "negative",
          icon: "⚔️",
          items: [
            "Hội đồng chấm thi chỉ cần hỏi 1 câu: 'Tại sao ở dòng lệnh này em lại cấp phát con trỏ thay vì biến tĩnh?'.",
            "Sinh viên sao chép mã nguồn AI không thể giải thích luồng ô nhớ, lập tức bị đánh giá gian lận học thuật.",
            "Điểm số đồ án quyết định bởi năng lực bảo vệ luận điểm khoa học, không quyết định bởi việc mã nguồn chạy được hay không.",
            "AI không thể trả lời vấn đáp thay sinh viên trước những câu hỏi phản biện sắc bén của giảng viên."
          ]
        },
        {
          title: "TRÁCH NHIỆM HỌC VỤ & ĐẠO ĐỨC KỸ SƯ",
          type: "warning",
          icon: "⚖️",
          items: [
            "AI là một mô hình xác suất vô tri, không chịu trách nhiệm kỷ luật, không bị cấm thi hay đình chỉ học tập.",
            "Sinh viên là chủ thể duy nhất chịu trách nhiệm 100% trước Quy chế đào tạo và pháp luật về sản phẩm của mình.",
            "Mọi sự cố rò rỉ mã nguồn bí mật, lỗ hổng bảo mật hoặc trích dẫn ngụy tạo do AI sinh ra đều quy về người nộp bài.",
            "Đạo đức kỹ sư và ý thức an toàn thông tin là phẩm chất bắt buộc không một thuật toán nào có thể thay thế."
          ]
        },
        {
          title: "KẾT NỐI XÃ HỘI & UY TÍN CÁ NHÂN",
          type: "warning",
          icon: "🤝",
          items: [
            "AI không thể thay thế việc xây dựng mối quan hệ tin cậy với thầy cô, bạn bè trong phòng lab và mentor doanh nghiệp.",
            "Thiếu kỹ năng làm việc nhóm thực tế, sinh viên sẽ thất bại khi tham gia các dự án phần mềm quy mô lớn.",
            "Cơ hội thực tập, học bổng và việc làm đến từ uy tín thực tế của sinh viên qua các kỳ thi và đồ án thực chất.",
            "Sự thấu cảm, khả năng lãnh đạo, đàm phán và bản lĩnh kỹ sư vượt xa phạm vi của mô hình ngôn ngữ lớn."
          ]
        }
      ]
    },
    highlight: "AI không đi thi hộ, không bảo vệ đồ án hộ, không chịu kỷ luật hộ và không thể xây dựng uy tín cá nhân thay sinh viên. Năng lực tự thân là giá trị bền vững duy nhất.",
    speakerNotes: "Thông điệp then chốt: Đây là hồi chuông cảnh tỉnh nghiêm khắc dành cho sinh viên. Rất nhiều sinh viên đạt điểm bài tập về nhà tối đa nhờ dùng AI, nhưng khi bước vào phòng thi ngắt mạng hoặc phòng bảo vệ vấn đáp thì hoàn toàn sụp đổ vì không có kiến thức thực chất."
  },
  {
    id: 15,
    sectionId: 2,
    sectionName: "Chương 2: AI Trong Học Tập & Kỹ Thuật",
    title: "Thực Tiễn Mùa Thi Cử: Chiến Lược 'Tiêu Hóa' 300 Trang Giáo Trình Bằng AI",
    subtitle: "Phương pháp khoa học vượt qua khủng hoảng bài vở mà không rơi vào cạm bẫy ảo tưởng thông thái",
    type: "standard",
    tag: "CHIẾN LƯỢC HỌC TẬP THỰC CHIẾN",
    image: "assets/images/slide-02-welcome.jpg",
    onlineImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Sinh viên nghiên cứu giáo trình và ghi chép bài giảng",
    imageCaption: "Chiến lược 3 bước làm chủ giáo trình đồ sộ mùa thi cử",
    visual: {
      type: "flow",
      title: "QUY TRÌNH 3 BƯỚC HẤP THỤ TRI THỨC CÙNG AI",
      tag: "ACTIVE LEARNING PIPELINE",
      source: "Phương Pháp Luận Học Tập Đại Học • Khoa CNTT - KMA",
      nodes: [
        {
          icon: "🌳",
          title: "Bước 1: Trích xuất khung xương tri thức (Knowledge Tree)",
          desc: "Đưa đề cương/mục lục vào AI để bóc tách 20% khái niệm cốt lõi chiếm 80% trọng số đề thi (Nguyên lý Pareto).",
          badge: "TỔNG QUAN"
        },
        {
          icon: "❓",
          title: "Bước 2: Truy hồi chủ động (Active Recall)",
          desc: "Yêu cầu AI đóng vai giảng viên khó tính đặt 10 câu hỏi hóc búa nhất về các trường hợp ngoại lệ trong lý thuyết.",
          badge: "CHẤT VẤN NGƯỢC",
          highlight: true
        },
        {
          icon: "✍️",
          title: "Bước 3: Tự giải trên giấy & Đối chiếu phản biện",
          desc: "Gấp màn hình máy tính, tự viết lại chứng minh và giải thuật ra giấy nháp; chỉ dùng AI để đối chiếu độ chặt chẽ.",
          badge: "KHẮC SÂU VÙNG NHỚ"
        }
      ]
    },
    points: [
      {
        icon: "⚠️",
        title: "Cạm bẫy nguy hiểm: Ảo tưởng thông thái (Fluency Illusion)",
        desc: "Đọc bản tóm tắt mượt mà của AI tạo cảm giác rằng bộ não đã hiểu sâu sắc; nhưng khi vào phòng thi không có AI, sinh viên hoàn toàn bất lực trước câu hỏi tự luận biến thể."
      },
      {
        icon: "⚖️",
        title: "Quy tắc tỷ lệ vàng 20 / 80 trong mùa thi",
        desc: "Dành tối đa 20% thời gian tương tác với AI để định hướng cấu trúc; dành 80% thời gian cho việc tự giải bài, tự viết mã nguồn và ghi nhớ độc lập."
      }
    ],
    highlight: "Đọc tóm tắt của AI là hành vi tiếp nhận thụ động; chỉ khi tự tay giải bài tập trên giấy và đối chiếu phản biện, kiến thức mới thực sự biến thành năng lực của người học.",
    speakerNotes: "Phân tích thực tế: Rất nhiều sinh viên có thói quen trước ngày thi nhờ AI tóm tắt rồi đọc lướt qua một lượt và tự tin đi thi. Khi gặp bài toán đòi hỏi tính toán chi tiết, sinh viên sẽ quên ngay công thức. Hãy rèn luyện thói quen dùng AI để đặt câu hỏi chất vấn thay vì đọc tóm tắt sẵn."
  },
  {
    id: 16,
    sectionId: 2,
    sectionName: "Chương 2: AI Trong Học Tập & Kỹ Thuật",
    title: "Thực Tiễn Phòng Máy: AI Giúp Gỡ Lỗi Compiler vs Thảm Họa Nộp Code AI Không Thẩm Định",
    subtitle: "Phân tích tình huống xử lý lỗi Segmentation Fault và cạm bẫy rò rỉ bộ nhớ khi nộp bài hệ thống Online Judge",
    type: "code-lab",
    tag: "GỠ LỖI LẬP TRÌNH THỰC TẾ",
    codeLab: {
      vulnerable: {
        title: "❌ Code AI sinh ra (Gây lỗi Compilation / Memory Leak trên máy thi)",
        code: `// Thảm họa phòng thi KMA: Copy code AI mà không hiểu
#include <iostream>
int* getPrimes(int n) {
    int* primes = new int[n]; // Cấp phát thô
    int count = 0;
    for (int i = 2; i <= n; i++) {
        // AI dùng logic chưa tối ưu O(N^2)
        bool isP = true;
        for (int j = 2; j * j <= i; j++)
            if (i % j == 0) { isP = false; break; }
        if (isP) primes[count++] = i;
    }
    return primes; // Quên delete[] -> Online Judge chấm Memory Limit Exceeded!
}
// Vào phòng thi ngắt mạng: Sinh viên quên cú pháp con trỏ -> 0 điểm!`
      },
      secure: {
        title: "✓ Sinh viên tự làm chủ tư duy (Áp dụng Sàng Eratosthenes & std::vector)",
        code: `// Chuẩn kỹ sư KMA: Tự thiết kế giải thuật O(N log log N)
#include <vector>
std::vector<int> getPrimesOptimized(int n) {
    std::vector<bool> isPrime(n + 1, true);
    std::vector<int> primes;
    for (int p = 2; p * p <= n; p++) {
        if (isPrime[p]) {
            for (int i = p * p; i <= n; i += p)
                isPrime[i] = false;
        }
    }
    for (int p = 2; p <= n; p++)
        if (isPrime[p]) primes.push_back(p);
    return primes; // Tự động dọn dẹp RAM, vượt qua 100% test case!
}`
      },
      analysis: "Trong thực tế thi cử tại KMA, hệ thống chấm tự động Online Judge (OJ) giới hạn nghiêm ngặt thời gian (1.0s) và bộ nhớ RAM (64MB). Mã nguồn AI sinh ra thường sử dụng con trỏ trần thiếu kiểm soát biên hoặc giải thuật vét cạn, dẫn tới kết quả Time Limit Exceeded hoặc Memory Limit Exceeded."
    },
    highlight: "Hãy dùng AI để giải thích thông điệp cảnh báo của Compiler (-Wall -Wextra), tuyệt đối không copy mã nguồn nguyên khối khi chưa nắm chắc từng bước thực thi trong bộ nhớ.",
    speakerNotes: "Kinh nghiệm giảng đường: Rất nhiều sinh viên năm nhất bị điểm 0 môn Kỹ thuật lập trình vì nộp code do AI sinh ra. Code AI chạy thử trên máy cá nhân có vẻ đúng với 1-2 test case nhỏ, nhưng khi đưa lên máy chủ chấm thi với hàng nghìn test case lớn thì lập tức bị tràn bộ nhớ hoặc chạy quá thời gian quy định."
  },
  {
    id: 17,
    sectionId: 2,
    sectionName: "Chương 2: AI Trong Học Tập & Kỹ Thuật",
    title: "Thực Tiễn Nghề Nghiệp: Mô Phỏng Phỏng Vấn (Mock Interview) & Bảo Vệ Đồ Án",
    subtitle: "Phân định rõ ranh giới giữa việc dùng AI để chuẩn bị kỹ năng và bản lĩnh xử lý thực tế trước hội đồng tuyển dụng",
    type: "comparison",
    tag: "HÀNH TRANG NGHỀ NGHIỆP THỰC TẾ",
    image: "assets/images/slide-08-llm-models.jpg",
    onlineImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Phỏng vấn kỹ thuật và bảo vệ đồ án",
    imageCaption: "Luyện tập cùng AI nhưng thể hiện bằng bản lĩnh thực chất",
    comparison: {
      leftTitle: "🤖 NHỮNG GÌ AI HỖ TRỢ XUẤT SẮC (CHUẨN BỊ TRƯỚC)",
      leftSubtitle: "Tận dụng tối đa công nghệ để tôi luyện kỹ năng:",
      leftItems: [
        "Đóng vai Tech Lead khó tính phỏng vấn 1-1 các câu hỏi lý thuyết OOP, Cấu trúc dữ liệu và Mạng máy tính.",
        "Gợi ý các câu hỏi phản biện hóc búa có thể gặp trong buổi bảo vệ đồ án môn học hoặc khóa luận tốt nghiệp.",
        "Rà soát lỗi ngữ pháp, cấu trúc câu và chuẩn hóa thuật ngữ chuyên ngành trong CV tiếng Anh xin thực tập.",
        "Tự động sinh các bộ câu hỏi tình huống về giải quyết xung đột mã nguồn trên Git và an toàn thông tin."
      ],
      rightTitle: "👤 NHỮNG GÌ CON NGƯỜI PHẢI TỰ CHỨNG MINH (TẠI CHỖ)",
      rightSubtitle: "Bản lĩnh cá nhân quyết định 100% kết quả:",
      rightItems: [
        "Khả năng trực tiếp viết code trên bảng trắng (Whiteboard coding) và giải thích từng dòng lệnh khi bị chất vấn.",
        "Bản lĩnh bình tĩnh, tự tin và phản xạ linh hoạt khi người phỏng vấn đột ngột thay đổi ràng buộc bài toán.",
        "Thái độ trung thực, cầu thị: Thẳng thắn thừa nhận phần kiến thức chưa biết thay vì bịa đặt câu trả lời.",
        "Sự thấu cảm, văn hóa làm việc nhóm, đạo đức nghề nghiệp và cam kết bảo vệ bí mật công nghệ của tổ chức."
      ]
    },
    highlight: "AI là người bạn tập luyện (Sparring Partner) lý tưởng trong phòng kín; nhưng khi bước ra võ đài thực tế trước nhà tuyển dụng hay hội đồng chấm thi, bản lĩnh và tri thức tự thân là vũ khí duy nhất.",
    speakerNotes: "Lời khuyên cho sinh viên: Hãy tận dụng AI làm công cụ luyện phỏng vấn kỹ thuật hàng tuần ngay từ năm thứ nhất. Bằng cách yêu cầu AI chất vấn các câu hỏi khó, sinh viên sẽ không bị bỡ ngỡ khi bước vào các kỳ phỏng vấn thực tập sinh hoặc bảo vệ đồ án trước hội đồng các thầy cô."
  },
  {
    id: 18,
    sectionId: 2,
    sectionName: "Chương 2: AI Trong Học Tập & Kỹ Thuật",
    title: "Ứng Dụng AI Trong Toán Cao Cấp & Toán Rời Rạc",
    subtitle: "Trực quan hóa hình học không gian, ánh xạ ma trận và hỗ trợ kiểm tra tính chặt chẽ của chứng minh logic",
    type: "standard",
    tag: "TOÁN HỌC ĐẠI HỌC",
    image: "assets/images/slide-02-welcome.jpg",
    onlineImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Công thức toán học trên bảng giảng đường",
    imageCaption: "Học toán cao cấp và toán rời rạc qua lăng kính trực quan hóa",
    points: [
      {
        icon: "📐",
        title: "Đại số tuyến tính: Trực quan hóa biến đổi không gian véc-tơ",
        desc: "Sử dụng AI giải thích ý nghĩa hình học của Trị riêng (Eigenvalue), Véc-tơ riêng (Eigenvector) và Phân tích suy biến (Singular Value Decomposition - SVD) trong xử lý dữ liệu nhiều chiều."
      },
      {
        icon: "📈",
        title: "Giải tích: Ý nghĩa hình học của Đạo hàm riêng và Gradient",
        desc: "Trực quan hóa véc-tơ gradient ∇f(x, y) như phương tiếp tuyến có tốc độ tăng giá trị hàm số lớn nhất trên mặt cong 3D — nền tảng của thuật toán Gradient Descent."
      },
      {
        icon: "🧩",
        title: "Toán rời rạc: Bóc tách bài toán Đếm và Lý thuyết đồ thị",
        desc: "Sử dụng AI để xây dựng bảng chân trị logic mệnh đề, kiểm tra tính đầy đủ của các bước chứng minh quy nạp và phân tích thuật toán đồ thị."
      }
    ],
    highlight: "Toán học là ngôn ngữ nền tảng của Trí tuệ nhân tạo; việc nắm vững bản chất hình học của các định lý toán học là chìa khóa để làm chủ thuật toán máy học.",
    speakerNotes: "Phân tích học thuật: Môn Toán đại cương không phải là tập hợp các công thức tính toán cơ học. AI là công cụ hỗ trợ trực quan hóa hữu hiệu giúp sinh viên liên kết các khái niệm toán học trừu tượng với các bài toán kỹ thuật cụ thể."
  },
  {
    id: 19,
    sectionId: 2,
    sectionName: "Chương 2: AI Trong Học Tập & Kỹ Thuật",
    title: "Mô Hình Suy Luận: Cơ Chế Chain-Of-Thought Trong Bài Toán Phức Tạp",
    subtitle: "Phân tích bước tiến công nghệ từ mô hình sinh phản hồi tức thời sang mô hình suy luận đa bước",
    type: "standard",
    tag: "CÔNG NGHỆ SUY LUẬN MỚI",
    image: "assets/images/slide-08-llm-models.jpg",
    onlineImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Suy luận đa bước và tư duy thuật toán",
    imageCaption: "Cơ chế suy luận Chain-of-Thought mở ra khả năng giải toán và phân tích mật mã vượt bậc",
    stats: [
      { number: "CoT", label: "Cơ chế: Chain-of-Thought (Chuỗi suy luận)", source: "Reasoning Architecture", type: "" },
      { number: "93.5%", label: "Độ chính xác toán học GSM8K (DeepSeek-R1)", source: "Official Technical Report", type: "success" },
      { number: "Local", label: "Khả năng triển khai offline trên máy trạm", source: "Ollama / Llama.cpp", type: "success" }
    ],
    points: [
      {
        icon: "🧠",
        title: "Cơ chế phân rã bài toán và tự phản biện (Self-Correction)",
        desc: "Các mô hình thế hệ mới (DeepSeek-R1, OpenAI o1) dành tài nguyên tính toán lúc suy luận (Inference-time Compute) để phân rã bài toán thành các giả thuyết trung gian và tự kiểm tra lỗi logic."
      },
      {
        icon: "🔐",
        title: "Ứng dụng trong Mật mã học và Lý thuyết số",
        desc: "Hiệu quả vượt trội trong việc phân tích các bài toán số học đồng dư, giải thuật Euclid mở rộng và kiểm tra tính an toàn của các tham số mật mã."
      },
      {
        icon: "💻",
        title: "Khả năng triển khai độc lập (On-premise / Local Deployment)",
        desc: "Các mô hình mã nguồn mở cho phép triển khai hoàn toàn trong mạng nội bộ, đáp ứng các tiêu chuẩn bảo mật dữ liệu nghiêm ngặt của ngành an toàn thông tin."
      }
    ],
    highlight: "Sự phát triển của cơ chế Chain-of-Thought đánh dấu bước chuyển biến quan trọng: Chuyển từ việc sao chép mẫu ngôn ngữ sang việc thực thi chuỗi suy luận logic có kiểm chứng.",
    speakerNotes: "Phân tích kỹ thuật: Mô hình suy luận như DeepSeek-R1 tối ưu hóa hàm thưởng dựa trên độ chính xác của kết quả cuối cùng trong quá trình học tăng cường (RL), giúp mô hình tự hình thành chiến lược suy nghĩ nhiều bước tương tự tư duy con người."
  },
  {
    id: 20,
    sectionId: 2,
    sectionName: "Chương 2: AI Trong Học Tập & Kỹ Thuật",
    title: "Kỹ Thuật Prompting Chuẩn Kỹ Thuật: Khung Cấu Trúc CLEAR",
    subtitle: "Quy chuẩn thiết lập câu lệnh 5 thành phần đảm bảo tính xác định và độ chính xác của kết quả",
    type: "standard",
    tag: "KỸ NĂNG PROMPTING KỸ THUẬT",
    image: "assets/images/slide-15-what-is-prompt.jpg",
    onlineImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Màn hình soạn thảo câu lệnh chuẩn mực",
    imageCaption: "Công thức đặt câu lệnh CLEAR giúp tối ưu hóa chất lượng câu trả lời",
    points: [
      {
        icon: "C",
        title: "Context (Bối cảnh kỹ thuật)",
        desc: "Xác định rõ vai trò chuyên môn, môi trường phát triển phần mềm, chuẩn ngôn ngữ (ví dụ: C++17, Linux kernel) và đối tượng sử dụng."
      },
      {
        icon: "L",
        title: "Limitation (Ràng buộc hệ thống nghiêm ngặt)",
        desc: "Thiết lập các giới hạn bắt buộc: Không sử dụng thư viện ngoài; ràng buộc bộ nhớ phụ O(1); không sử dụng đệ quy để tránh tràn Stack."
      },
      {
        icon: "E",
        title: "Expectation (Nhiệm vụ cụ thể)",
        desc: "Đặc tả chính xác yêu cầu kỹ thuật: Giải thích cơ chế con trỏ, vẽ sơ đồ ô nhớ, hoặc phân tích trường hợp xấu nhất của giải thuật."
      },
      {
        icon: "A",
        title: "Action / Role (Vai trò chuyên môn của hệ thống)",
        desc: "Chỉ định mô hình vận hành như một chuyên gia đánh giá an ninh mã nguồn hoặc kỹ sư tối ưu hóa hệ thống máy tính."
      },
      {
        icon: "R",
        title: "Refinement (Định dạng cấu trúc đầu ra)",
        desc: "Yêu cầu xuất dữ liệu dưới dạng bảng đối chiếu, sơ đồ ASCII, hoặc khối mã nguồn có chú thích từng dòng lệnh."
      }
    ],
    highlight: "Ứng dụng đỉnh cao của CLEAR là Prompting Socratic: Yêu cầu AI chỉ đặt câu hỏi phản biện từng bước một, tuyệt đối không đưa ra đáp án sẵn để kích hoạt tối đa năng lực tư duy độc lập.",
    speakerNotes: "Phân tích phương pháp: Khung CLEAR chuyển đổi việc tương tác với AI từ các câu hỏi tự nhiên mơ hồ thành một bản đặc tả yêu cầu kỹ thuật. Khi kết hợp với phương pháp Socratic, AI trở thành người thầy phản biện kiên nhẫn nhất, dẫn dắt sinh viên tự tìm ra đáp án thay vì nhận câu trả lời thụ động."
  },
  {
    id: 21,
    sectionId: 2,
    sectionName: "Chương 2: AI Trong Học Tập & Kỹ Thuật",
    title: "Đối Chiếu Thực Nghiệm: Prompt Tự Do vs Prompt Kỹ Thuật Chuẩn Mực",
    subtitle: "Khảo sát sự khác biệt về chất lượng đầu ra kỹ thuật trên cùng một chủ đề con trỏ C++",
    type: "comparison",
    tag: "KHẢO SÁT ĐẦU RA KỸ THUẬT",
    image: "assets/images/slide-16-prompt-comparison.jpg",
    onlineImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Màn hình soạn thảo mã nguồn và terminal",
    imageCaption: "Đối chiếu kết quả giữa hai cách đặt câu lệnh",
    comparison: {
      leftTitle: "❌ CÂU LỆNH TỰ DO (THIẾU RÀNG BUỘC KỸ THUẬT)",
      leftSubtitle: "Đầu vào chung chung, không có ngữ cảnh:",
      leftItems: [
        "Prompt: \"Giải thích con trỏ trong C++ cho tôi.\"",
        "Đầu ra của mô hình: Đoạn lý thuyết giáo khoa phổ thông, lặp lại các định nghĩa trừu tượng sao chép từ mạng.",
        "Đánh giá kỹ thuật: Người học không nắm được sự khác biệt bản chất giữa các kiểu con trỏ và kiến trúc ô nhớ thực tế.",
        "Hệ quả: Thất bại khi đối diện bài toán thực hành yêu cầu xử lý trực tiếp trên ô nhớ hoặc con trỏ nhiều chiều."
      ],
      rightTitle: "✓ CÂU LỆNH KỸ THUẬT (CHUẨN HÓA THEO KHUNG CLEAR)",
      rightSubtitle: "Đặc tả đầy đủ bối cảnh và ràng buộc:",
      rightItems: [
        "Prompt: \"Bối cảnh: Lập trình C++ hệ thống. Nhiệm vụ: Phân tích sự khác biệt về mặt kiến trúc ô nhớ giữa (1) Con trỏ trỏ tới hằng `const int* p` và (2) Hằng con trỏ `int* const p`. Yêu cầu: Vẽ sơ đồ ô nhớ byte RAM và cung cấp 2 đoạn mã minh họa lỗi biên dịch (Compile-time Error) tương ứng.\"",
        "Đầu ra của mô hình: Bảng so sánh trực quan, địa chỉ byte bộ nhớ và giải thích cơ chế kiểm tra kiểu dữ liệu tĩnh.",
        "Hiệu quả kỹ thuật: Làm sáng tỏ hoàn toàn bản chất con trỏ ở tầng biên dịch chỉ sau một lần truy vấn."
      ]
    },
    speakerNotes: "Phân tích thực nghiệm: Sự khác biệt giữa 2 cách tiếp cận chứng minh rằng khả năng khai thác AI của kỹ sư phụ thuộc vào năng lực mô tả bài toán và thiết lập ràng buộc kỹ thuật."
  },
  {
    id: 22,
    sectionId: 2,
    sectionName: "Chương 2: AI Trong Học Tập & Kỹ Thuật",
    title: "Kỹ Thuật Feynman: Kiểm Tra Mức Độ Hiểu Sâu Bản Chất Kiến Thức",
    subtitle: "Phương pháp đảo ngược vai trò: Người học trình bày luận điểm kỹ thuật để hệ thống AI phát hiện lỗ hổng logic",
    type: "standard",
    tag: "ĐÁNH GIÁ NĂNG LỰC NHẬN THỨC",
    image: "assets/images/slide-17-feynman-technique.jpg",
    onlineImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ghi chép và sơ đồ hóa bài học",
    imageCaption: "Thực hành phương pháp Feynman để kiểm tra mức độ hiểu sâu kiến thức",
    points: [
      {
        icon: "1",
        title: "Bước 1: Tự tổng hợp khái niệm kỹ thuật bằng ngôn ngữ độc lập",
        desc: "Sau khi nghiên cứu tài liệu về một cơ chế kỹ thuật (như Bảng băm hoặc Thuật toán Dijkstra), người học tự viết lại giải thích mà không tham khảo tài liệu."
      },
      {
        icon: "2",
        title: "Bước 2: Sử dụng AI làm công cụ thẩm định phản biện",
        desc: "Truy vấn chuẩn: \"Dưới đây là phần giải thích của tôi về cơ chế giải quyết xung đột trong Bảng băm bằng phương pháp Linear Probing. Hãy đóng vai trò chuyên gia hệ thống: Chỉ ra chính xác các điểm thiếu chặt chẽ, sai lệch bản chất hoặc các trường hợp xấu nhất mà tôi chưa đề cập.\""
      },
      {
        icon: "3",
        title: "Bước 3: Tái cấu trúc và lấp đầy khoảng trống tri thức",
        desc: "Phân tích phản hồi phản biện từ AI, đối chiếu lại giáo trình chính khóa và hiệu chỉnh mô hình tư duy cho đến khi đạt độ chính xác khoa học hoàn chỉnh."
      }
    ],
    highlight: "Khả năng giải thích một cơ chế kỹ thuật phức tạp một cách chính xác, mạch lạc và gãy gọn là thước đo khách quan nhất cho thấy người học đã thực sự làm chủ tri thức.",
    speakerNotes: "Phân tích phương pháp luận: Kỹ thuật Feynman kết hợp với AI đảo ngược hoàn toàn dòng chảy thụ động truyền thống. Người học chuyển từ vị thế người tiếp nhận sang vị thế người phân tích và bảo vệ luận điểm."
  },
  {
    id: 23,
    sectionId: 2,
    sectionName: "Chương 2: AI Trong Học Tập & Kỹ Thuật",
    title: "Trực Quan Hóa Hệ Thống: Kiến Trúc Máy Tính & Giao Thức Mạng",
    subtitle: "Mô phỏng chu trình lệnh CPU và phân tích an ninh giao thức bắt tay 3 bước TCP",
    type: "architecture",
    tag: "MÔ PHỎNG HỆ THỐNG",
    steps: [
      {
        title: "1. Mô phỏng chu trình thực thi lệnh CPU (Instruction Cycle)",
        desc: "Trực quan hóa sự biến đổi trạng thái của các thanh ghi Program Counter (PC), Instruction Register (IR) và đơn vị tính toán số học logic (ALU) qua từng chu kỳ xung nhịp."
      },
      {
        title: "2. Phân tích giao thức bắt tay 3 bước TCP (Three-way Handshake)",
        desc: "Mô hình hóa quá trình đồng bộ hóa số thứ tự tuần tự (Sequence Number) và số xác nhận (Acknowledgment Number) giữa Client và Server theo chuẩn RFC 793."
      },
      {
        title: "3. Phân tích lỗ hổng tấn công từ chối dịch vụ SYN Flood",
        desc: "Khảo sát cơ chế cạn kiệt hàng đợi bán kết nối (SYN Backlog Queue) khi kẻ tấn công gửi liên tục gói tin SYN giả mạo IP nguồn mà không gửi phản hồi ACK."
      },
      {
        title: "4. Giải pháp phòng ngự kỹ thuật (SYN Cookies)",
        desc: "Ứng dụng AI phân tích cơ chế mã hóa thông tin kết nối trực tiếp vào số thứ tự ban đầu (ISN) để chống cạn kiệt tài nguyên bộ nhớ máy chủ."
      }
    ],
    highlight: "Việc mô phỏng chính xác từng trường gói tin và chu trình thanh ghi giúp người học chuyển hóa các lý thuyết truyền thông trừu tượng thành kiến thức an toàn mạng thực chiến.",
    diagramTitle: "QUY TRÌNH BẮT TAY 3 BƯỚC TCP & TRẠNG THÁI KẾT NỐI",
    diagramTag: "RFC 793 SPECIFICATION",
    flowNodes: [
      { icon: "💻", title: "Client: Gói tin SYN", desc: "Seq = x (Khởi tạo yêu cầu kết nối)", badge: "SYN_SENT" },
      { icon: "🌐", title: "Server: Gói tin SYN-ACK", desc: "Seq = y, Ack = x + 1 (Phản hồi & Đồng thuận)", badge: "SYN_RCVD", highlight: true },
      { icon: "💻", title: "Client: Gói tin ACK", desc: "Ack = y + 1 (Xác nhận hoàn tất)", badge: "ESTABLISHED" },
      { icon: "🔒", title: "KẾT NỐI ĐƯỢC THIẾT LẬP", desc: "Kênh truyền tin cậy hai chiều sẵn sàng truyền dữ liệu", badge: "DATA_TRANSFER" }
    ],
    diagramFooter: "Mô hình giao thức điều khiển truyền vận TCP theo chuẩn RFC 793",
    speakerNotes: "Phân tích kỹ thuật: Giao thức bắt tay 3 bước TCP là ví dụ hoàn hảo về sự liên kết giữa lý thuyết mạng máy tính và an toàn thông tin. Việc phân tích cơ chế này làm rõ nguyên lý của các cuộc tấn công DDoS và cơ chế phòng thủ SYN Cookies."
  },
  {
    id: 24,
    sectionId: 2,
    sectionName: "Chương 2: AI Trong Học Tập & Kỹ Thuật",
    title: "Quản Trị Tri Thức Học Thuật & Phương Pháp Lặp Lại Ngắt Quãng",
    subtitle: "Ứng dụng quy luật đường cong quên lãng Ebbinghaus kết hợp AI để duy trì kiến thức kỹ thuật dài hạn",
    type: "standard",
    tag: "KHOA HỌC GHI NHỚ HỌC THUẬT",
    image: "assets/images/slide-24-second-brain.jpg",
    onlineImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ghi chép số hóa và quản lý kho tri thức",
    imageCaption: "Hệ thống ghi chép khoa học kết hợp lặp lại ngắt quãng Spaced Repetition",
    benchmarkTitle: "TỶ LỆ LƯU GIỮ KIẾN THỨC SAU 30 NGÀY THEO PHƯƠNG PHÁP",
    benchmarkSource: "Nghiên cứu khoa học nhận thức Ebbinghaus Forgetting Curve",
    benchmarkData: [
      { name: "Tiếp nhận thụ động (Chỉ nghe giảng trên lớp)", score: 10, color: "warning" },
      { name: "Đọc lại tài liệu tập trung trước kỳ thi", score: 28, color: "" },
      { name: "Lặp lại ngắt quãng có chủ đích (Spaced Repetition / Anki)", score: 86, color: "emerald" }
    ],
    points: [
      {
        icon: "🗂️",
        title: "Tự động hóa xây dựng bộ thẻ ghi nhớ (Flashcard Synthesis)",
        desc: "Sử dụng AI chuyển đổi giáo trình chuyên ngành thành các cặp câu hỏi - câu trả lời bản chất phục vụ ôn tập theo định dạng thẻ Anki."
      },
      {
        icon: "🔁",
        title: "Thuật toán tối ưu hóa thời điểm củng cố (SM-2 Algorithm)",
        desc: "Hệ thống tính toán thời điểm lặp lại chính xác khi mức độ ghi nhớ suy giảm xuống ngưỡng 90%, tối ưu hóa thời gian học tập mà vẫn đảm bảo lưu giữ tri thức vĩnh viễn."
      }
    ],
    highlight: "Học tập dồn dập trong ngắn hạn chỉ phục vụ việc vượt qua bài kiểm tra tạm thời; phương pháp lặp lại ngắt quãng là cơ sở khoa học để xây dựng năng lực chuyên môn dài hạn.",
    speakerNotes: "Phân tích khoa học nhận thức: Nghiên cứu thực nghiệm chứng minh rằng bộ não con người đào thải thông tin theo hàm mũ nếu không có các mốc củng cố ngắt quãng. Công cụ AI giúp giải phóng thời gian soạn thảo câu hỏi để tập trung vào việc ghi nhớ có chủ đích."
  },
  {
    id: 25,
    sectionId: 2,
    sectionName: "Chương 2: AI Trong Học Tập & Kỹ Thuật",
    title: "Tiếng Anh Chuyên Ngành Kỹ Thuật: Đọc Chuẩn RFC & Luyện Giao Tiếp AI",
    subtitle: "Kỹ năng tiếp cận trực tiếp tài liệu đặc tả kỹ thuật quốc tế và rèn luyện phản xạ giao tiếp kỹ thuật",
    type: "standard",
    tag: "TIẾNG ANH CHUYÊN NGÀNH",
    image: "assets/images/slide-23-english-practice.jpg",
    onlineImage: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Sinh viên giao tiếp và học ngoại ngữ",
    imageCaption: "Luyện tiếng Anh chuyên ngành công nghệ thông tin cùng AI",
    points: [
      {
        icon: "📖",
        title: "Đọc hiểu tài liệu đặc tả chuẩn RFC và IEEE Standards",
        desc: "Ứng dụng AI làm rõ ngữ nghĩa của các thuật ngữ chuyên ngành hẹp (như 'nonce', 'ephemeral key', 'idempotency') trong ngữ cảnh an toàn thông tin và kiến trúc mạng."
      },
      {
        icon: "🎙️",
        title: "Mô phỏng phỏng vấn kỹ thuật quốc tế (Technical Interview)",
        desc: "Thiết lập AI đóng vai trò người phỏng vấn kỹ thuật bằng tiếng Anh: Phỏng vấn về cấu trúc dữ liệu mảng, danh sách liên kết, thuật toán sắp xếp và bắt lỗi phát âm/ngữ pháp thời gian thực."
      },
      {
        icon: "🚀",
        title: "Xóa bỏ rào cản tiếp cận công nghệ gốc",
        desc: "Hầu hết các tài liệu học thuật, tiêu chuẩn mật mã học và mã nguồn mở tiên tiến nhất đều được phát hành bằng tiếng Anh. Làm chủ tiếng Anh kỹ thuật là yêu cầu bắt buộc của kỹ sư CNTT."
      }
    ],
    highlight: "Năng lực đọc hiểu tài liệu đặc tả kỹ thuật gốc bằng tiếng Anh là yếu tố quyết định tốc độ cập nhật công nghệ và khả năng hội nhập của người làm kỹ thuật.",
    speakerNotes: "Phân tích năng lực nghề nghiệp: Sinh viên không thể trông chờ vào các tài liệu dịch lại vốn có độ trễ từ 1 đến 3 năm so với thế giới. Việc luyện tập tiếng Anh chuyên ngành hàng ngày với trợ lý AI là phương pháp hiệu quả nhất để xây dựng phản xạ học thuật quốc tế."
  },

  // =========================================================================
  // CHƯƠNG 3: ỨNG DỤNG AI TRONG NGHIÊN CỨU KHOA HỌC (Slides 26 - 38)
  // =========================================================================
  {
    id: 26,
    sectionId: 3,
    sectionName: "Chương 3: AI Trong Nghiên Cứu Khoa Học",
    title: "Chuyển Tiếp: Phương Pháp Luận Nghiên Cứu Khoa Học Đại Học",
    subtitle: "Sự khác biệt bản chất giữa việc giải quyết bài tập định sẵn và khám phá tri thức mới",
    type: "quote",
    tag: "PHƯƠNG PHÁP LUẬN NGHIÊN CỨU",
    image: "assets/images/slide-26-bridge-part3.jpg",
    onlineImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Phòng thí nghiệm nghiên cứu khoa học",
    imageCaption: "Nghiên cứu khoa học là quá trình đóng góp tri thức mới cho cộng đồng học thuật",
    quoteText: "Làm bài tập là tái hiện lời giải cho các bài toán đã có đáp án; Nghiên cứu khoa học là quá trình khám phá tri thức mới và giải quyết các vấn đề chưa có lời giải trong thực tiễn.",
    quoteAuthor: "TS. Lê Đức Thuận • Khoa Công nghệ Thông tin - Học viện Kỹ thuật Mật mã",
    bridgeSummary: "Chương 3 trình bày các phương pháp khảo cứu tài liệu chuẩn IEEE, khai thác đồ thị trích dẫn, bóc tách phương pháp nghiên cứu, soạn thảo LaTeX và tuân thủ các quy chuẩn liêm chính học thuật quốc tế.",
    speakerNotes: "Mục tiêu bài giảng: Nghiên cứu khoa học ở bậc đại học đòi hỏi tính chính xác, tính mới và phương pháp luận chặt chẽ. AI đóng vai trò công cụ hỗ trợ tăng tốc việc khảo cứu và định dạng văn bản, nhưng không thể thay thế năng lực tư duy sáng tạo của nhà nghiên cứu."
  },
  {
    id: 27,
    sectionId: 3,
    sectionName: "Chương 3: AI Trong Nghiên Cứu Khoa Học",
    title: "Vòng Đời Công Trình Nghiên Cứu & Vị Trí Hỗ Trợ Của AI",
    subtitle: "Năm giai đoạn chuẩn mực từ xác định khoảng trống tri thức đến công bố học thuật",
    type: "pipeline",
    tag: "RESEARCH LIFECYCLE",
    pipeline: {
      steps: [
        {
          stepNum: "GIAI ĐOẠN 1",
          title: "Xác Định Bài Toán",
          tool: "Consensus / Elicit",
          desc: "Xác định khoảng trống nghiên cứu (Research Gap): Vấn đề đã được giải quyết ở mức độ nào? Hạn chế hiện tại là gì?",
          output: "Câu hỏi nghiên cứu rõ ràng"
        },
        {
          stepNum: "GIAI ĐOẠN 2",
          title: "Khảo Cứu Tài Liệu",
          tool: "Semantic Scholar / Connected Papers",
          desc: "Khảo sát hệ thống tài liệu liên quan, phân tích đồ thị trích dẫn, xây dựng ma trận so sánh các phương pháp hiện hành.",
          output: "Literature Review Matrix"
        },
        {
          stepNum: "GIAI ĐOẠN 3",
          title: "Thiết Kế Phương Pháp",
          tool: "DeepSeek-R1 / Claude 3.5",
          desc: "Xây dựng mô hình toán, thiết kế giải thuật cải tiến, xác định không gian tham số và thiết kế kiến trúc thực nghiệm.",
          output: "Proposed Methodology"
        },
        {
          stepNum: "GIAI ĐOẠN 4",
          title: "Thực Nghiệm & Đo Kiểm",
          tool: "Python / Matplotlib / Server KMA",
          desc: "Triển khai mã nguồn thực nghiệm trên môi trường thử nghiệm độc lập, thu thập số liệu khách quan và so sánh với Baseline.",
          output: "Empirical Evaluation"
        },
        {
          stepNum: "GIAI ĐOẠN 5",
          title: "Soạn Thảo Công Bố",
          tool: "LaTeX / Overleaf",
          desc: "Soạn thảo bài báo theo chuẩn định dạng IEEE/ACM, biên tập văn phong học thuật và bảo vệ kết quả trước hội đồng.",
          output: "Camera-Ready Paper"
        }
      ]
    },
    highlight: "Trí tuệ nhân tạo chỉ hỗ trợ việc tổng hợp tài liệu và định dạng kỹ thuật; tính mới của ý tưởng và tính xác thực của dữ liệu thực nghiệm bắt buộc phải do nhà nghiên cứu thực hiện.",
    speakerNotes: "Phân tích quy trình: Sinh viên cần nắm vững quy trình 5 bước để không bị nhầm lẫn giữa việc 'sử dụng công cụ' và 'thực hiện nghiên cứu'. Một công trình khoa học có giá trị cốt lõi ở Giai đoạn 1 (Bài toán có ý nghĩa) và Giai đoạn 4 (Thực nghiệm trung thực)."
  },
  {
    id: 28,
    sectionId: 3,
    sectionName: "Chương 3: AI Trong Nghiên Cứu Khoa Học",
    title: "Khảo Cứu Học Thuật: Vì Sao ChatGPT Thất Bại & Công Cụ Thay Thế",
    subtitle: "Phân tích nguyên nhân kỹ thuật khiến mô hình tạo sinh thất bại trong tra cứu và giới thiệu hệ thống chuyên dụng",
    type: "comparison",
    tag: "CÔNG CỤ KHẢO CỨU CHUYÊN DỤNG",
    image: "assets/images/slide-28-literature-search.jpg",
    onlineImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Thư viện tài liệu học thuật và sách nghiên cứu",
    imageCaption: "Khảo cứu tài liệu học thuật bằng công cụ chuyên dụng",
    comparison: {
      leftTitle: "❌ SỬ DỤNG CHATGPT TRA CỨU TÀI LIỆU (SAI LẦM PHỔ BIẾN)",
      leftSubtitle: "Hạn chế kỹ thuật cố hữu:",
      leftItems: [
        "Tỷ lệ ảo giác trích dẫn lên tới 18.6%: Tự động ghép nối tên tác giả, tên bài báo và tạo mã số DOI không có thật.",
        "Không có liên kết trực tiếp tới các cơ sở dữ liệu học thuật có bản quyền (IEEE Xplore, ACM Digital Library, Springer).",
        "Không có khả năng lọc tài liệu theo chỉ số trích dẫn (Citation Count) hoặc xếp hạng uy tín của tạp chí/hội thảo.",
        "Hậu quả: Trích dẫn tài liệu ngụy tạo bị coi là hành vi gian lận học thuật nghiêm trọng trong các hội đồng khoa học."
      ],
      rightTitle: "✓ BỘ CÔNG CỤ TÌM KIẾM HỌC THUẬT CHUYÊN DỤNG",
      rightSubtitle: "Chuẩn mực nghiên cứu khoa học:",
      rightItems: [
        "Semantic Scholar (Allen Institute for AI): Truy vấn trên đồ thị tri thức hơn 210 triệu bài báo khoa học đã qua thẩm định.",
        "Consensus.app: Công cụ tìm kiếm AI chỉ trích xuất kết quả từ các bài báo peer-reviewed có trích dẫn nguồn thực tế.",
        "Elicit.com: Tự động trích xuất bảng tổng hợp: Phương pháp, Kích thước mẫu, Kết quả chính và Giới hạn nghiên cứu.",
        "Google Scholar: Kênh tra cứu chuẩn mực để trích xuất file BibTeX phục vụ soạn thảo tài liệu tham khảo trong LaTeX."
      ]
    },
    speakerNotes: "Phân tích thực nghiệm: Báo cáo của Đại học Stanford chứng minh rằng các LLM thương mại có xu hướng bịa đặt trích dẫn một cách rất tinh vi. Sinh viên bắt buộc phải sử dụng Semantic Scholar hoặc Google Scholar để đối soát bài báo gốc."
  },
  {
    id: 29,
    sectionId: 3,
    sectionName: "Chương 3: AI Trong Nghiên Cứu Khoa Học",
    title: "Khai Thác Đồ Thị Trích Dẫn: Connected Papers & Litmaps",
    subtitle: "Phương pháp phân tích mạng lưới trích dẫn đồng xuất hiện để xác định bài báo nền tảng (Seminal Papers)",
    type: "architecture",
    tag: "ĐỒ THỊ HỌC THUẬT (CITATION GRAPH)",
    steps: [
      {
        title: "1. Vấn đề của phương pháp tìm kiếm từ khóa truyền thống",
        desc: "Tìm kiếm từ khóa thuần túy trả về hàng ngàn kết quả rời rạc, không phản ánh được lịch sử phát triển và cấu trúc phân nhánh của đề tài."
      },
      {
        title: "2. Nguyên lý phân tích trích dẫn đồng xuất hiện (Co-citation Analysis)",
        desc: "Đo lường mức độ tương đồng giữa hai bài báo dựa trên tần suất chúng được trích dẫn cùng nhau bởi các công trình nghiên cứu khác trong cùng lĩnh vực."
      },
      {
        title: "3. Xác định các bài báo đặt nền móng (Seminal / Prior Works)",
        desc: "Các nút mạng có kích thước lớn và độ kết nối tập trung đại diện cho các công trình kinh điển bắt buộc phải trích dẫn và nghiên cứu kỹ lưỡng."
      },
      {
        title: "4. Lần theo các hướng phát triển tiên tiến nhất (Derivative Works)",
        desc: "Xác định các công trình mới xuất bản (2024-2025) nằm ở các nhánh biên của đồ thị để nắm bắt trạng thái công nghệ hiện đại nhất (State-of-the-Art)."
      }
    ],
    highlight: "Đồ thị trích dẫn biến danh mục tài liệu tham khảo tĩnh thành một bản đồ cấu trúc tri thức trực quan, giúp nhà nghiên cứu nắm bắt toàn cảnh lĩnh vực chỉ trong thời gian ngắn.",
    diagramTitle: "CẤU TRÚC ĐỒ THỊ TRÍCH DẪN CONNECTED PAPERS",
    diagramTag: "CITATION NETWORK",
    flowNodes: [
      { icon: "📄", title: "Seed Paper (Bài Báo Gốc)", desc: "Bài báo tiêu biểu làm điểm khởi đầu phân tích", badge: "Input DOI" },
      { icon: "🕸️", title: "Co-Citation & Coupling", desc: "Phân tích ma trận liên kết trích dẫn chéo", badge: "Graph Metric" },
      { icon: "🌟", title: "Prior Works (Công Trình Nền Tảng)", desc: "Các bài báo kinh điển đặt nền móng lý thuyết", badge: "Seminal Paper", highlight: true },
      { icon: "🚀", title: "Derivative Works (Hướng Nghiên Cứu Mới)", desc: "Các công trình cải tiến giải thuật gần đây nhất", badge: "State-of-the-Art" }
    ],
    diagramFooter: "Mô hình phân tích mạng lưới trích dẫn khoa học hiện đại",
    speakerNotes: "Phân tích phương pháp luận: Connected Papers và Litmaps là công cụ đắc lực giúp sinh viên thực hiện phần Tổng quan tình hình nghiên cứu (Related Work) một cách có hệ thống, tránh việc bỏ sót các công trình quan trọng của các tác giả đầu ngành."
  },
  {
    id: 30,
    sectionId: 3,
    sectionName: "Chương 3: AI Trong Nghiên Cứu Khoa Học",
    title: "Kỹ Thuật Đọc & Bóc Tách Bài Báo Chuẩn IEEE/ACM Cùng AI",
    subtitle: "Ứng dụng các công cụ Source-Grounded (NotebookLM) để trích xuất cấu trúc phương pháp luận",
    type: "standard",
    tag: "KỸ NĂNG ĐỌC BÀI BÁO KHOA HỌC",
    image: "assets/images/slide-30-paper-deconstruction.jpg",
    onlineImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Đọc và bóc tách tài liệu nghiên cứu",
    imageCaption: "Bóc tách cấu trúc bài báo khoa học chuẩn IEEE Transactions",
    points: [
      {
        icon: "1",
        title: "Ứng dụng cơ chế Source-Grounded (NotebookLM)",
        desc: "Tải trực tiếp tệp PDF bài báo gốc vào hệ thống NotebookLM. Mô hình chỉ trích xuất thông tin có trong tài liệu và dẫn xuất trực tiếp số trang, triệt tiêu nguy cơ ảo giác bịa đặt."
      },
      {
        icon: "2",
        title: "Bộ câu hỏi bóc tách 4 thành phần cốt lõi của công trình",
        desc: "Truy vấn: (1) Mục tiêu và bài toán kỹ thuật mà bài báo giải quyết? (2) Điểm mới của phương pháp đề xuất so với các nghiên cứu trước? (3) Tập dữ liệu và Baseline so sánh là gì? (4) Giới hạn hoặc giả định mà công trình chưa xử lý được?"
      },
      {
        icon: "3",
        title: "Đọc phản biện phương pháp thực nghiệm",
        desc: "Đánh giá tính khách quan của số liệu: Kiểm tra xem tác giả có thực hiện kiểm định thống kê (Statistical Significance Test) hay có dấu hiệu quá khớp (Overfitting) trên tập dữ liệu nhỏ hay không."
      }
    ],
    highlight: "Đọc bài báo khoa học là quá trình phân tích phản biện cấu trúc phương pháp luận và kiểm chứng độ tin cậy của thực nghiệm, không phải là việc tiếp nhận thông tin thụ động.",
    speakerNotes: "Phân tích sư phạm: Sinh viên thường bị ngợp trước các phương trình toán học phức tạp trong bài báo IEEE. Việc sử dụng NotebookLM giúp bóc tách cấu trúc bài toán trước khi đi sâu vào chi tiết giải tích."
  },
  {
    id: 31,
    sectionId: 3,
    sectionName: "Chương 3: AI Trong Nghiên Cứu Khoa Học",
    title: "Xác Thực Nguồn Trích Dẫn: Quy Trình Kiểm Tra Mã Định Danh DOI",
    subtitle: "Quy chuẩn ba bước loại trừ triệt để hiện tượng trích dẫn ma và đảm bảo liêm chính học thuật",
    type: "standard",
    tag: "KIỂM ĐỊNH NGUỒN HỌC THUẬT",
    image: "assets/images/slide-31-phantom-citation.jpg",
    onlineImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Xác thực tài liệu và con dấu liêm chính học thuật",
    imageCaption: "Quy trình xác thực mã số định danh DOI quốc tế",
    stats: [
      { number: "DOI", label: "Digital Object Identifier (Định danh đối tượng số)", source: "ISO 26324 Standard", type: "" },
      { number: "doi.org", label: "Cổng phân giải định danh quốc tế chính thức", source: "International DOI Foundation", type: "success" },
      { number: "0 Điểm", label: "Chế tài xử lý trích dẫn ngụy tạo trong nghiên cứu", source: "Quy chế học thuật", type: "warning" }
    ],
    points: [
      {
        icon: "🔍",
        title: "Bước 1: Kiểm tra phân giải mã DOI trên cổng doi.org",
        desc: "Mọi bài báo khoa học xuất bản chính quy đều được cấp một chuỗi định danh duy nhất (ví dụ: `10.1109/TIT.2023.1234567`). Truy cập `https://doi.org/[Mã_DOI]` — nếu hệ thống báo lỗi 404, bài báo đó không tồn tại."
      },
      {
        icon: "📚",
        title: "Bước 2: Đối soát trên cơ sở dữ liệu Google Scholar / DBLP",
        desc: "Tìm kiếm chính xác tiêu đề bài báo trên Google Scholar và DBLP Computer Science Bibliography để xác thực tác giả, hội thảo/tạp chí và năm xuất bản thực tế."
      },
      {
        icon: "👁️",
        title: "Bước 3: Thẩm định trực tiếp văn bản gốc",
        desc: "Nguyên tắc bất di bất dịch của người làm nghiên cứu: Chỉ đưa vào danh mục tài liệu tham khảo những công trình mà bản thân nhà nghiên cứu đã trực tiếp đọc và hiểu nội dung trong tệp PDF gốc."
      }
    ],
    highlight: "Tại Học viện Kỹ thuật Mật mã: Hành vi trích dẫn tài liệu ngụy tạo do AI sinh ra bị xếp vào nhóm vi phạm liêm chính học thuật nghiêm trọng, tương đương với hành vi làm giả số liệu thực nghiệm.",
    speakerNotes: "Phân tích pháp lý học thuật: Trong các hội đồng đánh giá đồ án hoặc nghiệm thu đề tài, giảng viên sẽ kiểm tra ngẫu nhiên mã DOI của các tài liệu tham khảo. Việc phát hiện tài liệu ma sẽ dẫn đến việc đình chỉ đánh giá công trình."
  },
  {
    id: 32,
    sectionId: 3,
    sectionName: "Chương 3: AI Trong Nghiên Cứu Khoa Học",
    title: "Phân Tích Thực Nghiệm: Tự Động Hóa Xử Lý & Trực Quan Hóa Dữ Liệu",
    subtitle: "Ứng dụng AI xây dựng mã nguồn Python (Matplotlib, Seaborn) xuất bản đồ thị véc-tơ chuẩn 300 DPI",
    type: "code-lab",
    tag: "TRỰC QUAN HÓA THỰC NGHIỆM",
    codeLab: {
      vulnerable: {
        title: "Mã nguồn sơ sài (Không đạt tiêu chuẩn xuất bản)",
        code: `# Mã nguồn sơ sài, không có thanh sai số và cấu hình DPI
import matplotlib.pyplot as plt

plt.plot(['RSA', 'ECC'], [12.4, 1.8])
plt.title("Run time")
plt.show() # Ảnh raster độ phân giải thấp, không đạt chuẩn IEEE!`
      },
      secure: {
        title: "Mã nguồn đạt chuẩn xuất bản hội thảo IEEE/ACM",
        code: `import matplotlib.pyplot as plt
import seaborn as sns

# Cấu hình phong cách học thuật chuẩn IEEE
plt.style.use('seaborn-v0_8-paper')
fig, ax = plt.subplots(figsize=(6, 3.5), dpi=300)

algorithms = ['RSA-2048', 'ECC-256 (KMA)', 'Post-Quantum Kyber']
latency = [12.4, 1.8, 2.3] # mili-giây
errors = [0.8, 0.2, 0.3]  # Khoảng tin cậy 95% (Confidence Interval)

bars = ax.bar(algorithms, latency, yerr=errors, capsize=4, 
              color=['#38bdf8', '#10b981', '#8b5cf6'], edgecolor='black', linewidth=0.8)
ax.set_ylabel('Thời Gian Mã Hóa (ms)', fontsize=10, fontweight='bold')
ax.grid(axis='y', linestyle='--', alpha=0.4)
plt.tight_layout()
plt.savefig('benchmark_kma.pdf') # Xuất tệp đồ họa véc-tơ PDF chất lượng cao!`
      },
      analysis: "Biểu đồ trong bài báo khoa học bắt buộc phải xuất dưới dạng đồ họa véc-tơ (PDF hoặc EPS) với độ phân giải tối thiểu 300 DPI, có thanh biểu diễn sai số thực nghiệm (Error Bars) và kích thước phông chữ chuẩn hóa tương thích với định dạng hai cột của bài báo."
    },
    highlight: "Số liệu thực nghiệm khách quan kèm thanh sai số chuẩn mực là minh chứng có giá trị khoa học cao nhất chứng minh tính hiệu quả của phương pháp đề xuất.",
    speakerNotes: "Phân tích kỹ thuật: Các hội thảo quốc tế từ chối bài báo có biểu đồ mờ hoặc chụp màn hình Excel. Việc sử dụng script Python Matplotlib có cấu hình font chữ học thuật và xuất file PDF vector là tiêu chuẩn bắt buộc."
  },
  {
    id: 33,
    sectionId: 3,
    sectionName: "Chương 3: AI Trong Nghiên Cứu Khoa Học",
    title: "Soạn Thảo Văn Bản Khoa Học Chuẩn Mực Với LaTeX & Overleaf",
    subtitle: "Ứng dụng AI trong việc sinh công thức toán học, bảng biểu phức tạp và quản lý tệp trích dẫn BibTeX",
    type: "standard",
    tag: "SOẠN THẢO HỌC THUẬT TIÊU CHUẨN",
    image: "assets/images/slide-33-latex-overleaf.jpg",
    onlineImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Mã nguồn LaTeX và trình biên dịch Overleaf",
    imageCaption: "Soạn thảo bài báo khoa học chuẩn mực với LaTeX và Overleaf",
    codeSnippet: {
      title: "MÃ NGUỒN CÔNG THỨC VÀ BẢNG BIỂU LATEX DO AI SINH RA",
      code: `% Phương trình thuật toán chữ ký số RSA chuẩn IEEE
\\begin{equation}
    S \\equiv M^d \\pmod{N} \\quad \\text{với} \\quad d \\cdot e \\equiv 1 \\pmod{\\phi(N)}
\\end{equation}

% Bảng số liệu thực nghiệm định dạng chuẩn IEEE Conference
\\begin{table}[htbp]
\\centering
\\caption{So sánh hiệu năng thực thi giải thuật}
\\label{tab:performance_comparison}
\\begin{tabular}{|l|c|r|c|}
\\hline
\\textbf{Giải thuật} & \\textbf{Kích thước khóa} & \\textbf{Thời gian (ms)} & \\textbf{Bộ nhớ (KB)} \\\\
\\hline
RSA & 2048 bits & $12.4 \\pm 0.8$ & 256 \\\\
ECC & 256 bits  & $1.8 \\pm 0.2$  & 64  \\\\
\\hline
\\end{tabular}
\\end{table}`
    },
    points: [
      {
        icon: "⚡",
        title: "Tự động hóa chuyển đổi ký hiệu toán học sang mã LaTeX",
        desc: "Cung cấp công thức hoặc ảnh chụp phương trình: AI hỗ trợ sinh mã nguồn môi trường `equation` hoặc `align` chính xác theo chuẩn cú pháp AMS-LaTeX."
      },
      {
        icon: "📊",
        title: "Sinh mã bảng biểu phức tạp theo chuẩn IEEE Conference",
        desc: "Cung cấp dữ liệu thô: AI sinh mã `tabular` với đầy đủ nhãn (label), chú thích (caption) và căn chỉnh độ rộng cột chuẩn mực."
      }
    ],
    highlight: "LaTeX là ngôn ngữ soạn thảo tiêu chuẩn quốc tế bắt buộc của cộng đồng khoa học máy tính (IEEE, ACM, Springer). Làm chủ LaTeX kết hợp AI là kỹ năng cốt lõi của người làm nghiên cứu.",
    speakerNotes: "Phân tích công cụ: Soạn thảo bằng Microsoft Word thường gặp lỗi nhảy định dạng khi bài báo có nhiều công thức toán phức tạp. Hệ thống LaTeX kết hợp Overleaf đảm bảo tính chuẩn hóa 100% theo mẫu (template) của các hội thảo quốc tế."
  },
  {
    id: 34,
    sectionId: 3,
    sectionName: "Chương 3: AI Trong Nghiên Cứu Khoa Học",
    title: "Chuẩn Hóa Văn Phong Học Thuật: Ngôn Ngữ Giao Tiếp vs IEEE Tone",
    subtitle: "Chuyển hóa câu cú tiếng Anh thông thường sang văn phong khoa học khách quan, trang trọng và chính xác",
    type: "comparison",
    tag: "ACADEMIC ENGLISH TONE",
    image: "assets/images/slide-34-academic-tone.jpg",
    onlineImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Biên tập câu chữ học thuật chuyên sâu",
    imageCaption: "Hiệu chỉnh văn phong tiếng Anh học thuật chuẩn mực",
    comparison: {
      leftTitle: "❌ VĂN PHONG TỰ DO / DỊCH THÔ (THIẾU TÍNH HỌC THUẬT)",
      leftSubtitle: "Sử dụng từ ngữ cảm tính, thiếu định lượng:",
      leftItems: [
        "\"In this paper, we make a very good algorithm to fix the bad memory leak in C++ program.\"",
        "\"The result is super fast and much better than the old method.\"",
        "\"We think our way is the best because it is simple and nice.\"",
        "Đánh giá của Reviewer: Ngôn từ cảm xúc chủ quan (very good, super fast), thiếu cơ sở định lượng, bài báo bị từ chối (Reject) ngay vòng phản biện sơ bộ."
      ],
      rightTitle: "✓ VĂN PHONG HỌC THUẬT CHUẨN MỰC IEEE TRANSACTIONS",
      rightSubtitle: "Khách quan, chính xác, định lượng rõ ràng:",
      rightItems: [
        "\"This paper proposes a lightweight memory-safety verification framework aimed at mitigating heap exhaustion in C++ applications.\"",
        "\"Empirical evaluations demonstrate an 84.2% reduction in memory overhead compared to the baseline implementation.\"",
        "\"The proposed scheme exhibits deterministic latency, rendering it suitable for real-time cryptographic systems.\"",
        "Đánh giá của Reviewer: Lập luận chặt chẽ, thuật ngữ chuyên ngành chuẩn xác, minh chứng định lượng thuyết phục."
      ]
    },
    speakerNotes: "Phân tích văn phong học thuật: Văn bản khoa học đòi hỏi tính khách quan (Objectivity) và tính định lượng (Quantification). AI là công cụ hỗ trợ đắc lực để biên tập câu chữ tiếng Anh, chuyển đổi các diễn đạt mang tính khẩu ngữ sang thể bị động hoặc cấu trúc học thuật chuẩn mực."
  },
  {
    id: 35,
    sectionId: 3,
    sectionName: "Chương 3: AI Trong Nghiên Cứu Khoa Học",
    title: "Khủng Hoảng Tái Lập (Reproducibility Crisis) & Phân Tích Mã Nguồn",
    subtitle: "Ứng dụng AI trong việc phân tích mã nguồn thí nghiệm trên GitHub và thiết lập môi trường kiểm chứng độc lập",
    type: "standard",
    tag: "TÍNH TÁI LẬP TRONG KHOA HỌC",
    image: "assets/images/slide-04-ai-everywhere.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Mã nguồn mở và terminal kiểm thử",
    imageCaption: "Tái lập thí nghiệm khoa học từ kho mã nguồn GitHub",
    points: [
      {
        icon: "🔬",
        title: "Thực trạng khủng hoảng tái lập trong Khoa học máy tính",
        desc: "Nhiều công trình công bố kết quả đo kiểm rất cao, nhưng mã nguồn thực tế thiếu tệp cấu hình môi trường, phụ thuộc phiên bản thư viện cũ hoặc dữ liệu thử nghiệm bị rò rỉ (Data Leakage)."
      },
      {
        icon: "🐳",
        title: "Sử dụng AI phân tích tệp Dockerfile và cây phụ thuộc",
        desc: "Truy vấn: \"Phân tích tệp requirements.txt và mã nguồn này: Xác định các phiên bản thư viện xung đột tiềm ẩn và sinh tệp Dockerfile chuẩn hóa để đóng gói môi trường thực nghiệm độc lập.\""
      },
      {
        icon: "⚖️",
        title: "Giá trị khoa học của kiểm chứng độc lập",
        desc: "Việc tái lập thành công một thuật toán quốc tế và chỉ ra được các điểm giới hạn trong phương pháp đo kiểm của tác giả là đóng góp khoa học có giá trị cao."
      }
    ],
    highlight: "Tính tái lập (Reproducibility) là nguyên lý cốt lõi của phương pháp luận khoa học: Một kết quả nghiên cứu chỉ được công nhận khi các nhà khoa học độc lập có thể tái lập lại kết quả đó trên cùng điều kiện thử nghiệm.",
    speakerNotes: "Phân tích thực tiễn: Để một đề tài nghiên cứu sinh viên đạt giải cao, mã nguồn thực nghiệm bắt buộc phải đóng gói hoàn chỉnh trong container Docker, cho phép hội đồng chấm thi chạy lại và kiểm chứng kết quả trong 1 dòng lệnh."
  },
  {
    id: 36,
    sectionId: 3,
    sectionName: "Chương 3: AI Trong Nghiên Cứu Khoa Học",
    title: "Liêm Chính Học Thuật: Quy Định Của IEEE, ACM & Bộ GD&ĐT Về AI",
    subtitle: "Khung pháp lý và đạo đức bắt buộc về việc công bố và minh bạch mức độ sử dụng AI trong nghiên cứu",
    type: "matrix",
    tag: "QUY CHUẨN ĐẠO ĐỨC HỌC THUẬT",
    matrix: {
      quadrants: [
        {
          title: "HÀNH VI HỢP LỆ ĐƯỢC PHÉP (PERMITTED)",
          type: "positive",
          icon: "✅",
          items: [
            "Sử dụng AI để biên tập ngôn ngữ, hiệu chỉnh ngữ pháp và nâng cao tính mạch lạc của bản thảo.",
            "Sử dụng AI hỗ trợ định dạng công thức toán LaTeX và sinh mã nguồn vẽ đồ thị thực nghiệm.",
            "Sử dụng AI để khảo sát tổng quan cấu trúc các hướng nghiên cứu hiện hành.",
            "Minh bạch khai báo trong phần Lời cảm ơn (Acknowledgment) hoặc Phương pháp luận về phạm vi sử dụng AI."
          ]
        },
        {
          title: "HÀNH VI VI PHẠM BỊ NGHIÊM CẤM (PROHIBITED)",
          type: "negative",
          icon: "❌",
          items: [
            "Ghi danh các hệ thống AI làm Đồng tác giả (Co-author): Quy định IEEE/ACM khẳng định AI không có tư cách pháp nhân và không có trách nhiệm pháp lý.",
            "Sao chép nguyên khối các đoạn văn bản do AI sinh ra mà không qua thẩm định hoặc không trích dẫn nguồn.",
            "Làm giả, ngụy tạo số liệu đo kiểm thực nghiệm phòng lab bằng dữ liệu do AI sinh ra.",
            "Sử dụng các nguồn trích dẫn ma không tồn tại trên các cơ sở dữ liệu học thuật quốc tế."
          ]
        },
        {
          title: "CHẾ TÀI VÀ HẬU QUẢ PHÁP LÝ",
          type: "warning",
          icon: "⚠️",
          items: [
            "Bài báo vi phạm sẽ bị thu hồi vĩnh viễn (Retraction) kèm thông báo công khai trên trang chủ nhà xuất bản.",
            "Tác giả bị đưa vào danh sách theo dõi đặc biệt (Blacklist) của các tổ chức khoa học quốc tế."
          ]
        },
        {
          title: "TRÁCH NHIỆM CỦA TÁC GIẢ",
          type: "guideline",
          icon: "🛡️",
          items: [
            "Tác giả là con người phải chịu 100% trách nhiệm về tính chính xác, tính bảo mật và tính nguyên bản của toàn bộ nội dung công trình.",
            "Tuân thủ nghiêm ngặt Quy chế nghiên cứu khoa học của Học viện Kỹ thuật Mật mã."
          ]
        }
      ]
    },
    highlight: "Quy định chính thức của IEEE và ACM: TRÍ TUỆ NHÂN TẠO KHÔNG CÓ TƯ CÁCH TÁC GIẢ. Mọi nội dung công bố khoa học đều phải do tác giả là con người trực tiếp chịu trách nhiệm pháp lý và đạo đức.",
    speakerNotes: "Phân tích pháp lý: Chính sách của IEEE (2023-2024) quy định rất rõ: AI không thể ký tên vào thỏa thuận bản quyền (Copyright Agreement) và không thể chịu trách nhiệm trước pháp luật khi xảy ra tranh chấp đạo văn. Do đó, người nghiên cứu phải chịu trách nhiệm hoàn toàn."
  },
  {
    id: 37,
    sectionId: 3,
    sectionName: "Chương 3: AI Trong Nghiên Cứu Khoa Học",
    title: "Cơ Chế AI Detectors: Bản Chất Toán Học Của Perplexity & Burstiness",
    subtitle: "Nguyên lý phát hiện văn bản máy sinh và rủi ro báo sai (False Positive) trong môi trường học thuật",
    type: "standard",
    tag: "CÔNG NGHỆ KIỂM ĐỊNH VĂN BẢN",
    image: "assets/images/slide-37-ai-detectors.jpg",
    onlineImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Mã hóa và kiểm tra dữ liệu số hóa",
    imageCaption: "Đo lường độ hỗn loạn Perplexity và độ đột biến Burstiness của văn bản",
    stats: [
      { number: "Perplexity", label: "Độ hỗn loạn: PPL = exp(-1/N ∑ log P(wᵢ))", source: "Metric toán học", type: "" },
      { number: "Burstiness", label: "Độ đột biến: Độ biến thiên chiều dài câu", source: "Phương sai thống kê", type: "success" },
      { number: "False +", label: "Rủi ro báo sai người viết thành máy", source: "Khảo sát quốc tế", type: "warning" }
    ],
    points: [
      {
        icon: "📊",
        title: "Chỉ số Perplexity (Độ hỗn loạn của chuỗi ký hiệu)",
        desc: "Văn bản do AI sinh ra có Perplexity rất thấp do mô hình luôn lựa chọn các từ ngữ có xác suất cao nhất. Văn bản con người viết có Perplexity cao hơn do sự sáng tạo trong việc sử dụng từ vựng đa dạng."
      },
      {
        icon: "🌊",
        title: "Chỉ số Burstiness (Độ đột biến về nhịp điệu câu văn)",
        desc: "Con người có xu hướng đan xen giữa các câu rất dài phức tạp và các câu ngắn dứt khoát (phương sai chiều dài câu lớn). AI có xu hướng duy trì cấu trúc câu đều đặn (phương sai nhỏ)."
      },
      {
        icon: "⚠️",
        title: "Hạn chế kỹ thuật và rủi ro nhận định sai lệch",
        desc: "Các hệ thống AI Detector (như Turnitin AI, GPTZero) không mang tính xác định tuyệt đối. Sinh viên không phải người bản xứ khi viết tiếng Anh đơn giản thường vô tình có chỉ số Perplexity thấp, dẫn tới nguy cơ bị hệ thống nhận định nhầm."
      }
    ],
    highlight: "Minh chứng bảo vệ tính nguyên bản của công trình khoa học không nằm ở điểm số của các phần mềm kiểm tra tự động, mà nằm ở nhật ký thực nghiệm chi tiết và năng lực giải trình trực tiếp của tác giả.",
    speakerNotes: "Phân tích kỹ thuật: Nghiên cứu của Đại học Stanford chỉ ra rằng các công cụ AI Detector có tỷ lệ báo oan đáng kể đối với các bài báo của tác giả quốc tế. Do đó, các trường đại học uy tín không bao giờ sử dụng điểm số AI Detector làm căn cứ kỷ luật duy nhất mà luôn yêu cầu hội đồng phỏng vấn trực tiếp."
  },
  {
    id: 38,
    sectionId: 3,
    sectionName: "Chương 3: AI Trong Nghiên Cứu Khoa Học",
    title: "An Ninh Thông Tin: Nguy Cơ Rò Rỉ Dữ Liệu Khi Sử Dụng AI Công Cộng",
    subtitle: "Phân tích các lỗ hổng bảo vệ sở hữu trí tuệ và giải pháp triển khai mô hình cục bộ (Local LLMs)",
    type: "standard",
    tag: "AN NINH DỮ LIỆU NGHIÊN CỨU",
    image: "assets/images/slide-38-data-privacy.jpg",
    onlineImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ổ khóa bảo mật và luồng dữ liệu an toàn",
    imageCaption: "Bảo vệ tài sản trí tuệ và bí mật dữ liệu nghiên cứu",
    stats: [
      { number: "Cloud API", label: "Mặc định: Dữ liệu có thể dùng để tái huấn luyện", source: "Điều khoản dịch vụ công cộng", type: "warning" },
      { number: "Zero Ret", label: "Cam kết không lưu trữ dữ liệu (Zero Retention)", source: "Enterprise Endpoint", type: "success" },
      { number: "On-Prem", label: "Mô hình mã nguồn mở chạy hoàn toàn Offline", source: "Giải pháp KMA", type: "success" }
    ],
    points: [
      {
        icon: "🚨",
        title: "Nguy cơ mất quyền sở hữu trí tuệ và lộ bí mật sáng chế",
        desc: "Khi tải lên mã nguồn giải thuật mật mã mới hoặc dữ liệu thực nghiệm chưa công bố lên các dịch vụ AI miễn phí công cộng, dữ liệu có thể được lưu trữ trên máy chủ bên ngoài và có nguy cơ bị rò rỉ trong các phiên bản mô hình tiếp theo."
      },
      {
        icon: "🔑",
        title: "Rủi ro lộ lọt khóa mật mã và thông tin xác thực",
        desc: "Bất cẩn đưa mã nguồn chứa Private Key, API Key hoặc chuỗi kết nối cơ sở dữ liệu lên giao diện chatbot công cộng là hành vi vi phạm an ninh thông tin nghiêm trọng."
      },
      {
        icon: "🛡️",
        title: "Kiến trúc triển khai mô hình an toàn cho KMA",
        desc: "Triển khai các mô hình mã nguồn mở (Llama 3, DeepSeek-R1) trực tiếp trên các máy trạm phòng thí nghiệm có GPU chuyên dụng, ngắt kết nối Internet ngoài để bảo vệ tuyệt đối dữ liệu nghiên cứu."
      }
    ],
    highlight: "Sinh viên Học viện Kỹ thuật Mật mã bắt buộc phải tuân thủ nghiêm ngặt các quy định an toàn thông tin: Tuyệt đối không đưa dữ liệu mật mã, mã nguồn nhạy cảm và công trình chưa công bố lên các nền tảng đám mây công cộng.",
    speakerNotes: "Phân tích an ninh: Bài học từ các vụ rò rỉ mã nguồn của tập đoàn công nghệ lớn là lời cảnh tỉnh rõ ràng. Đối với các đề tài mật mã và an toàn thông tin tại KMA, việc sử dụng mô hình local là giải pháp kỹ thuật bắt buộc."
  },

  // =========================================================================
  // CHƯƠNG 4: WORKSHOP THỰC HÀNH, PHƯƠNG PHÁP LUẬN & HÀNH TRANG (Slides 39 - 50)
  // =========================================================================
  {
    id: 39,
    sectionId: 4,
    sectionName: "Chương 4: Thực Hành & Hành Trang",
    title: "Workshop Thực Hành Kỹ Thuật: 20 Phút Thử Nghiệm Chuyên Đề",
    subtitle: "Áp dụng phương pháp luận học thuật vào ba bài toán kỹ thuật chuyên sâu tại hội trường",
    type: "workshop",
    tag: "PHIÊN THỰC HÀNH CHUYÊN ĐỀ",
    image: "assets/images/slide-40-workshop-kickoff.jpg",
    onlineImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Sinh viên làm việc nhóm thảo luận sôi nổi",
    imageCaption: "Thực hành phân tích và phản biện bài toán kỹ thuật theo nhóm",
    workshopConfig: {
      durationMinutes: 20,
      goal: "Mỗi nhóm nghiên cứu (3-5 sinh viên) lựa chọn 1 trong 3 đề bài chuyên sâu; áp dụng quy chuẩn câu lệnh CLEAR và phương pháp Socratic để bóc tách vấn đề.",
      rules: [
        "Thành lập nhóm nghiên cứu kỹ thuật từ 3-5 thành viên.",
        "Sử dụng thiết bị cá nhân truy cập các mô hình suy luận (Claude / DeepSeek-R1 / Ollama).",
        "Áp dụng cấu trúc prompt kỹ thuật khung CLEAR, thiết lập ràng buộc nghiêm ngặt.",
        "Xác định rõ: (1) Khía cạnh công nghệ AI hỗ trợ tối ưu và (2) Điểm sai lệch hoặc hạn chế kỹ thuật phát hiện được.",
        "Chuẩn bị báo cáo tóm tắt 60 giây khi thời gian đếm ngược kết thúc."
      ]
    },
    speakerNotes: "Hướng dẫn điều phối: Giảng viên khởi động đồng hồ đếm ngược 20 phút. Yêu cầu các nhóm tập trung vào việc tìm ra các điểm hạn chế hoặc sai sót trong câu trả lời của AI đối với bài toán được giao."
  },
  {
    id: 40,
    sectionId: 4,
    sectionName: "Chương 4: Thực Hành & Hành Trang",
    title: "Workshop Chuyên Đề 1: Kiểm Thử An Ninh Mã Nguồn C/C++",
    subtitle: "Thực hành phát hiện và xử lý lỗ hổng tràn bộ đệm đối với hàm chuỗi nguy hiểm",
    type: "code-lab",
    tag: "CHUYÊN ĐỀ 1: AN NINH MÃ NGUỒN",
    codeLab: {
      vulnerable: {
        title: "Đoạn mã C cần phân tích an ninh",
        code: `// Đoạn mã nhận chuỗi đầu vào và chuyển đổi ký tự
#include <stdio.h>
#include <ctype.h>

void convertToUpperCase() {
    char inputBuffer[32];
    printf("Nhập chuỗi văn bản: ");
    gets(inputBuffer); // HÀM ĐÃ BỊ LOẠI BỎ KHỎI CHUẨN C11!
    
    for(int i = 0; inputBuffer[i]; i++) {
        inputBuffer[i] = toupper(inputBuffer[i]);
    }
    printf("Kết quả: %s\\n", inputBuffer);
}`
      },
      secure: {
        title: "Yêu cầu nhiệm vụ kỹ thuật của nhóm",
        code: `// NHIỆM VỤ THỰC HÀNH:
// 1. Áp dụng khung CLEAR yêu cầu AI:
//    - Phân tích cơ chế ghi đè Stack Frame khi chuỗi > 32 bytes.
//    - Tái cấu trúc hàm sử dụng fgets() hoặc std::string C++.
// 2. Thử thách phản biện AI:
//    - Kiểm tra xem AI có xử lý trường hợp ký tự '\\n' do fgets lưu lại hay không.
//    - Đánh giá khả năng bắt lỗi thiếu ký tự kết thúc chuỗi '\\0'.`
      },
      analysis: "Nhóm cần chỉ rõ lý do vì sao hàm `gets()` bị loại bỏ hoàn toàn trong chuẩn ISO C11 do không có cơ chế giới hạn kích thước đọc, và đánh giá tính an toàn của đoạn mã thay thế do AI đề xuất."
    },
    highlight: "Mục tiêu chuyên đề 1: Rèn luyện kỹ năng phân tích mã nguồn tĩnh và phản biện các đề xuất kỹ thuật từ AI dưới góc nhìn an ninh phần mềm.",
    speakerNotes: "Định hướng chuyên môn: Nhóm chọn Đề 1 cần chú ý kiểm tra xem mã thay thế của AI có xử lý triệt để ký tự xuống dòng và hiện tượng tràn số nguyên (Integer Overflow) khi kiểm tra độ dài chuỗi hay không."
  },
  {
    id: 41,
    sectionId: 4,
    sectionName: "Chương 4: Thực Hành & Hành Trang",
    title: "Workshop Chuyên Đề 2: Khảo Cứu Học Thuật Về Mật Mã Khóa Công Khai",
    subtitle: "Thực hành đối chiếu hiệu năng giữa RSA và Elliptic Curve Cryptography (ECC) trên Semantic Scholar",
    type: "standard",
    tag: "CHUYÊN ĐỀ 2: MẬT MÃ HỌC",
    image: "assets/images/slide-41-crypto-papers.jpg",
    onlineImage: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Khảo cứu học thuật chuyên sâu về mật mã học",
    imageCaption: "Khảo sát tài liệu học thuật về mật mã khóa công khai",
    points: [
      {
        icon: "1",
        title: "Nhiệm vụ tra cứu học thuật độc lập",
        desc: "Truy cập cơ sở dữ liệu Semantic Scholar, tìm kiếm 3 bài báo khoa học xuất bản trên các tạp chí IEEE/ACM so sánh chi phí tính toán giữa RSA và ECC."
      },
      {
        icon: "2",
        title: "Trích xuất bảng tham số an toàn chuẩn NIST",
        desc: "Xác thực mức an toàn: Để đạt mức bảo mật tương đương 128-bit security, hệ mật RSA yêu cầu kích thước khóa 3072 bits, trong khi hệ mật ECC chỉ yêu cầu khóa 256 bits."
      },
      {
        icon: "3",
        title: "Thực nghiệm đối chứng hiện tượng ảo giác",
        desc: "Đặt cùng câu hỏi tra cứu trên một mô hình LLM thông thường và kiểm tra mã DOI của các bài báo được gợi ý trên cổng `doi.org` để đo lường tỷ lệ ảo giác thực tế."
      }
    ],
    highlight: "Mục tiêu chuyên đề 2: Xác lập phương pháp luận khảo cứu học thuật chuẩn mực, phân biệt rõ giữa dữ liệu nghiên cứu có thẩm định và nội dung do mô hình tạo sinh tự suy diễn.",
    speakerNotes: "Định hướng chuyên môn: Nhóm chọn Đề 2 cần chỉ ra mối quan hệ giữa kích thước khóa và năng lượng tiêu thụ trên các thiết bị IoT bị hạn chế tài nguyên."
  },
  {
    id: 42,
    sectionId: 4,
    sectionName: "Chương 4: Thực Hành & Hành Trang",
    title: "Workshop Chuyên Đề 3: Thiết Kế Chuỗi Suy Luận Về Cây Đỏ-Đen",
    subtitle: "Ứng dụng Chain-of-Thought Prompting để phân tích giải thuật tự cân bằng của Red-Black Tree",
    type: "standard",
    tag: "CHUYÊN ĐỀ 3: CẤU TRÚC DỮ LIỆU",
    image: "assets/images/slide-08-llm-models.jpg",
    onlineImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Cấu trúc dữ liệu cây nhị phân tìm kiếm",
    imageCaption: "Phân tích cấu trúc dữ liệu tự cân bằng Cây Đỏ-Đen (Red-Black Tree)",
    points: [
      {
        icon: "🌲",
        title: "Hiện tượng suy biến của Cây nhị phân tìm kiếm (BST)",
        desc: "Khi dữ liệu đầu vào có thứ tự tăng dần, cây BST thông thường suy biến thành danh sách liên kết, chi phí tra cứu tăng vọt từ O(log N) lên O(N)."
      },
      {
        icon: "🔴",
        title: "Thiết kế chuỗi suy luận phân tích thao tác cân bằng",
        desc: "Prompt CoT: \"Phân tích từng bước thao tác Xoay Trái (Left Rotation) và Đổi Màu (Color Flip) khi chèn một nút mới vi phạm tính chất Cây Đỏ-Đen. Yêu cầu vẽ sơ đồ ASCII từng trạng thái chuyển đổi con trỏ.\""
      },
      {
        icon: "🎯",
        title: "Kiểm tra tính bất biến (Invariant Properties)",
        desc: "Thẩm định xem giải thích của AI có duy trì đúng 5 thuộc tính bắt buộc của Cây Đỏ-Đen (đặc biệt là thuộc tính Black-Height không đổi trên mọi đường đi từ gốc tới lá) hay không."
      }
    ],
    highlight: "Mục tiêu chuyên đề 3: Sử dụng AI như công cụ trực quan hóa các giải thuật tự cân bằng phức tạp, phục vụ việc làm chủ cấu trúc dữ liệu nền tảng trong thư viện chuẩn STL.",
    speakerNotes: "Định hướng chuyên môn: Cây Đỏ-Đen là cấu trúc dữ liệu nền tảng của `std::map` trong C++. Nhóm cần tập trung vào việc bắt lỗi AI khi xử lý trường hợp nút chú (Uncle) có màu đen đòi hỏi xoay kép."
  },
  {
    id: 43,
    sectionId: 4,
    sectionName: "Chương 4: Thực Hành & Hành Trang",
    title: "Báo Cáo Thực Hành: Thảo Luận Kết Quả & Đánh Giá Học Thuật",
    subtitle: "Phiên báo cáo khoa học ngắn gọn: Đánh giá hiệu quả công cụ và các phát hiện sai lệch",
    type: "workshop",
    tag: "BÁO CÁO KẾT QUẢ WORKSHOP",
    image: "assets/images/slide-46-live-showcase.jpg",
    onlineImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Sinh viên tự tin trình bày kết quả trước hội trường",
    imageCaption: "Báo cáo tóm tắt kết quả phân tích kỹ thuật của các nhóm",
    workshopConfig: {
      durationMinutes: 5,
      goal: "Đại diện ba nhóm nghiên cứu trình bày tóm tắt kết quả phân tích trong 60 giây và thảo luận các vấn đề kỹ thuật phát hiện được.",
      rules: [
        "Mỗi nhóm có thời lượng tối đa 60 giây trình bày tập trung vào dữ liệu kỹ thuật.",
        "Nêu rõ cấu trúc câu lệnh prompt kỹ thuật đã áp dụng.",
        "Chỉ rõ giải pháp tối ưu mà công cụ AI đã hỗ trợ phân tích.",
        "Công bố ít nhất một điểm hạn chế, thiếu sót hoặc sai lệch mà nhóm đã phát hiện trong phản hồi của AI."
      ]
    },
    speakerNotes: "Hướng dẫn điều phối: Giảng viên điều phối thời gian 60 giây cho mỗi nhóm. Tập trung nhận xét vào các phát hiện phản biện của sinh viên đối với các câu trả lời do máy sinh ra."
  },
  {
    id: 44,
    sectionId: 4,
    sectionName: "Chương 4: Thực Hành & Hành Trang",
    title: "Đối Chiếu Năng Lực: Người Học Thụ Động vs Kỹ Sư Làm Chủ Công Nghệ",
    subtitle: "Sự khác biệt căn bản về phương pháp luận và tác động dài hạn đến vị thế nghề nghiệp",
    type: "comparison",
    tag: "MÔ HÌNH NĂNG LỰC NGHỀ NGHIỆP",
    image: "assets/images/slide-48-ai-student-profile.jpg",
    onlineImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Đối chiếu hai thái độ học tập",
    imageCaption: "Bản lĩnh và năng lực thực chất của người làm chủ công nghệ",
    comparison: {
      leftTitle: "❌ NGƯỜI HỌC THỤ ĐỘNG (AI-DEPENDENT)",
      leftSubtitle: "Phương pháp sao chép — Suy giảm năng lực:",
      leftItems: [
        "Chuyển giao toàn bộ bài toán cho công cụ tự động; tiếp nhận kết quả mà không qua bước thẩm định kỹ thuật.",
        "Không nắm vững kiến trúc ô nhớ, con trỏ, cấu trúc dữ liệu; không có năng lực gỡ lỗi độc lập.",
        "Thất bại hoàn toàn khi đối diện với các bài kiểm tra thực hành phòng máy offline ngắt kết nối mạng.",
        "Dễ dàng bị đào thải khi thị trường lao động yêu cầu giải quyết các bài toán hệ thống phức tạp và an ninh mạng."
      ],
      rightTitle: "✓ KỸ SƯ LÀM CHỦ CÔNG NGHỆ (AI-AUGMENTED ENGINEER)",
      rightSubtitle: "Tư duy kỹ sư hệ thống — Năng lực thực chất:",
      rightItems: [
        "Chủ động thiết kế giải thuật và sơ đồ logic trước; sử dụng AI để tối ưu hóa thời gian kiểm thử và tra cứu.",
        "Nắm vững bản chất toán học, an toàn bộ nhớ và khả năng mở rộng của thuật toán.",
        "Năng lực độc lập: Vững vàng lập trình và giải quyết bài toán trên mọi môi trường thử nghiệm độc lập.",
        "Sở hữu tư duy phản biện sắc bén: Luôn kiểm chứng chéo và phát hiện chính xác các sai lệch của máy móc."
      ]
    },
    speakerNotes: "Phân tích định hướng nghề nghiệp: Sự khác biệt giữa hai nhóm không nằm ở việc 'có dùng AI hay không', mà nằm ở vị thế làm chủ: Người kỹ sư làm chủ công cụ và chịu trách nhiệm về hệ thống, khác với người dùng bị phụ thuộc vào công cụ."
  },
  {
    id: 45,
    sectionId: 4,
    sectionName: "Chương 4: Thực Hành & Hành Trang",
    title: "Hệ Sinh Thái Công Cụ Chuẩn Mực Cho Sinh Viên Ngành CNTT - KMA",
    subtitle: "The Curated Academic AI Tech Stack — Lựa chọn công cụ chính xác theo từng mục tiêu chuyên môn",
    type: "standard",
    tag: "HỆ SINH THÁI HỌC THUẬT",
    image: "assets/images/slide-45-tech-stack.jpg",
    onlineImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Bộ công cụ công nghệ và phần mềm học tập",
    imageCaption: "Hệ sinh thái công cụ AI học thuật chuẩn mực cho sinh viên KMA",
    points: [
      {
        icon: "💻",
        title: "Lập trình C++ & Giải thuật: Claude 3.5 Sonnet / DeepSeek-R1",
        desc: "Phục vụ phân tích cấu trúc bộ nhớ, giải thích con trỏ, tối ưu hóa Big-O và hỗ trợ gỡ lỗi logic phức tạp."
      },
      {
        icon: "📚",
        title: "Khảo cứu tài liệu học thuật: Semantic Scholar + Consensus.app",
        desc: "Truy vấn các bài báo khoa học xuất bản chính quy, có mã DOI thực tế và chỉ số trích dẫn thẩm định."
      },
      {
        icon: "📄",
        title: "Bóc tách tài liệu PDF nghiên cứu: Google NotebookLM",
        desc: "Vận hành theo cơ chế Source-Grounded, hỗ trợ trích xuất nhanh cấu trúc phương pháp luận có dẫn nguồn cụ thể."
      },
      {
        icon: "✍️",
        title: "Soạn thảo văn bản khoa học: Overleaf (LaTeX) + Zotero",
        desc: "Định dạng phương trình toán học, quản lý tệp trích dẫn BibTeX theo chuẩn IEEE/ACM quốc tế."
      },
      {
        icon: "🧠",
        title: "Củng cố tri thức dài hạn: Anki (Spaced Repetition)",
        desc: "Tự động hóa ôn tập ngắt quãng các định nghĩa, định lý và nguyên lý kỹ thuật cốt lõi."
      }
    ],
    highlight: "Hiệu quả ứng dụng công nghệ phụ thuộc vào việc lựa chọn đúng công cụ chuyên dụng cho từng tác vụ cụ thể, thay vì sử dụng một mô hình tạo sinh tổng quát cho mọi bài toán.",
    speakerNotes: "Phân tích công cụ: Đây là bộ công cụ học thuật đã được chuẩn hóa. Mỗi công cụ giải quyết một bài toán riêng biệt trong chuỗi giá trị từ học tập, lập trình đến nghiên cứu và công bố khoa học."
  },
  {
    id: 46,
    sectionId: 4,
    sectionName: "Chương 4: Thực Hành & Hành Trang",
    title: "Chiến Lược Đào Tạo 4 Năm: Từ Nền Tảng Đến Làm Chủ Công Nghệ Lõi",
    subtitle: "Lộ trình phát triển năng lực học thuật và kỹ thuật qua từng giai đoạn đào tạo tại KMA",
    type: "pipeline",
    tag: "LỘ TRÌNH PHÁT TRIỂN NĂNG LỰC",
    pipeline: {
      steps: [
        {
          stepNum: "NĂM 1",
          title: "Xây Dựng Gốc Tư Duy",
          tool: "Toán Đại Cương & Lập Trình C++",
          desc: "Tập trung tuyệt đối vào Đại số tuyến tính, Giải tích, Kỹ thuật lập trình. Sử dụng AI theo phương pháp Socratic để hiểu thấu đáo bản chất ô nhớ và ma trận.",
          output: "Nền tảng toán & kỹ năng code vững chắc"
        },
        {
          stepNum: "NĂM 2",
          title: "Cấu Trúc & Hệ Thống",
          tool: "CTDL & GT, Kiến Trúc Máy Tính, Mạng",
          desc: "Làm chủ độ phức tạp thuật toán Big-O, hệ điều hành Linux, giao thức mạng TCP/IP. Sử dụng AI để mô phỏng các trạng thái luồng dữ liệu hệ thống.",
          output: "Tư duy hệ thống & Giải thuật tối ưu"
        },
        {
          stepNum: "NĂM 3",
          title: "Chuyên Sâu & Nghiên Cứu",
          tool: "Mật Mã Học, An Toàn Mạng, AI/ML",
          desc: "Tham gia các nhóm nghiên cứu khoa học sinh viên tại Khoa CNTT. Khảo cứu bài báo IEEE, thực hiện các công trình nghiên cứu khoa học chuyên sâu.",
          output: "Công trình NCKH / Đồ án chuyên ngành"
        },
        {
          stepNum: "NĂM 4",
          title: "Khóa Luận & Thực Chiến",
          tool: "Thực Tập Tốt Nghiệp, Khóa Luận",
          desc: "Giải quyết các bài toán thực tiễn của doanh nghiệp công nghệ hoặc bài toán an ninh mạng quốc gia. Tốt nghiệp với hồ sơ năng lực kỹ thuật vững vàng.",
          output: "Kỹ sư KMA bản lĩnh, năng lực cao"
        }
      ]
    },
    highlight: "Giai đoạn hai năm đầu tiên đóng vai trò quyết định xây dựng nền tảng toán học và kỹ năng lập trình cốt lõi. Nền tảng càng vững chắc, khả năng làm chủ các công nghệ AI nâng cao ở các năm cuối càng vượt trội.",
    speakerNotes: "Phân tích chiến lược đào tạo: Sinh viên cần phân bổ năng lượng hợp lý. Việc nóng vội ứng dụng các công nghệ thời thượng ở tầng ứng dụng mà bỏ qua nền tảng giải thuật và toán học ở năm 1-2 sẽ tạo ra lỗ hổng kiến thức không thể bù đắp."
  },
  {
    id: 47,
    sectionId: 4,
    sectionName: "Chương 4: Thực Hành & Hành Trang",
    title: "8 Quy Tắc Chuẩn Mực Khi Ứng Dụng AI Trong Học Tập & Nghiên Cứu",
    subtitle: "Khung nguyên tắc phương pháp luận bảo đảm tính chính xác, an toàn và liêm chính học thuật",
    type: "checklist",
    tag: "QUY CHUẨN NGUYÊN TẮC HỌC THUẬT",
    image: "assets/images/slide-47-top10-takeaways.jpg",
    onlineImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ghi chép sổ tay các quy tắc học tập quan trọng",
    imageCaption: "8 nguyên tắc cốt lõi đồng hành suốt quá trình học tập và nghiên cứu",
    checklist: [
      { id: "r1", title: "1. Nguyên tắc Zero Trust với đầu ra tự động", desc: "Không chấp nhận bất kỳ mã nguồn, công thức toán hay trích dẫn nào nếu chưa qua bước kiểm chứng thực nghiệm độc lập." },
      { id: "r2", title: "2. Vai trò Kiến trúc sư trưởng", desc: "Con người chịu trách nhiệm toàn diện về thiết kế hệ thống và an toàn thông tin; công cụ AI chỉ đảm nhiệm vai trò hỗ trợ kỹ thuật." },
      { id: "r3", title: "3. Cấu trúc câu lệnh kỹ thuật CLEAR", desc: "Luôn thiết lập đầy đủ bối cảnh, ràng buộc kỹ thuật khắt khe và định dạng đầu ra chuẩn mực trong mọi truy vấn." },
      { id: "r4", title: "4. Phương pháp luận phản biện Socratic", desc: "Yêu cầu hệ thống đóng vai trò người phản biện logic để phát hiện lỗ hổng tư duy thay vì nhận lời giải có sẵn." },
      { id: "r5", title: "5. Xác thực mã định danh số DOI bắt buộc", desc: "Chỉ đưa vào danh mục tài liệu tham khảo các công trình khoa học có thể xác thực trực tiếp trên các cơ sở dữ liệu chính quy." },
      { id: "r6", title: "6. Kỷ luật an ninh thông tin nghiêm ngặt", desc: "Tuyệt đối không đưa mã nguồn mật mã chưa công bố, dữ liệu nhạy cảm hoặc thông tin định danh lên các dịch vụ đám mây công cộng." },
      { id: "r7", title: "7. Mục tiêu năng lực thực chất", desc: "Đánh giá năng lực dựa trên khả năng giải quyết bài toán độc lập trong môi trường phòng máy kiểm thử, không dựa trên kết quả hỗ trợ từ máy móc." },
      { id: "r8", title: "8. Kỷ luật tích lũy học thuật bền bỉ", desc: "Duy trì thói quen thực hành kỹ thuật độc lập và củng cố tri thức ngắt quãng mỗi ngày." }
    ],
    speakerNotes: "Phân tích nguyên tắc: 8 quy tắc này là khung tiêu chuẩn đạo đức và phương pháp luận khoa học xuyên suốt 4 năm học tập và nghiên cứu tại Khoa Công nghệ Thông tin - KMA."
  },
  {
    id: 48,
    sectionId: 4,
    sectionName: "Chương 4: Thực Hành & Hành Trang",
    title: "Đánh Giá Tổng Kết: Bản Chất & Vai Trò Của Trí Tuệ Nhân Tạo",
    subtitle: "Kiểm tra mức độ nắm bắt bản chất khoa học của AI sau toàn bộ chương trình chuyên đề",
    type: "quiz",
    tag: "ĐÁNH GIÁ TỔNG KẾT",
    image: "assets/images/slide-05-interactive-poll.jpg",
    onlineImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Sinh viên hoàn thành bài trắc nghiệm tổng kết",
    imageCaption: "Đánh giá tổng kết nhận thức về bản chất công nghệ",
    quizData: {
      question: "Sau toàn bộ chương trình chuyên đề, đâu là nhận định khoa học chính xác nhất về bản chất và vai trò của Trí tuệ Nhân tạo?",
      options: [
        {
          key: "A",
          text: "AI là hệ thống nhận thức toàn năng có khả năng thay thế hoàn toàn tư duy toán học, kỹ thuật lập trình và năng lực nghiên cứu độc lập của con người.",
          feedback: "Nhận định hoàn toàn sai lệch: Bỏ qua bản chất toán học của AI (mô hình xấp xỉ hàm số thống kê), ngộ nhận về năng lực của cỗ máy.",
          isRecommended: false
        },
        {
          key: "B",
          text: "AI là công cụ khuếch đại năng suất vận hành trên nền tảng xác suất thống kê; tư duy phản biện, nền tảng toán học và năng lực kỹ thuật của con người là yếu tố quyết định tính đúng đắn và giá trị của hệ thống.",
          feedback: "KẾT LUẬN CHÍNH XÁC: Phản ánh đúng bản chất kỹ thuật của công nghệ và xác lập đúng vị thế làm chủ của người kỹ sư.",
          isRecommended: true
        },
        {
          key: "C",
          text: "Do tỷ lệ ảo giác và nguy cơ rò rỉ bảo mật, sinh viên kỹ thuật nên loại bỏ hoàn toàn việc tiếp cận và ứng dụng các công cụ AI trong học tập và nghiên cứu.",
          feedback: "Quan điểm bảo thủ và thiếu tính thực tiễn: Khước từ công cụ công nghệ tiên tiến làm giảm năng lực cạnh tranh và khả năng hội nhập học thuật quốc tế.",
          isRecommended: false
        }
      ],
      lecturerComment: "Kết luận: Trí tuệ nhân tạo là đòn bẩy công nghệ; bản lĩnh, nền tảng toán học và đạo đức nghề nghiệp của người kỹ sư là nhân tố định hình giá trị thực tiễn."
    },
    speakerNotes: "Tổng kết bài giảng: Phương án B là thông điệp khoa học cốt lõi của toàn bộ chuyên đề báo cáo."
  },
  {
    id: 49,
    sectionId: 4,
    sectionName: "Chương 4: Thực Hành & Hành Trang",
    title: "Kế Hoạch Hành Động Tuần 1: Chuẩn Hóa Môi Trường Học Tập Kỹ Thuật",
    subtitle: "Lộ trình bảy ngày thiết lập hệ thống công cụ và phương pháp luận học tập chuẩn mực",
    type: "checklist",
    tag: "KẾ HOẠCH HÀNH ĐỘNG TUẦN 1",
    image: "assets/images/slide-49-7day-challenge.jpg",
    onlineImage: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Lập kế hoạch hành động cụ thể",
    imageCaption: "Lộ trình thiết lập môi trường học tập và nghiên cứu chuẩn mực",
    checklist: [
      { id: "p1", title: "Ngày 1: Thiết lập cấu hình bảo mật tài khoản", desc: "Truy cập các nền tảng AI phục vụ học tập, tắt tính năng chia sẻ dữ liệu phục vụ huấn luyện mô hình để bảo vệ dữ liệu cá nhân." },
      { id: "p2", title: "Ngày 2: Thực hành xây dựng câu lệnh khung CLEAR", desc: "Lựa chọn hai khái niệm trừu tượng trong môn Toán cao cấp hoặc Lập trình C++, soạn thảo prompt kỹ thuật đầy đủ 5 thành phần." },
      { id: "p3", title: "Ngày 3: Thực hành gỡ lỗi mã nguồn (Debug) có đối soát", desc: "Soạn thảo một đoạn mã C++ có lỗi biên dịch, sử dụng AI phân tích nguyên nhân và tự tay sửa lỗi độc lập trên môi trường IDE." },
      { id: "p4", title: "Ngày 4: Khảo cứu tài liệu học thuật trên Semantic Scholar", desc: "Thực hiện tìm kiếm hai bài báo khoa học chuẩn IEEE/ACM về chủ đề An toàn thông tin, xác thực mã DOI trên cổng `doi.org`." },
      { id: "p5", title: "Ngày 5: Cài đặt và cấu hình phần mềm Anki", desc: "Xây dựng bộ thẻ ghi nhớ đầu tiên gồm 15 định nghĩa kỹ thuật cốt lõi và kích hoạt chu trình lặp lại ngắt quãng SM-2." },
      { id: "p6", title: "Ngày 6: Luyện tập giao tiếp kỹ thuật bằng tiếng Anh", desc: "Thực hiện phiên đối thoại 15 phút bằng tiếng Anh chuyên ngành với trợ lý ảo về cấu trúc dữ liệu và giải thuật." },
      { id: "p7", title: "Ngày 7: Tổng kết và đánh giá hiệu quả phương pháp luận", desc: "Đánh giá mức độ hiểu sâu kiến thức trong tuần và hoàn thiện kế hoạch học tập cho giai đoạn tiếp theo." }
    ],
    speakerNotes: "Hướng dẫn thực hiện: Kế hoạch 7 ngày giúp sinh viên chuyển hóa các nguyên tắc phương pháp luận được trình bày trong bài giảng thành thói quen kỹ thuật cụ thể."
  },
  {
    id: 50,
    sectionId: 4,
    sectionName: "Chương 4: Thực Hành & Hành Trang",
    title: "KẾT LUẬN & ĐỊNH HƯỚNG PHÁT TRIỂN HỌC THUẬT",
    subtitle: "Thông điệp bế mạc chuyên đề học thuật dành cho sinh viên Khoa Công nghệ Thông tin - KMA",
    type: "quote",
    tag: "KẾT LUẬN HỌC THUẬT BẾ MẠC",
    image: "assets/images/slide-50-conclusion.jpg",
    onlineImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Sinh viên sẵn sàng cho hành trình học thuật mới",
    imageCaption: "Học viện Kỹ thuật Mật mã • Khoa Công nghệ Thông tin",
    quoteText: "Trí tuệ nhân tạo có thể cung cấp câu trả lời cho hàng tỷ câu hỏi kỹ thuật, nhưng tư duy phản biện, sự khổ luyện thực chất và đạo đức nghề nghiệp của người kỹ sư mới là nhân tố quyết định tương lai của công nghệ.",
    quoteAuthor: "TS. Lê Đức Thuận • Khoa Công nghệ Thông tin - Học viện Kỹ thuật Mật mã",
    bridgeSummary: "Học viện Kỹ thuật Mật mã cam kết tạo dựng môi trường học thuật nghiêm túc, chuẩn mực và hiện đại. Chúc các bạn sinh viên đạt nhiều thành tích xuất sắc trong học tập và nghiên cứu khoa học!",
    speakerNotes: "Lời kết bế mạc: Trân trọng cảm ơn quý thầy cô và các bạn sinh viên đã tham dự buổi báo cáo chuyên đề học thuật. Kính chúc các bạn sinh viên một khóa học nhiều thành công, giữ vững bản lĩnh và tinh thần học thuật chân chính."
  }
];

// Xuất biến toàn cục cho script.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SLIDES_DATA;
}
