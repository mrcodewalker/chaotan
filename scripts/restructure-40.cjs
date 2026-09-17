const fs = require('fs');
const path = require('path');

const source = require('../js/slides-data.js');
const keepIds = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  18, 19, 20, 21, 22, 24, 25,
  27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 39, 40, 41, 42, 43, 50
];

const slides = keepIds.map(id => structuredClone(source.find(slide => slide.id === id)));
const byOldId = Object.fromEntries(keepIds.map((id, index) => [id, slides[index]]));

function flow(title, tag, nodes, sourceLabel = 'Minh họa cho bài giảng') {
  return { type: 'flow', title, tag, source: sourceLabel, nodes };
}

function resetStandard(slide) {
  slide.type = 'standard';
  delete slide.stats;
  delete slide.benchmarkData;
  delete slide.benchmarkTitle;
  delete slide.benchmarkSource;
  delete slide.probabilityData;
  delete slide.codeSnippet;
  delete slide.codeLab;
  delete slide.comparison;
  delete slide.matrix;
  delete slide.pipeline;
  delete slide.checklist;
  delete slide.quizData;
  delete slide.quoteText;
  delete slide.quoteAuthor;
  delete slide.bridgeSummary;
}

Object.assign(byOldId[2], {
  title: 'AI là gì và đang làm được những gì?',
  subtitle: 'Một hệ thống AI nhận đầu vào, xử lý theo mô hình hoặc luật, rồi tạo ra kết quả để con người sử dụng',
  points: [
    { icon: '◎', title: 'Nhận biết và phân loại', desc: 'AI tìm mẫu trong ảnh, âm thanh, văn bản, log hoặc dữ liệu cảm biến để gắn nhãn và phát hiện bất thường.' },
    { icon: '◇', title: 'Dự đoán và đề xuất', desc: 'Mô hình ước lượng khả năng xảy ra, xếp hạng lựa chọn hoặc hỗ trợ người dùng ra quyết định.' },
    { icon: '✦', title: 'Tạo nội dung và tương tác', desc: 'Generative AI tạo bản nháp văn bản, mã, hình ảnh hoặc hội thoại dựa trên các mẫu đã học.' }
  ],
  highlight: 'AI tạo ra kết quả hữu ích khi nhiệm vụ, dữ liệu và tiêu chí đánh giá được xác định rõ.',
  visual: flow('MỘT HỆ THỐNG AI Ở MỨC KHÁI QUÁT', 'INPUT — MODEL — OUTPUT', [
    { icon: 'IN', title: 'Dữ liệu và yêu cầu', desc: 'Văn bản, ảnh, âm thanh, số liệu' },
    { icon: 'AI', title: 'Mô hình xử lý', desc: 'Nhận dạng, dự đoán hoặc tạo nội dung', highlight: true },
    { icon: 'OUT', title: 'Kết quả', desc: 'Cần kiểm tra trước khi sử dụng' }
  ])
});

Object.assign(byOldId[10], {
  title: 'Vì sao câu trả lời của AI có thể sai?',
  subtitle: 'Mô hình tạo câu trả lời phù hợp với ngữ cảnh, nhưng không tự bảo đảm tính đúng đắn',
  points: [
    { icon: '?', title: 'Câu hỏi thiếu dữ kiện', desc: 'AI phải tự suy đoán mục tiêu, phạm vi hoặc điều kiện mà người dùng chưa nêu.' },
    { icon: '!', title: 'Nguồn và suy luận có thể sai', desc: 'Tên bài báo, số liệu, đoạn mã và kết luận có thể nghe hợp lý nhưng không tồn tại hoặc không phù hợp.' },
    { icon: '✓', title: 'Kết quả phụ thuộc cách kiểm tra', desc: 'Tài liệu gốc, phép tính, dữ liệu thử và phản biện của con người quyết định mức độ tin cậy.' }
  ],
  highlight: 'Sự trôi chảy của câu trả lời không phải bằng chứng về độ chính xác.',
  visual: flow('VÒNG KIỂM CHỨNG CÂU TRẢ LỜI AI', 'VERIFY BEFORE USE', [
    { icon: '1', title: 'Nhận câu trả lời', desc: 'Xem như một giả thuyết hoặc bản nháp' },
    { icon: '2', title: 'Đối chiếu', desc: 'Nguồn gốc, dữ liệu hoặc kết quả chạy thử', highlight: true },
    { icon: '3', title: 'Chỉnh sửa và kết luận', desc: 'Giữ lại phần có căn cứ' }
  ])
});

