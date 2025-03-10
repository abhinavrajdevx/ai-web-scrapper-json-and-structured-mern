import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

export const getHtmlFromUrl = async (webpage_url: string) => {
  let html = "";
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox"],
    executablePath: "/usr/bin/chromium-browser",
  });
  const page = await browser.newPage();
  await page.goto(webpage_url, { waitUntil: "networkidle0" });

  html = await page.content();
  html = String(html);
  console.log("html length :", html.length);

  return html;
};
