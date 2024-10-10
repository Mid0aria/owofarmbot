/**
 ** LA LA LA LA LA LA LA (4256 lines in one file)
 *TODO: Convert all console.log's to logger.js
 *? currentBet = currentBet :D?
 *? extracurrentBet = extracurrentBet :D?
 *
 *! yksnin anısını sikeyim tşk.
 ** https://open.spotify.com/track/3BE9ioRvDO7FbwkAX7xFv4
 */

/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
global.love = "Arteria pulmonales";
//coded by @mid0aria on github
const os = require("os");
if (os.userInfo().username === "DESKTOP-3VVC3") {
    console.log(".l.");
    process.exit(0);
}
//who is aix ?
const cp = require("child_process");
const fs = require("fs");
const path = require("path");

//------------
const packageJson = require("./package.json");

for (let dep of Object.keys(packageJson.dependencies)) {
    try {
        require.resolve(dep);
    } catch (err) {
        console.log("Installing dependencies...");
        cp.execSync(`npm i`);
    }
}

var version = packageJson.version;
var banversion = packageJson.bot.banversion;

const axios = require("axios");
const admZip = require("adm-zip");
const fse = require("fs-extra");
const request = require("request");
const chalk = require("chalk");
const config = require("./config.json");

require("dotenv").config();

const { https } = require("follow-redirects");
const collect = require("collect.js");
const DiscordRPC = require("discord-rpc");
const delay = require("delay");
const socketio = require("socket.io")(1337);
const notifier = require("node-notifier");
const diagnosticinformation = require("systeminformation");
const Buffer = require("buffer").Buffer;

const rpcclientid = "1078993881556865155";
const rpc = new DiscordRPC.Client({ transport: "ipc" });

let maintoken = config.main.token || process.env.MAIN_TOKEN;
let extratoken = config.extra.token || process.env.EXTRA_TOKEN;
let settings = config.settings;
let maintokenuserid = config.main.userid;
let mainchannelid = config.main.channelid;
let owodmmainchannelid = config.main.owodmchannelid;
let extratokencheck = config.settings.extratoken;
let extratokenuserid = config.extra.userid;
let extrachannelid = config.extra.channelid;
let owodmextrachannelid = config.extra.owodmchannelid;
let mainautoquestchannelid = config.main.autoquestchannelid;
let extraautoquestchannelid = config.extra.autoquestchannelid;
let maingamblechannelid = config.main.gamblechannelid;
let extragamblechannelid = config.extra.gamblechannelid;
let prefix = settings.prefix;
// eslint-disable-next-line no-constant-binary-expression
if (prefix === (null || undefined || "")) {
    prefix = "owo";
}

global.checkquest = true;
global.extracheckquest = true;

//util
const commandrandomizer = (arr) => arr[Math.floor(Math.random() * arr.length)];
const { logger } = require("./utils/logger");

//anticrash
process.on("unhandledRejection", (reason, p) => {
    console.log(
        chalk.blue(chalk.bold(`[antiCrash]`)),
        chalk.white(`>>`),
        chalk.magenta(`Unhandled Rejection/Catch`),
        chalk.red(reason, p)
    );
});
process.on("uncaughtException", (err, origin) => {
    console.log(
        chalk.blue(chalk.bold(`[antiCrash]`)),
        chalk.white(`>>`),
        chalk.magenta(`Unhandled Exception/Catch`),
        chalk.red(err, origin)
    );
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
    console.log(
        chalk.blue(chalk.bold(`[antiCrash]`)),
        chalk.white(`>>`),
        chalk.magenta(`Uncaught Exception/Catch`),
        chalk.red(err, origin)
    );
});

//anti anticrash handler
antianticrash();

global.holdmainhunt = true;
global.holdmainbattle = true;
global.holdextrahunt = true;
global.holdextrabattle = true;

function antianticrash() {
    let check;
    setTimeout(() => {
        check = setInterval(() => {
            if (global.holdmainhunt) global.mainhuntac -= 1000;
            if (global.holdmainbattle) global.mainbattleac -= 1000;
            if (global.gambling) global.gambleac -= 1000;
            if (global.etoken) {
                if (global.holdextrahunt) global.extrahuntac -= 1000;
                if (global.holdextrabattle) global.extrabattleac -= 1000;
                if (global.gambling) global.extragambleac -= 1000;
            }
            doublechecking();
            if (
                !global.holdmainhunt &&
                !global.holdmainbattle &&
                !global.holdextrahunt &&
                !global.holdextrabattle &&
                !global.gambling
            )
                clearInterval(check);
        }, 1000);
    }, 61000); //timer start at 61s is a believe that noone will set their time above 61s
}

function doublechecking() {
    //this func still have a chance to duplicate calling hunt or battle func
    if (global.mainhuntac < 0) {
        if (
            (mainctrl.stop_hunt_after_daily ||
                mainctrl.stop_hunt_after_quest) &&
            global.mainhuntpaused
        )
            global.holdmainhunt = false;
        else triggerhunt();
    }

    if (global.mainbattleac < 0) {
        if (
            (mainctrl.stop_battle_after_daily ||
                mainctrl.stop_battle_after_quest) &&
            global.mainbattlepaused
        )
            global.holdmainbattle = false;
        else triggerbattle();
    }

    if (global.gambleac < 0 && global.gambling) checkgamble();

    if (global.etoken) {
        if (global.extrahuntac < 0) {
            if (
                (extractrl.stop_hunt_after_daily ||
                    extractrl.stop_hunt_after_quest) &&
                global.extrahuntpaused
            )
                global.holdextrahunt = false;
            else triggerextrahunt();
        }

        if (global.extrabattleac < 0) {
            if (
                (extractrl.stop_battle_after_daily ||
                    extractrl.stop_battle_after_quest) &&
                global.extrabattlepaused
            )
                global.holdextrabattle = false;
            else triggerextrabattle();
        }

        if (global.extragambleac < 0 && global.gambling) checkextragamble();
    }
}

//console.clear();
process.title = `OwO Farm Bot 💗 Bot Version ${version} / BanBypass Version ${banversion} 💗`;

//Updater
const gitUpdate = () => {
    try {
        cp.execSync("git stash");
        cp.execSync("git pull --force");
        logger.info("Updater", "Git", "Git pull successful.");
        logger.info("Updater", "Git", "Resetting local changes...");
        cp.execSync("git reset --hard");
        process.exit(0);
    } catch (error) {
        logger.alert(
            "Updater",
            "Git",
            `Error updating project from Git: ${error}`
        );
    }
};

const manualUpdate = async () => {
    try {
        const headers = {
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537",
        };
        const res = await axios.get(
            `https://github.com/Mid0aria/owofarmbot/archive/master.zip`,
            {
                responseType: "arraybuffer",
                headers,
            }
        );

        const updatePath = path.resolve(__dirname, "updateCache.zip");
        fs.writeFileSync(updatePath, res.data);

        const zip = new admZip(updatePath);
        const zipEntries = zip.getEntries();
        zip.extractAllTo(os.tmpdir(), true);

        const updateFolder = path.join(os.tmpdir(), zipEntries[0].entryName);
        if (!fs.existsSync(updateFolder)) {
            logger.alert(
                "Updater",
                "Zip",
                "Failed To Extract Files! Please update on https://github.com/Mid0aria/owofarmbot/"
            );
        }

        fse.copySync(updateFolder, process.cwd(), { overwrite: true });
        logger.info("Updater", "Zip", "Project updated successfully.");

        fs.unlinkSync(updatePath);
        logger.info("Updater", "Zip", "Temporary zip file deleted.");
        process.exit(0);
    } catch (error) {
        logger.alert(
            "Updater",
            "Zip",
            `Error updating project from GitHub Repo: ${error}`
        );
    }
};

const checkUpdate = async () => {
    console.log(
        chalk.blue(chalk.bold(`Updater`)),
        chalk.white(`>>`),
        chalk.yellow(`Checking Update`)
    );
    try {
        const headers = {
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537",
        };
        const response = await axios.get(
            `https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/package.json`,
            {
                headers,
            }
        );
        const ghVersion = response.data.version;
        const version = packageJson.version;
        if (ghVersion > version) {
            console.log(
                chalk.blue(chalk.bold("Updater")),
                chalk.white(`>>`),
                chalk.yellow("Please wait while the farm bot is updating...")
            );
            if (fs.existsSync(".git")) {
                try {
                    cp.execSync("git --version");
                    logger.info("Git", "Updating with Git...");
                    gitUpdate();
                } catch (error) {
                    console.log(
                        chalk.blue(chalk.bold("Git")),
                        chalk.white(`>>`),
                        chalk.red(
                            "Git is not installed on this device. Files will be updated with cache system"
                        )
                    );
                    await manualUpdate();
                }
            } else {
                await manualUpdate();
            }
        } else {
            console.log(
                chalk.blue(chalk.bold("Updater")),
                chalk.white(`>>`),
                chalk.yellow("No Update Found")
            );
        }
    } catch (error) {
        console.log(
            chalk.blue(chalk.bold("Updater")),
            chalk.white(`>>`),
            chalk.red(`Failed To Check For Update: ${error}`)
        );
    }
};

checkUpdate();

