const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

(async () => {
  const out = path.resolve('artifacts/audit-current');
  fs.mkdirSync(out, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 900, deviceScaleFactor: 1 });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(pathToFileURL(path.resolve('index.html')).href, { waitUntil: 'networkidle0' });
  await page.addStyleTag({ content: '*{transition:none!important;animation:none!important}' });
  const count = await page.$$eval('.slide-card', elements => elements.length);
  const issues = [];
  for (let index = 0; index < count; index += 1) {
    await page.evaluate(slideIndex => window.presentationEngine.goToSlide(slideIndex), index);
    const check = await page.evaluate(() => {
      const card = document.querySelector('.slide-card.active');
      const box = card.getBoundingClientRect();
      const overflow = [...card.querySelectorAll('h1,h2,p,.point-card,.process-card,.comparison-card,.check-card,.flow-node,.matrix-quadrant,.pipeline-card')]
        .filter(element => {
          const rect = element.getBoundingClientRect();
          return rect.right > box.right + 2 || rect.bottom > box.bottom + 2 || rect.left < box.left - 2 || rect.top < box.top - 2;
        })
        .map(element => element.textContent.trim().slice(0, 100));
      const broken = [...card.querySelectorAll('img')]
        .filter(image => image.complete && !image.naturalWidth)
        .map(image => image.src);
      return { id: card.id, overflow, broken };
    });
    if (check.overflow.length || check.broken.length) issues.push(check);
    await page.screenshot({ path: path.join(out, `slide-${String(index + 1).padStart(2, '0')}.png`) });
  }
  console.log(JSON.stringify({ count, errors, issues }, null, 2));
  await browser.close();
})().catch(error => {
  console.error(error);
  process.exit(1);
});
