import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

export const getHtmlFromUrl = async (webpage_url: string) => {
  let html = "";
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
    executablePath: "/usr/bin/google-chrome",
  });
  const page = await browser.newPage();
  await page.goto(webpage_url, { waitUntil: "networkidle0" });

  html = await page.content();
  html = String(html);
  console.log("html length :", html.length);
  await browser.close();

  return html;
};