Object.assign(byOldId[13], {
  title: 'Bốn nhóm nhiệm vụ AI hỗ trợ sinh viên',
  subtitle: 'Các nhiệm vụ được sắp theo một vòng học hoàn chỉnh từ tiếp nhận kiến thức đến tự đánh giá',
  tag: 'CHƯƠNG 1 • BẢN ĐỒ ỨNG DỤNG',
  matrix: {
    quadrants: [
      { type: 'positive', icon: 'READ', title: 'Đọc và tổ chức tài liệu', items: ['Lập bản đồ khái niệm từ giáo trình', 'So sánh định nghĩa giữa nhiều nguồn', 'Tạo danh sách thuật ngữ cần tra cứu'] },
      { type: 'guideline', icon: 'ASK', title: 'Giải thích và hỏi đáp', items: ['Diễn giải theo trình độ hiện tại', 'Dùng một ví dụ xuyên suốt khái niệm', 'Đặt câu hỏi ngược để kiểm tra hiểu'] },
      { type: 'positive', icon: 'DO', title: 'Luyện tập và thực hành', items: ['Tạo bài tập theo mức độ', 'Gợi ý cách gỡ lỗi có giải thích', 'Sinh dữ liệu kiểm thử để tự chạy'] },
      { type: 'warning', icon: 'REV', title: 'Ôn tập và phản hồi', items: ['Tạo thẻ nhớ từ ghi chú', 'Phân tích lỗi sai sau mỗi bài', 'Lập kế hoạch ôn theo lỗ hổng kiến thức'] }
    ]
  },
  highlight: 'AI hữu ích nhất khi gắn với một hoạt động học cụ thể và có sản phẩm để sinh viên tự kiểm tra.',
  speakerNotes: 'Slide này mở đầu chuỗi ứng dụng trong học tập. Bốn nhóm nhiệm vụ sẽ được triển khai lần lượt ở các slide tiếp theo.'
});

Object.assign(byOldId[14], {
  title: 'Những việc AI không thể làm thay người học',
  subtitle: 'Bốn giới hạn giúp xác định phần việc sinh viên phải tự thực hiện và chịu trách nhiệm',
  tag: 'CHƯƠNG 1 • RANH GIỚI SỬ DỤNG',
  matrix: {
    quadrants: [
      { type: 'negative', icon: 'EXAM', title: 'Năng lực trong phòng thi', items: ['Tự nhớ và vận dụng kiến thức', 'Viết và giải thích lời giải không có trợ giúp', 'Quản lý thời gian và áp lực'] },
      { type: 'negative', icon: 'DEF', title: 'Bảo vệ bài làm', items: ['Giải thích lựa chọn thiết kế', 'Trả lời câu hỏi phát sinh', 'Thừa nhận giới hạn của kết quả'] },
      { type: 'warning', icon: 'ETH', title: 'Trách nhiệm học thuật', items: ['Tuân thủ quy định môn học', 'Chịu trách nhiệm về nguồn và số liệu', 'Bảo vệ dữ liệu và quyền riêng tư'] },
      { type: 'guideline', icon: 'TEAM', title: 'Kinh nghiệm con người', items: ['Hợp tác trong nhóm', 'Tiếp nhận phản hồi trực tiếp', 'Xây dựng uy tín qua công việc thực tế'] }
    ]
  },
  highlight: 'AI mở rộng năng lực, nhưng người học vẫn phải hiểu, trình bày và chịu trách nhiệm về sản phẩm cuối.',
  speakerNotes: 'Kết nối từ slide trước: sau khi biết AI hỗ trợ nhiệm vụ nào, sinh viên cần xác định phần việc không được chuyển giao cho công cụ.'
});

