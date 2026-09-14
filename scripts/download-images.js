/**
 * Script Node.js tự động tải 50 ảnh chất lượng cao từ nguồn Unsplash đã xác minh
 * Lưu trữ tại: assets/images/
 * Ghi log tiến trình, kiểm tra Content-Type, HTTP status và tạo fallback nếu mạng gián đoạn
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const ROOT_DIR = path.resolve(__dirname, '..');
const SOURCES_FILE = path.join(ROOT_DIR, 'assets', 'image-sources.json');
const IMAGES_DIR = path.join(ROOT_DIR, 'assets', 'images');

// Đảm bảo thư mục tồn tại
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

// Hàm tải 1 URL hỗ trợ redirect (301, 302)
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const request = protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Educational-AI-Presentation/1.0',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      },
      timeout: 15000
    }, (response) => {
      // Xử lý chuyển hướng
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, destPath)
          .then(resolve)
          .catch(reject);
      }

      if (response.statusCode !== 200) {
        return reject(new Error(`HTTP status code ${response.statusCode}`));
      }

      const contentType = response.headers['content-type'] || '';
      if (!contentType.includes('image') && !contentType.includes('octet-stream')) {
        return reject(new Error(`Invalid content-type: ${contentType}`));
      }

      const fileStream = fs.createWriteStream(destPath);
      let downloadedBytes = 0;
      const MAX_SIZE = 15 * 1024 * 1024; // 15MB limit

      response.on('data', (chunk) => {
        downloadedBytes += chunk.length;
        if (downloadedBytes > MAX_SIZE) {
          request.destroy();
          fileStream.close();
          fs.unlink(destPath, () => {});
          reject(new Error(`File size exceeded limit (${downloadedBytes} bytes)`));
        }
      });

      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        if (downloadedBytes < 1000) {
          fs.unlink(destPath, () => {});
          reject(new Error(`Downloaded file too small: ${downloadedBytes} bytes`));
        } else {
          resolve(downloadedBytes);
        }
      });

      fileStream.on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    });

    request.on('error', (err) => {
      reject(err);
    });

    request.on('timeout', () => {
      request.destroy();
      reject(new Error('Connection timed out'));
    });
  });
}

// Tạo ảnh SVG công nghệ cao làm fallback khi không có Internet
function createTechFallbackImage(filePath, slideNum, title) {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1120"/>
      <stop offset="50%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#8b5cf6"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bgGrad)"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>

  <!-- Glow Effect -->
  <circle cx="600" cy="300" r="380" fill="url(#glow)"/>

  <!-- Decorative Circuit Nodes -->
  <g stroke="url(#accentGrad)" stroke-width="2" fill="none" opacity="0.4">
    <circle cx="200" cy="180" r="8"/>
    <circle cx="1000" cy="200" r="10"/>
    <circle cx="350" cy="480" r="6"/>
    <circle cx="850" cy="500" r="8"/>
    <path d="M 208 180 L 350 250 L 500 250"/>
    <path d="M 1000 210 L 850 350 L 700 350"/>
  </g>

  <!-- Central Icon Badge -->
  <rect x="520" y="170" width="160" height="160" rx="32" fill="#1e293b" stroke="url(#accentGrad)" stroke-width="3"/>
  <text x="600" y="275" font-family="'Segoe UI', Roboto, sans-serif" font-size="64" font-weight="900" fill="#38bdf8" text-anchor="middle">AI</text>

  <!-- Slide Number & Title -->
  <text x="600" y="380" font-family="'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" fill="#06b6d4" letter-spacing="4" text-anchor="middle">SLIDE ${String(slideNum).padStart(2, '0')} • ARTIFICIAL INTELLIGENCE</text>
  <text x="600" y="430" font-family="'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle">${escapeXml(title)}</text>
  <text x="600" y="475" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" fill="#94a3b8" text-anchor="middle">Ứng dụng AI trong Học tập &amp; Nghiên cứu khoa học</text>

  <!-- Corner Tag -->
  <rect x="50" y="600" width="220" height="34" rx="17" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)"/>
  <text x="160" y="622" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#cbd5e1" text-anchor="middle">ĐẠI HỌC • TÂN SINH VIÊN</text>
</svg>`;

  fs.writeFileSync(filePath, svgContent, 'utf8');
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

async function main() {
  console.log('=====================================================');
  console.log('🚀 BẮT ĐẦU QUÁ TRÌNH TẢI 50 ẢNH TRÌNH CHIẾU BÀI GIẢNG');
  console.log('=====================================================\n');

  if (!fs.existsSync(SOURCES_FILE)) {
    console.error(`❌ Không tìm thấy file nguồn: ${SOURCES_FILE}`);
    process.exit(1);
  }

  const items = JSON.parse(fs.readFileSync(SOURCES_FILE, 'utf8'));
  console.log(`📋 Đã nạp danh sách ${items.length} slide cần quản lý ảnh.\n`);

  let successCount = 0;
  let fallbackCount = 0;
  let skippedCount = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const targetFile = path.join(IMAGES_DIR, item.file);
    const progress = `[${String(i + 1).padStart(2, '0')}/${items.length}]`;

    // Nếu file đã tồn tại và hợp lệ (> 5KB), bỏ qua để tiết kiệm băng thông
    if (fs.existsSync(targetFile)) {
      const stat = fs.statSync(targetFile);
      if (stat.size > 5000) {
        console.log(`${progress} ⏭️ Đã có sẵn: ${item.file} (${Math.round(stat.size / 1024)} KB)`);
        skippedCount++;
        continue;
      }
    }

    process.stdout.write(`${progress} 📥 Đang tải: ${item.file} (${item.title})... `);

    try {
      const bytes = await downloadFile(item.source, targetFile);
      console.log(`✅ OK (${Math.round(bytes / 1024)} KB)`);
      successCount++;
    } catch (err) {
      console.log(`⚠️ Thất bại (${err.message}). Tạo fallback đồ họa chất lượng cao...`);
      // Nếu file định dạng jpg không tải được, tạo file ảnh SVG công nghệ đẹp để không vỡ giao diện
      const svgPath = targetFile.replace(/\.jpg$/, '.svg');
      createTechFallbackImage(svgPath, item.slide, item.title);
      // Đồng thời copy/ghi fallback để file .jpg cũng không bị 404
      createTechFallbackImage(targetFile, item.slide, item.title);
      fallbackCount++;
    }

    // Nghỉ nhẹ 100ms giữa các request để không bị rate limit
    await new Promise((r) => setTimeout(r, 100));
  }

  console.log('\n=====================================================');
  console.log('📊 TỔNG KẾT QUẢN LÝ ẢNH ASSETS:');
  console.log(`   - Tải thành công từ Unsplash: ${successCount}`);
  console.log(`   - Đã có từ trước:             ${skippedCount}`);
  console.log(`   - Đồ họa Fallback:            ${fallbackCount}`);
  console.log(`   - Thư mục lưu trữ:            ${IMAGES_DIR}`);
  console.log('=====================================================\n');
}

main().catch((err) => {
  console.error('Lỗi thực thi:', err);
});
