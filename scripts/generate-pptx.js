/**
 * GENERATE-PPTX.JS
 * Script xuất toàn bộ 50 slide bài giảng của TS. Lê Đức Thuận sang file PowerPoint (.pptx)
 * Chuẩn định dạng 16:9, màu sắc hiện đại, hình ảnh đầy đủ, kèm toàn bộ ghi chú học thuật.
 */

const fs = require('fs');
const path = require('path');
const pptxgen = require('pptxgenjs');

const ROOT_DIR = path.resolve(__dirname, '..');
const SLIDES_DATA_FILE = path.join(ROOT_DIR, 'js', 'slides-data.js');
const IMAGES_DIR = path.join(ROOT_DIR, 'assets', 'images');
const OUTPUT_DIR = path.join(ROOT_DIR, 'assets');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'Ung-Dung-AI-Trong-Hoc-Tap-KMA-TS-Le-Duc-Thuan.pptx');

const slidesData = require(path.join(ROOT_DIR, 'js', 'slides-data.js'));

console.log(`Đã nạp ${slidesData.length} slide dữ liệu. Bắt đầu khởi tạo PowerPoint...`);

// Khởi tạo bản trình chiếu PptxGenJS
const pres = new pptxgen();

// Cấu hình Layout 16:9 Widescreen (13.33 x 7.5 inches)
pres.layout = 'LAYOUT_16x9';
pres.author = 'TS. Lê Đức Thuận';
pres.company = 'Khoa Công Nghệ Thông Tin - Học Viện Kỹ Thuật Mật Mã (KMA)';
pres.title = 'Ứng Dụng AI Trong Học Tập Và Nghiên Cứu Khoa Học';
pres.subject = 'Bài giảng chuyên đề học thuật chính quy dành cho tân sinh viên';

// Bảng màu thiết kế học thuật hiện đại
const THEME = {
  bgDark: '0B1120',       // Nền xanh đen vũ trụ
  bgCard: '161F33',       // Thẻ nổi bật
  bgCardHover: '1E293B',  // Thẻ phụ
  borderGlass: '2A374F',  // Đường viền nhẹ
  borderGlow: '38BDF8',   // Viền sáng cyan
  textMain: 'FFFFFF',     // Chữ trắng chính
  textMuted: '94A3B8',    // Chữ phụ ghi xám
  textCyan: '38BDF8',     // Cyan nổi bật
  textEmerald: '10B981',  // Xanh lục thành công
  textAmber: 'F59E0B',    // Vàng cảnh báo
  textRose: 'F43F5E',     // Đỏ cam chú ý
  textViolet: 'A855F7',   // Tím công nghệ
  fontHeader: 'Arial',
  fontBody: 'Calibri'
};

// Tìm ảnh đại diện chính xác của từng slide
const allImages = fs.readdirSync(IMAGES_DIR);
function getSlideImage(slide) {
  if (slide.image && fs.existsSync(path.join(ROOT_DIR, slide.image))) {
    return path.join(ROOT_DIR, slide.image);
  }
  const padId = String(slide.id).padStart(2, '0');
  const matched = allImages.find(f => f.startsWith(`slide-${padId}`) && f.endsWith('.jpg'));
  if (matched) {
    return path.join(IMAGES_DIR, matched);
  }
  return null;
}