Object.assign(byOldId[18], {
  title: 'Đọc tài liệu kỹ thuật theo ba lượt',
  subtitle: 'AI giúp định hướng việc đọc, nhưng nội dung quan trọng vẫn phải quay lại tài liệu gốc',
  points: [
    { icon: '1', title: 'Lượt 1: nhìn cấu trúc', desc: 'Xác định mục tiêu tài liệu, mục lục, thuật ngữ chính và phần liên quan trực tiếp đến câu hỏi học tập.' },
    { icon: '2', title: 'Lượt 2: hỏi theo đoạn', desc: 'Yêu cầu AI giải thích từng đoạn khó, chỉ ra thuật ngữ chưa rõ và nêu ví dụ gần với chuyên ngành.' },
    { icon: '3', title: 'Lượt 3: tự tóm tắt', desc: 'Đóng tài liệu, viết lại ý chính bằng lời của mình rồi mở nguồn để kiểm tra phần thiếu hoặc hiểu sai.' }
  ],
  highlight: 'Tóm tắt của AI giúp tìm đường. Ghi chú do sinh viên tự viết mới cho thấy mức độ hiểu.',
  visual: flow('BA LƯỢT ĐỌC TÀI LIỆU KỸ THUẬT', 'ORIENT — EXPLAIN — RECALL', [
    { icon: 'MAP', title: 'Nhìn toàn cảnh', desc: 'Mục tiêu, cấu trúc, thuật ngữ' },
    { icon: 'AI', title: 'Làm rõ đoạn khó', desc: 'Hỏi theo đúng phần đang đọc', highlight: true },
    { icon: 'NOTE', title: 'Tự viết lại', desc: 'Đối chiếu với tài liệu gốc' }
  ])
});

Object.assign(byOldId[19], {
  title: 'Một khái niệm, ba tầng giải thích',
  subtitle: 'Cùng một nội dung nên được nhìn qua trực giác, cơ chế và tình huống sử dụng',
  points: [
    { icon: 'A', title: 'Tầng trực giác', desc: 'Dùng phép so sánh hoặc hình ảnh để trả lời câu hỏi “ý tưởng chính là gì?” trước khi gặp thuật ngữ.' },
    { icon: 'B', title: 'Tầng cơ chế', desc: 'Mô tả đầu vào, các bước xử lý và đầu ra. Giữ lại thuật ngữ cần thiết để sinh viên đọc tài liệu chuyên ngành.' },
    { icon: 'C', title: 'Tầng ứng dụng', desc: 'Đặt khái niệm vào một tình huống CNTT, ATTT hoặc ĐTVT và nêu điều kiện khiến cách làm thất bại.' }
  ],
  highlight: 'Một lời giải thích tốt giúp người học chuyển được từ ví dụ trực quan sang cách dùng trong bài toán thật.',
  visual: flow('CẤU TRÚC GIẢI THÍCH CÓ CHIỀU SÂU', 'INTUITION — MECHANISM — APPLICATION', [
    { icon: 'WHY', title: 'Trực giác', desc: 'Ý tưởng và phép so sánh' },
    { icon: 'HOW', title: 'Cơ chế', desc: 'Đầu vào, xử lý, đầu ra', highlight: true },
    { icon: 'USE', title: 'Ứng dụng và giới hạn', desc: 'Khi nào dùng, khi nào không' }
  ])
});

Object.assign(byOldId[20], {
  title: 'Cấu trúc một yêu cầu hiệu quả',
  subtitle: 'Yêu cầu tốt cung cấp đủ ngữ cảnh để AI trả lời đúng phạm vi và dễ kiểm tra',
  points: [
    { icon: '1', title: 'Bối cảnh và mục tiêu', desc: 'Nêu môn học, trình độ, điều đang vướng và mục đích của câu trả lời. Ví dụ: chuẩn bị đọc RFC, không phải học thuộc định nghĩa.' },
    { icon: '2', title: 'Đầu vào và nhiệm vụ', desc: 'Đưa đoạn tài liệu, mã hoặc dữ liệu cần xử lý. Nói rõ AI phải giải thích, so sánh, đặt câu hỏi hay rà lỗi.' },
    { icon: '3', title: 'Tiêu chí và định dạng', desc: 'Yêu cầu nêu giả định, đánh dấu phần chưa chắc chắn, trích đoạn nguồn và trình bày theo bảng hoặc từng bước.' }
  ],
  highlight: 'Prompt không cần dài. Prompt cần đủ thông tin để câu trả lời có thể được đánh giá.',
  visual: flow('BỐN THÀNH PHẦN CỦA MỘT YÊU CẦU', 'CONTEXT — INPUT — TASK — CHECK', [
    { icon: 'CTX', title: 'Bối cảnh', desc: 'Người học và mục tiêu' },
    { icon: 'IN', title: 'Đầu vào', desc: 'Nguồn, mã hoặc dữ liệu' },
    { icon: 'DO', title: 'Nhiệm vụ', desc: 'Hành động AI cần thực hiện', highlight: true },
    { icon: 'OK', title: 'Tiêu chí kiểm tra', desc: 'Định dạng, nguồn và giới hạn' }
  ])
});