if (config.windowssettings.controlcdetectec) {
    process.on("SIGINT", function () {
        console.log(chalk.yellow("CTRL + C detected..."));
        console.log(chalk.red("killing socket client"));
        cp.exec("taskkill /f /im cmd.exe");
        cp.exec("taskkill /f /im windowsterminal.exe");
    });
}
var asciieye = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣤⣤⣤⣤⣤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠻⠿⢿⣿⣿⣿⣿⣿⣶⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣿⣿⣿⣿⣿⣿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⣙⢿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠻⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⡟⠹⠿⠟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⠋⡬⢿⣿⣷⣤⣤⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⡇⢸⡇⢸⣿⣿⣿⠟⠁⢀⣬⢽⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣧⣈⣛⣿⣿⣿⡇⠀⠀⣾⠁⢀⢻⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣧⣄⣀⠙⠷⢋⣼⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁
⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀
⠸⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀
⠀⢹⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀
⠀⠀⠹⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀
⠀⠀⠀⠙⣿⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠛⠛⠛⠛⠛⠛⠛⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`;

console.log(asciieye);
console.log("opened socket client");
cp.exec("cd utils && start socket.bat");

let rpchab, rpcbanb, rpcbant, rpcdetails, rpcanimals, rpcinventory;

if (settings.huntandbattle) {
    rpchab = "✅";
} else {
    rpchab = "❌";
}
if (settings.banbypass) {
    rpcbanb = "✅";
    rpcbant = `BanBypass system v${banversion}`;
    rpcdetails = `🔥 Bot v${version}/BanBypass v${banversion} 🔥`;
} else {
    rpcbanb = "❌";
    rpcbant = "BanBypass system disabled";
    rpcdetails = `🔥 Bot v${version} 🔥`;
}
if (settings.animals.enable) {
    if (settings.animals.type == "sacrifice") {
        rpcanimals = "sacrifice";
    } else if (settings.animals.type == "sell") {
        rpcanimals = "sell";
    } else {
        rpcanimals = "✅";
    }
} else {
    rpcanimals = "❌";
}
if (settings.inventory.inventorycheck) {
    rpcinventory = "✅";
} else {
    rpcinventory = "❌";
}

let times;
if (settings.times.enable) {
    times = "User controlled times.";
    setTimeout(() => {
        socketio.emit("times", {
            data: times,
        });
    }, 2500);
} else {
    times = "Developer recommended time intervals are used";
    setTimeout(() => {
        socketio.emit("times", {
            data: times,
        });
    }, 2500);
}
setTimeout(() => {
    socketio.emit("bot", {
        info: `Hunt and Battle: ${rpchab} BanBypass: ${rpcbanb} Inventory Check: ${rpcinventory} Animals: ${rpcanimals}`,
    });
}, 2500);

rpc.on("ready", () => {
    console.log(chalk.blue("Discord RPC Started!"));

    rpc.setActivity({
        details: rpcdetails,
        state: `Hunt and Battle: ${rpchab} BanBypass: ${rpcbanb} Inventory: ${rpcinventory} Animals: ${rpcanimals}`,
        startTimestamp: new Date(),
        largeImageKey: "owo",
        largeImageText: `v${version}`,
        smallImageKey: "ban",
        smallImageText: rpcbant,
        instance: false,
        buttons: [
            {
                label: "Farm Bot",
                url: "https://github.com/Mid0aria/owofarmbot",
            },
            {
                label: "Developer",
                url: "https://github.com/Mid0aria/",
            },
        ],
    });
});

if (extratoken === maintoken) {
    extratokencheck = false;
}

if (mainchannelid.lenght == 0) {
    console.log(chalk.red("Main Token Channel ID ❌"));

    process.exit(0);
}
if (maintokenuserid.lenght == 0) {
    console.log(chalk.red("Main Token User ID ❌"));

    process.exit(0);
}
if (owodmmainchannelid.lenght == 0) {
    console.log(chalk.red("Main Token OwO DM Channel ID ❌"));

    process.exit(0);
}

if (extratokencheck) {
    if (extrachannelid.lenght == 0) {
        console.log(chalk.red("Extra Token Channel ID ❌"));

        process.exit(0);
    }
    if (extratokenuserid.lenght == 0) {
        console.log(chalk.red("Extra Token User ID ❌"));

        process.exit(0);
    }
    if (owodmextrachannelid.lenght == 0) {
        console.log(chalk.red("Extra Token OwO DM Channel ID ❌"));

        process.exit(0);
    }
}

DiscordRPC.register(rpcclientid);

if (settings.discordrpc) {
    rpc.login({ clientId: rpcclientid }).catch((e) => {
        console.log(",..,");
    });
}

console.log(
    chalk.cyan("github.com/mid0aria\n") +
        chalk.cyan("Made with love for e<3\n") +
        chalk.magenta("OwO Farm Bot Started") +
        chalk.blue(` version ${version}`)
);

if (settings.banbypass) {
    global.mainbanc = false;
    global.extrabanc = false;

    console.log(
        chalk.yellow("Captcha (ban) Bypass System by Aix ") +
            chalk.blue(`version ${banversion}`)
    );
    console.log(`{/__/}\n( ^ . ^)\n/ > ` + chalk.red("Captcha Bypass"));
} else {
    global.mainbanc = true;
    global.extrabanc = true;
    console.log(chalk.red(`{/__/}\n( • . •)\n/ > 🥒`));
}

var notifynumber = config.settings.notifynumber;

if (notifynumber < 0) {
    console.log(
        chalk.red(" Invalid notify number!"),
        chalk.white("\n Defaulting to 1."),
        chalk.gray(
            "\n Why on earth you think you can use a negative value for a notify repeating number?"
        )
    );
    notifynumber = 1;
}
if (notifynumber > 6) {
    console.log(
        chalk.white(
            " Look like your number of notify is quite big, are you sure?"
        )
    );
}

const mainctrl = settings.manualcontroller.main;
const extractrl = settings.manualcontroller.extra;

global.mainhuntdaily = false;
global.mainbattledaily = false;
global.mainhuntpaused = false;
global.mainbattlepaused = false;
global.mainquest = false;

global.extrahuntdaily = false;
global.extrabattledaily = false;
global.extrahuntpaused = false;
global.extrabattlepaused = false;
global.extraquest = false;

const mainrarity = mainctrl.maximum_gem_rarity;
var mainmaxgemvalue;
switch (mainrarity) {
    case "legendary":
        mainmaxgemvalue = 6;
        break;
    case "mythical":
        mainmaxgemvalue = 5;
        break;
    case "epic":
        mainmaxgemvalue = 4;
        break;
    case "rare":
        mainmaxgemvalue = 3;
        break;
    case "uncommon":
        mainmaxgemvalue = 2;
        break;
    case "common":
        mainmaxgemvalue = 1;
        break;
    default:
        mainmaxgemvalue = 7;
        break;
}

const extrararity = extractrl.maximum_gem_rarity;
var extramaxgemvalue;
switch (extrararity) {
    case "legendary":
        extramaxgemvalue = 6;
        break;
    case "mythical":
        extramaxgemvalue = 5;
        break;
    case "epic":
        extramaxgemvalue = 4;
        break;
    case "rare":
        extramaxgemvalue = 3;
        break;
    case "uncommon":
        extramaxgemvalue = 2;
        break;
    case "common":
        extramaxgemvalue = 1;
        break;
    default:
        extramaxgemvalue = 7;
        break;
}

var notifymethod = settings.notifymethod;
if (notifymethod != "promt" && notifymethod != "notify")
    notifymethod = "notify";

const notrespwarn = settings.notresponsewarning.enable;
var respwarnvalue = settings.notresponsewarning.value;
if (respwarnvalue < 6 && notrespwarn) {
    console.log("Not response warning value is too low!/nDefaulting to 6!");
    respwarnvalue = 6;
}
var mainwarning = 0;
var extrawarning = 0;

//first run check thanks to windows 11
const firstrunPath = path.join(__dirname, "firstrun");
const blankPath = path.join(__dirname, "./utils/blank.txt");
const blanknewPath = path.join(__dirname, "./utils/blank.exe");
const configPath = path.join(__dirname, "config.json");

if (fs.existsSync(firstrunPath)) notifycheck();

function notifycheck() {
    notifier.notify(
        {
            title: `Welcome`,
            message: `Happy farming`,
            icon: `./utils/i.png`,
            sound: false,
            wait: true,
            appID: "OwO Farm Bot",
        },
        async function (error, response) {
            if (error) {
                console.log(chalk.red("Notify error!  Attemting self fix..."));
                setTimeout(() => {
                    updateerrorsocket("[Global] Notify error!", "global");
                }, 1600);
                fs.rename(blankPath, blanknewPath, (e) => {
                    if (e) console.error(e);
                });

                await delay(1600);

                cp.exec("cd utils && start register.bat", () => {
                    console.log(chalk.yellow("Self fix completed!"));
                });

                await delay(3000);

                notifier.notify(
                    {
                        title: `Notify work!`,
                        message: `Notify problem was fixed correctly`,
                        icon: `./utils/i.png`,
                        sound: false,
                        wait: true,
                        appID: "OwO Farm Bot",
                    },
                    function (error, response) {
                        if (error) {
                            console.clear();
                            setTimeout(() => {
                                updateerrorsocket(
                                    "[Global] Notify error! Cannot be fixed.",
                                    "global"
                                );
                            }, 1600);
                            fs.readFile(configPath, "utf8", (err, data) => {
                                if (err) {
                                    console.error(
                                        "Error reading config.json:",
                                        err
                                    );
                                    return;
                                }

                                try {
                                    const config = JSON.parse(data);

                                    config.settings.notifymethod = "promt";

                                    fs.writeFile(
                                        configPath,
                                        JSON.stringify(config, null, 4),
                                        "utf8",
                                        (err) => {
                                            if (err) {
                                                console.log(
                                                    "Cannot change config automatically, require manual change!"
                                                );
                                            }
                                        }
                                    );
                                } catch (e) {
                                    console.log(
                                        "Cannot change config automatically, require manual change!"
                                    );
                                }
                            });

                            setTimeout(() => {
                                process.exit(1);
                            }, 6100);
                        }
                    }
                );
            }
        }
    );
    fs.unlinkSync(firstrunPath); // make sure to remove the file...
    console.log(
        chalk.red(
            "If you didn't see any notify at this first time running, notify will not work on this machine.\nPlease change to promt mode.\nAlso make sure you are using Windows"
        )
    );
}

//----------------------------------------------------Check Main Token----------------------------------------------------//
request.get(
    {
        headers: {
            authorization: maintoken,
        },
        url: "https://canary.discord.com/api/v9/users/@me",
    },
    function (error, response, body) {
        if (error) {
            console.error(error);
        }
        var bod = JSON.parse(body);

        if (String(bod.message) === "401: Unauthorized") {
            console.log(
                chalk.red(`Main Token / ${String(bod.message)} (TOKEN WRONG!)`)
            );
            updateerrorsocket(
                `Main Token / ${String(bod.message)} (TOKEN WRONG!)`,
                "global"
            );
            setTimeout(() => {
                process.exit(0);
            }, 5000);
        } else {
            console.log(chalk.green("Main Token ✅"));
            console.log(`[Main Token] User: ${bod.username}`);

            checklist(maintoken, "Main Token", mainchannelid);
            setInterval(
                () => checklist(maintoken, "Main Token", mainchannelid),
                960000
            );
            global.mainfirstrun = true;
            if (settings.autoquest)
                setTimeout(
                    () =>
                        getquests(
                            maintoken,
                            mainautoquestchannelid,
                            "Main Token"
                        ),
                    6100
                );
            sleepy("Main", "CheckList");
        }
    }
);

//----------------------------------------------------Check Extra Token----------------------------------------------------//
if (extratokencheck) {
    global.etoken = true;
    request.get(
        {
            headers: {
                authorization: extratoken,
            },
            url: "https://canary.discord.com/api/v9/users/@me",
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            var bod = JSON.parse(body);

            if (String(bod.message) === "401: Unauthorized") {
                global.etoken = false;
                console.log(chalk.red("Extra Token ❌"));
                console.log(chalk.red(`EXTRA TOKEN / ${String(bod.message)}`));
            } else {
                global.etoken = true;
                console.log(chalk.green("Extra Token ✅"));
                console.log(`[Extra Token] User: ${bod.username}`);
                setTimeout(() => {
                    socketio.emit("type", {
                        type: "duo",
                    });
                }, 1600);

                if (global.etoken) {
                    setTimeout(() => {
                        checklist(extratoken, "Extra Token", extrachannelid);
                        setInterval(
                            () =>
                                checklist(
                                    extratoken,
                                    "Extra Token",
                                    extrachannelid
                                ),
                            960000
                        );
                        global.extrafirstrun = true;
                        if (settings.autoquest)
                            setTimeout(
                                () =>
                                    getquests(
                                        extratoken,
                                        extraautoquestchannelid,
                                        "Extra Token"
                                    ),
                                6100
                            );
                        setTimeout(() => {
                            sleepy("Extra", "CheckList");
                        }, 5000);
                    }, 3500);
                }
            }
        }
    );
} else {
    global.etoken = false;
}
//--------------------------HUNT BATTLE-------------------------------------------------------//
function triggerhunt() {
    if (notrespwarn && mainwarning > respwarnvalue) {
        console.clear();
        console.log(
            chalk.red(
                `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
            ) +
                chalk.magenta(` [Main Token]`) +
                chalk.red(` Cannot receive OwO response! Bot stopped`)
        );
        warninguser("Main Token", false);
        updateerrorsocket(
            "[Global] Cannot receive OwO response (Require manual check)!",
            "global"
        );
        setTimeout(() => process.exit(0), 1600);
    }

    if (settings.times.enable) {
        var smaller_timehunt = settings.times.huntbottom;
        var bigger_timehunt = settings.times.hunttop;
        var timehunt = Math.floor(
            Math.random() * (bigger_timehunt - smaller_timehunt + 1) +
                smaller_timehunt
        );
        global.mainhuntac = bigger_timehunt + 16000;
    } else {
        var timehunt = parseInt(rantime());
        if (timehunt <= 6000) timehunt = timehunt + 2000;
        var timebattle = timehunt + 1000;
        global.mainhuntac = 16000;
    }

    if (mainctrl.stop_hunt_after_quest && global.mainhuntdaily) {
        if (global.mainquest && !global.quest) {
            console.log(
                chalk.magenta("[Main Token]") +
                    chalk.white("Quest completed.\n") +
                    chalk.red("STOPPED HUNTING ON [Main Token]")
            );
            global.mainhuntpaused = true;
            return;
        }
    } else if (mainctrl.stop_hunt_after_daily) {
        if (global.mainhuntdaily) {
            console.log(
                chalk.magenta("[Main Token]") +
                    chalk.white("Daily hunt completed.\n") +
                    chalk.red("STOPPED HUNTING ON [Main Token]")
            );
            global.mainhuntpaused = true;
            return;
        }
    }

    if (settings.huntandbattle) {
        setTimeout(
            () => hunt(maintoken, timehunt, "Main Token", mainchannelid),
            timehunt
        );
        if (settings.inventory.inventorycheck) {
            setTimeout(() => {
                checkinv(maintoken, mainchannelid, "Main Token");
            }, 2500);
        }
    }
}

