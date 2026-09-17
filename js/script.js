/**
 * SCRIPT.JS - AI PRESENTATION ENGINE
 * Điều khiển trình chiếu 50 slide bài giảng đại học
 * Tính năng: Điều hướng mượt mà, Bàn phím, Fullscreen, Presenter Notes, Quiz tương tác, Workshop Timer
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    currentIndex: 0,
    totalSlides: SLIDES_DATA.length,
    isNotesOpen: false,
    isThumbnailsOpen: false,
    timerSeconds: 0,
    timerInterval: null,
    workshopTimerInterval: null,
    workshopRemainingSeconds: 0,
    currentFilterSection: 'all'
  };

  // DOM Elements
  const elements = {
    canvas: document.getElementById('slideCanvas'),
    progressBar: document.getElementById('progressBar'),
    currentSlideNum: document.getElementById('currentSlideNum'),
    sectionBreadcrumb: document.getElementById('sectionBreadcrumb'),
    currentSectionName: document.getElementById('currentSectionName'),
    presentationTimer: document.getElementById('presentationTimer'),
    btnPrev: document.getElementById('btnPrevSlide'),
    btnNext: document.getElementById('btnNextSlide'),
    btnFirst: document.getElementById('btnFirstSlide'),
    btnLast: document.getElementById('btnLastSlide'),
    btnToggleNotes: document.getElementById('btnToggleNotes'),
    btnCloseNotes: document.getElementById('btnCloseNotes'),
    speakerNotesDrawer: document.getElementById('speakerNotesDrawer'),
    speakerNotesText: document.getElementById('speakerNotesText'),
    btnToggleFullscreen: document.getElementById('btnToggleFullscreen'),
    fsIcon: document.getElementById('fsIcon'),
    fsText: document.getElementById('fsText'),
    btnToggleThumbnails: document.getElementById('btnToggleThumbnails'),
    btnCloseThumbnails: document.getElementById('btnCloseThumbnails'),
    thumbnailsModal: document.getElementById('thumbnailsModal'),
    thumbnailsGrid: document.getElementById('thumbnailsGrid'),
    sectionFilterButtons: document.getElementById('sectionFilterButtons'),
    helpModal: document.getElementById('helpModal'),
    btnOpenHelp: document.getElementById('btnOpenHelp'),
    btnCloseHelp: document.getElementById('btnCloseHelp'),
    btnDismissHelp: document.getElementById('btnDismissHelp')
  };

  // =========================================================================
  // 1. RENDER SLIDES ENGINE
  // =========================================================================
  function renderAllSlides() {
    elements.canvas.innerHTML = '';

    SLIDES_DATA.forEach((slide, index) => {
      const slideCard = document.createElement('div');
      slideCard.className = `slide-card slide-${slide.id} ${index === 0 ? 'active' : ''}`;
      slideCard.id = `slide-${slide.id}`;
      slideCard.setAttribute('data-slide-index', index);

      let layoutHtml = '';

      switch (slide.type) {
        case 'cover':
          layoutHtml = createCoverLayout(slide);
          break;
        case 'standard':
          layoutHtml = createStandardLayout(slide);
          break;
        case 'comparison':
          layoutHtml = createComparisonLayout(slide);
          break;
        case 'process':
          layoutHtml = createProcessLayout(slide);
          break;
        case 'formula':
          layoutHtml = createFormulaLayout(slide);
          break;
        case 'quiz':
          layoutHtml = createQuizLayout(slide);
          break;
        case 'workshop':
          layoutHtml = createWorkshopLayout(slide);
          break;
        case 'checklist':
          layoutHtml = createChecklistLayout(slide);
          break;
        case 'quote':
          layoutHtml = createQuoteLayout(slide);
          break;
        case 'taxonomy':
          layoutHtml = createTaxonomyLayout(slide);
          break;
        case 'dashboard':
          layoutHtml = createDashboardLayout(slide);
          break;
        case 'architecture':
          layoutHtml = createArchitectureLayout(slide);
          break;
        case 'code-lab':
          layoutHtml = createCodeLabLayout(slide);
          break;
        case 'matrix':
          layoutHtml = createMatrixLayout(slide);
          break;
        case 'pipeline':
          layoutHtml = createPipelineLayout(slide);
          break;
        case 'token-sim':
          layoutHtml = createTokenSimLayout(slide);
          break;
        default:
          layoutHtml = createStandardLayout(slide);
      }

      slideCard.innerHTML = layoutHtml;
      elements.canvas.appendChild(slideCard);
    });

    attachSlideEventListeners();
  }

  // Layout Builders
  function createCoverLayout(slide) {
    return `
      <div class="layout-cover">
        <div class="cover-content">
          <div class="slide-tag">✨ ${escapeHtml(slide.tag || 'BÀI GIẢNG ĐẠI HỌC')}</div>
          <h1 class="cover-title">${escapeHtml(slide.title)}</h1>
          <p class="cover-subtitle">${escapeHtml(slide.subtitle)}</p>
          
          <div class="cover-meta">
            <div class="meta-item">
              <span class="meta-label">Người thuyết trình</span>
              <span class="meta-val">👨‍🏫 ${escapeHtml(slide.speakerInfo?.lecturer || 'TS. Lê Đức Thuận')}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Khoa / Đơn vị</span>
              <span class="meta-val">🏛️ ${escapeHtml(slide.speakerInfo?.role || 'Khoa Công Nghệ Thông Tin • KMA')}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Thời lượng bài giảng</span>
              <span class="meta-val">⏱️ ${escapeHtml(slide.speakerInfo?.duration || '90 - 120 phút')}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Đối tượng</span>
              <span class="meta-val">🎓 ${escapeHtml(slide.speakerInfo?.target || 'Tân Sinh Viên Khóa Mới')}</span>
            </div>
          </div>

          <div class="cover-actions">
            <button class="btn-primary-glow" onclick="window.presentationEngine.nextSlide()">
              <span>Bắt đầu bài giảng</span>
              <span>→</span>
            </button>
            <button class="nav-btn" onclick="window.presentationEngine.toggleNotes()" style="padding: 0.85rem 1.4rem;">
              <span>🎙️ Ghi chú học thuật</span>
            </button>
          </div>
        </div>

        <div class="cover-media">
          <img src="${slide.image}" 
               onerror="this.onerror=null; this.src='${slide.onlineImage}';" 
               alt="${escapeHtml(slide.imageAlt || slide.title)}" 
               loading="lazy">
          <div class="cover-media-overlay"></div>
        </div>
      </div>
    `;
  }

  function createStandardLayout(slide) {
    const pointsHtml = (slide.points || []).map(pt => `
      <div class="point-card">
        <div class="point-icon">${pt.icon || '✦'}</div>
        <div class="point-text">
          <div class="point-title">${escapeHtml(pt.title)}</div>
          <div class="point-desc">${escapeHtml(pt.desc)}</div>
        </div>
      </div>
    `).join('');

    let statsHtml = '';
    if (slide.stats && slide.stats.length > 0) {
      statsHtml = `
        <div class="stats-grid">
          ${slide.stats.map(s => `
            <div class="stat-card">
              <span class="stat-number ${s.type || ''}">${escapeHtml(s.number)}</span>
              <span class="stat-label">${escapeHtml(s.label)}</span>
              <span class="stat-sub">${escapeHtml(s.source || '')}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    let benchmarkHtml = '';
    if (slide.benchmarkData && slide.benchmarkData.length > 0) {
      benchmarkHtml = `
        <div class="benchmark-container">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--cyan-glow); text-transform: uppercase; letter-spacing: 0.05em;">
            📊 ${escapeHtml(slide.benchmarkTitle || 'DỮ LIỆU ĐO KIỂM THỰC TẾ')}
          </div>
          ${slide.benchmarkData.map(b => `
            <div class="benchmark-row">
              <div class="benchmark-header">
                <span>${escapeHtml(b.name)}</span>
                <span style="font-family: var(--font-mono); font-weight: 700;">${b.score}%</span>
              </div>
              <div class="benchmark-bar-track">
                <div class="benchmark-bar-fill ${b.color || ''}" style="width: ${b.score}%;"></div>
              </div>
            </div>
          `).join('')}
          <div style="font-size: 0.72rem; color: var(--text-dim); text-align: right; margin-top: 0.2rem;">
            Nguồn: ${escapeHtml(slide.benchmarkSource || 'Stanford AI Index / EpochAI')}
          </div>
        </div>
      `;
    }

    let probHtml = '';
    if (slide.probabilityData && slide.probabilityData.length > 0) {
      probHtml = `
        <div class="probability-box">
          <div style="color: #94a3b8; font-size: 0.75rem; margin-bottom: 0.3rem;">
            🔍 BẢNG XÁC SUẤT ĐOÁN TỪ TIẾP THEO: <code>P(từ | ngữ cảnh)</code>
          </div>
          ${slide.probabilityData.map(p => `
            <div class="prob-item ${p.isHighest ? 'highest' : ''}">
              <span>${p.isHighest ? '👉 ' : '   '}"${escapeHtml(p.word)}"</span>
              <span>${p.prob}%</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    let codeHtml = '';
    if (slide.codeSnippet) {
      codeHtml = `
        <div class="code-preview-box">
          <div style="font-size: 0.75rem; color: var(--cyan-glow); margin-bottom: 0.4rem; font-weight: 700;">
            💻 ${escapeHtml(slide.codeSnippet.title || 'MÃ NGUỒN THỰC TẾ')}
          </div>
          <pre style="margin: 0; font-family: var(--font-mono);"><code>${slide.codeSnippet.code}</code></pre>
        </div>
      `;
    }

    const highlightHtml = slide.highlight ? `
      <div class="slide-highlight-card" style="margin-top: 0.75rem;">
        💡 <strong>Điểm cốt lõi:</strong> ${escapeHtml(slide.highlight)}
      </div>
    ` : '';

    let mediaContentHtml = '';
    if (slide.image) {
      mediaContentHtml = `
        <img class="media-image media-fit-${escapeHtml(slide.mediaFit || 'cover')}" src="${slide.image}" 
             onerror="this.onerror=null; this.src='${slide.onlineImage || ''}';" 
             alt="${escapeHtml(slide.imageAlt || slide.title)}" 
             loading="lazy">
        <div class="media-badge-overlay">
          <div class="media-badge-title">${escapeHtml(slide.imageCaption || 'Hình minh họa học thuật')}</div>
          <div class="media-badge-desc">${escapeHtml(slide.imageAlt || slide.title)}</div>
        </div>
      `;
    } else if (slide.visual) {
      if (slide.visual.type === 'flow') {
        const nodesHtml = (slide.visual.nodes || []).map((node, idx, arr) => `
          <div class="flow-node ${node.highlight ? 'highlight-node' : ''}">
            <div class="flow-node-left">
              <div class="flow-node-icon">${node.icon || '✦'}</div>
              <div>
                <div class="flow-node-title">${escapeHtml(node.title)}</div>
                <div class="flow-node-desc">${escapeHtml(node.desc || '')}</div>
              </div>
            </div>
            ${node.badge ? `<div class="flow-node-badge">${escapeHtml(node.badge)}</div>` : ''}
          </div>
          ${idx < arr.length - 1 ? `<div class="flow-connector">↓</div>` : ''}
        `).join('');

        mediaContentHtml = `
          <div class="visual-diagram-box">
            <div class="visual-diagram-header">
              <div class="visual-diagram-title">⚡ ${escapeHtml(slide.visual.title || 'SƠ ĐỒ KIẾN TRÚC KỸ THUẬT')}</div>
              <div class="visual-diagram-tag">${escapeHtml(slide.visual.tag || 'SYSTEM FLOW')}</div>
            </div>
            <div class="visual-diagram-body">
              <div class="flow-diagram-wrapper">
                ${nodesHtml}
              </div>
            </div>
            <div class="visual-diagram-footer">
              <span>${escapeHtml(slide.visual.source || 'Khoa CNTT • Học viện Kỹ thuật Mật mã')}</span>
              <span style="color: var(--cyan-glow);">● LIVE ARCHITECTURE</span>
            </div>
          </div>
        `;
      } else if (slide.visual.type === 'chart') {
        const barsHtml = (slide.visual.bars || []).map(bar => `
          <div class="metric-bar-item">
            <div class="metric-bar-header">
              <span>${escapeHtml(bar.label)}</span>
              <span style="font-family: var(--font-mono); font-weight: 700; color: var(--cyan-glow);">${bar.value}</span>
            </div>
            <div class="metric-bar-track">
              <div class="metric-bar-fill ${bar.color || 'cyan'}" style="width: ${bar.percentage || 70}%;"></div>
            </div>
            ${bar.sub ? `<div style="font-size: 0.7rem; color: var(--text-dim);">${escapeHtml(bar.sub)}</div>` : ''}
          </div>
        `).join('');

        mediaContentHtml = `
          <div class="visual-diagram-box">
            <div class="visual-diagram-header">
              <div class="visual-diagram-title">📊 ${escapeHtml(slide.visual.title || 'DỮ LIỆU ĐO KIỂM THỰC TẾ')}</div>
              <div class="visual-diagram-tag">${escapeHtml(slide.visual.tag || 'BENCHMARK')}</div>
            </div>
            <div class="visual-diagram-body">
              <div class="metric-bars-list">
                ${barsHtml}
              </div>
            </div>
            <div class="visual-diagram-footer">
              <span>Nguồn: ${escapeHtml(slide.visual.source || 'Stanford AI Index / TruthfulQA')}</span>
              <span style="color: var(--emerald-accent);">VERIFIED DATA</span>
            </div>
          </div>
        `;
      } else if (slide.visual.type === 'diff') {
        mediaContentHtml = `
          <div class="visual-diagram-box">
            <div class="visual-diagram-header">
              <div class="visual-diagram-title">🔍 ${escapeHtml(slide.visual.title || 'ĐỐI CHIẾU MÃ NGUỒN AN TOÀN')}</div>
              <div class="visual-diagram-tag">${escapeHtml(slide.visual.tag || 'SECURE CODING')}</div>
            </div>
            <div class="visual-diagram-body">
              <div class="code-diff-container">
                <div class="code-diff-block danger">
                  <div class="code-diff-header">
                    <span>❌ CODE AI VIẾT (DỄ LỖI / RÒ RỈ BỘ NHỚ)</span>
                    <span>VULNERABLE</span>
                  </div>
                  <div class="code-diff-body">
                    <pre style="margin:0; color:#fda4af;"><code>${slide.visual.badCode}</code></pre>
                  </div>
                </div>
                <div class="code-diff-block success">
                  <div class="code-diff-header">
                    <span>✓ CODE CHUẨN KMA (RAII / AN TOÀN BỘ NHỚ)</span>
                    <span>SECURE</span>
                  </div>
                  <div class="code-diff-body">
                    <pre style="margin:0; color:#6ee7b7;"><code>${slide.visual.goodCode}</code></pre>
                  </div>
                </div>
              </div>
            </div>
            <div class="visual-diagram-footer">
              <span>${escapeHtml(slide.visual.note || 'Khoa CNTT - Học viện Kỹ thuật Mật mã')}</span>
              <span style="color: var(--cyan-glow);">C++ STANDARDS</span>
            </div>
          </div>
        `;
      } else if (slide.visual.type === 'svg') {
        mediaContentHtml = `
          <div class="visual-diagram-box">
            <div class="visual-diagram-header">
              <div class="visual-diagram-title">📐 ${escapeHtml(slide.visual.title || 'TRỰC QUAN HÓA TOÁN HỌC & AI')}</div>
              <div class="visual-diagram-tag">${escapeHtml(slide.visual.tag || 'VECTOR SPACE')}</div>
            </div>
            <div class="visual-diagram-body">
              ${slide.visual.svg}
            </div>
            <div class="visual-diagram-footer">
              <span>${escapeHtml(slide.visual.source || 'Mathematical Foundations of AI')}</span>
              <span style="color: var(--cyan-glow);">VECTOR EMBEDDING</span>
            </div>
          </div>
        `;
      }
    } else {
      mediaContentHtml = `
        <img src="${slide.image}" 
             onerror="this.onerror=null; this.src='${slide.onlineImage}';" 
             alt="${escapeHtml(slide.imageAlt || slide.title)}" 
             loading="lazy">
        <div class="media-badge-overlay">
          <div class="media-badge-title">📸 ${escapeHtml(slide.imageCaption || 'Góc Giảng Đường & Đời Sống KMA')}</div>
          <div class="media-badge-desc">${escapeHtml(slide.imageAlt || 'Hình ảnh sinh viên học tập')}</div>
        </div>
      `;
    }

    return `
      <div class="layout-standard">
        <div class="standard-content">
          <div>
            <div class="slide-tag">${escapeHtml(slide.tag || 'KIẾN THỨC')}</div>
            <div class="slide-header">
              <h2 class="slide-title">${escapeHtml(slide.title)}</h2>
              <p class="slide-subtitle">${escapeHtml(slide.subtitle)}</p>
            </div>
            ${statsHtml}
            ${benchmarkHtml}
            ${probHtml}
            ${codeHtml}
            <div class="points-list">
              ${pointsHtml}
            </div>
          </div>
          ${highlightHtml}
        </div>

        <div class="standard-media-col">
          ${mediaContentHtml}
        </div>
      </div>
    `;
  }

  function createComparisonLayout(slide) {
    const comp = slide.comparison || {};
    const leftItems = (comp.leftItems || []).map(it => `
      <div class="comparison-item">
        <span class="comparison-bullet">✕</span>
        <span>${escapeHtml(it)}</span>
      </div>
    `).join('');

    const rightItems = (comp.rightItems || []).map(it => `
      <div class="comparison-item">
        <span class="comparison-bullet">✓</span>
        <span>${escapeHtml(it)}</span>
      </div>
    `).join('');

    const hasMedia = !!slide.image;
    const mediaHtml = hasMedia ? `
      <div class="standard-media-col">
        <img class="media-image media-fit-${escapeHtml(slide.mediaFit || 'cover')}" 
             src="${slide.image}" 
             onerror="this.onerror=null; this.src='${slide.onlineImage || ''}';" 
             alt="${escapeHtml(slide.imageAlt || slide.title)}" 
             loading="lazy">
        <div class="media-badge-overlay">
          <div class="media-badge-title">${escapeHtml(slide.imageCaption || 'Đối chiếu học thuật')}</div>
          <div class="media-badge-desc">${escapeHtml(slide.imageAlt || slide.title)}</div>
        </div>
      </div>
    ` : '';

    return `
      <div class="layout-comparison ${hasMedia ? 'has-media' : ''}">
        <div class="comparison-content">
          <div>
            <div class="slide-tag">${escapeHtml(slide.tag || 'SO SÁNH ĐỐI CHIẾU')}</div>
            <div class="slide-header" style="margin-bottom: 0.6rem;">
              <h2 class="slide-title">${escapeHtml(slide.title)}</h2>
              <p class="slide-subtitle">${escapeHtml(slide.subtitle)}</p>
            </div>
          </div>

          <div class="comparison-grid ${hasMedia ? 'with-media' : ''}">
            <div class="comparison-card left">
              <div class="comparison-header">
                <div class="comparison-title">${escapeHtml(comp.leftTitle || 'Cách Tiếp Cận Cũ')}</div>
                <div class="comparison-sub">${escapeHtml(comp.leftSubtitle || 'Chưa tối ưu')}</div>
              </div>
              <div class="comparison-list">
                ${leftItems}
              </div>
            </div>

            <div class="comparison-card right">
              <div class="comparison-header">
                <div class="comparison-title">${escapeHtml(comp.rightTitle || 'Cách Tiếp Cận Mới Với AI')}</div>
                <div class="comparison-sub">${escapeHtml(comp.rightSubtitle || 'Khuyến nghị áp dụng')}</div>
              </div>
              <div class="comparison-list">
                ${rightItems}
              </div>
            </div>
          </div>

          ${slide.highlight ? `
            <div class="slide-highlight-card" style="margin-top: 0.85rem;">
              💡 <strong>Điểm cốt lõi:</strong> ${escapeHtml(slide.highlight)}
            </div>
          ` : ''}
        </div>

        ${mediaHtml}
      </div>
    `;
  }

  function createProcessLayout(slide) {
    const stepsHtml = (slide.steps || []).map(st => `
      <div class="process-card">
        <div class="process-badge">${escapeHtml(st.step || '01')}</div>
        <div class="process-title">${escapeHtml(st.title)}</div>
        <div class="process-desc">${escapeHtml(st.desc)}</div>
      </div>
    `).join('');

    return `
      <div class="layout-process">
        <div>
          <div class="slide-tag">${escapeHtml(slide.tag || 'QUY TRÌNH')}</div>
          <div class="slide-header" style="margin-bottom: 0.5rem;">
            <h2 class="slide-title">${escapeHtml(slide.title)}</h2>
            <p class="slide-subtitle">${escapeHtml(slide.subtitle)}</p>
          </div>
        </div>

        <div class="process-grid">
          ${stepsHtml}
        </div>

        ${slide.highlight ? `
          <div class="slide-highlight-card">
            💡 <strong>Quy luật:</strong> ${escapeHtml(slide.highlight)}
          </div>
        ` : ''}
      </div>
    `;
  }

  function createFormulaLayout(slide) {
    const compHtml = (slide.components || []).map(c => `
      <div class="formula-card">
        <span class="formula-badge">${escapeHtml(c.badge)}</span>
        <div class="formula-title">${escapeHtml(c.title)}</div>
        <div class="formula-desc">${escapeHtml(c.desc)}</div>
      </div>
    `).join('');

    return `
      <div class="layout-formula">
        <div>
          <div class="slide-tag">${escapeHtml(slide.tag || 'CÔNG THỨC')}</div>
          <div class="slide-header" style="margin-bottom: 0.5rem;">
            <h2 class="slide-title">${escapeHtml(slide.title)}</h2>
            <p class="slide-subtitle">${escapeHtml(slide.subtitle)}</p>
          </div>
        </div>

        <div class="formula-cards-grid">
          ${compHtml}
        </div>

        <div class="slide-highlight-card" style="margin-top: 1.25rem;">
          🎯 <strong>Quy chuẩn kỹ thuật:</strong> Áp dụng cấu trúc prompt chuẩn mực để tối ưu hóa tính chính xác và nhất quán của câu trả lời.
        </div>
      </div>
    `;
  }

  function createQuizLayout(slide) {
    const qData = slide.quizData || {};
    const optionsHtml = (qData.options || []).map(opt => `
      <button class="quiz-option-btn" 
              data-opt-key="${opt.key}" 
              data-feedback="${escapeHtml(opt.feedback)}" 
              data-rec="${opt.isRecommended ? 'true' : 'false'}">
        <span class="quiz-option-key">${opt.key}</span>
        <span style="flex: 1;">${escapeHtml(opt.text)}</span>
      </button>
    `).join('');

    return `
      <div class="layout-quiz">
        <div class="quiz-container">
          <div>
            <div class="slide-tag">🎯 ${escapeHtml(slide.tag || 'CÂU HỎI TƯƠNG TÁC')}</div>
            <div class="slide-header" style="margin-bottom: 0.5rem;">
              <h2 class="slide-title">${escapeHtml(slide.title)}</h2>
              <p class="slide-subtitle">${escapeHtml(slide.subtitle)}</p>
            </div>

            <div class="quiz-question-box">
              ❓ ${escapeHtml(qData.question || 'Hãy chọn một phương án:')}
            </div>

            <div class="quiz-options-list">
              ${optionsHtml}
            </div>

            <div class="quiz-feedback-panel" id="quizFeedbackPanel-${slide.id}">
              <div class="feedback-badge" id="feedbackBadge-${slide.id}">PHÂN TÍCH HỌC THUẬT</div>
              <div class="feedback-text" id="feedbackText-${slide.id}"></div>
              <div style="margin-top: 0.5rem; font-size: 0.85rem; color: #38bdf8;">
                💡 <em>${escapeHtml(qData.lecturerComment || '')}</em>
              </div>
            </div>
          </div>
        </div>

        <div class="standard-media-col">
          <img src="${slide.image}" 
               onerror="this.onerror=null; this.src='${slide.onlineImage}';" 
               alt="${escapeHtml(slide.imageAlt || slide.title)}" 
               loading="lazy">
          <div class="media-badge-overlay">
            <div class="media-badge-title">📸 ${escapeHtml(slide.imageCaption || 'Góc Trao Đổi & Tranh Biện')}</div>
            <div class="media-badge-desc">${escapeHtml(slide.imageAlt || 'Thảo luận học thuật chuyên sâu')}</div>
          </div>
        </div>
      </div>
    `;
  }

  function createWorkshopLayout(slide) {
    const cfg = slide.workshopConfig || {};
    const rulesHtml = (cfg.rules || []).map(r => `
      <div class="rule-item">
        <div class="rule-dot"></div>
        <span>${escapeHtml(r)}</span>
      </div>
    `).join('');

    const durationMins = cfg.durationMinutes || 20;

    return `
      <div class="layout-workshop">
        <div class="workshop-left">
          <div>
            <div class="slide-tag">⚡ ${escapeHtml(slide.tag || 'WORKSHOP THỰC HÀNH')}</div>
            <div class="slide-header" style="margin-bottom: 0.5rem;">
              <h2 class="slide-title">${escapeHtml(slide.title)}</h2>
              <p class="slide-subtitle">${escapeHtml(slide.subtitle)}</p>
            </div>

            <div class="slide-highlight-card" style="margin: 1rem 0;">
              🎯 <strong>Mục tiêu:</strong> ${escapeHtml(cfg.goal || 'Hoàn thành bài tập nhóm với AI')}
            </div>

            <div class="workshop-rules-list">
              ${rulesHtml}
            </div>
          </div>

          <div class="workshop-timer-box">
            <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em;">
              ĐỒNG HỒ ĐẾM NGƯỢC THẢO LUẬN
            </div>
            <div class="timer-digits" id="workshopTimerDigits-${slide.id}">${String(durationMins).padStart(2, '0')}:00</div>
            <div class="timer-controls">
              <button class="timer-btn btn-play" onclick="window.presentationEngine.startWorkshopTimer(${slide.id}, ${durationMins})">▶ Bắt đầu</button>
              <button class="timer-btn" onclick="window.presentationEngine.pauseWorkshopTimer()">⏸ Tạm dừng</button>
              <button class="timer-btn" onclick="window.presentationEngine.resetWorkshopTimer(${slide.id}, ${durationMins})">↺ Đặt lại</button>
            </div>
          </div>
        </div>

        <div class="standard-media-col">
          <img src="${slide.image}" 
               onerror="this.onerror=null; this.src='${slide.onlineImage}';" 
               alt="${escapeHtml(slide.imageAlt || slide.title)}" 
               loading="lazy">
          <div class="media-badge-overlay">
            <div class="media-badge-title">📸 ${escapeHtml(slide.imageCaption || 'Góc Thực Hành Nhóm')}</div>
            <div class="media-badge-desc">${escapeHtml(slide.imageAlt || 'Thực hành làm bài tập trực tiếp')}</div>
          </div>
        </div>
      </div>
    `;
  }

  function createChecklistLayout(slide) {
    const items = slide.checklist || [];
    const itemsHtml = items.map(it => `
      <div class="check-card" onclick="this.classList.toggle('checked')">
        <div class="checkbox-custom">✓</div>
        <div class="check-content">
          <div class="check-title">${escapeHtml(it.title)}</div>
          <div class="check-desc">${escapeHtml(it.desc)}</div>
        </div>
      </div>
    `).join('');

    return `
      <div class="layout-checklist">
        <div>
          <div class="slide-tag">📋 ${escapeHtml(slide.tag || 'BỘ QUY TẮC')}</div>
          <div class="slide-header" style="margin-bottom: 0.5rem;">
            <h2 class="slide-title">${escapeHtml(slide.title)}</h2>
            <p class="slide-subtitle">${escapeHtml(slide.subtitle)}</p>
          </div>
        </div>

        <div class="checklist-grid">
          ${itemsHtml}
        </div>
      </div>
    `;
  }

  function createQuoteLayout(slide) {
    return `
      <div class="layout-quote">
        <div class="quote-mark">“</div>
        <p class="quote-body">${escapeHtml(slide.quoteText || slide.title)}</p>
        <div class="quote-author">— ${escapeHtml(slide.quoteAuthor || 'Thầy Giảng Viên')}</div>
        <p class="quote-bridge">${escapeHtml(slide.bridgeSummary || '')}</p>

        <div class="quote-actions">
          ${slide.id === 50 ? `
            <button class="btn-primary-glow" onclick="window.presentationEngine.goToSlide(0)">
              ↺ Bắt đầu lại bài giảng
            </button>
            <button class="nav-btn" onclick="window.presentationEngine.toggleThumbnails()" style="padding: 0.9rem 1.6rem;">
              📑 Xem lại 50 slide
            </button>
          ` : `
            <button class="btn-primary-glow" onclick="window.presentationEngine.nextSlide()">
              Tiếp tục sang Phần tiếp theo →
            </button>
          `}
        </div>
      </div>
    `;
  }

  function createTaxonomyLayout(slide) {
    const cardsHtml = (slide.taxonomy || []).map(item => `
      <div class="taxonomy-card" style="--card-accent: ${item.accent || 'var(--cyan-glow)'};">
        <div>
          <div class="tax-level-badge">${escapeHtml(item.level || 'TẦNG')}</div>
          <div class="tax-title">${escapeHtml(item.title)}</div>
          <div class="tax-period">⏱️ ${escapeHtml(item.period || '')}</div>
          <div class="tax-desc">${escapeHtml(item.desc)}</div>
        </div>
        <div>
          <div class="tax-mechanics">⚙️ ${escapeHtml(item.mechanics)}</div>
          <div class="tax-examples">🎯 Ví dụ: ${escapeHtml(item.examples)}</div>
        </div>
      </div>
    `).join('');

    return `
      <div class="layout-taxonomy">
        <div>
          <div class="slide-tag">${escapeHtml(slide.tag || 'PHÂN TẦNG KIẾN TRÚC')}</div>
          <div class="slide-header" style="margin-bottom: 0.5rem;">
            <h2 class="slide-title">${escapeHtml(slide.title)}</h2>
            <p class="slide-subtitle">${escapeHtml(slide.subtitle)}</p>
          </div>
        </div>
        <div class="taxonomy-grid">
          ${cardsHtml}
        </div>
        ${slide.highlight ? `
          <div class="slide-highlight-card">
            💡 <strong>Bản chất cốt lõi:</strong> ${escapeHtml(slide.highlight)}
          </div>
        ` : ''}
      </div>
    `;
  }

  function createDashboardLayout(slide) {
    const cardsHtml = (slide.metrics || []).map(m => `
      <div class="dash-card">
        <div class="dash-card-header">
          <div class="dash-metric-name">${escapeHtml(m.name)}</div>
          <div class="dash-benchmark-dataset">${escapeHtml(m.dataset)}</div>
        </div>
        <div>
          <div class="dash-score-display">
            <span class="dash-main-score">${escapeHtml(m.mainScore)}</span>
            <span style="font-size: 0.85rem; color: var(--text-dim);">${escapeHtml(m.unit || '')}</span>
          </div>
          <div class="dash-compare-bars">
            ${(m.compareBars || []).map(b => `
              <div class="dash-model-bar">
                <div class="dash-bar-row">
                  <span>${escapeHtml(b.name)}</span>
                  <span style="font-family: var(--font-mono); font-weight: 700;">${b.score}%</span>
                </div>
                <div class="benchmark-bar-track">
                  <div class="benchmark-bar-fill ${b.color || ''}" style="width: ${b.score}%;"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="dash-note">${escapeHtml(m.note)}</div>
      </div>
    `).join('');

    return `
      <div class="layout-dashboard">
        <div>
          <div class="slide-tag">${escapeHtml(slide.tag || 'BENCHMARK TOÀN DIỆN')}</div>
          <div class="slide-header" style="margin-bottom: 0.5rem;">
            <h2 class="slide-title">${escapeHtml(slide.title)}</h2>
            <p class="slide-subtitle">${escapeHtml(slide.subtitle)}</p>
          </div>
        </div>
        <div class="dashboard-grid">
          ${cardsHtml}
        </div>
        ${slide.highlight ? `
          <div class="slide-highlight-card">
            💡 <strong>Đánh giá học thuật:</strong> ${escapeHtml(slide.highlight)}
          </div>
        ` : ''}
      </div>
    `;
  }

  function createArchitectureLayout(slide) {
    const stepsHtml = (slide.steps || []).map((s, idx) => `
      <div class="arch-step-item">
        <div class="arch-step-num">${idx + 1}</div>
        <div class="arch-step-content">
          <div class="arch-step-title">${escapeHtml(s.title)}</div>
          <div class="arch-step-desc">${escapeHtml(s.desc)}</div>
        </div>
      </div>
    `).join('');

    return `
      <div class="layout-architecture">
        <div class="arch-left-panel">
          <div>
            <div class="slide-tag">${escapeHtml(slide.tag || 'KIẾN TRÚC MÔ HÌNH')}</div>
            <div class="slide-header">
              <h2 class="slide-title">${escapeHtml(slide.title)}</h2>
              <p class="slide-subtitle">${escapeHtml(slide.subtitle)}</p>
            </div>
            <div class="arch-steps-list">
              ${stepsHtml}
            </div>
          </div>
          ${slide.highlight ? `
            <div class="slide-highlight-card">
              💡 <strong>Công thức toán học:</strong> ${escapeHtml(slide.highlight)}
            </div>
          ` : ''}
        </div>
        <div class="arch-right-diagram">
          ${slide.diagramSvg || `
            <div class="visual-diagram-box" style="width: 100%; height: 100%;">
              <div class="visual-diagram-header">
                <div class="visual-diagram-title">⚙️ ${escapeHtml(slide.diagramTitle || 'KIẾN TRÚC HỆ THỐNG')}</div>
                <div class="visual-diagram-tag">${escapeHtml(slide.diagramTag || 'TRANSFORMER')}</div>
              </div>
              <div class="visual-diagram-body">
                <div class="flow-diagram-wrapper">
                  ${(slide.flowNodes || []).map((n, i, a) => `
                    <div class="flow-node ${n.highlight ? 'highlight-node' : ''}">
                      <div class="flow-node-left">
                        <div class="flow-node-icon">${n.icon || '⚡'}</div>
                        <div>
                          <div class="flow-node-title">${escapeHtml(n.title)}</div>
                          <div class="flow-node-desc">${escapeHtml(n.desc || '')}</div>
                        </div>
                      </div>
                      ${n.badge ? `<div class="flow-node-badge">${escapeHtml(n.badge)}</div>` : ''}
                    </div>
                    ${i < a.length - 1 ? `<div class="flow-connector">↓</div>` : ''}
                  `).join('')}
                </div>
              </div>
              <div class="visual-diagram-footer">
                <span>${escapeHtml(slide.diagramFooter || 'Khoa CNTT - Học viện Kỹ thuật Mật mã')}</span>
                <span style="color: var(--cyan-glow);">ATTENTION MECHANISM</span>
              </div>
            </div>
          `}
        </div>
      </div>
    `;
  }

  function createCodeLabLayout(slide) {
    const cl = slide.codeLab || {};
    return `
      <div class="layout-code-lab">
        <div>
          <div class="slide-tag">${escapeHtml(slide.tag || 'THỰC HÀNH MÃ NGUỒN')}</div>
          <div class="slide-header" style="margin-bottom: 0.5rem;">
            <h2 class="slide-title">${escapeHtml(slide.title)}</h2>
            <p class="slide-subtitle">${escapeHtml(slide.subtitle)}</p>
          </div>
        </div>

        <div class="code-lab-split">
          <div class="code-lab-pane vulnerable">
            <div class="code-pane-bar">
              <span>❌ ${escapeHtml(cl.vulnerable?.title || 'Code AI Viết (Chứa Lỗ Hổng)')}</span>
              <span class="code-error">DỄ RÒ RỈ BỘ NHỚ</span>
            </div>
            <div class="code-pane-body">
              <pre style="margin:0;"><code>${cl.vulnerable?.code || ''}</code></pre>
            </div>
          </div>

          <div class="code-lab-pane secure">
            <div class="code-pane-bar">
              <span>✓ ${escapeHtml(cl.secure?.title || 'Code Chuẩn KMA (An Toàn & Tối Ưu)')}</span>
              <span style="color: var(--emerald-accent);">RAII / SMART POINTERS</span>
            </div>
            <div class="code-pane-body">
              <pre style="margin:0;"><code>${cl.secure?.code || ''}</code></pre>
            </div>
          </div>
        </div>

        <div class="code-lab-analysis">
          <div>
            <strong>🔍 Phân tích an toàn mã nguồn:</strong> ${escapeHtml(cl.analysis || '')}
          </div>
          <span style="font-family: var(--font-mono); color: var(--cyan-glow); white-space: nowrap;">Valgrind Clean: PASS</span>
        </div>
      </div>
    `;
  }

  function createMatrixLayout(slide) {
    const quads = slide.matrix?.quadrants || [];
    const quadsHtml = quads.map(q => `
      <div class="matrix-quadrant ${q.type || 'positive'}">
        <div class="matrix-quadrant-title">${q.icon || '✦'} ${escapeHtml(q.title)}</div>
        <div class="matrix-list">
          ${(q.items || []).map(it => `
            <div class="matrix-item">
              <span>${q.type === 'positive' ? '✓' : q.type === 'negative' ? '✕' : '•'}</span>
              <span>${escapeHtml(it)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    const hasMedia = !!slide.image;
    const mediaHtml = hasMedia ? `
      <div class="standard-media-col">
        <img class="media-image media-fit-${escapeHtml(slide.mediaFit || 'cover')}" 
             src="${slide.image}" 
             onerror="this.onerror=null; this.src='${slide.onlineImage || ''}';" 
             alt="${escapeHtml(slide.imageAlt || slide.title)}" 
             loading="lazy">
        <div class="media-badge-overlay">
          <div class="media-badge-title">${escapeHtml(slide.imageCaption || 'Ma trận phân tích')}</div>
          <div class="media-badge-desc">${escapeHtml(slide.imageAlt || slide.title)}</div>
        </div>
      </div>
    ` : '';

    return `
      <div class="layout-matrix ${hasMedia ? 'has-media' : ''}">
        <div class="matrix-content">
          <div>
            <div class="slide-tag">${escapeHtml(slide.tag || 'MA TRẬN ĐỐI CHIẾU')}</div>
            <div class="slide-header" style="margin-bottom: 0.6rem;">
              <h2 class="slide-title">${escapeHtml(slide.title)}</h2>
              <p class="slide-subtitle">${escapeHtml(slide.subtitle)}</p>
            </div>
          </div>
          <div class="matrix-grid ${hasMedia ? 'with-media' : ''}">
            ${quadsHtml}
          </div>
          ${slide.highlight ? `
            <div class="slide-highlight-card" style="margin-top: 0.75rem;">
              💡 <strong>Kết luận cốt lõi:</strong> ${escapeHtml(slide.highlight)}
            </div>
          ` : ''}
        </div>

        ${mediaHtml}
      </div>
    `;
  }

  function createPipelineLayout(slide) {
    const steps = slide.pipeline?.steps || [];
    const stepsHtml = steps.map(st => `
      <div class="pipeline-card">
        <div>
          <div class="pipeline-step-badge">${escapeHtml(st.stepNum)}</div>
          <div class="pipeline-step-title">${escapeHtml(st.title)}</div>
          <div class="pipeline-tool-tag">🛠️ ${escapeHtml(st.tool)}</div>
          <div class="pipeline-step-desc">${escapeHtml(st.desc)}</div>
        </div>
        <div class="pipeline-step-output">
          ➜ Đầu ra: ${escapeHtml(st.output)}
        </div>
      </div>
    `).join('');

    const hasMedia = !!slide.image;
    const mediaHtml = hasMedia ? `
      <div class="standard-media-col">
        <img class="media-image media-fit-${escapeHtml(slide.mediaFit || 'cover')}" 
             src="${slide.image}" 
             onerror="this.onerror=null; this.src='${slide.onlineImage || ''}';" 
             alt="${escapeHtml(slide.imageAlt || slide.title)}" 
             loading="lazy">
        <div class="media-badge-overlay">
          <div class="media-badge-title">${escapeHtml(slide.imageCaption || 'Quy trình nghiên cứu')}</div>
          <div class="media-badge-desc">${escapeHtml(slide.imageAlt || slide.title)}</div>
        </div>
      </div>
    ` : '';

    return `
      <div class="layout-pipeline ${hasMedia ? 'has-media' : ''}">
        <div class="pipeline-content">
          <div>
            <div class="slide-tag">${escapeHtml(slide.tag || 'QUY TRÌNH KHOA HỌC')}</div>
            <div class="slide-header" style="margin-bottom: 0.6rem;">
              <h2 class="slide-title">${escapeHtml(slide.title)}</h2>
              <p class="slide-subtitle">${escapeHtml(slide.subtitle)}</p>
            </div>
          </div>
          <div class="pipeline-cards-row ${hasMedia ? 'with-media' : ''}">
            ${stepsHtml}
          </div>
          ${slide.highlight ? `
            <div class="slide-highlight-card" style="margin-top: 0.75rem;">
              💡 <strong>Kỷ luật nghiên cứu:</strong> ${escapeHtml(slide.highlight)}
            </div>
          ` : ''}
        </div>

        ${mediaHtml}
      </div>
    `;
  }

  function createTokenSimLayout(slide) {
    const ts = slide.tokenSim || {};
    return `
      <div class="layout-token-sim">
        <div class="token-sim-left">
          <div>
            <div class="slide-tag">${escapeHtml(slide.tag || 'BẢN CHẤT XÁC SUẤT')}</div>
            <div class="slide-header">
              <h2 class="slide-title">${escapeHtml(slide.title)}</h2>
              <p class="slide-subtitle">${escapeHtml(slide.subtitle)}</p>
            </div>
            <div class="slide-highlight-card" style="margin: 1.25rem 0; font-family: var(--font-mono);">
              <strong>Input Context:</strong> "${escapeHtml(ts.promptText || '')}"
            </div>
            <div class="points-list">
              ${(slide.points || []).map(p => `
                <div class="point-card">
                  <div class="point-icon">${p.icon || '✦'}</div>
                  <div class="point-text">
                    <div class="point-title">${escapeHtml(p.title)}</div>
                    <div class="point-desc">${escapeHtml(p.desc)}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          ${slide.highlight ? `
            <div class="slide-highlight-card">
              💡 <strong>Bản chất:</strong> ${escapeHtml(slide.highlight)}
            </div>
          ` : ''}
        </div>

        <div class="token-sim-right">
          <div class="token-dist-table">
            <div style="font-size: 0.78rem; color: var(--cyan-glow); font-weight: 700; margin-bottom: 0.4rem; display: flex; justify-content: space-between;">
              <span>PHÂN PHỐI XÁC SUẤT SOFTMAX: P(w | Context)</span>
              <span>Temp = 0.0</span>
            </div>
            ${(ts.candidateTokens || []).map(tok => `
              <div class="token-dist-row ${tok.isWinner ? 'winner' : ''}">
                <span>${tok.isWinner ? '👉 ' : '   '}"${escapeHtml(tok.word)}"</span>
                <span style="font-weight: 700;">${tok.prob}%</span>
              </div>
            `).join('')}
          </div>
          <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid var(--border-glass); border-radius: 12px; padding: 1rem; font-size: 0.82rem; color: #cbd5e1; line-height: 1.45;">
            🌡️ <strong>Ảnh hưởng của Temperature:</strong> ${escapeHtml(ts.temperatureNote || 'Temperature = 0 luôn chọn từ có xác suất cao nhất. Khi tăng Temperature, các từ xác suất thấp hơn có cơ hội xuất hiện, tạo nên tính sáng tạo nhưng dễ tăng ảo giác.')}
          </div>
        </div>
      </div>
    `;
  }

  // Quiz Interaction Listener
  function attachSlideEventListeners() {
    document.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const parentList = btn.closest('.quiz-options-list');
        parentList.querySelectorAll('.quiz-option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        const slideCard = btn.closest('.slide-card');
        const slideId = slideCard.id.replace('slide-', '');
        const feedbackPanel = document.getElementById(`quizFeedbackPanel-${slideId}`);
        const feedbackText = document.getElementById(`feedbackText-${slideId}`);
        const feedbackBadge = document.getElementById(`feedbackBadge-${slideId}`);

        if (feedbackPanel && feedbackText) {
          const feedback = btn.getAttribute('data-feedback');
          const isRec = btn.getAttribute('data-rec') === 'true';
          
          feedbackBadge.textContent = isRec ? '✓ ĐÁP ÁN KHUYẾN NGHỊ / XUẤT SẮC' : 'ℹ️ PHÂN TÍCH GÓC NHÌN NÀY';
          feedbackBadge.style.color = isRec ? '#34d399' : '#38bdf8';
          feedbackText.textContent = feedback;
          feedbackPanel.classList.add('show');
        }
      });
    });
  }

  // =========================================================================
  // 2. NAVIGATION & PRESENTATION LOGIC
  // =========================================================================
  function goToSlide(index) {
    if (index < 0 || index >= state.totalSlides) return;

    state.currentIndex = index;
    const currentSlide = SLIDES_DATA[index];

    // Update active slide class
    document.querySelectorAll('.slide-card').forEach((card, idx) => {
      card.classList.toggle('active', idx === index);
    });

    // Update Progress Bar
    const progressPct = ((index + 1) / state.totalSlides) * 100;
    elements.progressBar.style.width = `${progressPct}%`;

    // Update Counters and Section info
    elements.currentSlideNum.textContent = String(index + 1).padStart(2, '0');
    elements.sectionBreadcrumb.textContent = `${currentSlide.sectionName} • Slide ${index + 1}`;
    elements.currentSectionName.textContent = currentSlide.sectionName;

    // Update Prev / Next Buttons State
    elements.btnPrev.disabled = (index === 0);
    elements.btnNext.disabled = (index === state.totalSlides - 1);

    // Update Speaker Notes Content
    elements.speakerNotesText.textContent = currentSlide.speakerNotes || 'Chưa có ghi chú cho slide này.';

    // Update Thumbnail active class if open
    document.querySelectorAll('.thumb-card').forEach((th, idx) => {
      th.classList.toggle('active', idx === index);
    });

    // Save state to URL Hash
    history.replaceState(null, null, `#slide-${index + 1}`);
  }

  function nextSlide() {
    if (state.currentIndex < state.totalSlides - 1) {
      goToSlide(state.currentIndex + 1);
    }
  }

  function prevSlide() {
    if (state.currentIndex > 0) {
      goToSlide(state.currentIndex - 1);
    }
  }

  function firstSlide() {
    goToSlide(0);
  }

  function lastSlide() {
    goToSlide(state.totalSlides - 1);
  }

  // =========================================================================
  // 3. PRESENTER MODE & TIMERS
  // =========================================================================
  function toggleNotes() {
    state.isNotesOpen = !state.isNotesOpen;
    elements.speakerNotesDrawer.classList.toggle('open', state.isNotesOpen);
    elements.btnToggleNotes.classList.toggle('active', state.isNotesOpen);
  }

  function startPresentationTimer() {
    if (state.timerInterval) return;
    state.timerInterval = setInterval(() => {
      state.timerSeconds++;
      const mins = Math.floor(state.timerSeconds / 60);
      const secs = state.timerSeconds % 60;
      elements.presentationTimer.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }, 1000);
  }

  // Workshop Slide Countdown Timer with Web Audio Beep
  function startWorkshopTimer(slideId, minutes) {
    if (state.workshopTimerInterval) clearInterval(state.workshopTimerInterval);
    if (!state.workshopRemainingSeconds || state.workshopRemainingSeconds <= 0) {
      state.workshopRemainingSeconds = minutes * 60;
    }

    const display = document.getElementById(`workshopTimerDigits-${slideId}`);

    state.workshopTimerInterval = setInterval(() => {
      if (state.workshopRemainingSeconds <= 0) {
        clearInterval(state.workshopTimerInterval);
        playBeepSound();
        if (display) display.textContent = "00:00 - HẾT GIỜ!";
        return;
      }

      state.workshopRemainingSeconds--;
      const m = Math.floor(state.workshopRemainingSeconds / 60);
      const s = state.workshopRemainingSeconds % 60;
      if (display) {
        display.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      }
    }, 1000);
  }

  function pauseWorkshopTimer() {
    if (state.workshopTimerInterval) {
      clearInterval(state.workshopTimerInterval);
      state.workshopTimerInterval = null;
    }
  }

  function resetWorkshopTimer(slideId, minutes) {
    pauseWorkshopTimer();
    state.workshopRemainingSeconds = minutes * 60;
    const display = document.getElementById(`workshopTimerDigits-${slideId}`);
    if (display) {
      display.textContent = `${String(minutes).padStart(2, '0')}:00`;
    }
  }

  function playBeepSound() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.value = 587.33; // D5 note
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.8);
    } catch (e) {
      console.log('Audio not supported');
    }
  }

  // =========================================================================
  // 4. THUMBNAIL DRAWER & GRID MODAL
  // =========================================================================
  function initThumbnails() {
    // Section Filters
    const sections = [
      { id: 'all', name: 'Tất cả 50 Slide' },
      { id: '1', name: 'Phần 1: AI & Tân SV' },
      { id: '2', name: 'Phần 2: Học Tập' },
      { id: '3', name: 'Phần 3: Nghiên Cứu' },
      { id: '4', name: 'Phần 4: Workshop' }
    ];

    elements.sectionFilterButtons.innerHTML = sections.map((sec, idx) => `
      <button class="nav-btn ${idx === 0 ? 'active' : ''}" data-filter-sec="${sec.id}">
        ${sec.name}
      </button>
    `).join('');

    elements.sectionFilterButtons.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        elements.sectionFilterButtons.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentFilterSection = btn.getAttribute('data-filter-sec');
        renderThumbnailsGrid();
      });
    });

    renderThumbnailsGrid();
  }

  function renderThumbnailsGrid() {
    elements.thumbnailsGrid.innerHTML = '';

    SLIDES_DATA.forEach((slide, idx) => {
      if (state.currentFilterSection !== 'all' && String(slide.sectionId) !== state.currentFilterSection) {
        return;
      }

      const card = document.createElement('div');
      card.className = `thumb-card ${idx === state.currentIndex ? 'active' : ''}`;
      card.onclick = () => {
        goToSlide(idx);
        toggleThumbnails();
      };

      card.innerHTML = `
        <div class="thumb-img-wrap">
          <img src="${slide.image}" 
               onerror="this.onerror=null; this.src='${slide.onlineImage}';" 
               alt="${escapeHtml(slide.title)}" 
               loading="lazy">
        </div>
        <div class="thumb-info">
          <span class="thumb-num">SLIDE ${String(slide.id).padStart(2, '0')}</span>
          <span class="thumb-title" title="${escapeHtml(slide.title)}">${escapeHtml(slide.title)}</span>
        </div>
      `;

      elements.thumbnailsGrid.appendChild(card);
    });
  }

  function toggleThumbnails() {
    state.isThumbnailsOpen = !state.isThumbnailsOpen;
    elements.thumbnailsModal.classList.toggle('open', state.isThumbnailsOpen);
    elements.btnToggleThumbnails.classList.toggle('active', state.isThumbnailsOpen);
    if (state.isThumbnailsOpen) {
      renderThumbnailsGrid();
    }
  }

  // =========================================================================
  // 5. FULLSCREEN & HELP MODAL
  // =========================================================================
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn(`Error enabling fullscreen: ${err.message}`);
      });
      elements.fsIcon.textContent = '🗗';
      elements.fsText.textContent = 'Thu nhỏ';
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        elements.fsIcon.textContent = '⛶';
        elements.fsText.textContent = 'Toàn màn hình';
      }
    }
  }

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      elements.fsIcon.textContent = '⛶';
      elements.fsText.textContent = 'Toàn màn hình';
    }
  });

  function toggleHelp(open) {
    if (elements.helpModal) {
      elements.helpModal.classList.toggle('open', open);
    }
  }

  // =========================================================================
  // 6. KEYBOARD EVENT LISTENER
  // =========================================================================
  document.addEventListener('keydown', (e) => {
    // If typing in input/textarea, ignore
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    switch (e.key) {
      case 'ArrowRight':
      case ' ':
      case 'PageDown':
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        prevSlide();
        break;
      case 'Home':
        e.preventDefault();
        firstSlide();
        break;
      case 'End':
        e.preventDefault();
        lastSlide();
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
      case 'n':
      case 'N':
        e.preventDefault();
        toggleNotes();
        break;
      case 't':
      case 'T':
        e.preventDefault();
        toggleThumbnails();
        break;
      case '?':
        e.preventDefault();
        toggleHelp(true);
        break;
      case 'Escape':
        if (state.isThumbnailsOpen) toggleThumbnails();
        if (state.isNotesOpen) toggleNotes();
        toggleHelp(false);
        break;
    }
  });

  // Helpers
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Attach DOM Listeners
  if (elements.btnNext) elements.btnNext.addEventListener('click', nextSlide);
  if (elements.btnPrev) elements.btnPrev.addEventListener('click', prevSlide);
  if (elements.btnFirst) elements.btnFirst.addEventListener('click', firstSlide);
  if (elements.btnLast) elements.btnLast.addEventListener('click', lastSlide);
  if (elements.btnToggleNotes) elements.btnToggleNotes.addEventListener('click', toggleNotes);
  if (elements.btnCloseNotes) elements.btnCloseNotes.addEventListener('click', toggleNotes);
  if (elements.btnToggleFullscreen) elements.btnToggleFullscreen.addEventListener('click', toggleFullscreen);
  if (elements.btnToggleThumbnails) elements.btnToggleThumbnails.addEventListener('click', toggleThumbnails);
  if (elements.btnCloseThumbnails) elements.btnCloseThumbnails.addEventListener('click', toggleThumbnails);
  if (elements.btnOpenHelp) elements.btnOpenHelp.addEventListener('click', () => toggleHelp(true));
  if (elements.btnCloseHelp) elements.btnCloseHelp.addEventListener('click', () => toggleHelp(false));
  if (elements.btnDismissHelp) elements.btnDismissHelp.addEventListener('click', () => toggleHelp(false));

  // Expose global methods for inline HTML onclick handlers
  window.presentationEngine = {
    goToSlide,
    nextSlide,
    prevSlide,
    firstSlide,
    lastSlide,
    toggleNotes,
    toggleThumbnails,
    startWorkshopTimer,
    pauseWorkshopTimer,
    resetWorkshopTimer
  };

  // Initialize
  renderAllSlides();
  initThumbnails();
  startPresentationTimer();

  // Read URL Hash on initial load if present (e.g. #slide-5)
  if (window.location.hash) {
    const match = window.location.hash.match(/#slide-(\d+)/);
    if (match && match[1]) {
      const targetIdx = parseInt(match[1], 10) - 1;
      if (targetIdx >= 0 && targetIdx < state.totalSlides) {
        goToSlide(targetIdx);
      }
    }
  } else {
    goToSlide(0);
  }
});