// Xử lý tạo 50 slide
slidesData.forEach((slide, idx) => {
  const s = pres.addSlide();
  s.background = { color: THEME.bgDark };

  const imgPath = getSlideImage(slide);
  const slideNum = slide.id || (idx + 1);

  // 1. Thêm Header chung cho slide (Trừ Cover Slide 1)
  if (slide.type !== 'cover') {
    // Top Section Pill Tag
    s.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 0.35, w: 5.5, h: 0.35,
      rectRadius: 0.1,
      fill: { color: '111C33' },
      line: { color: THEME.borderGlass, width: 1 }
    });

    s.addText(`SLIDE ${String(slideNum).padStart(2, '0')} • ${slide.sectionName || 'BÁO CÁO HỌC THUẬT KMA'}`, {
      x: 0.9, y: 0.35, w: 5.3, h: 0.35,
      fontSize: 9.5, fontFace: THEME.fontHeader, color: THEME.textCyan,
      bold: true, valign: 'middle'
    });

    // Main Title
    s.addText(slide.title, {
      x: 0.8, y: 0.75, w: 11.7, h: 0.7,
      fontSize: 19, fontFace: THEME.fontHeader, color: THEME.textMain,
      bold: true, valign: 'top'
    });

    // Subtitle
    if (slide.subtitle) {
      s.addText(slide.subtitle, {
        x: 0.8, y: 1.45, w: 11.7, h: 0.45,
        fontSize: 11.5, fontFace: THEME.fontBody, color: THEME.textMuted,
        valign: 'top'
      });
    }
  }

  // 2. Phân loại nội dung theo từng type
  if (slide.type === 'cover') {
    buildCoverSlide(s, slide, imgPath);
  } else if (slide.type === 'standard') {
    buildStandardSlide(s, slide, imgPath);
  } else if (slide.type === 'taxonomy') {
    buildTaxonomySlide(s, slide);
  } else if (slide.type === 'architecture') {
    buildArchitectureSlide(s, slide);
  } else if (slide.type === 'comparison') {
    buildComparisonSlide(s, slide);
  } else if (slide.type === 'dashboard') {
    buildDashboardSlide(s, slide);
  } else if (slide.type === 'quiz') {
    buildQuizSlide(s, slide, imgPath);
  } else if (slide.type === 'matrix') {
    buildMatrixSlide(s, slide);
  } else if (slide.type === 'code-lab') {
    buildCodeLabSlide(s, slide);
  } else if (slide.type === 'quote') {
    buildQuoteSlide(s, slide, imgPath);
  } else if (slide.type === 'pipeline') {
    buildPipelineSlide(s, slide);
  } else if (slide.type === 'workshop') {
    buildWorkshopSlide(s, slide, imgPath);
  } else if (slide.type === 'checklist') {
    buildChecklistSlide(s, slide, imgPath);
  } else {
    buildStandardSlide(s, slide, imgPath);
  }

  // 3. Slide Footer
  s.addShape(pres.ShapeType.line, {
    x: 0.8, y: 7.0, w: 11.7, h: 0,
    line: { color: THEME.borderGlass, width: 1 }
  });

  s.addText('HỌC VIỆN KỸ THUẬT MẬT MÃ (KMA) • KHOA CÔNG NGHỆ THÔNG TIN', {
    x: 0.8, y: 7.05, w: 5.5, h: 0.35,
    fontSize: 8.5, fontFace: THEME.fontBody, color: THEME.textMuted,
    valign: 'middle'
  });

  s.addText('TS. LÊ ĐỨC THUẬN — ỨNG DỤNG AI TRONG HỌC TẬP VÀ NGHIÊN CỨU', {
    x: 5.0, y: 7.05, w: 5.5, h: 0.35,
    fontSize: 8.5, fontFace: THEME.fontBody, color: '64748B',
    align: 'center', valign: 'middle'
  });

  s.addText(`${slideNum} / 50`, {
    x: 10.5, y: 7.05, w: 2.0, h: 0.35,
    fontSize: 9, fontFace: THEME.fontHeader, color: THEME.textCyan,
    bold: true, align: 'right', valign: 'middle'
  });

  // 4. Đính kèm Ghi chú giảng viên (Speaker Notes)
  if (slide.speakerNotes) {
    s.addNotes(slide.speakerNotes);
  }
});

// =========================================================================
// CÁC HÀM XÂY DỰNG TỪNG DẠNG SLIDE
// =========================================================================