function triggerbattle() {
    if (notrespwarn && mainwarning > respwarnvalue) {
        console.clear();
        console.log(
            chalk.red(
                `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
            ) +
                chalk.magenta(` [Main Token]`) +
                chalk.red(` Cannot receive OwO response! Bot stopped`)
        );
        warninguser("Main Token", false);
        updateerrorsocket(
            "[Global] Cannot receive OwO response (Require manual check)!",
            "global"
        );
        setTimeout(() => process.exit(0), 1600);
    }

    if (settings.times.enable) {
        var smaller_timebattle = settings.times.battlebottom;
        var bigger_timebattle = settings.times.battletop;
        var timebattle = Math.floor(
            Math.random() * (bigger_timebattle - smaller_timebattle + 1) +
                smaller_timebattle
        );
        global.mainbattleac = bigger_timebattle + 16000;
    } else {
        var timehunt = parseInt(rantime());
        if (timehunt <= 6000) timehunt = timehunt + 2000;
        var timebattle = timehunt + 1000;
        global.mainbattleac = 16000;
    }

    if (mainctrl.stop_battle_after_quest && global.mainbattledaily) {
        if (global.mainquest && !global.quest) {
            console.log(
                chalk.magenta("[Main Token]") +
                    chalk.white("Quest completed.\n") +
                    chalk.red("STOPPED BATTLING ON [Main Token]")
            );
            global.mainbattlepaused = true;
            return;
        }
    } else if (mainctrl.stop_battle_after_daily) {
        if (global.mainbattledaily) {
            console.log(
                chalk.magenta("[Main Token]") +
                    chalk.white("Daily battle completed.\n") +
                    chalk.red("STOPPED BATTLING ON [Main Token]")
            );
            global.mainbattlepaused = true;
            return;
        }
    }

    if (settings.huntandbattle) {
        setTimeout(
            () => battle(maintoken, timebattle, "Main Token", mainchannelid),
            timebattle
        );
    }
}

function triggerextrahunt() {
    if (notrespwarn && extrawarning > respwarnvalue) {
        console.clear();
        console.log(
            chalk.red(
                `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
            ) +
                chalk.magenta(` [Extra Token]`) +
                chalk.red(` Cannot receive OwO response! Bot stopped`)
        );
        warninguser("Extra Token", false);
        updateerrorsocket(
            "[Global] Cannot receive OwO response (Require manual check)!",
            "global"
        );
        setTimeout(() => process.exit(0), 1600);
    }

    if (settings.times.enable) {
        var smaller_timehunt = settings.times.huntbottom;
        var bigger_timehunt = settings.times.hunttop;
        var timehunt = Math.floor(
            Math.random() * (bigger_timehunt - smaller_timehunt + 1) +
                smaller_timehunt
        );
        global.extrahuntac = bigger_timehunt + 16000;
    } else {
        var timehunt = parseInt(rantime());
        if (timehunt <= 6000) timehunt = timehunt + 2000;
        var timebattle = timehunt + 1000;
        global.extrahuntac = 16000;
    }

    if (extractrl.stop_hunt_after_quest && global.extrahuntdaily) {
        if (global.extraquest && !global.quest) {
            console.log(
                chalk.magenta("[Extra Token]") +
                    chalk.white("Quest completed.\n") +
                    chalk.red("STOPPED HUNTING ON [Extra Token]")
            );
            global.extrahuntpaused = true;
            return;
        }
    } else if (extractrl.stop_hunt_after_daily) {
        if (global.extrahuntdaily) {
            console.log(
                chalk.magenta("[Extra Token]") +
                    chalk.white("Daily hunt completed.\n") +
                    chalk.red("STOPPED HUNTING ON [Extra Token]")
            );
            global.extrahuntpaused = true;
            return;
        }
    }

    if (settings.huntandbattle) {
        setTimeout(
            () => hunt(extratoken, timehunt, "Extra Token", extrachannelid),
            timehunt
        );
        if (settings.inventory.inventorycheck) {
            setTimeout(() => {
                checkinv(extratoken, extrachannelid, "Extra Token");
            }, 2500);
        }
    }
}

function triggerextrabattle() {
    if (notrespwarn && extrawarning > respwarnvalue) {
        console.clear();
        console.log(
            chalk.red(
                `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
            ) +
                chalk.magenta(` [Extra Token]`) +
                chalk.red(` Cannot receive OwO response! Bot stopped`)
        );
        warninguser("Extra Token", false);
        updateerrorsocket(
            "[Global] Cannot receive OwO response (Require manual check)!",
            "global"
        );
        setTimeout(() => process.exit(0), 1600);
    }

    if (settings.times.enable) {
        var smaller_timebattle = settings.times.battlebottom;
        var bigger_timebattle = settings.times.battletop;
        var timebattle = Math.floor(
            Math.random() * (bigger_timebattle - smaller_timebattle + 1) +
                smaller_timebattle
        );
        global.extrabattleac = bigger_timebattle + 16000;
    } else {
        var timehunt = parseInt(rantime());
        if (timehunt <= 6000) timehunt = timehunt + 2000;
        var timebattle = timehunt + 1000;
        global.extrabattleac = 16000;
    }

    if (extractrl.stop_battle_after_quest && global.extrabattledaily) {
        if (global.extraquest && !global.quest) {
            console.log(
                chalk.magenta("[Extra Token]") +
                    chalk.white("Quest completed.\n") +
                    chalk.red("STOPPED BATTLING ON [Extra Token]")
            );
            global.extrabattlepaused = true;
            return;
        }
    } else if (extractrl.stop_battle_after_daily) {
        if (global.extrabattledaily) {
            console.log(
                chalk.magenta("[Extra Token]") +
                    chalk.white("Daily battle completed.\n") +
                    chalk.red("STOPPED BATTLING ON [Extra Token]")
            );
            global.extrabattlepaused = true;
            return;
        }
    }

    if (settings.huntandbattle) {
        setTimeout(
            () => battle(extratoken, timebattle, "Extra Token", extrachannelid),
            timebattle
        );
    }
}

triggerhunt();
triggerbattle();
if (global.etoken) {
    triggerextrahunt();
    triggerextrabattle();
}
//-----------------------------------ANIMALS----------------------------------------------//
if (settings.times.intervals.animals.enable) {
    var timeanimalsinterval = settings.times.intervals.animals.time;
} else {
    var timeanimalsinterval = 1200000;
}

if (settings.animals.enable) {
    setInterval(() => {
        if (settings.banbypass) {
            bancheck(maintoken, mainchannelid);
            dmbancheck(maintoken, owodmmainchannelid);
        }
        animals(maintoken, "Main Token", mainchannelid, settings.animals.type);
        if (global.etoken) {
            if (settings.banbypass) {
                extrabancheck(extratoken, extrachannelid);
                dmextrabancheck(extratoken, owodmextrachannelid);
            }
            animals(
                extratoken,
                "Extra Token",
                extrachannelid,
                settings.animals.type
            );
        }
    }, timeanimalsinterval);
}

//--------------------------------PRAY-------------------------------------------------//
if (settings.times.intervals.pray.enable) {
    var timeprayinterval = settings.times.intervals.pray.time;
} else {
    var timeprayinterval = 303000;
}
global.manualpray = settings.pray;
setTimeout(() => checkpray(), 30016);

function checkpray() {
    if (global.manualpray) {
        if (settings.banbypass) {
            if (global.mainfirstrun) global.mainfirstrun = false;
            else {
                bancheck(maintoken, mainchannelid);
                dmbancheck(maintoken, owodmmainchannelid);
            }
        }
        pray(maintoken, "Main Token", mainchannelid);
        if (global.etoken) {
            if (settings.banbypass) {
                if (global.extrafirstrun) global.extrafirstrun = false;
                else {
                    extrabancheck(extratoken, extrachannelid);
                    dmextrabancheck(extratoken, owodmextrachannelid);
                }
            }
            pray(extratoken, "Extra Token", extrachannelid);
        }
    }
}
//--------------------------------CURSE-------------------------------------------------//
if (settings.times.intervals.curse.enable) {
    var timecurseinterval = settings.times.intervals.curse.time;
} else {
    var timecurseinterval = 303500;
}
global.manualcurse = settings.curse;
setTimeout(() => checkcurse(), 30016);

function checkcurse() {
    if (global.manualcurse) {
        if (settings.banbypass) {
            if (global.mainfirstrun) global.mainfirstrun = false;
            else {
                bancheck(maintoken, mainchannelid);
                dmbancheck(maintoken, owodmmainchannelid);
            }
        }
        curse(maintoken, "Main Token", mainchannelid);
        if (global.etoken) {
            if (settings.banbypass) {
                if (global.extrafirstrun) global.extrafirstrun = false;
                else {
                    extrabancheck(extratoken, extrachannelid);
                    dmextrabancheck(extratoken, owodmextrachannelid);
                }
            }
            curse(extratoken, "Extra Token", extrachannelid);
        }
    }
}
//--------------------------------UPGRADE-------------------------------------------------//
if (settings.times.intervals.upgrade.enable) {
    var timeupgradeinterval = settings.times.intervals.upgrade.time;
} else {
    var timeupgradeinterval = 1205000;
}
if (settings.upgradeautohunt.enable) {
    setInterval(() => {
        if (settings.banbypass) {
            bancheck(maintoken, mainchannelid);
            dmbancheck(maintoken, owodmmainchannelid);
        }
        upgradeall(maintoken, "Main Token", mainchannelid);
        if (global.etoken) {
            if (settings.banbypass) {
                extrabancheck(extratoken, extrachannelid);
                dmextrabancheck(extratoken, owodmextrachannelid);
            }
            upgradeall(extratoken, "Extra Token", extrachannelid);
        }
    }, timeupgradeinterval);
}

//--------------------------------GAMBLE-------------------------------------------------//
if (settings.gamble.coinflip.enable || settings.gamble.slots.enable)
    global.gambling = true;

checkgamble();
if (global.etoken) checkextragamble();

function checkgamble() {
    if (settings.times.intervals.gamble.enable) {
        var timegamblecoinflipinterval = Math.floor(
            Math.random() * 1600 + settings.times.intervals.gamble.coinflip.time
        );
        var timegambleslotsinterval = Math.floor(
            Math.random() * 1600 + settings.times.intervals.gamble.slots.time
        );
        (global.gambleac =
            Math.max(timegamblecoinflipinterval, timegambleslotsinterval) * 2),
            4;
    } else {
        var timegamblecoinflipinterval = Math.floor(
            Math.random() * 1600 + 25000
        );
        var timegambleslotsinterval = Math.floor(Math.random() * 1600 + 25000);
        global.gambleac = 61000;
    }

    setTimeout(() => {
        if (settings.gamble.coinflip.enable) {
            if (settings.banbypass) {
                bancheck(maintoken, maingamblechannelid);
                dmbancheck(maintoken, owodmmainchannelid);
            }
            coinflip(maintoken, "Main Token", maingamblechannelid);
        }
    }, timegamblecoinflipinterval);

    setTimeout(() => {
        if (settings.gamble.slots.enable) {
            if (settings.banbypass) {
                bancheck(maintoken, maingamblechannelid);
                dmbancheck(maintoken, owodmmainchannelid);
            }
            slots(maintoken, "Main Token", maingamblechannelid);
        }
    }, timegambleslotsinterval);
}

function checkextragamble() {
    if (settings.times.intervals.gamble.enable) {
        var timegamblecoinflipinterval = Math.floor(
            Math.random() * 1600 + settings.times.intervals.gamble.coinflip.time
        );
        var timegambleslotsinterval = Math.floor(
            Math.random() * 1600 + settings.times.intervals.gamble.slots.time
        );
        (global.extragambleac =
            Math.max(timegamblecoinflipinterval, timegambleslotsinterval) * 2),
            4;
    } else {
        var timegamblecoinflipinterval = Math.floor(
            Math.random() * 1600 + 25000
        );
        var timegambleslotsinterval = Math.floor(Math.random() * 1600 + 25000);
        global.extragambleac = 61000;
    }

    setTimeout(() => {
        if (settings.gamble.coinflip.enable) {
            if (settings.banbypass) {
                extrabancheck(extratoken, extragamblechannelid);
                dmextrabancheck(extratoken, owodmextrachannelid);
            }
            extra_coinflip(extratoken, "Extra Token", extragamblechannelid);
        }
    }, timegamblecoinflipinterval);

    setTimeout(() => {
        if (settings.gamble.slots.enable) {
            if (settings.banbypass) {
                extrabancheck(extratoken, extragamblechannelid);
                dmextrabancheck(extratoken, owodmextrachannelid);
            }
            slots(extratoken, "Extra Token", extragamblechannelid);
        }
    }, timegambleslotsinterval);
}
//----------------------------------------------------FUNCTIONS----------------------------------------------------//

function nonce() {
    return "1098393848631590" + Math.floor(Math.random() * 9999);
}

function rantime() {
    var s = Math.floor(Math.random() * 9);
    if (s == 0) s = Math.floor(Math.random() * 9);
    return s + "000";
}

function autoseed(token) {
    var seedrandom = require("seedrandom");
    var rng = seedrandom.xor4096(
        `seedaccess-wumpuscenter-entropyverror-apiv11.${token}`
    );
    return rng();
}

function sleepy(t, e) {
    console.log(
        chalk.red(
            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
        ) +
            chalk.magenta(` [${t} Token] `) +
            chalk.red(`${e} Waiting ...`)
    );
}

async function typing(token, channelid) {
    if (settings.typingindicator) {
        request.post(
            {
                headers: {
                    authorization: token,
                },
                url: `https://discord.com/api/v9/channels/${channelid}/typing`,
            },
            function (error, response, body) {
                if (error) {
                    console.log(chalk.red("Typing indicator failed"));
                    if (error) {
                        console.error(error);
                    }
                }
            }
        );
    } else return;
}

