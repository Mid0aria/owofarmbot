const fs = require("fs");
const { http, https } = require("follow-redirects");
const path = require("path");
const request = require("request");
const os = require("os");
var buot = path.join(__dirname, "/bot.js");
var cunfig = path.join(__dirname, "/config.json");
var versi = path.join(__dirname, "/version.json");
var phrases_folder_path = path.join(__dirname, "/phrases")
var phrases_file_path = path.join(__dirname, "/phrases/phrases.json")
console.log("updating ...");


try {
    if (!fs.existsSync(phrases_folder_path)) {
        fs.mkdirSync(phrases_folder_path);
        console.log("Phrases not found, Making the file...")
    }
} catch (err) {
    console.error(err);
}

fs.writeFile(phrases_file_path, "", { flag: 'wx' }, function (err) {
    console.log("phrases.json created....");
});

const boti = https.get(
    "https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/bot.js",
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
    "https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/config.json",
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
    "https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/version.json",
    function (response) {
        var versistream = fs.createWriteStream(versi);
        response.pipe(versistream);
        versistream.on("finish", () => {
            versistream.close();
            console.log("version.json updated.");
        });
    }
);

const phrases = https.get(
    "https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/phrases/phrases.json",
    function (response) {
        var versistream = fs.createWriteStream(phrases_file_path);
        response.pipe(versistream);
        versistream.on("finish", () => {
            versistream.close();
            console.log("phrases.json updated.");
        });
    }
);