function buildCoverSlide(s, slide, imgPath) {
  // Brand Header
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 0.6, w: 6.8, h: 0.5,
    rectRadius: 0.1, fill: { color: '111C33' }, line: { color: THEME.borderGlow, width: 1 }
  });
  s.addText('🛡️ HỌC VIỆN KỸ THUẬT MẬT MÃ • KHOA CÔNG NGHỆ THÔNG TIN', {
    x: 1.0, y: 0.6, w: 6.4, h: 0.5,
    fontSize: 10, fontFace: THEME.fontHeader, color: THEME.textCyan, bold: true, valign: 'middle'
  });

  // Main Cover Title
  s.addText(slide.title, {
    x: 0.8, y: 1.3, w: 6.8, h: 2.2,
    fontSize: 27, fontFace: THEME.fontHeader, color: THEME.textMain, bold: true, valign: 'top'
  });

  // Subtitle
  s.addText(slide.subtitle, {
    x: 0.8, y: 3.6, w: 6.8, h: 1.0,
    fontSize: 13, fontFace: THEME.fontBody, color: THEME.textMuted, valign: 'top'
  });

  // Speaker Card
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 4.8, w: 6.8, h: 1.9,
    rectRadius: 0.15, fill: { color: THEME.bgCard }, line: { color: THEME.borderGlass, width: 1 }
  });

  const lecturer = slide.speakerInfo?.lecturer || 'TS. Lê Đức Thuận';
  const role = slide.speakerInfo?.role || 'Khoa Công nghệ Thông tin • Học viện Kỹ thuật Mật mã';
  const target = slide.speakerInfo?.target || 'Tân Sinh Viên CNTT & ATTT - KMA';
  const duration = slide.speakerInfo?.duration || '90 - 120 phút • 50 Slide chuyên đề';

  s.addText([
    { text: `Báo cáo viên: ${lecturer}\n`, options: { bold: true, fontSize: 13, color: THEME.textCyan } },
    { text: `Đơn vị: ${role}\n`, options: { fontSize: 10.5, color: THEME.textMain } },
    { text: `Đối tượng: ${target}\n`, options: { fontSize: 10, color: THEME.textMuted } },
    { text: `Thời lượng: ${duration}`, options: { fontSize: 10, color: THEME.textAmber } }
  ], {
    x: 1.0, y: 4.9, w: 6.4, h: 1.7,
    fontFace: THEME.fontBody, valign: 'middle'
  });

  // Cover Image (Right Column)
  if (imgPath) {
    try {
      s.addImage({
        path: imgPath,
        x: 8.0, y: 0.8, w: 4.5, h: 5.9,
        sizing: { type: 'cover', w: 4.5, h: 5.9 }
      });
    } catch (e) {
      console.warn(`Không thể chèn ảnh cover: ${e.message}`);
    }
  }
}

function buildStandardSlide(s, slide, imgPath) {
  const hasImage = !!imgPath;
  const leftW = hasImage ? 7.2 : 11.7;
  let curY = 2.0;

  // Stats cards (nếu có)
  if (slide.stats && slide.stats.length > 0) {
    const cardW = (leftW - (slide.stats.length - 1) * 0.2) / slide.stats.length;
    slide.stats.forEach((stat, i) => {
      const cardX = 0.8 + i * (cardW + 0.2);
      s.addShape(pres.ShapeType.roundRect, {
        x: cardX, y: curY, w: cardW, h: 1.15,
        rectRadius: 0.1, fill: { color: THEME.bgCard }, line: { color: THEME.borderGlass, width: 1 }
      });

      let numColor = THEME.textCyan;
      if (stat.type === 'warning') numColor = THEME.textAmber;
      if (stat.type === 'success') numColor = THEME.textEmerald;

      s.addText(stat.number, {
        x: cardX + 0.1, y: curY + 0.1, w: cardW - 0.2, h: 0.5,
        fontSize: 18, fontFace: THEME.fontHeader, color: numColor, bold: true, align: 'center'
      });
      s.addText(stat.label, {
        x: cardX + 0.1, y: curY + 0.6, w: cardW - 0.2, h: 0.45,
        fontSize: 9.5, fontFace: THEME.fontBody, color: THEME.textMuted, align: 'center'
      });
    });
    curY += 1.35;
  }

  // Points list (các ý chính)
  if (slide.points && slide.points.length > 0) {
    const pointH = Math.min(1.2, (5.8 - curY) / slide.points.length);
    slide.points.forEach((p, i) => {
      const pY = curY + i * (pointH + 0.1);
      s.addShape(pres.ShapeType.roundRect, {
        x: 0.8, y: pY, w: leftW, h: pointH,
        rectRadius: 0.1, fill: { color: THEME.bgCard }, line: { color: THEME.borderGlass, width: 1 }
      });

      const icon = p.icon || '📌';
      s.addText([
        { text: `${icon}  ${p.title}\n`, options: { bold: true, fontSize: 11, color: THEME.textCyan } },
        { text: `${p.desc || ''}`, options: { fontSize: 10, color: THEME.textMain } }
      ], {
        x: 1.0, y: pY + 0.08, w: leftW - 0.4, h: pointH - 0.16,
        fontFace: THEME.fontBody, valign: 'middle'
      });
    });
    curY += slide.points.length * (pointH + 0.1);
  }

  // Highlight Box (nếu còn chỗ và có highlight)
  if (slide.highlight && curY < 6.4) {
    s.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: curY + 0.05, w: leftW, h: 0.65,
      rectRadius: 0.08, fill: { color: '111F38' }, line: { color: THEME.borderGlow, width: 1 }
    });
    s.addText(`💡 Điểm cốt lõi: ${slide.highlight}`, {
      x: 0.95, y: curY + 0.05, w: leftW - 0.3, h: 0.65,
      fontSize: 9.5, fontFace: THEME.fontBody, color: THEME.textCyan, italic: true, valign: 'middle'
    });
  }

  // Cột ảnh bên phải
  if (hasImage) {
    try {
      s.addImage({
        path: imgPath,
        x: 8.3, y: 1.9, w: 4.2, h: 4.8,
        sizing: { type: 'cover', w: 4.2, h: 4.8 }
      });
      if (slide.imageCaption) {
        s.addText(slide.imageCaption, {
          x: 8.3, y: 6.45, w: 4.2, h: 0.35,
          fontSize: 8, fontFace: THEME.fontBody, color: THEME.textMuted, italic: true, align: 'center'
        });
      }
    } catch (e) {
      console.warn(`Không thể chèn ảnh slide ${slide.id}: ${e.message}`);
    }
  }
}