async function updatequestssocket(questtitle, p1, p2, tokentype) {
    if (tokentype == "Main Token") {
        setTimeout(() => {
            socketio.emit("quest", {
                quest: `${questtitle}`,
                progress: `${p1} / ${p2}`,
                date: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
            });
        }, 1600);
    } else {
        setTimeout(() => {
            socketio.emit("extraquest", {
                quest: `${questtitle}`,
                progress: `${p1} / ${p2}`,
                date: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
            });
        }, 1600);
    }
}

async function updatechecklistsocket(i, e, tokentype) {
    if (tokentype == "Main Token") {
        setTimeout(() => {
            socketio.emit("checklist", {
                name: i,
                status: e,
            });
        }, 1600);
    } else {
        setTimeout(() => {
            socketio.emit("extrachecklist", {
                name: i,
                status: e,
            });
        }, 1600);
    }
}

async function updateerrorsocket(eyl, n) {
    socketio.emit("errors", {
        error: eyl,
        name: n,
    });
}

//----------------------------------------------------Main Features----------------------------------------------------//
function hunt(token, timehunt, tokentype, channelid) {
    typing(token, channelid);
    request.post(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,

            json: {
                content: `${commandrandomizer([
                    "owo",
                    prefix,
                ])} ${commandrandomizer(["h", "hunt"])}`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(` [${tokentype}]`) +
                    chalk.blue(` Hunt ✅ (${timehunt} ms)`)
            );
        }
    );
    if (tokentype == "Extra Token")
        extrahuntcheck(token, tokentype, channelid, 3);
    else huntcheck(token, tokentype, channelid, 3);
}

function battle(token, timebattle, tokentype, channelid) {
    typing(token, channelid);
    request.post(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `${commandrandomizer([
                    "owo",
                    prefix,
                ])} ${commandrandomizer(["b", "battle"])}`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(` [${tokentype}]`) +
                    chalk.blue(` Battle ✅ (${timebattle} ms)`)
            );
        }
    );
    if (tokentype == "Extra Token")
        extrabattlecheck(token, tokentype, channelid, 3);
    else battlecheck(token, tokentype, channelid, 3);
}

function animals(token, tokentype, channelid, type) {
    let animalcheck = false;
    var animaltypes = "";
    var ranks = [
        "common",
        "uncommon",
        "rare",
        "epic",
        "mythical",
        "patreon",
        "cpatreon",
        "legendary",
        "gem",
        "bot",
        "distorted",
        "fabled",
        "special",
        "hidden",
    ];
    // eslint-disable-next-line no-undef
    for (a in ranks) {
        // eslint-disable-next-line no-undef
        var e = ranks[a];

        if (config.settings.animals.animaltype[e]) {
            var animaltypes = animaltypes + `${e} `;
        }
    }

    if (type === "sacrifice" || type === "sell") {
        animalcheck = true;
    }

    if (animalcheck) {
        const request = require("request");
        typing(token, channelid);
        request.post(
            {
                headers: {
                    authorization: token,
                },
                url: `https://discord.com/api/v9/channels/${channelid}/messages`,
                json: {
                    content: `${commandrandomizer([
                        "owo",
                        prefix,
                    ])} ${type} ${animaltypes}`,

                    nonce: nonce(),
                    tts: false,
                    flags: 0,
                },
            },
            function (error, response, body) {
                if (error) {
                    console.error(error);
                }
                console.log(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} [${tokentype}] Animals ✅ / Type: ${type}`
                );
            }
        );
    } else {
        console.log(
            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} [${tokentype}] Animals ❌ / Error: Incorrect Type`
        );
    }
}

async function pray(token, tokentype, channelid) {
    let ct;
    if (tokentype === "Extra Token") {
        ct = `${commandrandomizer(["owo", prefix])} pray <@${maintokenuserid}>`;
    } else {
        ct = `${commandrandomizer(["owo", prefix])} pray`;
    }

    typing(token, channelid);
    request.post(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: ct,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(` [${tokentype}]`) +
                    chalk.yellow(" Pray ✅")
            );
        }
    );
    await delay(timeprayinterval);
    if (tokentype == "Main Token") checkpray();
}

async function curse(token, tokentype, channelid) {
    if (tokentype == "Extra Token") {
        var ct = `${commandrandomizer([
            "owo",
            prefix,
        ])} curse <@${maintokenuserid}>`;
    } else {
        var ct = `${commandrandomizer(["owo", prefix])} curse `;
    }
    typing(token, channelid);
    request.post(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: ct,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(` [${tokentype}]`) +
                    chalk.yellow(" Curse ✅")
            );
        }
    );
    await delay(timecurseinterval);
    if (tokentype == "Main Token") checkcurse();
}

function checklist(token, tokentype, channelid) {
    typing(token, channelid);
    request.post(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `${commandrandomizer([
                    "owo",
                    prefix,
                ])} ${commandrandomizer(["cl", "checklist"])}`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(` [${tokentype}]`) +
                    chalk.yellow(" Sending Checklist📜 ...")
            );
            setTimeout(() => {
                request.get(
                    {
                        headers: {
                            authorization: token,
                        },
                        url: `https://discord.com/api/v9/channels/${channelid}/messages?limit=5`,
                    },
                    async function (error, response, body) {
                        if (error) {
                            console.error(error);
                        }
                        try {
                            var bod = JSON.parse(body);
                            if (!bod[0]) return;
                            var cont,
                                temp = 0;
                            var iserr = false;
                            await forceembed();
                            async function forceembed() {
                                temp += 1;
                                try {
                                    for (let i = 0; i < 5; i++) {
                                        if (bod[i].embeds[0].author) {
                                            if (
                                                bod[
                                                    i
                                                ].embeds[0].author.name.includes(
                                                    "Checklist"
                                                )
                                            ) {
                                                cont = bod[i].embeds;
                                                break;
                                            }
                                        }
                                    }
                                } catch (error) {
                                    if (temp >= 3) return;
                                    await delay(3000);
                                    await forceembed();
                                }
                            }
                            var des = cont[0].description;

                            chalk.magenta(` [${tokentype}]`) +
                                chalk.yellow(" Getting Checklist 🔎");
                            if (des.includes("☑️ 🎉")) {
                                updatechecklistsocket("all", "✅", tokentype);
                                if (tokentype == "Main Token") {
                                    global.mainhuntdaily = true;
                                    global.mainbattledaily = true;
                                } else {
                                    global.extrahuntdaily = true;
                                    global.extrabattledaily = true;
                                }
                                return "checklist completed";
                            }
                            if (des.includes("☑️ 💎")) {
                                updatechecklistsocket("lb", "✅", tokentype);
                                if (tokentype == "Main Token")
                                    global.mainhuntdaily = true;
                                else global.extrahuntdaily = true;
                            }
                            if (des.includes("☑️ ⚔")) {
                                updatechecklistsocket("crate", "✅", tokentype);
                                if (tokentype == "Main Token")
                                    global.mainbattledaily = true;
                                else global.extrabattledaily = true;
                            }
                            if (des.includes("⬛ 🎁")) {
                                daily(token, tokentype, channelid);
                            } else {
                                updatechecklistsocket("daily", "✅", tokentype);
                            }
                            if (des.includes("⬛ 🍪")) {
                                if (settings.cookie)
                                    setTimeout(
                                        () =>
                                            cookie(token, tokentype, channelid),
                                        61000
                                    );
                                if (tokentype == "Main Token")
                                    global.cookieactive = true;
                                else global.extracookieactive = true;
                            } else {
                                updatechecklistsocket(
                                    "cookie",
                                    "✅",
                                    tokentype
                                );
                                if (tokentype == "Main Token")
                                    global.cookieactive = false;
                                else global.extracookieactive = false;
                            }
                            if (des.includes("⬛ 📝")) {
                                console.log(
                                    chalk.magenta(`[${tokentype}] `) +
                                        chalk.red(
                                            "YOUR DAILY VOTE IS AVAILABLE!"
                                        )
                                );
                            } else {
                                updatechecklistsocket("vote", "✅", tokentype);
                            }
                            if (!des.includes("⬛ 📜"))
                                updatechecklistsocket("quest", "✅", tokentype);

                            if (tokentype == "Main Token") {
                                updateerrorsocket("clear", "maincl");
                            } else updateerrorsocket("clear", "extracl");
                        } catch (error) {
                            if (tokentype == "Main Token") {
                                updateerrorsocket(
                                    "Unable to get Checklist (RESTART BOT!)",
                                    "maincl"
                                );
                            } else
                                updateerrorsocket(
                                    "Unable to get Checklist (RESTART BOT!)",
                                    "extracl"
                                );
                            console.log(
                                chalk.red(
                                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                                ) +
                                    chalk.magenta(` [${tokentype}]`) +
                                    chalk.red(" Unable to get Checklist❗")
                            );
                        }
                    }
                );
            }, 2000);
        }
    );
}

function daily(token, tokentype, channelid) {
    typing(token, channelid);
    request.post(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `${commandrandomizer(["owo", prefix])} daily`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            updatechecklistsocket("daily", "✅", tokentype);
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(` [${tokentype}]`) +
                    chalk.yellow(" Daily ✅")
            );
        }
    );
}

function cookie(token, tokentype, channelid) {
    typing(token, channelid);
    request.post(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            //not suggested to cookie to OwO because it will always send a captcha
            json: {
                content: `${commandrandomizer([
                    "owo",
                    prefix,
                ])} cookie <@408785106942164992>`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            updatechecklistsocket("cookie", "✅", tokentype);
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(` [${tokentype}]`) +
                    chalk.yellow(" Cookie ✅")
            );
        }
    );
}

const defaultBet = settings.gamble.coinflip.default_amount;
const maxBet = settings.gamble.coinflip.max_amount;
var currentBet = defaultBet;
var extracurrentBet = defaultBet;

async function request_get(token, channelid) {
    let limit = 1;
    if (settings.gamble.coinflip.enable && settings.gamble.slots.enable)
        limit += 3;
    if (maingamblechannelid == extragamblechannelid) limit += 4;
    if (maingamblechannelid == mainchannelid) limit += 4;
    if (maingamblechannelid == mainautoquestchannelid) limit += 4;
    if (settings.randommessage) limit += 3;

    return new Promise((resolve, reject) => {
        request.get(
            {
                headers: {
                    authorization: token,
                },
                url: `https://discord.com/api/v9/channels/${channelid}/messages?limit=${limit}`,
            },
            function (error, response, body) {
                if (error) return reject(error);
                resolve(body);
            }
        );
    });
}