Object.assign(byOldId[21], {
  title: 'Yêu cầu mơ hồ và yêu cầu có cấu trúc',
  subtitle: 'Ví dụ cùng một mục tiêu học mạng máy tính nhưng chất lượng đầu vào khác nhau',
  tag: 'CHƯƠNG 1 • THIẾT KẾ YÊU CẦU',
  comparison: {
    leftTitle: 'Yêu cầu mơ hồ',
    leftSubtitle: '“Giải thích TCP cho tôi”',
    leftItems: [
      'Không cho biết người học đã biết gì hoặc đang đọc tài liệu nào.',
      'Không xác định cần trực giác, chi tiết cơ chế hay bài tập luyện tập.',
      'Câu trả lời dễ lan man và dùng thuật ngữ không phù hợp.',
      'Người học khó biết phần nào cần kiểm chứng.'
    ],
    rightTitle: 'Yêu cầu có cấu trúc',
    rightSubtitle: 'Mục tiêu, nguồn và tiêu chí rõ ràng',
    rightItems: [
      '“Tôi là sinh viên năm hai, đã biết mô hình OSI và đang đọc phần TCP trong giáo trình.”',
      '“Hãy giải thích cơ chế thiết lập kết nối bằng một sơ đồ và một ví dụ gói tin.”',
      '“Sau đó đặt ba câu hỏi để kiểm tra tôi đã hiểu chưa.”',
      '“Đánh dấu chi tiết nào cần đối chiếu lại với RFC.”'
    ]
  },
  speakerNotes: 'Liên kết trực tiếp với slide trước. Trình bày từng thành phần của yêu cầu bên phải và chỉ ra vì sao nó giúp sinh viên đánh giá câu trả lời.'
});

Object.assign(byOldId[22], {
  title: 'Kỹ thuật Feynman với AI',
  subtitle: 'Dùng AI làm người phản biện sau khi sinh viên tự giải thích kiến thức bằng lời của mình',
  points: [
    { icon: '1', title: 'Chọn một khái niệm hẹp', desc: 'Ví dụ: hàm băm, định tuyến, nhiễu kênh hoặc cây tìm kiếm.' },
    { icon: '2', title: 'Tự giải thích không nhìn tài liệu', desc: 'Viết hoặc nói như đang giảng cho một bạn chưa học môn đó.' },
    { icon: '3', title: 'Nhờ AI đặt câu hỏi phản biện', desc: 'Yêu cầu tìm chỗ thiếu điều kiện, thuật ngữ mơ hồ và ví dụ chưa đúng.' }
  ],
  highlight: 'AI tham gia sau bước tự nhớ lại để tránh biến việc học thành đọc câu trả lời thụ động.',
  visual: flow('VÒNG LẶP FEYNMAN CÓ AI HỖ TRỢ', 'EXPLAIN — CHALLENGE — REVISE', [
    { icon: 'ME', title: 'Tự giải thích', desc: 'Không nhìn tài liệu' },
    { icon: 'AI', title: 'AI phản biện', desc: 'Hỏi vào điểm thiếu hoặc mơ hồ', highlight: true },
    { icon: 'FIX', title: 'Sửa và giản lược', desc: 'Quay lại nguồn khi cần' }
  ])
});