function buildTaxonomySlide(s, slide) {
  const items = slide.taxonomy || [];
  const count = Math.min(items.length, 4);
  const colW = (11.7 - (count - 1) * 0.2) / count;

  items.slice(0, count).forEach((item, i) => {
    const colX = 0.8 + i * (colW + 0.2);
    s.addShape(pres.ShapeType.roundRect, {
      x: colX, y: 2.0, w: colW, h: 4.6,
      rectRadius: 0.12, fill: { color: THEME.bgCard }, line: { color: THEME.borderGlass, width: 1 }
    });

    s.addText(item.level || `TẦNG ${i + 1}`, {
      x: colX + 0.15, y: 2.15, w: colW - 0.3, h: 0.3,
      fontSize: 8.5, fontFace: THEME.fontHeader, color: THEME.textCyan, bold: true
    });

    s.addText(item.title, {
      x: colX + 0.15, y: 2.45, w: colW - 0.3, h: 0.55,
      fontSize: 13, fontFace: THEME.fontHeader, color: THEME.textMain, bold: true
    });

    s.addText(item.desc || '', {
      x: colX + 0.15, y: 3.1, w: colW - 0.3, h: 1.4,
      fontSize: 9.5, fontFace: THEME.fontBody, color: THEME.textMuted
    });

    s.addText([
      { text: `Cơ chế hoạt động:\n`, options: { bold: true, fontSize: 9, color: THEME.textCyan } },
      { text: `${item.mechanics || ''}\n\n`, options: { fontSize: 8.5, color: THEME.textMain } },
      { text: `Ví dụ thực tế:\n`, options: { bold: true, fontSize: 9, color: THEME.textEmerald } },
      { text: `${item.examples || ''}`, options: { fontSize: 8.5, color: THEME.textMuted } }
    ], {
      x: colX + 0.15, y: 4.55, w: colW - 0.3, h: 1.9,
      fontFace: THEME.fontBody
    });
  });
}