function coinflip(token, tokentype, channelid) {
    typing(token, channelid);
    request.post(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `${commandrandomizer([
                    "owo",
                    prefix,
                ])} ${commandrandomizer(["cf", "coinflip"])} ${currentBet}`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        async function (error, response, body) {
            if (error) {
                if (error) {
                    console.error(error);
                }
            }

            await delay(6100);

            try {
                var cont;
                var rechecked = 0;

                async function checkcf() {
                    let body;
                    try {
                        body = await request_get(token, channelid);
                    } catch (error) {
                        console.error(error);
                        return true;
                    }
                    const bod = JSON.parse(body);
                    if (!bod[0]) return true;

                    await delay(1600);

                    for (let i = 0; i < 10; i++) {
                        try {
                            if (
                                bod[i].content.includes(`and chose **heads**`)
                            ) {
                                //dont break this line
                                cont = bod[i].content;
                                break;
                            }
                        } catch (error) {
                            logger.error("Farm", "CoinFlip", error);
                        }
                    }

                    if (
                        !cont ||
                        (cont &&
                            !cont.includes("and you lost it all... :c") &&
                            !cont.includes(" and you won"))
                    ) {
                        if (rechecked < 3) {
                            rechecked += 1;
                            console.log(
                                chalk.red(
                                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` +
                                        chalk.magenta(` [${tokentype}]`) +
                                        chalk.yellow(
                                            ` Could not get the response, retrying...`
                                        )
                                )
                            );
                            await delay(3200);
                            return await checkcf();
                        } else {
                            console.log(
                                chalk.red(
                                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` +
                                        chalk.magenta(` [${tokentype}]`) +
                                        chalk.yellow(
                                            ` Could not get the response, next betting ${defaultBet}...`
                                        )
                                )
                            );
                            currentBet = defaultBet;
                            await delay(1600);
                            return true;
                        }
                    }
                    return false;
                }

                const stop = await checkcf();
                if (stop) return checkgamble();

                if (cont.includes("and you lost it all... :c")) {
                    let lost = currentBet;
                    currentBet *= settings.gamble.coinflip.multipler;
                    /**
                     * * currentBet = currentBet :D?
                     */
                    /*if (Number.isNaN(currentBet)) {
                        currentBet = currentBet; //is this make sense?
                    } else {*/
                    currentBet = Math.round(currentBet);
                    // }
                    console.log(
                        chalk.red(
                            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                        ) +
                            chalk.magenta(` [${tokentype}]`) +
                            chalk.yellow(
                                ` Lost ${lost} in coinflip, next betting ${currentBet}`
                            )
                    );
                    if (currentBet > maxBet) currentBet = defaultBet;
                    checkgamble();
                } else if (cont.includes(" and you won")) {
                    console.log(
                        chalk.red(
                            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                        ) +
                            chalk.magenta(` [${tokentype}]`) +
                            chalk.yellow(
                                ` You have won ${currentBet} in coinflip`
                            )
                    );
                    currentBet = defaultBet;
                    checkgamble();
                }
            } catch (e) {
                console.error(e);
            }
        }
    );
}

function extra_coinflip(token, tokentype, channelid) {
    typing(token, channelid);
    request.post(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `${commandrandomizer([
                    "owo",
                    prefix,
                ])} ${commandrandomizer([
                    "cf",
                    "coinflip",
                ])} ${extracurrentBet} ${commandrandomizer(["tail", "t"])}`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        async function (error, response, body) {
            if (error) {
                if (error) {
                    console.error(error);
                }
            }

            await delay(6100);

            try {
                var cont;
                var rechecked = 0;

                async function checkcf() {
                    let body;
                    try {
                        body = await request_get(token, channelid);
                    } catch (error) {
                        console.error(error);
                        return true;
                    }
                    const bod = JSON.parse(body);
                    if (!bod[0]) return true;

                    await delay(1600);

                    for (let i = 0; i < 10; i++) {
                        try {
                            if (
                                bod[i].content.includes(`and chose **tails**`)
                            ) {
                                //dont break this line
                                cont = bod[i].content;
                                break;
                            }
                        } catch (error) {
                            logger.error("Farm", "Extra-CoinFlip", error);
                        }
                    }

                    if (
                        !cont ||
                        (cont &&
                            !cont.includes("and you lost it all... :c") &&
                            !cont.includes(" and you won"))
                    ) {
                        if (rechecked < 3) {
                            rechecked += 1;
                            console.log(
                                chalk.red(
                                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` +
                                        chalk.magenta(` [${tokentype}]`) +
                                        chalk.yellow(
                                            ` Could not get the response, retrying...`
                                        )
                                )
                            );
                            await delay(6100);
                            return await checkcf();
                        } else {
                            console.log(
                                chalk.red(
                                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` +
                                        chalk.magenta(` [${tokentype}]`) +
                                        chalk.yellow(
                                            ` Could not get the response, next betting ${defaultBet}...`
                                        )
                                )
                            );
                            extracurrentBet = defaultBet;
                            await delay(1600);
                            return true;
                        }
                    }
                    return false;
                }

                const stop = await checkcf();
                if (stop) return checkextragamble();

                if (cont.includes("and you lost it all... :c")) {
                    let exlost = extracurrentBet;
                    extracurrentBet *= settings.gamble.coinflip.multipler;
                    /**
                     * * extracurrentBet = extracurrentBet :D?
                     */
                    /*if (Number.isNaN(extracurrentBet)) {
                        extracurrentBet = extracurrentBet;
                    } else {*/
                    extracurrentBet = Math.round(extracurrentBet);
                    // }
                    console.log(
                        chalk.red(
                            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                        ) +
                            chalk.magenta(` [${tokentype}]`) +
                            chalk.yellow(
                                ` Lost ${exlost} in coinflip, next betting ${extracurrentBet}`
                            )
                    );
                    if (extracurrentBet > maxBet) extracurrentBet = defaultBet;
                    checkextragamble();
                } else if (cont.includes(" and you won")) {
                    console.log(
                        chalk.red(
                            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                        ) +
                            chalk.magenta(` [${tokentype}]`) +
                            chalk.yellow(
                                ` You have won ${extracurrentBet} in coinflip`
                            )
                    );
                    extracurrentBet = defaultBet;
                    checkextragamble();
                }
            } catch (e) {
                console.error(e);
            }
        }
    );
}

function slots(token, tokentype, channelid) {
    typing(token, channelid);
    request.post(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `${commandrandomizer(["owo", prefix])} slots ${
                    settings.gamble.slots.amount
                }`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(` [${tokentype}]`) +
                    chalk.yellow(
                        ` Gamble / Slots ✅ / Amount: ${settings.gamble.slots.amount}`
                    )
            );
            if (!settings.gamble.coinflip.enable) {
                if (tokentype == "Main Token") checkgamble();
                else checkextragamble();
            }
        }
    );
}

function upgradeall(token, tokentype, channelid) {
    typing(token, channelid);
    request.post(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `${commandrandomizer(["owo", prefix])} upgrade ${
                    settings.upgradeautohunt.type
                } all`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(` [${tokentype}]`) +
                    chalk.yellow(" Upgrade AutoHunt ✅")
            );
        }
    );
}

//----------------------------------------------------Inventory----------------------------------------------------//

