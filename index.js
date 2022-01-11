const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");

require("dotenv").config();

const variables = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  domainUrl: process.env.DOMAIN_URL,
  homesPath: process.env.HOMES_PATH,
  loginPath: process.env.LOGIN_PATH,
  logoutPath: process.env.LOGOUT_PATH,
};

const homeCardSelectors = {
  card: "article.homes-card",
  title: "a > div.homes-card__header > div.homes-card__header__left > h3",
  prefecture: "a > div.homes-card__header > div.homes-card__header__left > p",
  description: "a > div.homes-card__body > p",
  new: "a > figure > div > span",
  image: "a > figure > div > img",
};

(async () => {
  
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
  const page = await browser.newPage();

  // login
  await page.goto(variables.domainUrl + variables.loginPath);
  await page.type("#user_email", variables.username);
  await page.type("#user_password", variables.password);
  await page.evaluate(() =>
    document.querySelector('input[name="commit"]').click()
  );
  await page.waitForNavigation();

  // scrape home cards
  let currentPage = 0,
    homesPages = [],
    scrapedAllPages = false;
  do {
    currentPage++;
    const homesPageUrl = `${variables.domainUrl}${variables.homesPath}?page=${currentPage}`;
    await page.goto(homesPageUrl);
    const pageContent = await page.content();
    const $ = cheerio.load(pageContent);

    scrapedAllPages = $("p.title").text() === "家が見つかりませんでした";
    if (scrapedAllPages) {
      console.log(`Done scraping all homes pages`);
    } else {
      homesPages.push(pageContent);
      console.log(`Done scraping homes page ${currentPage}`);
    }
  } while (!scrapedAllPages);

  // parse home cards
  const homesJson = homesPages.reduce((parsedHomesJson, currentPage) => {
    const $ = cheerio.load(currentPage);
    const homeCards = $(homeCardSelectors.card);
    for (const homeCard of homeCards) {
      const urlPath = $(homeCard).find("a").attr("href");
      const homeJson = {
        id: urlPath.split("homes/")[1],
        urlPath: urlPath,
        title: $(homeCard).find(homeCardSelectors.title).text(),
        prefecture: $(homeCard).find(homeCardSelectors.prefecture).text(),
        description: $(homeCard)
          .find(homeCardSelectors.description)
          .text()
          .trim(),
        isNew: $(homeCard).find(homeCardSelectors.new).text() === "NEW",
        imageUrl: $(homeCard).find(homeCardSelectors.image).attr("src"),
      };
      parsedHomesJson.push(homeJson);
    }
    return parsedHomesJson;
  }, []);

  debugger;
  fs.writeFileSync("homes.json", JSON.stringify(homesJson));

  // logout
  await page.evaluate(() =>
    document.querySelector('a[href="/logout"]').click()
  );

  // exit
  await browser.close();
})();