function buildArchitectureSlide(s, slide) {
  const steps = slide.steps || [];
  const colW = (11.7 - (steps.length - 1) * 0.2) / Math.max(steps.length, 1);

  steps.forEach((step, i) => {
    const colX = 0.8 + i * (colW + 0.2);
    s.addShape(pres.ShapeType.roundRect, {
      x: colX, y: 2.0, w: colW, h: 3.8,
      rectRadius: 0.1, fill: { color: THEME.bgCard }, line: { color: THEME.borderGlass, width: 1 }
    });

    s.addText(`${step.icon || '⚙️'} Bước ${step.step}`, {
      x: colX + 0.15, y: 2.2, w: colW - 0.3, h: 0.35,
      fontSize: 10, fontFace: THEME.fontHeader, color: THEME.textAmber, bold: true
    });

    s.addText(step.title, {
      x: colX + 0.15, y: 2.6, w: colW - 0.3, h: 0.65,
      fontSize: 12, fontFace: THEME.fontHeader, color: THEME.textMain, bold: true
    });

    s.addText(step.desc || '', {
      x: colX + 0.15, y: 3.3, w: colW - 0.3, h: 2.2,
      fontSize: 9.5, fontFace: THEME.fontBody, color: THEME.textMuted
    });
  });

  if (slide.highlight) {
    s.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 6.0, w: 11.7, h: 0.7,
      rectRadius: 0.08, fill: { color: '111F38' }, line: { color: THEME.borderGlow, width: 1 }
    });
    s.addText(`📌 Kết luận kiến trúc: ${slide.highlight}`, {
      x: 1.0, y: 6.0, w: 11.3, h: 0.7,
      fontSize: 10, fontFace: THEME.fontBody, color: THEME.textCyan, italic: true, valign: 'middle'
    });
  }
}

function buildComparisonSlide(s, slide) {
  const comp = slide.comparison || {};
  const left = comp.left || { title: 'Truyền Thống', items: [] };
  const right = comp.right || { title: 'Ứng Dụng AI', items: [] };

  const colW = 5.7;

  // Cột trái
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 2.0, w: colW, h: 4.6,
    rectRadius: 0.12, fill: { color: '1C1622' }, line: { color: '4B2635', width: 1 }
  });
  s.addText(left.title, {
    x: 1.0, y: 2.2, w: colW - 0.4, h: 0.5,
    fontSize: 14, fontFace: THEME.fontHeader, color: THEME.textRose, bold: true
  });
  const leftItems = (left.items || []).map(item => `• ${typeof item === 'string' ? item : item.title + ': ' + (item.desc || '')}`).join('\n\n');
  s.addText(leftItems, {
    x: 1.0, y: 2.8, w: colW - 0.4, h: 3.5,
    fontSize: 10.5, fontFace: THEME.fontBody, color: THEME.textMain
  });

  // Cột phải
  s.addShape(pres.ShapeType.roundRect, {
    x: 6.8, y: 2.0, w: colW, h: 4.6,
    rectRadius: 0.12, fill: { color: '122624' }, line: { color: '1C4C42', width: 1 }
  });
  s.addText(right.title, {
    x: 7.0, y: 2.2, w: colW - 0.4, h: 0.5,
    fontSize: 14, fontFace: THEME.fontHeader, color: THEME.textEmerald, bold: true
  });
  const rightItems = (right.items || []).map(item => `✓ ${typeof item === 'string' ? item : item.title + ': ' + (item.desc || '')}`).join('\n\n');
  s.addText(rightItems, {
    x: 7.0, y: 2.8, w: colW - 0.4, h: 3.5,
    fontSize: 10.5, fontFace: THEME.fontBody, color: THEME.textMain
  });
}

function buildDashboardSlide(s, slide) {
  const metrics = slide.metrics || [];
  const count = Math.min(metrics.length, 4);
  const cardW = (11.7 - (count - 1) * 0.2) / count;

  metrics.slice(0, count).forEach((m, i) => {
    const cardX = 0.8 + i * (cardW + 0.2);
    s.addShape(pres.ShapeType.roundRect, {
      x: cardX, y: 2.0, w: cardW, h: 3.7,
      rectRadius: 0.12, fill: { color: THEME.bgCard }, line: { color: THEME.borderGlass, width: 1 }
    });

    s.addText(m.title, {
      x: cardX + 0.15, y: 2.2, w: cardW - 0.3, h: 0.4,
      fontSize: 11, fontFace: THEME.fontHeader, color: THEME.textCyan, bold: true
    });

    s.addText(`${m.value || ''} ${m.unit || ''}`, {
      x: cardX + 0.15, y: 2.7, w: cardW - 0.3, h: 0.8,
      fontSize: 22, fontFace: THEME.fontHeader, color: THEME.textEmerald, bold: true
    });

    s.addText(m.trend || '', {
      x: cardX + 0.15, y: 3.55, w: cardW - 0.3, h: 0.35,
      fontSize: 9.5, fontFace: THEME.fontBody, color: THEME.textAmber, bold: true
    });

    s.addText(m.note || '', {
      x: cardX + 0.15, y: 3.95, w: cardW - 0.3, h: 1.5,
      fontSize: 9, fontFace: THEME.fontBody, color: THEME.textMuted
    });
  });

  if (slide.highlight) {
    s.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 5.9, w: 11.7, h: 0.8,
      rectRadius: 0.08, fill: { color: '111F38' }, line: { color: THEME.borderGlow, width: 1 }
    });
    s.addText(`📊 Phân tích định lượng: ${slide.highlight}`, {
      x: 1.0, y: 5.9, w: 11.3, h: 0.8,
      fontSize: 10, fontFace: THEME.fontBody, color: THEME.textCyan, italic: true, valign: 'middle'
    });
  }
}

