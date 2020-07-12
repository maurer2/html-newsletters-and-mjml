import puppeteer from 'puppeteer';
import settings from './print.json';

const [, , pageURL] = process.argv;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page
    .goto(`${pageURL}/?print-pdf`, { waitUntil: 'networkidle2' })
    .catch((error) => console.error('error:', error));
  await page.emulateMedia('screen');
  await page.addStyleTag({
    content: `
      .reveal pre { box-shadow: none !important; }
      .reveal .progress { display: none !important; }
      .reveal .controls { display: none !important; }
    `,
  });
  await page.pdf({
    path: '../presentation2.pdf',
    ...settings,
  });
  await browser.close();
})();
