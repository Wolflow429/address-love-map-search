# Overview

A way to visually browse address.love homes using google maps

# How to use

First and foremost download the repository, make sure you're using node version `17.2.0` and run `npm install`

### Scraping the information of homes

Run `node scraper.js`

Wait a few minutes and all the information regarding homes will be stored under `homes.json` along with the logs below

```
Logging in
Logged in
Scraping all homes pages
Done scraping homes page 1
...
Done scraping all homes pages
Parsing all home cards
Parsed all home cards
Scraping all home items
Starting scraping home 松本A邸 with id 272
Done scraping home 松本A邸 with id 272
...
Scraped all home items
Saving homes.json
Logging out
Logged out
Exiting scraper
```

### Visualizing the homes on a map

Run `npm run dev` and access `localhost:3000/map/address`

![alt text](https://github.com/wolflow429/address-love-map-search/blob/main/map.png?raw=true)

# Roadmap

✅ Fetch and store names, coordinates and basic information of each home<br/>
✅ Plot all homes on a map<br/>
📝 Fetch and store rooms and their availability<br/>
📝 Introduce search features<br/>
- Search by room availability
- Search by room desired trajectory