Object.assign(byOldId[27], {
  title: 'Quy trình nghiên cứu và vị trí của AI',
  subtitle: 'AI hỗ trợ từng công đoạn, còn câu hỏi, bằng chứng và kết luận thuộc trách nhiệm của nhà nghiên cứu',
  tag: 'CHƯƠNG 2 • QUY TRÌNH NGHIÊN CỨU',
  speakerNotes: 'Đây là slide mở đầu Chương 2, thay cho slide chuyển chương dạng trích dẫn. Nhấn mạnh sự liên tục với Chương 1: đầu vào rõ, hỗ trợ có mục tiêu, kiểm chứng đầu ra.'
});

Object.assign(byOldId[30], {
  title: 'Đọc một bài báo theo cấu trúc lập luận',
  subtitle: 'Tách bài báo thành câu hỏi, phương pháp, bằng chứng, kết luận và giới hạn',
  points: [
    { icon: 'Q', title: 'Câu hỏi và đóng góp', desc: 'Bài báo giải quyết vấn đề nào, khác gì so với công trình trước và đóng góp được tuyên bố là gì?' },
    { icon: 'M', title: 'Phương pháp và dữ liệu', desc: 'Tác giả dùng dữ liệu, mô hình, thiết bị hoặc quy trình thử nghiệm nào để trả lời câu hỏi?' },
    { icon: 'E', title: 'Bằng chứng và giới hạn', desc: 'Kết quả nào hỗ trợ kết luận, cách so sánh có công bằng không và điều gì chưa được kiểm chứng?' }
  ],
  highlight: 'AI có thể lập bảng bóc tách, nhưng người đọc phải mở đúng phần của bài báo để xác nhận từng ô.',
  speakerNotes: 'Nguồn ảnh bài báo Transformer: https://arxiv.org/abs/1706.03762. Dùng ảnh như ví dụ về một bản ghi bài báo, không đi sâu vào kiến trúc Transformer.'
});

Object.assign(byOldId[34], {
  title: 'Từ bản nháp AI đến đoạn văn học thuật',
  subtitle: 'Đoạn văn nghiên cứu cần nêu bằng chứng, phạm vi và mức độ chắc chắn phù hợp',
  tag: 'CHƯƠNG 2 • VIẾT HỌC THUẬT',
  comparison: {
    leftTitle: 'Bản nháp thiếu căn cứ',
    leftSubtitle: 'Nghe thuyết phục nhưng khó kiểm tra',
    leftItems: [
      '“Phương pháp này rất tốt và nhanh hơn hẳn các phương pháp cũ.”',
      'Không nêu dữ liệu, thước đo hoặc điều kiện thử nghiệm.',
      'Dùng từ khẳng định mạnh hơn mức bằng chứng cho phép.',
      'Không chỉ ra giới hạn hoặc trường hợp ngoại lệ.'
    ],
    rightTitle: 'Đoạn văn có thể kiểm chứng',
    rightSubtitle: 'Kết luận bám số liệu và phạm vi thử nghiệm',
    rightItems: [
      'Nêu đúng thước đo và tập dữ liệu đã sử dụng.',
      'So sánh với một đường cơ sở được mô tả rõ.',
      'Phân biệt kết quả quan sát với cách diễn giải của tác giả.',
      'Giữ lại giới hạn và điều kiện áp dụng của kết luận.'
    ]
  },
  speakerNotes: 'AI có thể hỗ trợ biên tập câu chữ. Tác giả cần đối chiếu từng nhận định với bảng, hình hoặc nguồn tương ứng.'
});

