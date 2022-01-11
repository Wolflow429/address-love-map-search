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

const homeItemSelectors = {
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
  console.log('Logging in')
  await page.goto(variables.domainUrl + variables.loginPath)
  await page.type('#user_email', variables.username)
  await page.type('#user_password', variables.password)
  await page.evaluate(() =>
    document.querySelector('input[name="commit"]').click()
  )
  await page.waitForNavigation()
  console.log('Logged in')

  // scrape home cards
  console.log(`Scraping all homes pages`)
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
  console.log('Parsing all home cards')
  const homesJson = homesPages.reduce((parsedHomesJson, currentPage) => {
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
  console.log('Parsed all home cards')

  // scrape home items
  console.log('Scraping all home items')
  const homeItemsJson = []
  for (const homeCard of homesJson) {
    console.log(
      `Starting scraping home ${homeCard.title} with id ${homeCard.id}`
    )
    const homeItemUrl = `${variables.domainUrl}${homeCard.urlPath.substring(1)}`
    await page.goto(homeItemUrl)
    const pageContent = await page.content()
    const $ = cheerio.load(pageContent)
    const locationUrl = $(homeItemSelectors.locationLink).attr('href')
    const homeItemJson = Object.assign(homeCard, {
      name: $(homeItemSelectors.name).text(),
      tag: $(homeItemSelectors.tag).text(),
      address: $(homeItemSelectors.address)
        .text()
        .replace('GoogleMap', '')
        .trim(),
      location: {
        url: locationUrl,
        latitude: parseFloat(locationUrl.split('?q=')[1].split(',')[0]),
        longitude: parseFloat(locationUrl.split('?q=')[1].split(',')[1])
      }
    })
    homeItemsJson.push(homeItemJson)
    console.log(`Done scraping home ${homeCard.title} with id ${homeCard.id}`)
  }
  console.log('Scraped all home items')

  console.log('Saving homes.json')
  fs.writeFileSync('homes.json', JSON.stringify(homesJson, null, 2))

  // logout
  console.log('Logging out')
  await page.evaluate(() => document.querySelector('a[href="/logout"]').click())
  console.log('Logged out')

  // exit
  console.log('Exiting scraper')
  await browser.close()
})()