function buildQuizSlide(s, slide, imgPath) {
  const qData = slide.quizData || {};
  const leftW = imgPath ? 7.2 : 11.7;

  // Khối câu hỏi
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 2.0, w: leftW, h: 1.2,
    rectRadius: 0.1, fill: { color: '18233C' }, line: { color: THEME.borderGlow, width: 1 }
  });
  s.addText(`❓ Câu hỏi kiểm tra:\n${qData.question || 'Chọn đáp án chính xác nhất:'}`, {
    x: 1.0, y: 2.05, w: leftW - 0.4, h: 1.1,
    fontSize: 11.5, fontFace: THEME.fontHeader, color: THEME.textMain, bold: true, valign: 'middle'
  });

  // 4 phương án
  const options = qData.options || [];
  options.forEach((opt, i) => {
    const optY = 3.35 + i * 0.7;
    const isCorrect = i === qData.correctIndex;
    s.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: optY, w: leftW, h: 0.6,
      rectRadius: 0.08,
      fill: { color: isCorrect ? '132A24' : THEME.bgCard },
      line: { color: isCorrect ? THEME.textEmerald : THEME.borderGlass, width: 1 }
    });

    const prefix = String.fromCharCode(65 + i);
    s.addText(`${prefix}. ${opt} ${isCorrect ? '  (✓ Đáp án đúng)' : ''}`, {
      x: 1.0, y: optY, w: leftW - 0.4, h: 0.6,
      fontSize: 10, fontFace: THEME.fontBody,
      color: isCorrect ? THEME.textEmerald : THEME.textMain,
      bold: isCorrect, valign: 'middle'
    });
  });

  // Giải thích
  if (qData.explanation) {
    s.addText(`💡 Giải thích học thuật: ${qData.explanation}`, {
      x: 0.8, y: 6.25, w: leftW, h: 0.5,
      fontSize: 9, fontFace: THEME.fontBody, color: THEME.textCyan, italic: true
    });
  }

  // Ảnh slide
  if (imgPath) {
    try {
      s.addImage({
        path: imgPath,
        x: 8.3, y: 2.0, w: 4.2, h: 4.7,
        sizing: { type: 'cover', w: 4.2, h: 4.7 }
      });
    } catch (e) {}
  }
}

function buildMatrixSlide(s, slide) {
  const matrix = slide.matrix || {};
  const rows = matrix.rows || [];
  const colCount = 3;
  const colW = (11.7 - (colCount - 1) * 0.2) / colCount;

  rows.slice(0, colCount).forEach((row, i) => {
    const colX = 0.8 + i * (colW + 0.2);
    s.addShape(pres.ShapeType.roundRect, {
      x: colX, y: 2.0, w: colW, h: 4.5,
      rectRadius: 0.12, fill: { color: THEME.bgCard }, line: { color: THEME.borderGlass, width: 1 }
    });

    s.addText(row.category || row.title || `Nhóm ${i + 1}`, {
      x: colX + 0.15, y: 2.2, w: colW - 0.3, h: 0.45,
      fontSize: 13, fontFace: THEME.fontHeader, color: THEME.textCyan, bold: true
    });

    const desc = row.desc || row.content || (row.items ? row.items.join('\n\n• ') : '');
    s.addText(desc, {
      x: colX + 0.15, y: 2.8, w: colW - 0.3, h: 3.4,
      fontSize: 10, fontFace: THEME.fontBody, color: THEME.textMain
    });
  });
}

