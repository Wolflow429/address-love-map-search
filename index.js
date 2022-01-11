const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
const fs = require('fs')

require('dotenv').config()

const variables = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  domainUrl: process.env.DOMAIN_URL,
  homesPath: process.env.HOMES_PATH,
  loginPath: process.env.LOGIN_PATH,
  logoutPath: process.env.LOGOUT_PATH
}

const homeCardSelectors = {
  card: 'article.homes-card',
  title: 'a > div.homes-card__header > div.homes-card__header__left > h3',
  prefecture: 'a > div.homes-card__header > div.homes-card__header__left > p',
  description: 'a > div.homes-card__body > p',
  new: 'a > figure > div > span'
  // image: "a > figure > div > img",
}

const homeSelectors = {
  name: '#top > div:nth-child(1) > div.propertydetail__header > div.propertydetail-info > p:nth-child(2)',
  tag: '#top > div:nth-child(1) > div.propertydetail__header > div.propertydetail-info > p.propertydetail-info-tag',
  address:
    '#top > div:nth-child(1) > div.row > div.col-lg-8 > div:nth-child(4) > div:nth-child(2) > p',
  locationLink:
    '#top > div:nth-child(1) > div.row > div.col-lg-8 > div:nth-child(4) > div:nth-child(2) > p > a'
  // rooms: 'div.room',
}

;(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  })
  const page = await browser.newPage()

  // login
  await page.goto(variables.domainUrl + variables.loginPath)
  await page.type('#user_email', variables.username)
  await page.type('#user_password', variables.password)
  await page.evaluate(() =>
    document.querySelector('input[name="commit"]').click()
  )
  await page.waitForNavigation()

  // check if we already scraped
  let homesJson
  fs.readFile('homes.json', 'utf8', (err, data) => {
    if (err) {
      console.log('An error occurred so we will re-scrape homes', err)
      // throw err;
    } else {
      console.log('Loading homes.json from files')
      homesJson = data
    }
  })

  await page.waitForTimeout(5000) // small delay to wait for file to load

  if (!homesJson) {
    // scrape home cards
    let currentPage = 0,
      homesPages = [],
      scrapedAllPages = false
    do {
      currentPage++
      const homesPageUrl = `${variables.domainUrl}${variables.homesPath}?page=${currentPage}`
      await page.goto(homesPageUrl)
      const pageContent = await page.content()
      const $ = cheerio.load(pageContent)

      scrapedAllPages = $('p.title').text() === '家が見つかりませんでした'
      if (scrapedAllPages) {
        console.log(`Done scraping all homes pages`)
      } else {
        homesPages.push(pageContent)
        console.log(`Done scraping homes page ${currentPage}`)
      }
    } while (!scrapedAllPages)

    // parse home cards
    homesJson = homesPages.reduce((parsedHomesJson, currentPage) => {
      const $ = cheerio.load(currentPage)
      const homeCards = $(homeCardSelectors.card)
      for (const homeCard of homeCards) {
        const urlPath = $(homeCard).find('a').attr('href')
        const homeJson = {
          id: urlPath.split('homes/')[1],
          urlPath: urlPath,
          title: $(homeCard).find(homeCardSelectors.title).text(),
          prefecture: $(homeCard).find(homeCardSelectors.prefecture).text(),
          description: $(homeCard)
            .find(homeCardSelectors.description)
            .text()
            .trim(),
          isNew: $(homeCard).find(homeCardSelectors.new).text() === 'NEW'
          // imageUrl: $(homeCard).find(homeCardSelectors.image).attr("src"),
        }
        parsedHomesJson.push(homeJson)
      }
      return parsedHomesJson
    }, [])

    console.log('Saving homes.json')
    fs.writeFileSync('homes.json', JSON.stringify(homesJson))
  }

  // logout
  await page.evaluate(() => document.querySelector('a[href="/logout"]').click())

  // exit
  await browser.close()
})()