Object.assign(byOldId[35], {
  title: 'Khả năng tái lập của một kết quả nghiên cứu',
  subtitle: 'Người khác cần đủ thông tin để chạy lại quy trình và hiểu vì sao kết quả có thể khác',
  points: [
    { icon: '1', title: 'Dữ liệu và phiên bản', desc: 'Ghi nguồn, cách tiền xử lý, quyền sử dụng và phiên bản tập dữ liệu.' },
    { icon: '2', title: 'Mã, thư viện và cấu hình', desc: 'Lưu mã nguồn, phiên bản thư viện, tham số, phần cứng hoặc thiết bị đo ảnh hưởng tới kết quả.' },
    { icon: '3', title: 'Lệnh chạy và đầu ra mong đợi', desc: 'Mô tả cách tái tạo bảng, hình và tiêu chí xác nhận lần chạy thành công.' }
  ],
  highlight: 'AI giúp viết tài liệu và mã mẫu, nhưng không thể bổ sung những chi tiết thí nghiệm mà nhóm nghiên cứu không lưu lại.',
  visual: flow('GÓI TÁI LẬP KẾT QUẢ', 'DATA — ENVIRONMENT — PROCEDURE', [
    { icon: 'DATA', title: 'Dữ liệu', desc: 'Nguồn và cách xử lý' },
    { icon: 'ENV', title: 'Môi trường', desc: 'Mã, thư viện, cấu hình', highlight: true },
    { icon: 'RUN', title: 'Quy trình chạy', desc: 'Lệnh, tham số và đầu ra' }
  ])
});

Object.assign(byOldId[36], {
  title: 'Minh bạch khi dùng AI trong nghiên cứu',
  subtitle: 'Chính sách khác nhau theo nơi công bố, nhưng trách nhiệm về nội dung luôn thuộc về tác giả',
  tag: 'CHƯƠNG 2 • LIÊM CHÍNH HỌC THUẬT',
  matrix: {
    quadrants: [
      { type: 'positive', icon: 'EDIT', title: 'Hỗ trợ biên tập', items: ['Rà ngữ pháp và độ rõ', 'Gợi ý định dạng bảng hoặc LaTeX', 'Tác giả kiểm tra lại toàn bộ nội dung'] },
      { type: 'guideline', icon: 'DISC', title: 'Cần công bố phù hợp', items: ['Nội dung, hình hoặc mã do AI tạo', 'Mức độ AI tham gia vào quy trình', 'Tuân thủ mẫu khai báo của nơi nộp bài'] },
      { type: 'negative', icon: 'NO', title: 'Không chấp nhận', items: ['Đưa AI vào danh sách tác giả', 'Dùng nguồn hoặc số liệu không tồn tại', 'Tải bản thảo kín lên dịch vụ không được phép'] },
      { type: 'warning', icon: 'AUTH', title: 'Tác giả chịu trách nhiệm', items: ['Tính chính xác và nguyên bản', 'Quyền sử dụng dữ liệu', 'Khả năng giải trình khi được hỏi'] }
    ]
  },
  highlight: 'Trước khi dùng AI, kiểm tra chính sách của môn học, đơn vị và hội nghị hoặc tạp chí cụ thể.',
  speakerNotes: 'Tham khảo: IEEE Editorial Style Manual for Authors yêu cầu công bố nội dung do AI tạo trong phần acknowledgments; ACM yêu cầu tác giả chịu trách nhiệm và tuân thủ chính sách công bố việc dùng GenAI. Nguồn: https://journals.ieeeauthorcenter.ieee.org/wp-content/uploads/sites/7/IEEE-Editorial-Style-Manual-for-Authors.pdf và https://www.acm.org/publications/policies'
});

Object.assign(byOldId[39], {
  title: 'Một quy trình nghiên cứu AI trong CNTT',
  subtitle: 'Ví dụ xuyên suốt: dùng AI hỗ trợ phân tích lỗi trong hệ thống phần mềm',
  tag: 'CHƯƠNG 2 • VÍ DỤ CNTT',
  matrix: {
    quadrants: [
      { type: 'positive', icon: 'Q', title: 'Câu hỏi', items: ['Loại lỗi nào tốn nhiều thời gian xử lý?', 'AI có giúp ưu tiên log tốt hơn quy tắc hiện tại?', 'Tiêu chí thành công được đo như thế nào?'] },
      { type: 'guideline', icon: 'DATA', title: 'Dữ liệu', items: ['Log đã ẩn thông tin nhạy cảm', 'Nhãn sự cố do chuyên gia xác nhận', 'Tách dữ liệu huấn luyện và đánh giá'] },
      { type: 'warning', icon: 'EVAL', title: 'Đánh giá', items: ['Độ chính xác theo từng nhóm lỗi', 'Thời gian chuyên gia tiết kiệm được', 'Phân tích trường hợp AI dự đoán sai'] },
      { type: 'negative', icon: 'CTRL', title: 'Kiểm soát', items: ['Không tự động sửa hệ thống sản xuất', 'Giữ nhật ký quyết định', 'Chuyên gia phê duyệt hành động'] }
    ]
  },
  highlight: 'Ví dụ CNTT vẫn tuân theo cùng chuỗi: câu hỏi rõ, dữ liệu phù hợp, đánh giá có đường cơ sở và hành động có kiểm soát.'
});

