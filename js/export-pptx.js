/**
 * EXPORT-PPTX.JS
 * Xử lý tải xuống và xuất động PowerPoint (.pptx) cho bài giảng TS. Lê Đức Thuận
 * Hỗ trợ 2 chế độ:
 * 1. Tải nhanh file chuẩn định dạng cao đã được tối ưu sẵn (3.3 MB)
 * 2. Xuất động trực tiếp trong trình duyệt bằng PptxGenJS
 */

(function () {
  'use strict';

  // Thông tin file mẫu sẵn
  const PREBUILT_PPTX_URL = 'assets/Ung-Dung-AI-Trong-Hoc-Tap-KMA-TS-Le-Duc-Thuan.pptx';
  const PPTX_FILENAME = 'Ung-Dung-AI-Trong-Hoc-Tap-KMA-TS-Le-Duc-Thuan.pptx';

  // Bảng màu thiết kế học thuật
  const THEME = {
    bgDark: '0B1120',
    bgCard: '161F33',
    borderGlass: '2A374F',
    borderGlow: '38BDF8',
    textMain: 'FFFFFF',
    textMuted: '94A3B8',
    textCyan: '38BDF8',
    textEmerald: '10B981',
    textAmber: 'F59E0B',
    textRose: 'F43F5E',
    fontHeader: 'Arial',
    fontBody: 'Calibri'
  };

  /**
   * Hiển thị Toast thông báo trạng thái
   */
  function showToast(message, type = 'info', duration = 4000) {
    let container = document.getElementById('pptxToastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'pptxToastContainer';
      container.className = 'pptx-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `pptx-toast pptx-toast-${type}`;

    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '❌';
    if (type === 'loading') icon = '⏳';

    toast.innerHTML = `
      <div class="toast-icon">${icon}</div>
      <div class="toast-body">
        <div class="toast-title">${escapeHtml(message.title || 'Thông báo')}</div>
        <div class="toast-desc">${escapeHtml(message.desc || '')}</div>
      </div>
    `;

    container.appendChild(toast);

    // Kích hoạt animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    if (duration > 0) {
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
      }, duration);
    }

    return toast;
  }

  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Tải ngay file PowerPoint chuẩn đã biên dịch sẵn
   */
  async function downloadPrebuiltPptx() {
    const toast = showToast({
      title: 'Đang tải file PowerPoint...',
      desc: 'Bắt đầu tải trọn bộ 50 slide bài giảng (3.3 MB)...'
    }, 'loading', 0);

    try {
      // Thử dùng fetch kiểm tra sự tồn tại của file
      const res = await fetch(PREBUILT_PPTX_URL, { method: 'HEAD' });
      if (!res.ok && res.status !== 0) {
        throw new Error('File mẫu không khả dụng trên máy chủ');
      }

      // Tạo link kích hoạt tải xuống trực tiếp
      const a = document.createElement('a');
      a.href = PREBUILT_PPTX_URL;
      a.download = PPTX_FILENAME;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 200);

      showToast({
        title: 'Tải thành công!',
        desc: `Đã tải về máy file: ${PPTX_FILENAME} (50 Slide & Ghi chú)`
      }, 'success', 5000);

      return true;
    } catch (err) {
      console.warn('Không thể tải file có sẵn, chuyển sang xuất động bằng PptxGenJS:', err);
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 200);
      return generateDynamicPptx();
    }
  }

  /**
   * Xuất động 50 slide ngay tại trình duyệt bằng PptxGenJS
   */
  async function generateDynamicPptx() {
    if (typeof PptxGenJS === 'undefined') {
      showToast({
        title: 'Lỗi nạp thư viện',
        desc: 'Không tìm thấy thư viện PptxGenJS trong trang.'
      }, 'error', 5000);
      return false;
    }

    const modal = document.getElementById('pptxExportModal');
    const progressBar = document.getElementById('pptxProgressBar');
    const progressStatus = document.getElementById('pptxProgressStatus');
    const progressPercent = document.getElementById('pptxProgressPercent');

    if (modal) modal.classList.add('active');

    function updateProgress(current, total, statusText) {
      const pct = Math.round((current / total) * 100);
      if (progressBar) progressBar.style.width = `${pct}%`;
      if (progressPercent) progressPercent.textContent = `${pct}%`;
      if (progressStatus) progressStatus.textContent = statusText;
    }

    try {
      updateProgress(5, 100, 'Đang khởi tạo bản trình chiếu PowerPoint 16:9...');
      await new Promise(r => setTimeout(r, 80));

      const pres = new PptxGenJS();
      pres.layout = 'LAYOUT_16x9';
      pres.author = 'TS. Lê Đức Thuận';
      pres.company = 'Khoa Công Nghệ Thông Tin - Học Viện Kỹ Thuật Mật Mã (KMA)';
      pres.title = 'Ứng Dụng AI Trong Học Tập Và Nghiên Cứu Khoa Học';
      pres.subject = '50 Slide bài giảng học thuật chính quy cho sinh viên KMA';

      const slides = (window.SLIDES_DATA || []);
      const total = slides.length || 50;

      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        const s = pres.addSlide();
        s.background = { color: THEME.bgDark };

        const slideNum = slide.id || (i + 1);

        // Header chung
        if (slide.type !== 'cover') {
          s.addShape(pres.ShapeType.roundRect, {
            x: 0.8, y: 0.35, w: 5.5, h: 0.35,
            rectRadius: 0.1, fill: { color: '111C33' }, line: { color: THEME.borderGlass, width: 1 }
          });
          s.addText(`SLIDE ${String(slideNum).padStart(2, '0')} • ${slide.sectionName || 'BÁO CÁO HỌC THUẬT KMA'}`, {
            x: 0.9, y: 0.35, w: 5.3, h: 0.35,
            fontSize: 9.5, fontFace: THEME.fontHeader, color: THEME.textCyan,
            bold: true, valign: 'middle'
          });

          s.addText(slide.title, {
            x: 0.8, y: 0.75, w: 11.7, h: 0.7,
            fontSize: 19, fontFace: THEME.fontHeader, color: THEME.textMain,
            bold: true, valign: 'top'
          });

          if (slide.subtitle) {
            s.addText(slide.subtitle, {
              x: 0.8, y: 1.45, w: 11.7, h: 0.45,
              fontSize: 11.5, fontFace: THEME.fontBody, color: THEME.textMuted,
              valign: 'top'
            });
          }
        } else {
          // Cover slide
          s.addShape(pres.ShapeType.roundRect, {
            x: 0.8, y: 0.6, w: 6.8, h: 0.5,
            rectRadius: 0.1, fill: { color: '111C33' }, line: { color: THEME.borderGlow, width: 1 }
          });
          s.addText('🛡️ HỌC VIỆN KỸ THUẬT MẬT MÃ • KHOA CÔNG NGHỆ THÔNG TIN', {
            x: 1.0, y: 0.6, w: 6.4, h: 0.5,
            fontSize: 10, fontFace: THEME.fontHeader, color: THEME.textCyan, bold: true, valign: 'middle'
          });

          s.addText(slide.title, {
            x: 0.8, y: 1.3, w: 6.8, h: 2.2,
            fontSize: 27, fontFace: THEME.fontHeader, color: THEME.textMain, bold: true, valign: 'top'
          });

          s.addText(slide.subtitle, {
            x: 0.8, y: 3.6, w: 6.8, h: 1.0,
            fontSize: 13, fontFace: THEME.fontBody, color: THEME.textMuted, valign: 'top'
          });

          s.addShape(pres.ShapeType.roundRect, {
            x: 0.8, y: 4.8, w: 6.8, h: 1.9,
            rectRadius: 0.15, fill: { color: THEME.bgCard }, line: { color: THEME.borderGlass, width: 1 }
          });

          s.addText([
            { text: `Báo cáo viên: ${slide.speakerInfo?.lecturer || 'TS. Lê Đức Thuận'}\n`, options: { bold: true, fontSize: 13, color: THEME.textCyan } },
            { text: `Đơn vị: ${slide.speakerInfo?.role || 'Khoa CNTT - Học viện Kỹ thuật Mật mã'}\n`, options: { fontSize: 10.5, color: THEME.textMain } },
            { text: `Đối tượng: ${slide.speakerInfo?.target || 'Tân Sinh Viên KMA'}\n`, options: { fontSize: 10, color: THEME.textMuted } },
            { text: `Thời lượng: ${slide.speakerInfo?.duration || '90 - 120 phút • 50 Chuyên đề'}`, options: { fontSize: 10, color: THEME.textAmber } }
          ], {
            x: 1.0, y: 4.9, w: 6.4, h: 1.7,
            fontFace: THEME.fontBody, valign: 'middle'
          });
        }

        // Nội dung chi tiết các slide thường
        if (slide.type !== 'cover') {
          let curY = 2.0;
          const leftW = 11.7;

          if (slide.stats && slide.stats.length > 0) {
            const cardW = (leftW - (slide.stats.length - 1) * 0.2) / slide.stats.length;
            slide.stats.forEach((stat, sIdx) => {
              const cardX = 0.8 + sIdx * (cardW + 0.2);
              s.addShape(pres.ShapeType.roundRect, {
                x: cardX, y: curY, w: cardW, h: 1.1,
                rectRadius: 0.1, fill: { color: THEME.bgCard }, line: { color: THEME.borderGlass, width: 1 }
              });

              s.addText(stat.number, {
                x: cardX + 0.1, y: curY + 0.1, w: cardW - 0.2, h: 0.5,
                fontSize: 18, fontFace: THEME.fontHeader, color: THEME.textCyan, bold: true, align: 'center'
              });
              s.addText(stat.label, {
                x: cardX + 0.1, y: curY + 0.6, w: cardW - 0.2, h: 0.45,
                fontSize: 9.5, fontFace: THEME.fontBody, color: THEME.textMuted, align: 'center'
              });
            });
            curY += 1.3;
          }

          if (slide.points && slide.points.length > 0) {
            const pointH = Math.min(1.2, (5.8 - curY) / slide.points.length);
            slide.points.forEach((p, pIdx) => {
              const pY = curY + pIdx * (pointH + 0.1);
              s.addShape(pres.ShapeType.roundRect, {
                x: 0.8, y: pY, w: leftW, h: pointH,
                rectRadius: 0.1, fill: { color: THEME.bgCard }, line: { color: THEME.borderGlass, width: 1 }
              });

              s.addText([
                { text: `${p.icon || '📌'}  ${p.title}\n`, options: { bold: true, fontSize: 11, color: THEME.textCyan } },
                { text: `${p.desc || ''}`, options: { fontSize: 10, color: THEME.textMain } }
              ], {
                x: 1.0, y: pY + 0.08, w: leftW - 0.4, h: pointH - 0.16,
                fontFace: THEME.fontBody, valign: 'middle'
              });
            });
            curY += slide.points.length * (pointH + 0.1);
          }

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
        }

        // Footer chung
        s.addShape(pres.ShapeType.line, {
          x: 0.8, y: 7.0, w: 11.7, h: 0,
          line: { color: THEME.borderGlass, width: 1 }
        });
        s.addText('HỌC VIỆN KỸ THUẬT MẬT MÃ (KMA) • KHOA CÔNG NGHỆ THÔNG TIN', {
          x: 0.8, y: 7.05, w: 5.5, h: 0.35,
          fontSize: 8.5, fontFace: THEME.fontBody, color: THEME.textMuted, valign: 'middle'
        });
        s.addText('TS. LÊ ĐỨC THUẬN — ỨNG DỤNG AI TRONG HỌC TẬP VÀ NGHIÊN CỨU', {
          x: 5.0, y: 7.05, w: 5.5, h: 0.35,
          fontSize: 8.5, fontFace: THEME.fontBody, color: '64748B', align: 'center', valign: 'middle'
        });
        s.addText(`${slideNum} / 50`, {
          x: 10.5, y: 7.05, w: 2.0, h: 0.35,
          fontSize: 9, fontFace: THEME.fontHeader, color: THEME.textCyan, bold: true, align: 'right', valign: 'middle'
        });

        // Speaker notes
        if (slide.speakerNotes) {
          s.addNotes(slide.speakerNotes);
        }

        const pct = Math.round(10 + ((i + 1) / total) * 80);
        updateProgress(pct, 100, `Đang xử lý slide ${i + 1}/${total}: ${slide.title.substring(0, 30)}...`);
        if (i % 5 === 0) await new Promise(r => setTimeout(r, 10));
      }

      updateProgress(95, 100, 'Đang đóng gói file PowerPoint (.pptx)...');
      await pres.writeFile({ fileName: PPTX_FILENAME });

      updateProgress(100, 100, 'Xuất file thành công!');
      await new Promise(r => setTimeout(r, 600));

      if (modal) modal.classList.remove('active');

      showToast({
        title: 'Xuất PPTX thành công!',
        desc: `Đã tạo thành công file ${PPTX_FILENAME} trực tiếp từ trình duyệt.`
      }, 'success', 5000);

      return true;
    } catch (err) {
      console.error('Lỗi khi xuất PPTX động:', err);
      if (modal) modal.classList.remove('active');
      showToast({
        title: 'Có lỗi xảy ra',
        desc: err.message || 'Không thể tạo file PPTX'
      }, 'error', 5000);
      return false;
    }
  }

  // Gắn vào window để gọi từ các thành phần khác
  window.PptxExporter = {
    downloadPrebuilt: downloadPrebuiltPptx,
    generateDynamic: generateDynamicPptx,
    showToast: showToast
  };

  // Khởi tạo các sự kiện khi DOM sẵn sàng
  document.addEventListener('DOMContentLoaded', () => {
    const btnDownloadPptx = document.getElementById('btnDownloadPptx');
    const pptxModal = document.getElementById('pptxExportModal');
    const btnClosePptxModal = document.getElementById('btnClosePptxModal');
    const btnDirectDownload = document.getElementById('btnDirectDownload');
    const btnGenerateLive = document.getElementById('btnGenerateLive');

    if (btnDownloadPptx) {
      btnDownloadPptx.addEventListener('click', (e) => {
        e.preventDefault();
        // Mở modal lựa chọn tải hoặc tải trực tiếp
        if (pptxModal) {
          pptxModal.classList.add('active');
        } else {
          downloadPrebuiltPptx();
        }
      });
    }

    if (btnClosePptxModal && pptxModal) {
      btnClosePptxModal.addEventListener('click', () => {
        pptxModal.classList.remove('active');
      });
    }

    if (btnDirectDownload) {
      btnDirectDownload.addEventListener('click', (e) => {
        e.preventDefault();
        if (pptxModal) pptxModal.classList.remove('active');
        downloadPrebuiltPptx();
      });
    }

    if (btnGenerateLive) {
      btnGenerateLive.addEventListener('click', (e) => {
        e.preventDefault();
        generateDynamicPptx();
      });
    }

    // Đóng khi click ra ngoài backdrop
    if (pptxModal) {
      pptxModal.addEventListener('click', (e) => {
        if (e.target === pptxModal) {
          pptxModal.classList.remove('active');
        }
      });
    }
  });

})();
