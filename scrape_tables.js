const { chromium } = require('playwright');

(async () => {
  const seeds = [5,6,7,8,9,10,11,12,13,14];
  const browser = await chromium.launch();
  const page = await browser.newPage();
  let totalSum = 0;

  for (const seed of seeds) {
    const url = `https://sanand0.github.io/tdsdata/js_table/?seed=${seed}`;
    await page.goto(url);
    const numbers = await page.$$eval("table td", tds =>
      tds.map(td => parseFloat(td.textContent.trim())).filter(n => !isNaN(n))
    );
    const localSum = numbers.reduce((a, b) => a + b, 0);
    console.log(`Seed ${seed}: ${localSum}`);
    totalSum += localSum;
  }

  console.log("🔢 Final Total Sum:", totalSum);
  await browser.close();
})();