Object.assign(byOldId[40], {
  title: 'Một quy trình nghiên cứu AI trong ATTT',
  subtitle: 'Ví dụ xuyên suốt: hỗ trợ phân loại và điều tra cảnh báo bảo mật',
  points: [
    { icon: 'Q', title: 'Bài toán', desc: 'Giảm số cảnh báo chuyên gia phải đọc nhưng không bỏ sót các sự kiện quan trọng.' },
    { icon: 'D', title: 'Bằng chứng', desc: 'Đánh giá trên log có nhãn, theo dõi cảnh báo sai và so sánh với quy trình SOC hiện tại.' },
    { icon: 'R', title: 'Ràng buộc', desc: 'Không đưa khóa, dữ liệu cá nhân hoặc cấu hình nhạy cảm vào dịch vụ công cộng. Chuyên gia phê duyệt mọi hành động.' }
  ],
  highlight: 'Trong ATTT, chi phí của một dự đoán sai phải được phân tích cùng với độ chính xác trung bình.',
  visual: flow('CHUỖI XỬ LÝ CẢNH BÁO CÓ GIÁM SÁT', 'DETECT — TRIAGE — VERIFY — RESPOND', [
    { icon: 'LOG', title: 'Sự kiện', desc: 'Log, lưu lượng, cảnh báo' },
    { icon: 'AI', title: 'AI ưu tiên', desc: 'Nhóm và giải thích tín hiệu', highlight: true },
    { icon: 'SOC', title: 'Chuyên gia xác minh', desc: 'Đối chiếu bằng chứng' },
    { icon: 'ACT', title: 'Phản ứng', desc: 'Thực hiện theo phê duyệt' }
  ])
});

Object.assign(byOldId[41], {
  title: 'Một quy trình nghiên cứu AI trong ĐTVT',
  subtitle: 'Ví dụ xuyên suốt: dự báo tải mạng để hỗ trợ phân bổ tài nguyên',
  points: [
    { icon: 'Q', title: 'Bài toán', desc: 'Dự báo tải theo khu vực hoặc khung giờ để phát hiện sớm nguy cơ nghẽn mạng.' },
    { icon: 'D', title: 'Bằng chứng', desc: 'Dữ liệu KPI theo thời gian, sự kiện vận hành và đường cơ sở dự báo truyền thống.' },
    { icon: 'R', title: 'Ràng buộc', desc: 'Theo dõi thay đổi mô hình lưu lượng, độ trễ dự báo và tác động trước khi áp dụng lên mạng thật.' }
  ],
  highlight: 'Một mô hình dự báo có ích khi sai số được đo đúng bối cảnh và quyết định vận hành vẫn có cơ chế an toàn.',
  visual: flow('TỪ TÍN HIỆU TỚI QUYẾT ĐỊNH VẬN HÀNH', 'MEASURE — FORECAST — CHECK — APPLY', [
    { icon: 'KPI', title: 'Đo lường', desc: 'Lưu lượng và chất lượng dịch vụ' },
    { icon: 'AI', title: 'Dự báo', desc: 'Ước lượng tải sắp tới', highlight: true },
    { icon: 'OPS', title: 'Kiểm tra', desc: 'So với ngưỡng và dữ liệu thực tế' },
    { icon: 'NET', title: 'Điều chỉnh', desc: 'Áp dụng có giám sát' }
  ])
});