function checkinv(token, channelid, tokentype) {
    if (settings.inventory.gemcheck) {
        request.get(
            {
                headers: {
                    authorization: token,
                },
                url: `https://discord.com/api/v9/channels/${channelid}/messages?limit=3`,
            },
            function (error, response, body) {
                if (error) {
                    console.error(error);
                }
                var bod = JSON.parse(body);
                if (!bod[0]) return;
                var cont;
                for (let i = 0; i < 3; i++) cont += bod[i].content;
                if (
                    cont.includes("You found:") ||
                    cont.includes("and caught a")
                ) {
                    var collection = collect(["alulu"]);
                    console.log(
                        chalk.red(
                            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                        ) +
                            chalk.magenta(` [${tokentype}]`) +
                            chalk.yellow(" inventory checking 🔍 (type-1)")
                        //cod ed by @mid0aria on github
                    );
                    if (!cont.includes("gem1")) {
                        collection.push("huntgem");
                    }
                    if (!cont.includes("gem3")) {
                        collection.push("empgem");
                    }
                    if (!cont.includes("gem4")) {
                        collection.push("luckgem");
                    }
                    if (
                        !cont.includes("gem1") ||
                        !cont.includes("gem3") ||
                        !cont.includes("gem4")
                    ) {
                        getinv(
                            token,
                            channelid,
                            tokentype,
                            "gemvar",
                            collection
                        );
                        console.log(
                            chalk.red(
                                `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                            ) +
                                chalk.magenta(` [${tokentype}]`) +
                                chalk.yellow(" inventory getting 🔍 (type-1)")
                            //cod ed by @mid0aria on github
                        );
                    }
                }
            }
        );
    } else {
        console.log(
            chalk.red(
                `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
            ) +
                chalk.magenta(` [${tokentype}]`) +
                chalk.yellow(" inventory checking 🔍 (type-2)")
        );
        getinv(token, channelid, tokentype, "nogem", collect(["nocollection"]));
    }
}

function getinv(token, channelid, tokentype, gemc, collectc) {
    typing(token, channelid);
    request.post(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `${commandrandomizer([
                    "owo",
                    prefix,
                ])} ${commandrandomizer(["inv", "inventory"])}`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
        }
    ); //coded by @mid0aria on github
    setTimeout(() => {
        request.get(
            {
                headers: {
                    authorization: token,
                },
                url: `https://discord.com/api/v9/channels/${channelid}/messages?limit=3`,
            },
            function (error, response, body) {
                if (error) {
                    console.error(error);
                }
                var bod = JSON.parse(body);
                if (!bod[0]) return;
                var cont;
                for (let i = 0; i < 3; i++) cont += bod[i].content;
                if (gemc == "gemvar") {
                    var empgem = "";
                    var empgemstatus = false;
                    var luckgem = "";
                    var luckgemstatus = false;
                    var huntgem = "";
                    var huntgemstatus = false;
                    var specialgem = "";
                    var specialgemstatus = false;
                    var gem = "";
                    var gemusebro = false;

                    if (collectc.contains("huntgem")) {
                        switch (true) {
                            case cont.includes("`057`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 7) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 7)):
                                huntgem = "57";
                                huntgemstatus = true;
                                break;
                            case cont.includes("`056`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 6) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 6)):
                                huntgem = "56";
                                huntgemstatus = true;
                                break;
                            case cont.includes("`055`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 5) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 5)):
                                huntgem = "55";
                                huntgemstatus = true;
                                break;
                            case cont.includes("`054`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 4) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 4)):
                                huntgem = "54";
                                huntgemstatus = true;
                                break;
                            case cont.includes("`053`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 3) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 3)):
                                huntgem = "53";
                                huntgemstatus = true;
                                break;
                            case cont.includes("`052`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 2) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 2)):
                                huntgem = "52";
                                huntgemstatus = true;
                                break;
                            case cont.includes("`051`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 1) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 1)):
                                huntgem = "51";
                                huntgemstatus = true;
                                break;
                            default:
                                huntgemstatus = false;
                                break;
                        }
                    }
                    if (collectc.contains("empgem")) {
                        switch (true) {
                            case cont.includes("`071`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 7) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 7)):
                                empgem = "71";
                                empgemstatus = true;
                                break;
                            case cont.includes("`070`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 6) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 6)):
                                empgem = "70";
                                empgemstatus = true;
                                break;
                            case cont.includes("`069`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 5) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 5)):
                                empgem = "69";
                                empgemstatus = true;
                                break;
                            case cont.includes("`068`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 4) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 4)):
                                empgem = "68";
                                empgemstatus = true;
                                break;
                            case cont.includes("`067`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 3) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 3)):
                                empgem = "67";
                                empgemstatus = true;
                                break;
                            case cont.includes("`066`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 2) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 2)):
                                empgem = "66";
                                empgemstatus = true;
                                break;
                            case cont.includes("`065`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 1) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 1)):
                                empgem = "65";
                                empgemstatus = true;
                                break;
                            default:
                                empgemstatus = false;
                                break;
                        }
                    }
                    if (collectc.contains("luckgem")) {
                        switch (true) {
                            case cont.includes("`078`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 7) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 7)):
                                luckgem = "78";
                                luckgemstatus = true;
                                break;
                            case cont.includes("`077`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 6) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 6)):
                                luckgem = "77";
                                luckgemstatus = true;
                                break;
                            case cont.includes("`076`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 5) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 5)):
                                luckgem = "76";
                                luckgemstatus = true;
                                break;
                            case cont.includes("`075`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 4) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 4)):
                                luckgem = "75";
                                luckgemstatus = true;
                                break;
                            case cont.includes("`074`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 3) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 3)):
                                luckgem = "74";
                                luckgemstatus = true;
                                break;
                            case cont.includes("`073`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 2) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 2)):
                                luckgem = "73";
                                luckgemstatus = true;
                                break;
                            case cont.includes("`072`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 1) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 1)):
                                luckgem = "72";
                                luckgemstatus = true;
                                break;
                            default:
                                luckgemstatus = false;
                                break;
                        }
                    }

                    if (collectc.contains("specialgem")) {
                        switch (true) {
                            case cont.includes("`085`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 7) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 7)):
                                specialgem = "85";
                                specialgemstatus = true;
                                break;
                            case cont.includes("`084`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 6) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 6)):
                                specialgem = "84";
                                specialgemstatus = true;
                                break;
                            case cont.includes("`083`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 5) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 5)):
                                specialgem = "83";
                                specialgemstatus = true;
                                break;
                            case cont.includes("`082`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 4) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 4)):
                                specialgem = "82";
                                specialgemstatus = true;
                                break;
                            case cont.includes("`081`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 3) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 3)):
                                specialgem = "81";
                                specialgemstatus = true;
                                break;
                            case cont.includes("`080`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 2) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 2)):
                                specialgem = "80";
                                specialgemstatus = true;
                                break;
                            case cont.includes("`079`") &&
                                ((tokentype == "Main Token" &&
                                    mainmaxgemvalue >= 1) ||
                                    (tokentype == "Extra Token" &&
                                        extramaxgemvalue >= 1)):
                                specialgem = "79";
                                specialgemstatus = true;
                                break;
                            default:
                                specialgemstatus = false;
                                break;
                        }
                    }

                    if (huntgemstatus) {
                        var gem = gem + ` ${huntgem}`;
                        gemusebro = true;
                    }
                    if (empgemstatus) {
                        var gem = gem + ` ${empgem}`;
                        gemusebro = true;
                    }
                    if (luckgemstatus) {
                        var gem = gem + ` ${luckgem}`;
                        gemusebro = true;
                    }
                    if (specialgemstatus) {
                        var gem = gem + ` ${specialgem}`;
                        gemusebro = true;
                    }
                    if (gemusebro) {
                        gemuse(token, gem, channelid, tokentype);
                    }
                }

                if (settings.inventory.lootboxcheck) {
                    if (cont.includes("`050`")) {
                        setTimeout(() => {
                            boxuse(token, "lootbox all", channelid, tokentype);
                        }, 2000);
                    }
                }

                if (settings.inventory.fabledlootboxcheck) {
                    if (cont.includes("`049`")) {
                        setTimeout(() => {
                            boxuse(
                                token,
                                "lootbox fabled all",
                                channelid,
                                tokentype
                            );
                        }, 2000);
                    }
                }

                if (settings.inventory.cratecheck) {
                    if (cont.includes("`100`")) {
                        setTimeout(() => {
                            boxuse(token, "crate all", channelid, tokentype);
                        }, 2000);
                    }
                }

                if (settings.inventory.eventcheck) {
                    if (cont.includes("`018`")) {
                        // valentines day
                        setTimeout(() => {
                            eventuse(token, "18", channelid, tokentype);
                        }, 2000);
                    }
                    if (cont.includes("`019`")) {
                        // anniversary day
                        setTimeout(() => {
                            eventuse(token, "19", channelid, tokentype);
                        }, 2000);
                    }
                    if (cont.includes("`020`")) {
                        // fakelootbox
                        setTimeout(() => {
                            eventuse(token, "20", channelid, tokentype);
                        }, 2000);
                    }
                    if (cont.includes("`23`")) {
                        setTimeout(() => {
                            eventuse(token, "23", channelid, tokentype);
                        }, 2000);
                    }
                }
            }
        );
    }, 3200);
}

function gemuse(token, gem, channelid, tokentype) {
    typing(token, channelid);
    request.post(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `${commandrandomizer(["owo", prefix])} use ${gem}`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(` [${tokentype}]`) +
                    chalk.yellow(" Gem ✅")
            );
        }
    );
}

function boxuse(token, box, channelid, tokentype) {
    typing(token, channelid);
    request.post(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `${commandrandomizer(["owo", prefix])} ${box}`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(` [${tokentype}]`) +
                    chalk.yellow(` ${box}✅`)
            );
        }
    );
}

function eventuse(token, eventbox, channelid, tokentype) {
    typing(token, channelid);
    request.post(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `${commandrandomizer([
                    "owo",
                    prefix,
                ])} use ${eventbox}`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            switch (eventbox) {
                case "18":
                    var namebox = "Love Letter (Valentine's Day)";
                    break;
                case "19":
                    var namebox = "Anniversary Present";
                    break;
                case "20":
                    var namebox = "Fake Lootbox";
                    break;
            }

            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(` [${tokentype}]`) +
                    chalk.yellow(` ${namebox} ✅`)
            );
        }
    );
}
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. ... __ .
//----------------------------------------------------Quest----------------------------------------------------//
async function getquests(token, channelid, tokentype) {
    typing(token, channelid);
    request.post(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `${commandrandomizer(["owo", prefix])} quest`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        async function (error, response, body) {
            if (error) {
                console.error(error);
            }
            await delay(3500);
            request.get(
                {
                    headers: {
                        authorization: token,
                    },
                    url: `https://discord.com/api/v9/channels/${channelid}/messages?limit=5`,
                },
                async function (error, response, body) {
                    if (error) {
                        console.error(error);
                    }
                    try {
                        var bod = JSON.parse(body);
                        if (!bod[0]) return;
                        var cont,
                            temp = 0;
                        await forceembed();
                        async function forceembed() {
                            temp += 1;
                            try {
                                for (let i = 0; i < 5; i++) {
                                    if (bod[i].embeds[0].author) {
                                        if (
                                            bod[
                                                i
                                            ].embeds[0].author.name.includes(
                                                "Quest Log"
                                            )
                                        ) {
                                            cont = bod[i].embeds;
                                            break;
                                        }
                                    }
                                }
                            } catch (error) {
                                if (temp >= 3) return;
                                await delay(3000);
                                await forceembed();
                            }
                        }
                        console.log(
                            chalk.red(
                                `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                            ) +
                                chalk.magenta(` [${tokentype}]`) +
                                chalk.yellow(" Checking quest 🔎")
                        );
                        await delay(3500);
                        if (
                            cont[0].description.includes(
                                "You finished all of your quests!"
                            )
                        ) {
                            if (tokentype == "Main Token") {
                                global.mainquest = true;
                                global.checkquest = false;
                                updatequestssocket(
                                    "No quest found",
                                    "All completed",
                                    "Locked",
                                    tokentype
                                );
                            } else {
                                global.extraquest = true;
                                global.extracheckquest = false;
                                updatequestssocket(
                                    "No quest found",
                                    "All completed",
                                    "Locked",
                                    tokentype
                                );
                            }
                        } else {
                            var quest = cont[0].description
                                .split("**1. ")[1]
                                .split("**")[0];
                            var progress1 = cont[0].description
                                .split("Progress: [")[1]
                                .split("/")[0];
                            var progress2 = cont[0].description
                                .split("/")[1]
                                .split("]")[0];
                            try {
                                var total = cont[0].description
                                    .split("1.")[1]
                                    .split("`")[5];
                                if (!total) total = "";
                            } catch (error) {
                                logger.error("Farm", "Get Quests", error);
                            }

                            if (
                                ((quest.includes("Battle with") ||
                                    quest.includes("Have a friend curse you") ||
                                    quest.includes(
                                        "Have a friend pray to you"
                                    ) ||
                                    quest.includes(
                                        "Receive a cookie from 1 friends"
                                    )) &&
                                    !global.etoken) ||
                                total.includes("Locked")
                            ) {
                                try {
                                    quest = cont[0].description
                                        .split("**2. ")[1]
                                        .split("**")[0];
                                    var progress1 = cont[0].description
                                        .split("Progress: [")[2]
                                        .split("/")[0];
                                    var progress2 = cont[0].description
                                        .split("/")[2]
                                        .split("]")[0];
                                    try {
                                        var total = cont[0].description
                                            .split("2.")[1]
                                            .split("`")[5];
                                        if (!total) total = "";
                                    } catch (error) {
                                        logger.error(
                                            "Farm",
                                            "Get Quests",
                                            error
                                        );
                                    }
                                } catch (error) {
                                    if (tokentype == "Main Token")
                                        global.checkquest = false;
                                    else global.extracheckquest = false;
                                }
                                if (
                                    ((quest.includes("Battle with") ||
                                        quest.includes(
                                            "Have a friend curse you"
                                        ) ||
                                        quest.includes(
                                            "Have a friend pray to you"
                                        ) ||
                                        quest.includes(
                                            "Receive a cookie from 1 friends"
                                        )) &&
                                        !global.etoken) ||
                                    total.includes("Locked")
                                ) {
                                    try {
                                        quest = cont[0].description
                                            .split("**3. ")[1]
                                            .split("**")[0];
                                        var progress1 = cont[0].description
                                            .split("Progress: [")[3]
                                            .split("/")[0];
                                        var progress2 = cont[0].description
                                            .split("/")[3]
                                            .split("]")[0];
                                        try {
                                            var total = cont[0].description
                                                .split("1.")[1]
                                                .split("`")[5];
                                            if (!total) total = "";
                                        } catch (error) {
                                            logger.error(
                                                "Farm",
                                                "Get Quests",
                                                error
                                            );
                                        }
                                    } catch (error) {
                                        if (tokentype == "Main Token")
                                            global.checkquest = false;
                                        else global.extracheckquest = false;
                                    }
                                    if (total.includes("Locked")) return;
                                }
                            }

                            if (global.checkquest || global.extracheckquest) {
                                if (tokentype == "Main Token") {
                                    socketio.emit("quest", {
                                        quest: `${quest}`,
                                        progress: `${progress1} / ${progress2}`,
                                        date: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                                    });
                                } else {
                                    socketio.emit("extraquest", {
                                        quest: `${quest}`,
                                        progress: `${progress1} / ${progress2}`,
                                        date: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                                    });
                                }

                                if (quest.includes("Say 'owo'")) {
                                    if (tokentype == "Main Token")
                                        global.checkquest = false;
                                    else global.extracheckquest = false;
                                    return questsayowo(
                                        token,
                                        channelid,
                                        parseInt(progress1),
                                        parseInt(progress2),
                                        tokentype,
                                        quest
                                    );
                                } else if (
                                    quest.includes(
                                        "xp from hunting and battling"
                                    )
                                ) {
                                    if (tokentype == "Main Token") {
                                        global.checkquest = false;
                                        global.mainquest = true;
                                    } else {
                                        global.extracheckquest = false;
                                        global.extraquest = true;
                                    }
                                    return xpquests(
                                        token,
                                        channelid,
                                        tokentype
                                    );
                                } else {
                                    if (quest.includes("Gamble")) {
                                        if (tokentype == "Main Token")
                                            global.checkquest = false;
                                        else global.extracheckquest = false;
                                        return questgamble(
                                            token,
                                            channelid,
                                            parseInt(progress1), //coded by @mid0aria on github
                                            parseInt(progress2),
                                            tokentype,
                                            quest
                                        );
                                    } else if (
                                        quest.includes(
                                            "Use an action command on someone"
                                        )
                                    ) {
                                        if (tokentype == "Main Token")
                                            global.checkquest = false;
                                        else global.extracheckquest = false;
                                        return questuseactioncommand(
                                            token,
                                            channelid,
                                            parseInt(progress1), //coded by @mid0aria on github
                                            parseInt(progress2),
                                            tokentype,
                                            quest
                                        );
                                    } else if (tokentype == "Main Token")
                                        global.mainnullquest = true;
                                    else global.extranullquest = true;
                                    //this mean there is no quest can be done with one user
                                }

                                if (global.etoken) {
                                    if (
                                        quest.includes(
                                            "Have a friend curse you"
                                        )
                                    ) {
                                        global.manualcurse = false;
                                        if (tokentype == "Main Token") {
                                            global.checkquest = false;
                                            return questcurseme(
                                                extratoken,
                                                maintokenuserid,
                                                extraautoquestchannelid,
                                                parseInt(progress1),
                                                parseInt(progress2),
                                                tokentype,
                                                quest
                                            );
                                        } else {
                                            global.extracheckquest = false;
                                            return questcurseme(
                                                maintoken,
                                                extratokenuserid,
                                                mainautoquestchannelid,
                                                parseInt(progress1),
                                                parseInt(progress2),
                                                tokentype,
                                                quest
                                            );
                                        }
                                    } else if (
                                        quest.includes(
                                            "Have a friend pray to you"
                                        )
                                    ) {
                                        global.manualpray = false;
                                        if (tokentype == "Main Token") {
                                            global.checkquest = false;
                                            return questprayme(
                                                extratoken,
                                                maintokenuserid,
                                                extraautoquestchannelid,
                                                parseInt(progress1),
                                                parseInt(progress2),
                                                tokentype,
                                                quest
                                            );
                                        } else {
                                            global.extracheckquest = false; //coded by @mid0aria on github
                                            return questprayme(
                                                maintoken,
                                                extratokenuserid,
                                                mainautoquestchannelid,
                                                parseInt(progress1),
                                                parseInt(progress2),
                                                tokentype,
                                                quest
                                            );
                                        }
                                    } else if (
                                        quest.includes("Battle with a friend")
                                    ) {
                                        if (tokentype == "Main Token") {
                                            global.checkquest = false;
                                            return questbattlefriend(
                                                maintoken,
                                                extratoken,
                                                maintokenuserid,
                                                channelid,
                                                parseInt(progress1),
                                                parseInt(progress2),
                                                tokentype,
                                                quest
                                            );
                                        } else {
                                            global.extracheckquest = false;
                                            return questbattlefriend(
                                                extratoken,
                                                maintoken,
                                                extratokenuserid,
                                                extraautoquestchannelid,
                                                parseInt(progress1),
                                                parseInt(progress2),
                                                tokentype,
                                                quest
                                            );
                                        }
                                    } else if (
                                        quest.includes(
                                            "Receive a cookie from 1 friends"
                                        ) &&
                                        ((tokentype == "Main Token" &&
                                            global.cookieactive) ||
                                            (tokentype == "Extra Token" &&
                                                global.extracookieactive))
                                    ) {
                                        if (tokentype == "Main Token") {
                                            global.checkquest = false;
                                            return questcookiefriend(
                                                extratoken,
                                                maintokenuserid,
                                                extraautoquestchannelid,
                                                parseInt(progress1),
                                                parseInt(progress2),
                                                tokentype,
                                                quest
                                            );
                                        } else {
                                            global.extracheckquest = false;
                                            return questcookiefriend(
                                                maintoken,
                                                extratokenuserid,
                                                mainautoquestchannelid,
                                                parseInt(progress1),
                                                parseInt(progress2),
                                                tokentype,
                                                quest
                                            );
                                        }
                                    } else if (
                                        quest.includes(
                                            "Have a friend use an action command"
                                        )
                                    ) {
                                        if (tokentype == "Main Token") {
                                            global.checkquest = false;
                                            return questactionme(
                                                extratoken,
                                                maintokenuserid,
                                                extraautoquestchannelid,
                                                parseInt(progress1),
                                                parseInt(progress2),
                                                tokentype,
                                                quest
                                            );
                                        } else {
                                            global.extracheckquest = false;
                                            return questactionme(
                                                maintoken,
                                                extratokenuserid,
                                                mainautoquestchannelid,
                                                parseInt(progress1),
                                                parseInt(progress2),
                                                tokentype,
                                                quest
                                            );
                                        }
                                    }
                                }
                                //incase the grabbed quest not on the list above (can be auto completed)
                                if (
                                    global.mainnullquest &&
                                    tokentype == "Main Token"
                                ) {
                                    return autocompletequests(
                                        token,
                                        channelid,
                                        tokentype,
                                        quest
                                    );
                                }
                                if (
                                    global.extranullquest &&
                                    tokentype == "Extra Token"
                                ) {
                                    return autocompletequests(
                                        token,
                                        channelid,
                                        tokentype,
                                        quest
                                    );
                                }
                            }
                        }

                        if (tokentype == "Main Token") {
                            updateerrorsocket("clear", "mainq");
                        } else updateerrorsocket("clear", "extraq");
                    } catch (error) {
                        if (tokentype == "Main Token") {
                            updateerrorsocket("Unable to check Quest", "mainq");
                        } else
                            updateerrorsocket(
                                "Unable to check Quest",
                                "extraq"
                            );
                        console.log(
                            chalk.red(
                                `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                            ) +
                                chalk.magenta(` [${tokentype}]`) +
                                chalk.red("Unable to check quest❗") +
                                chalk.white("\nRechecking after 61 secs...")
                        );
                        setTimeout(() => {
                            if (tokentype == "Main Token") {
                                updateerrorsocket(
                                    "Rechecking Quest...",
                                    "mainq"
                                );
                            } else
                                updateerrorsocket(
                                    "Rechecking Quest...",
                                    "extraq"
                                );
                        }, 55000);
                        setTimeout(
                            () => getquests(token, channelid, tokentype),
                            61000
                        );

                        console.error(error);
                    }
                }
            );
        }
    );
}

async function autocompletequests(token, channelid, tokentype, questtitle) {
    updatequestssocket(
        questtitle,
        "Auto complete quest",
        "Recheck after 610 secs",
        tokentype
    );
    await delay(610000);
    getquests(token, channelid, tokentype);
}

async function questsayowo(
    token,
    channelid,
    pro1,
    pro2,
    tokentype,
    questtitle
) {
    for (let np = pro2 - pro1; np > 0; np--) {
        request.post({
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: "owo",
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        });
        var socketp = pro1;
        var socketpro1 = socketp++;
        updatequestssocket(questtitle, socketpro1, pro2, tokentype);
        await delay(32500);
        for (let sayowogamz = 0; sayowogamz < 4; sayowogamz++) {
            gamz2(token, channelid);
            await delay(2000);
        }
    }
    if (tokentype == "Main Token") {
        global.checkquest = true;
        getquests(maintoken, mainautoquestchannelid, tokentype);
    } else {
        global.extracheckquest = true;
        getquests(extratoken, extraautoquestchannelid, tokentype);
    }
}

async function xpquests(token, channelid, tokentype) {
    await delay(540000);
    if (tokentype == "Main Token") {
        global.checkquest = true;
        global.mainquest = true;
        getquests(maintoken, mainautoquestchannelid, tokentype);
    } else {
        global.extracheckquest = true;
        global.extraquest = true;
        getquests(extratoken, extraautoquestchannelid, tokentype);
    }
}

async function questcurseme(
    token,
    userid,
    channelid,
    pro1,
    pro2,
    tokentype,
    questtitle
) {
    for (let np = pro2 - pro1; np > 0; np--) {
        request.post({
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `${commandrandomizer([
                    "owo",
                    prefix,
                ])} curse <@${userid}>`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        });
        var socketp = pro1;
        var socketpro1 = socketp++;
        updatequestssocket(questtitle, socketpro1, pro2, tokentype);
        await delay(302000);
    }
    if (tokentype == "Main Token") {
        global.checkquest = true;
        getquests(maintoken, mainautoquestchannelid, tokentype);
    } else {
        global.extracheckquest = true;
        getquests(extratoken, extraautoquestchannelid, tokentype);
    }
    if (settings.curse) global.manualcurse = true;
}

async function questprayme(
    token,
    userid,
    channelid,
    pro1,
    pro2,
    tokentype,
    questtitle
) {
    for (let np = pro2 - pro1; np > 0; np--) {
        request.post({
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `${commandrandomizer([
                    "owo",
                    prefix,
                ])} pray <@${userid}>`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        });
        var socketp = pro1;
        var socketpro1 = socketp++;
        updatequestssocket(questtitle, socketpro1, pro2, tokentype);
        await delay(302000);
    }
    if (tokentype == "Main Token") {
        global.checkquest = true;
        getquests(maintoken, mainautoquestchannelid, tokentype);
    } else {
        global.extracheckquest = true;
        getquests(extratoken, extraautoquestchannelid, tokentype);
    }
    if (settings.pray) global.manualpray = true;
}

async function questbattlefriend(
    maintoken,
    extratoken,
    mainuserid,
    channelid,
    pro1,
    pro2,
    tokentype,
    questtitle
) {
    for (let np = pro2 - pro1; np > 0; np--) {
        request.post({
            headers: {
                authorization: extratoken,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `${commandrandomizer([
                    "owo",
                    prefix,
                ])} battle <@${mainuserid}>`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        });
        await delay(7800);
        request.post({
            headers: {
                authorization: maintoken,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `owo ab`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        });
        var socketp = pro1;
        var socketpro1 = socketp++;
        updatequestssocket(questtitle, socketpro1, pro2, tokentype);
        await delay(15000);
    }
    if (tokentype == "Main Token") {
        global.checkquest = true;
        getquests(maintoken, mainautoquestchannelid, tokentype);
    } else {
        global.extracheckquest = true;
        getquests(extratoken, extraautoquestchannelid, tokentype);
    }
}

async function questgamble(
    token,
    channelid,
    pro1,
    pro2,
    tokentype,
    questtitle
) {
    for (let np = pro2 - pro1; np > 0; np--) {
        request.post({
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `owo${commandrandomizer([
                    "owo",
                    prefix,
                ])} ${commandrandomizer(["cf", `coinflip`])} 1`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        });
        var socketp = pro1;
        var socketpro1 = socketp++;
        updatequestssocket(questtitle, socketpro1, pro2, tokentype);
        await delay(16000);
    }
    if (tokentype == "Main Token") {
        global.checkquest = true;
        getquests(maintoken, mainautoquestchannelid, tokentype);
    } else {
        global.extracheckquest = true;
        getquests(extratoken, extraautoquestchannelid, tokentype);
    }
}

async function questcookiefriend(
    token,
    userid,
    channelid,
    pro1,
    pro2,
    tokentype,
    questtitle
) {
    request.post({
        headers: {
            authorization: token,
        },
        url: `https://discord.com/api/v9/channels/${channelid}/messages`,
        json: {
            content: `${commandrandomizer([
                "owo",
                prefix,
            ])} cookie <@${userid}>`,
            nonce: nonce(),
            tts: false,
            flags: 0,
        },
    });
    var socketp = pro1;
    var socketpro1 = socketp++;
    updatequestssocket(questtitle, socketpro1, pro2, tokentype);

    if (tokentype == "Main Token") {
        global.checkquest = true;
        global.cookieactive = false;
        getquests(maintoken, mainautoquestchannelid, tokentype);
    } else {
        global.extracheckquest = true;
        global.extracookieactive = false;
        getquests(extratoken, extraautoquestchannelid, tokentype);
    }
}

async function questuseactioncommand(
    token,
    channelid,
    pro1,
    pro2,
    tokentype,
    questtitle
) {
    for (let np = pro2 - pro1; np > 0; np--) {
        request.post({
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `${commandrandomizer([
                    "owo",
                    prefix,
                ])} cuddle <@408785106942164992> `,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        });
        var socketp = pro1;
        var socketpro1 = socketp++;
        updatequestssocket(questtitle, socketpro1, pro2, tokentype);
        await delay(7800);
    }
    if (tokentype == "Main Token") {
        global.checkquest = true;
        getquests(maintoken, mainautoquestchannelid, tokentype);
    } else {
        global.extracheckquest = true;
        getquests(extratoken, extraautoquestchannelid, tokentype);
    }
}

async function questactionme(
    token,
    userid,
    channelid,
    pro1,
    pro2,
    tokentype,
    questtitle
) {
    for (let np = pro2 - pro1; np > 0; np--) {
        request.post({
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: `${commandrandomizer([
                    "owo",
                    prefix,
                ])} hug <@${userid}> `,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        });
        var socketpro1 = pro1++;
        updatequestssocket(questtitle, socketpro1, pro2, tokentype);
        await delay(8000);
    }
    if (tokentype == "Main Token") {
        global.checkquest = true;
        getquests(maintoken, mainautoquestchannelid, tokentype);
    } else {
        global.extracheckquest = true;
        getquests(extratoken, extraautoquestchannelid, tokentype);
    }
}

//----------------------------------------------------BanCheck + Similar Bypass----------------------------------------------------//

function bancheck(token, channelid) {
    request.get(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages?limit=5`,
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            var bod = JSON.parse(body);
            if (!bod[0]) return;
            var cont;
            for (let i = 0; i < 5; i++) cont += bod[i].content;

            if (
                cont.toLowerCase().includes("captcha") ||
                cont
                    .toLowerCase()
                    .includes(
                        "please complete your captcha to verify that you are human!"
                    )
            ) {
                global.mainbanc = false;
                console.clear();
                console.log(
                    chalk.red(
                        `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                    ) +
                        chalk.magenta(" [Main Token]") +
                        chalk.red(" Chat Captcha! ❌")
                );

                warninguser("Main Token", true);
                updateerrorsocket("(Main Token) Solve Captcha!", "captcha");
                setTimeout(() => {
                    process.exit(0);
                }, 1600);
            } else {
                global.mainbanc = true;
                gamz2(token, channelid);
                console.log(
                    chalk.red(
                        `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                    ) +
                        chalk.magenta(" [Main Token]") +
                        chalk.green(" Chat Captcha Checked ✅")
                );
                setTimeout(() => {
                    sleepy("Main", "Chat Captcha");
                }, 5000);
            }
        }
    );
}

function extrabancheck(token, channelid) {
    request.get(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages?limit=5`,
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            var bod = JSON.parse(body);
            if (!bod[0]) return;
            var cont;
            for (let i = 0; i < 5; i++) cont += bod[i].content;
            if (
                cont.toLowerCase().includes("captcha") ||
                cont
                    .toLowerCase()
                    .includes(
                        "please complete your captcha to verify that you are human!"
                    )
            ) {
                global.extrabanc = false;
                console.clear();
                console.log(
                    chalk.red(
                        `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                    ) +
                        chalk.magenta(" [Extra Token]") +
                        chalk.red(" Chat Captcha! ❌")
                );

                warninguser("Extra Token", true);
                updateerrorsocket("(Extra Token) Solve Captcha!", "captcha");
                setTimeout(() => {
                    process.exit(0);
                }, 1600);
            } else {
                global.extrabanc = true;
                gamz2(token, channelid);
                console.log(
                    chalk.red(
                        `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                    ) +
                        chalk.magenta(" [Extra Token]") +
                        chalk.green(" Chat Captcha Checked ✅")
                );
                setTimeout(() => {
                    sleepy("Extra", "Chat Captcha");
                }, 5000);
            }
        }
    );
}

function dmbancheck(token, channelid) {
    request.get(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages?limit=1`,
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            var bod = JSON.parse(body);
            if (bod[0] == undefined) {
                dmprotectprouwu(token, channelid, "Main Token");
            } else {
                var cont = bod[0].content;

                if (
                    cont.toLowerCase().includes("are you a real human?") ||
                    cont
                        .toLowerCase()
                        .includes(
                            "please complete your captcha to verify that you are human!"
                        )
                ) {
                    global.mainbanc = false;
                    console.clear();
                    console.log(
                        chalk.red(
                            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                        ) +
                            chalk.magenta(" [Main Token]") +
                            chalk.red(" DM Captcha! ❌")
                    );
                    warninguser("Main Token", true);
                    updateerrorsocket(
                        "(Main Token) Solve DM Captcha!",
                        "captcha"
                    );
                    setTimeout(() => {
                        process.exit(0);
                    }, 1600);
                } else {
                    global.mainbanc = true;
                    console.log(
                        chalk.red(
                            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                        ) +
                            chalk.magenta(" [Main Token]") +
                            chalk.green(" DM Captcha Checked ✅")
                    );

                    setTimeout(() => {
                        sleepy("Main", "Dm Captcha");
                    }, 2000);
                }
            }
        }
    );
}

function dmextrabancheck(token, channelid) {
    request.get(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages?limit=1`,
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            var bod = JSON.parse(body);
            if (bod[0] == undefined) {
                dmprotectprouwu(token, channelid, "Extra Token");
            } else {
                var cont = bod[0].content;
                if (
                    cont.toLowerCase().includes("are you a real human?") ||
                    cont
                        .toLowerCase()
                        .includes(
                            "please complete your captcha to verify that you are human!"
                        )
                ) {
                    global.extrabanc = false;
                    console.clear();
                    console.log(
                        chalk.red(
                            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                        ) +
                            chalk.magenta(" [Extra Token]") +
                            chalk.red(" DM Captcha! ❌")
                    );
                    warninguser("Extra Token", true);
                    updateerrorsocket(
                        "(Extra Token) Solve DM Captcha!",
                        "captcha"
                    );
                    setTimeout(() => {
                        process.exit(0);
                    }, 1600);
                } else {
                    global.extrabanc = true;
                    console.log(
                        chalk.red(
                            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                        ) +
                            chalk.magenta(" [Extra Token]") +
                            chalk.green(" DM Captcha Checked ✅")
                    );
                    setTimeout(() => {
                        sleepy("Extra", "DM Captcha");
                    }, 2000);
                }
            }
        }
    );
}

function dmprotectprouwu(token, channelid, tokentype) {
    typing(token, channelid);
    request.post(
        {
            headers: {
                authorization: token,
                "super-x": autoseed(token),
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages`,
            json: {
                content: "hello tiffani maybe u want taste my kok :)",
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (err, res, body) {
            if (body) {
                console.log(
                    chalk.red(
                        `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                    ) +
                        chalk.magenta(` [${tokentype}]`) +
                        chalk.red(" OwO dm channel id incorrect ❌")
                );
            }
        }
    );
}

function gamz2(token, channelid, phrasesFilePath) {
    if (settings.randommessage) {
        // Read the JSON
        fs.readFile("./phrases/phrases.json", "utf8", (err, data) => {
            if (err) {
                console.error(err);
            }

            // Parse the JSON data
            try {
                const phrasesObject = JSON.parse(data);
                const phrases = phrasesObject.phrases;

                if (!phrases || !phrases.length) {
                    console.log("Phrases array is undefined or empty.");
                    return;
                }

                let result = Math.floor(Math.random() * phrases.length);

                var ilu = phrases[result];

                typing(token, channelid);
                request.post({
                    headers: {
                        authorization: token,
                    },
                    url: `https://discord.com/api/v9/channels/${channelid}/messages`,

                    json: {
                        content: ilu,
                        nonce: nonce(),
                        tts: false,
                        flags: 0,
                    },
                });
            } catch (error) {
                if (error) {
                    console.error(error);
                }
            }
        });
    }
}

function warninguser(tokentype, iscaptcha) {
    var title, message, icon;
    if (iscaptcha) {
        title = `${tokentype} Captcha Detected!`;
        message = `Solve the captcha and restart the bot!`;
        icon = "./utils/captcha.png";
    } else {
        title = `Cannot receive OwO response`;
        message = `Manual check OwO status and restart the bot!`;
        icon = "./utils/connect.jpg";
    }
    if (notifymethod == "notify") {
        for (let i = 0; i < notifynumber; i++) {
            notifier.notify({
                title: `${title}`,
                message: `${message}`,
                icon: `${icon}`,
                sound: true,
                wait: true,
                appID: "OwO Farm Bot",
            });
        }
    }
    if (notifymethod == "promt") {
        for (let i = 0; i < notifynumber; i++)
            setTimeout(() => createpromt(tokentype, iscaptcha), 1600 * i);
    }
}

function createpromt(tokentype, iscaptcha) {
    var message = `Captcha detected on ${tokentype}! App aborted!`;
    if (!iscaptcha) message = `Cannot receive OwO response! App aborted!`;
    const psCommands = [
        "Add-Type -AssemblyName PresentationFramework",
        "[System.Windows.MessageBox]::" +
            // eslint-disable-next-line no-useless-escape
            `Show(\'${message}\', \'OwO Farm Bot\', \'OK\', \'Warning\')`,
    ];
    const psScript = psCommands.join("; ");
    cp.exec(`powershell.exe -ExecutionPolicy Bypass -Command "${psScript}"`);
}

//----------------------------------------------------CHECK IF HUNTED OR BATTLED----------------------------------------------------//
//little help from random guys
//training myself, for better future, for the love for her <3
function huntcheck(token, tokentype, channelid, checknumber) {
    request.get(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages?limit=${checknumber}`,
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            var bod = JSON.parse(body);
            if (!bod[0]) return;
            var cont;
            for (let i = 0; i < checknumber; i++) cont += bod[i].content;

            if (cont.includes("You found:") || cont.includes("and caught a")) {
                if (mainwarning > 0) mainwarning -= 1;
                triggerhunt();
                if (settings.banbypass && !global.mainhuntpaused) {
                    if (global.mainfirstrun) global.mainfirstrun = false;
                    else {
                        bancheck(maintoken, mainchannelid);
                        dmbancheck(maintoken, owodmmainchannelid);
                    }
                }

                if (cont.includes("3/3") && cont.includes("lootbox"))
                    global.mainhuntdaily = true;
            } else {
                checknumber = checknumber + 1;
                if (checknumber >= 8) {
                    mainwarning += 1;
                    triggerhunt();
                    if (settings.banbypass && !global.mainhuntpaused) {
                        if (global.mainfirstrun) global.mainfirstrun = false;
                        else {
                            bancheck(maintoken, mainchannelid);
                            dmbancheck(maintoken, owodmmainchannelid);
                        }
                    }
                    return;
                } else
                    setTimeout(
                        () =>
                            huntcheck(token, tokentype, channelid, checknumber),
                        1600
                    );
            }
        }
    );
}

function battlecheck(token, tokentype, channelid, checknumber) {
    request.get(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages?limit=${checknumber}`,
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            var bod = JSON.parse(body);
            if (!bod[0]) return;
            var cont;
            for (let i = 0; i < checknumber; i++) cont += bod[i].content;
            if (cont.includes("weapon crate") && cont.includes("3/3"))
                global.mainbattledaily = true;

            for (let i = 0; i < checknumber; i++) {
                try {
                    if (
                        bod[i].embeds[0].author.name.includes(
                            "goes into battle"
                        ) ||
                        bod[i].embeds[0].footer.text.includes(
                            "your team gained"
                        )
                    ) {
                        if (mainwarning > 0) mainwarning -= 1;
                        triggerbattle();
                        if (settings.banbypass && global.mainhuntpaused) {
                            if (global.mainfirstrun)
                                global.mainfirstrun = false;
                            else {
                                bancheck(maintoken, mainchannelid);
                                dmbancheck(maintoken, owodmmainchannelid);
                            }
                        }
                        return;
                    }
                } catch (error) {
                    //console.error(error);
                }
            }

            checknumber = checknumber + 1;
            if (checknumber >= 8) {
                mainwarning += 1;
                triggerbattle();
                if (settings.banbypass && global.mainhuntpaused) {
                    if (global.mainfirstrun) global.mainfirstrun = false;
                    else {
                        bancheck(maintoken, mainchannelid);
                        dmbancheck(maintoken, owodmmainchannelid);
                    }
                }
                return;
            } else {
                setTimeout(
                    () => battlecheck(token, tokentype, channelid, checknumber),
                    1600
                );
            }
        }
    );
}

function extrahuntcheck(token, tokentype, channelid, checknumber) {
    request.get(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages?limit=${checknumber}`,
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            var bod = JSON.parse(body);
            if (!bod[0]) return;
            var cont;
            for (let i = 0; i < checknumber; i++) cont += bod[i].content;

            if (cont.includes("You found:") || cont.includes("and caught a")) {
                if (extrawarning > 0) extrawarning -= 1;
                triggerextrahunt();
                if (settings.banbypass && !global.extrahuntpaused) {
                    if (global.extrafirstrun) global.extrafirstrun = false;
                    else {
                        extrabancheck(extratoken, extrachannelid);
                        dmextrabancheck(extratoken, owodmextrachannelid);
                    }
                }

                if (cont.includes("3/3") && cont.includes("lootbox"))
                    global.extrahuntdaily = true;
            } else {
                checknumber = checknumber + 1;
                if (checknumber >= 8) {
                    extrawarning += 1;
                    triggerextrahunt();
                    if (settings.banbypass && !global.extrahuntpaused) {
                        if (global.extrafirstrun) global.extrafirstrun = false;
                        else {
                            extrabancheck(extratoken, extrachannelid);
                            dmextrabancheck(extratoken, owodmextrachannelid);
                        }
                    }
                    return;
                } else
                    setTimeout(
                        () =>
                            extrahuntcheck(
                                token,
                                tokentype,
                                channelid,
                                checknumber
                            ),
                        1600
                    );
            }
        }
    );
}

function extrabattlecheck(token, tokentype, channelid, checknumber) {
    request.get(
        {
            headers: {
                authorization: token,
            },
            url: `https://discord.com/api/v9/channels/${channelid}/messages?limit=${checknumber}`,
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
            }
            var bod = JSON.parse(body);
            if (!bod[0]) return;
            var cont;
            for (let i = 0; i < checknumber; i++) cont += bod[i].content;
            if (cont.includes("weapon crate") && cont.includes("3/3"))
                global.extrabattledaily = true;

            for (let i = 0; i < checknumber; i++) {
                try {
                    if (
                        bod[i].embeds[0].author.name.includes(
                            "goes into battle"
                        ) ||
                        bod[i].embeds[0].footer.text.includes(
                            "your team gained"
                        )
                    ) {
                        if (extrawarning > 0) extrawarning -= 1;
                        triggerextrabattle();
                        if (settings.banbypass && global.extrahuntpaused) {
                            if (global.extrafirstrun)
                                global.extrafirstrun = false;
                            else {
                                extrabancheck(extratoken, extrachannelid);
                                dmextrabancheck(
                                    extratoken,
                                    owodmextrachannelid
                                );
                            }
                        }
                        return;
                    }
                } catch (error) {
                    //console.error(error);
                }
            }

            checknumber = checknumber + 1;
            if (checknumber >= 8) {
                extrawarning += 1;
                triggerextrabattle();
                if (settings.banbypass && global.extrahuntpaused) {
                    if (global.extrafirstrun) global.extrafirstrun = false;
                    else {
                        extrabancheck(extratoken, extrachannelid);
                        dmextrabancheck(extratoken, owodmextrachannelid);
                    }
                }
                return;
            } else {
                setTimeout(
                    () =>
                        extrabattlecheck(
                            token,
                            tokentype,
                            channelid,
                            checknumber
                        ),
                    1600
                );
            }
        }
    );
}
