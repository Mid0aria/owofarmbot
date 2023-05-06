const fs = require("fs");
const { http, https } = require("follow-redirects");
const path = require("path");
const request = require("request");
const os = require("os");
var buot = path.join(__dirname, "/bot.js");
var cunfig = path.join(__dirname, "/config.json");
var versi = path.join(__dirname, "/version.json");
console.log("updating ...");

const boti = https.get(
    "https://raw.githubusercontent.com/Mid0aria/owofarmbotv2/main/bot.js",
    function (response) {
        var buotstream = fs.createWriteStream(buot);
        response.pipe(buotstream);
        buotstream.on("finish", () => {
            buotstream.close();
            console.log("bot.js updated");
        });
    }
);

const confi = https.get(
    "https://raw.githubusercontent.com/Mid0aria/owofarmbotv2/main/config.json",
    function (response) {
        var cunfigstream = fs.createWriteStream(cunfig);
        response.pipe(cunfigstream);
        cunfigstream.on("finish", () => {
            cunfigstream.close();
            console.log("config.json updated. please edit config file");
        });
    }
);

const versiun = https.get(
    "https://raw.githubusercontent.com/Mid0aria/owofarmbotv2/main/version.json",
    function (response) {
        var versistream = fs.createWriteStream(versi);
        response.pipe(versistream);
        versistream.on("finish", () => {
            versistream.close();
            console.log("version.json updated.");
        });
    }
);