function buildCodeLabSlide(s, slide) {
  const lab = slide.codeLab || {};
  const leftW = 6.8;

  // Code Terminal Editor Box
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 2.0, w: leftW, h: 4.6,
    rectRadius: 0.1, fill: { color: '050A14' }, line: { color: '1E3A5F', width: 1 }
  });

  s.addText(`💻 Mã nguồn minh họa (${lab.language || 'C++'}):`, {
    x: 1.0, y: 2.15, w: leftW - 0.4, h: 0.35,
    fontSize: 9.5, fontFace: 'Courier New', color: THEME.textCyan, bold: true
  });

  s.addText(lab.code || '// Demo code\nint main() { return 0; }', {
    x: 1.0, y: 2.55, w: leftW - 0.4, h: 3.8,
    fontSize: 9, fontFace: 'Courier New', color: 'A7F3D0'
  });

  // Cột giải thích bên phải
  s.addShape(pres.ShapeType.roundRect, {
    x: 7.8, y: 2.0, w: 4.7, h: 4.6,
    rectRadius: 0.1, fill: { color: THEME.bgCard }, line: { color: THEME.borderGlass, width: 1 }
  });

  s.addText('PHÂN TÍCH THUẬT TOÁN', {
    x: 8.0, y: 2.2, w: 4.3, h: 0.35,
    fontSize: 11, fontFace: THEME.fontHeader, color: THEME.textAmber, bold: true
  });

  s.addText([
    { text: `Nguyên lý hoạt động:\n`, options: { bold: true, fontSize: 10, color: THEME.textCyan } },
    { text: `${lab.explanation || ''}\n\n`, options: { fontSize: 9.5, color: THEME.textMain } },
    { text: `Kết quả thực nghiệm:\n`, options: { bold: true, fontSize: 10, color: THEME.textEmerald } },
    { text: `${lab.runResult || ''}\n\n`, options: { fontSize: 9, color: THEME.textMuted } },
    { text: `Lưu ý cho lập trình viên:\n`, options: { bold: true, fontSize: 10, color: THEME.textAmber } },
    { text: `${lab.tips || ''}`, options: { fontSize: 9, color: THEME.textMuted } }
  ], {
    x: 8.0, y: 2.65, w: 4.3, h: 3.7,
    fontFace: THEME.fontBody
  });
}

function buildQuoteSlide(s, slide, imgPath) {
  const leftW = imgPath ? 7.2 : 11.7;

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 2.1, w: leftW, h: 3.2,
    rectRadius: 0.15, fill: { color: '15203B' }, line: { color: THEME.borderGlow, width: 1 }
  });

  s.addText(`“ ${slide.quoteText || slide.title} ”`, {
    x: 1.2, y: 2.3, w: leftW - 0.8, h: 1.8,
    fontSize: 17, fontFace: THEME.fontHeader, color: THEME.textMain, italic: true, valign: 'middle'
  });

  s.addText(`— ${slide.quoteAuthor || 'TS. Lê Đức Thuận - Khoa CNTT, KMA'}`, {
    x: 1.2, y: 4.2, w: leftW - 0.8, h: 0.5,
    fontSize: 12, fontFace: THEME.fontHeader, color: THEME.textCyan, bold: true, align: 'right'
  });

  if (slide.bridgeSummary) {
    s.addText(slide.bridgeSummary, {
      x: 0.8, y: 5.6, w: leftW, h: 1.0,
      fontSize: 11, fontFace: THEME.fontBody, color: THEME.textMuted
    });
  }

  if (imgPath) {
    try {
      s.addImage({
        path: imgPath,
        x: 8.3, y: 2.0, w: 4.2, h: 4.7,
        sizing: { type: 'cover', w: 4.2, h: 4.7 }
      });
    } catch (e) {}
  }
}

