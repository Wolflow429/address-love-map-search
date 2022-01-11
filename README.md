# Overview

A way to visually browse address.love homes using google maps

# How to use

Clone the repository and run the following

```
$ nvm use
$ npm install
$ node scraper.js
```

Wait a few minutes and all the information regarding homes will be stored under `homes-with-location.json`. You can ignore `homes.json` file for now.

# Roadmap

✅ Fetch and store names, coordinates and basic information of each home
📝 Plot all homes on a map
📝 Fetch and store rooms and their availability
📝 Introduce search features
     - Search by room availability
     - Search by room desired trajectory