Object.assign(byOldId[43], {
  title: 'Trình bày một kết quả nghiên cứu',
  subtitle: 'Mỗi slide nên nối câu hỏi nghiên cứu với bằng chứng và kết luận có giới hạn',
  points: [
    { icon: 'Q', title: 'Câu hỏi', desc: 'Nêu điều người nghe cần hiểu hoặc quyết định sau slide này.' },
    { icon: 'E', title: 'Bằng chứng', desc: 'Chọn bảng, biểu đồ hoặc ví dụ trực tiếp hỗ trợ nhận định. Ghi rõ nguồn và đơn vị.' },
    { icon: 'C', title: 'Kết luận', desc: 'Nói đúng điều dữ liệu cho phép và giữ lại giới hạn ảnh hưởng tới cách diễn giải.' }
  ],
  highlight: 'AI hỗ trợ biên tập bố cục và câu chữ. Người trình bày phải bảo vệ được nguồn, số liệu và cách suy luận.',
  visual: flow('MẠCH LẬP LUẬN CỦA MỘT SLIDE NGHIÊN CỨU', 'QUESTION — EVIDENCE — CLAIM', [
    { icon: 'Q', title: 'Câu hỏi', desc: 'Điều cần trả lời' },
    { icon: 'E', title: 'Bằng chứng', desc: 'Bảng, hình, thử nghiệm', highlight: true },
    { icon: 'C', title: 'Kết luận có giới hạn', desc: 'Phạm vi và điều kiện áp dụng' }
  ])
});

resetStandard(byOldId[50]);
Object.assign(byOldId[50], {
  title: 'Năng lực cốt lõi khi học và nghiên cứu cùng AI',
  subtitle: 'Một quy trình chung cho cả hai chương: xác định nhiệm vụ, dùng AI có mục tiêu và kiểm chứng kết quả',
  tag: 'TỔNG KẾT',
  image: null,
  onlineImage: '',
  imageAlt: '',
  imageCaption: '',
  points: [
    { icon: '1', title: 'Đặt câu hỏi tốt', desc: 'Xác định mục tiêu, đầu vào, phạm vi và tiêu chí đánh giá trước khi dùng công cụ.' },
    { icon: '2', title: 'Làm việc với nguồn và dữ liệu', desc: 'Giữ liên kết tới tài liệu gốc, phiên bản dữ liệu và bằng chứng tạo ra kết luận.' },
    { icon: '3', title: 'Giải trình sản phẩm cuối', desc: 'Tự giải thích được nội dung, giới hạn, rủi ro và phần AI đã hỗ trợ.' }
  ],
  highlight: 'Giá trị của AI nằm ở chất lượng quy trình mà người học và người nghiên cứu xây dựng xung quanh nó.',
  visual: flow('QUY TRÌNH DÙNG AI CÓ TRÁCH NHIỆM', 'FRAME — ASSIST — VERIFY — OWN', [
    { icon: 'Q', title: 'Xác định nhiệm vụ', desc: 'Mục tiêu và tiêu chí' },
    { icon: 'AI', title: 'AI hỗ trợ', desc: 'Tạo phương án hoặc bản nháp', highlight: true },
    { icon: 'V', title: 'Kiểm chứng', desc: 'Nguồn, dữ liệu, thử nghiệm' },
    { icon: 'ME', title: 'Con người chịu trách nhiệm', desc: 'Hiểu, trình bày và quyết định' }
  ]),
  speakerNotes: 'Tổng kết cả hai chương bằng một quy trình chung. Có thể yêu cầu sinh viên tự chọn một nhiệm vụ học tập hoặc nghiên cứu và chỉ ra bốn bước trên.'
});

slides.forEach((slide, index) => {
  slide.id = index + 1;
  const research = index + 1 >= 24;
  slide.sectionId = research ? 2 : 1;
  slide.sectionName = research
    ? 'Chương 2: Ứng dụng AI trong nghiên cứu'
    : 'Chương 1: Ứng dụng AI trong học tập';
});

const header = `/**\n * Dữ liệu bài giảng: Tổng quan về ứng dụng AI.\n * 40 slide, gồm hai chương liên kết theo quy trình sử dụng AI có kiểm chứng.\n * Đối tượng: sinh viên CNTT, ATTT và ĐTVT.\n */\n\nconst SLIDES_DATA = `;
const footer = `;\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = SLIDES_DATA;\n}\n`;
const output = `${header}${JSON.stringify(slides, null, 2)}${footer}`;

fs.writeFileSync(path.resolve(__dirname, '../js/slides-data.js'), output, 'utf8');
console.log(`Wrote ${slides.length} slides.`);