function buildPipelineSlide(s, slide) {
  const stages = slide.pipeline?.stages || [];
  const count = Math.min(stages.length, 4);
  const cardW = (11.7 - (count - 1) * 0.2) / count;

  stages.slice(0, count).forEach((stg, i) => {
    const cardX = 0.8 + i * (cardW + 0.2);
    s.addShape(pres.ShapeType.roundRect, {
      x: cardX, y: 2.0, w: cardW, h: 4.4,
      rectRadius: 0.12, fill: { color: THEME.bgCard }, line: { color: THEME.borderGlass, width: 1 }
    });

    s.addText(`GIAI ĐOẠN ${i + 1}`, {
      x: cardX + 0.15, y: 2.2, w: cardW - 0.3, h: 0.3,
      fontSize: 9, fontFace: THEME.fontHeader, color: THEME.textCyan, bold: true
    });

    s.addText(stg.title, {
      x: cardX + 0.15, y: 2.55, w: cardW - 0.3, h: 0.6,
      fontSize: 13, fontFace: THEME.fontHeader, color: THEME.textMain, bold: true
    });

    s.addText(stg.desc || '', {
      x: cardX + 0.15, y: 3.25, w: cardW - 0.3, h: 3.0,
      fontSize: 9.5, fontFace: THEME.fontBody, color: THEME.textMuted
    });
  });
}

function buildWorkshopSlide(s, slide, imgPath) {
  const ws = slide.workshopConfig || {};
  const leftW = imgPath ? 7.2 : 11.7;

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 2.0, w: leftW, h: 4.6,
    rectRadius: 0.12, fill: { color: THEME.bgCard }, line: { color: THEME.borderGlass, width: 1 }
  });

  s.addText(`⚡ THỰC HÀNH TẠI CHỖ: ${ws.title || slide.title}`, {
    x: 1.0, y: 2.2, w: leftW - 0.4, h: 0.4,
    fontSize: 13, fontFace: THEME.fontHeader, color: THEME.textAmber, bold: true
  });

  const stepsText = (ws.steps || []).map((step, i) => `Bước ${i + 1}: ${step}`).join('\n\n');
  s.addText(stepsText || 'Tiến hành bài tập thực hành theo hướng dẫn.', {
    x: 1.0, y: 2.7, w: leftW - 0.4, h: 3.7,
    fontSize: 10.5, fontFace: THEME.fontBody, color: THEME.textMain
  });

  if (imgPath) {
    try {
      s.addImage({
        path: imgPath,
        x: 8.3, y: 2.0, w: 4.2, h: 4.6,
        sizing: { type: 'cover', w: 4.2, h: 4.6 }
      });
    } catch (e) {}
  }
}

function buildChecklistSlide(s, slide, imgPath) {
  const list = slide.checklist || [];
  const leftW = imgPath ? 7.2 : 11.7;

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 2.0, w: leftW, h: 4.6,
    rectRadius: 0.12, fill: { color: THEME.bgCard }, line: { color: THEME.borderGlass, width: 1 }
  });

  s.addText('📋 DANH MỤC TIÊU CHUẨN LIÊM CHÍNH HỌC THUẬT', {
    x: 1.0, y: 2.2, w: leftW - 0.4, h: 0.4,
    fontSize: 12, fontFace: THEME.fontHeader, color: THEME.textEmerald, bold: true
  });

  const itemsText = list.map((item, i) => {
    const text = typeof item === 'string' ? item : `${item.item || ''}: ${item.desc || ''}`;
    return `[✓]  ${text}`;
  }).join('\n\n');

  s.addText(itemsText, {
    x: 1.0, y: 2.7, w: leftW - 0.4, h: 3.7,
    fontSize: 10, fontFace: THEME.fontBody, color: THEME.textMain
  });

  if (imgPath) {
    try {
      s.addImage({
        path: imgPath,
        x: 8.3, y: 2.0, w: 4.2, h: 4.6,
        sizing: { type: 'cover', w: 4.2, h: 4.6 }
      });
    } catch (e) {}
  }
}

// Lưu file PPTX
pres.writeFile({ fileName: OUTPUT_FILE })
  .then(() => {
    const stats = fs.statSync(OUTPUT_FILE);
    console.log(`\n======================================================`);
    console.log(`✅ ĐÃ XUẤT THÀNH CÔNG 50 SLIDE SANG FILE POWERPOINT!`);
    console.log(`📁 Đường dẫn: ${OUTPUT_FILE}`);
    console.log(`📊 Dung lượng: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`======================================================\n`);
  })
  .catch((err) => {
    console.error('Lỗi khi xuất file PPTX:', err);
  });
