const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });

  const indexPath = 'file:///' + path.resolve(__dirname, '..', 'index.html').replace(/\\/g, '/');
  await page.goto(indexPath, { waitUntil: 'networkidle0' });

  // Add export-mode styling
  await page.addStyleTag({
    content: `
      * {
        transition: none !important;
        animation-duration: 0s !important;
      }
      .top-nav, .presentation-footer, .ambient-bg {
        display: none !important;
      }
      .presentation-app {
        width: 1920px !important;
        height: 1080px !important;
        overflow: hidden !important;
      }
      .slide-viewport {
        padding: 0 !important;
        width: 1920px !important;
        height: 1080px !important;
      }
      .slide-stage {
        max-width: 100% !important;
        max-height: 100% !important;
        width: 1920px !important;
        height: 1080px !important;
      }
      .slide-card {
        border-radius: 0 !important;
        border: none !important;
        box-shadow: none !important;
      }
    `
  });

  // Slide 1
  await page.evaluate(() => window.presentationEngine.goToSlide(0));
  await new Promise(r => setTimeout(r, 400));
  const el1 = await page.$('.slide-card.active');
  await el1.screenshot({ path: path.join(__dirname, 'slide-01-fullscreen.png') });

  // Slide 2
  await page.evaluate(() => window.presentationEngine.goToSlide(1));
  await new Promise(r => setTimeout(r, 400));
  const el2 = await page.$('.slide-card.active');
  await el2.screenshot({ path: path.join(__dirname, 'slide-02-fullscreen.png') });

  // Slide 3
  await page.evaluate(() => window.presentationEngine.goToSlide(2));
  await new Promise(r => setTimeout(r, 400));
  const el3 = await page.$('.slide-card.active');
  await el3.screenshot({ path: path.join(__dirname, 'slide-03-fullscreen.png') });

  // Slide 6 (What is AI / diagram / points)
  await page.evaluate(() => window.presentationEngine.goToSlide(5));
  await new Promise(r => setTimeout(r, 400));
  const el6 = await page.$('.slide-card.active');
  await el6.screenshot({ path: path.join(__dirname, 'slide-06-fullscreen.png') });

  await browser.close();
  console.log('Saved fullscreen test screenshots!');
})();
