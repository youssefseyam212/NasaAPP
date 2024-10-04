require('dotenv').config();
const DB = require('youssefdb')
let db = new DB()
db.collection("p").insertMany()
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const recentItems = [];
const MAX_RECENT_ITEMS = 20;


function loadJson(fileName) {
    const filePath = path.join(__dirname, fileName);
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

const exoplanets = loadJson('exoplanets.json');
const galaxies = loadJson('galaxies_data.json');


function getRandomItem(dataArray) {
    const randomIndex = Math.floor(Math.random() * dataArray.length);
    return dataArray[randomIndex];
}


app.get('/shuffle', (req, res) => {
    let item;
    let data;

    while (true) {
        data = Math.random() < 0.5 ? exoplanets : galaxies;
        item = getRandomItem(data);

       
        if (!recentItems.includes(item)) {
            
            recentItems.push(item);
            if (recentItems.length > MAX_RECENT_ITEMS) {
                recentItems.shift(); 
            }
            return res.json(item);
        }
    }
});


app.get('/exoplanets', (req, res) => {
    const exoplanet = getRandomItem(exoplanets);

    res.json(exoplanet);
});


app.get('/galaxies', (req, res) => {
    const galaxy = getRandomItem(galaxies);
    res.json(galaxy)
});


app.use(express.json());
 app.listen(PORT, ()=> {
    console.log("Server is listening to port: " + "\x1b[33m" + PORT + "\x1b[0m"+ 
    "\n" + "URL: " + "\x1b[33m" + `http://localhost:${PORT}` +"\x1b[0m");
});
