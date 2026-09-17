const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });

  const indexPath = 'file:///' + path.resolve(__dirname, '..', 'index.html').replace(/\\/g, '/');
  console.log('Loading page:', indexPath);
  await page.goto(indexPath, { waitUntil: 'networkidle0' });

  // Disable all transitions for instant rendering
  await page.addStyleTag({
    content: `
      * {
        transition: none !important;
        animation-duration: 0s !important;
      }
    `
  });

  // Ensure slide 1 is active
  await page.evaluate(() => {
    window.presentationEngine.goToSlide(0);
  });

  await new Promise(r => setTimeout(r, 500));

  const slideEl = await page.$('.slide-card.active');
  if (slideEl) {
    await slideEl.screenshot({ path: path.join(__dirname, 'slide-01-card.png') });
    console.log('Saved slide-01-card.png');
  }

  // Also test capturing the full slide stage
  const stageEl = await page.$('.slide-stage');
  if (stageEl) {
    await stageEl.screenshot({ path: path.join(__dirname, 'slide-01-stage.png') });
    console.log('Saved slide-01-stage.png');
  }

  // Test slide 2
  await page.evaluate(() => {
    window.presentationEngine.goToSlide(1);
  });
  await new Promise(r => setTimeout(r, 500));

  const slide2El = await page.$('.slide-card.active');
  if (slide2El) {
    await slide2El.screenshot({ path: path.join(__dirname, 'slide-02-card.png') });
    console.log('Saved slide-02-card.png');
  }

  await browser.close();
  console.log('Done test screenshot!');
})();
