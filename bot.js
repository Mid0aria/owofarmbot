global.love = "e<3";
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
/**
 * Sends a random phrase to a Discord channel.
 * @param {string} token - The Discord bot token.
 * @param {string} channelid - The ID of the Discord channel to send the message to.
 * @param {string} phrasesFilePath - The path to the JSON file containing the phrases.
 */
function elaina2(token, channelid, phrasesFilePath) {
    // Read the JSON
    fs.readFile("./phrases/phrases.json", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading JSON file:", err);
            return;
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
            //E <3
            request.post({
                headers: {
                    authorization: token,
                },
                url:
                    "https://discord.com/api/v9/channels/" +
                    channelid +
                    "/messages",
                json: {
                    content: ilu,
                    nonce: nonce(),
                    tts: false,
                    flags: 0,
                },
            });
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    });
}



//------------
try {
    require.resolve("chalk");
} catch (e) {
    console.log("Please run: npm install chalk@4.1.2");
    process.exit(0);
}
const chalk = require("chalk");

//------------
try {
    require.resolve("follow-redirects");
    //E <3
} catch (e) {
    console.log(chalk.red("Please run: npm install follow-redirects"));
    process.exit(0);
}
const { http, https } = require("follow-redirects");

//------------
try {
    require.resolve("collect.js");
} catch (e) {
    console.log(chalk.red("Please run: npm install collect.js"));
    process.exit(0);
}
const collect = require("collect.js");

//------------
try {
    require.resolve("discord-rpc");
} catch (e) {
    console.log(chalk.red("Please run: npm install discord-rpc"));
    process.exit(0);
}
const DiscordRPC = require("discord-rpc");

//------------
try {
    require.resolve("request");
} catch (e) {
    console.log(chalk.red("Please run: npm install request"));
    process.exit(0);
}
const request = require("request");

//------------
try {
    require.resolve("delay");
} catch (e) {
    console.log(chalk.red("Please run: npm install delay"));
    process.exit(0);
}
const delay = require("delay");

//------------
try {
    require.resolve("socket.io");
} catch (e) {
    console.log(chalk.red("Please run: npm install socket.io"));
    process.exit(0);
}
const socketio = require("socket.io")(1337);

//------------
try {
    require.resolve("socket.io-client");
} catch (e) {
    console.log(chalk.red("Please run: npm install socket.io-client"));
    process.exit(0);
}
//------------
try {
    require.resolve("node-notifier");
} catch (e) {
    console.log(chalk.red("Please run: npm install node-notifier"));
    process.exit(0);
}
const notifier = require("node-notifier");

const rpcclientid = "1078993881556865155";
const rpc = new DiscordRPC.Client({ transport: "ipc" });
const config = require("./config.json");
var settings = config.settings;
var maintoken = config.main.token;
var maintokenuserid = config.main.userid;
var mainchannelid = config.main.channelid;
var owodmmainchannelid = config.main.owodmchannelid;
var extratokencheck = config.settings.extratoken;
var extratoken = config.extra.token;
var extratokenuserid = config.extra.userid;
var extrachannelid = config.extra.channelid;
var owodmextrachannelid = config.extra.owodmchannelid;
var mainautoquestchannelid = config.main.autoquestchannelid;
var extraautoquestchannelid = config.extra.autoquestchannelid;
var maingamblechannelid = config.main.gamblechannelid;
var extragamblechannelid = config.extra.gamblechannelid;

var version = "1.0.4";
var banversion = "0.1.8";

global.quest = true;
global.questtitle = "";

console.clear();
process.title = `OwO Farm Bot 💗 Bot Version ${version} / BanBypass Version ${banversion} 💗`;

process.on("SIGINT", function () {
    console.log(chalk.yellow("CTRL + C detected..."));
    console.log(chalk.red("killing socket client"));
    cp.exec("taskkill /f /im cmd.exe");
    cp.exec("taskkill /f /im windowsterminal.exe");
});

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

if (settings.huntandbattle == "true") {
    var rpchab = "✅";
} else {
    var rpchab = "❌";
}
if (settings.banbypass == "true") {
    var rpcbanb = "✅";
    var rpcbant = "BanBypass system v" + banversion;
    var rpcdetails = "🔥 Bot v" + version + "/BanBypass v" + banversion + " 🔥";
} else {
    var rpcbanb = "❌";
    var rpcbant = "BanBypass system disabled";
    var rpcdetails = "🔥 Bot v" + version + " 🔥";
}
if (settings.animals.enable == "true") {
    if (settings.animals.type == "sacrifice") {
        var rpcanimals = "sacrifice";
    } else if (settings.animals.type == "sell") {
        var rpcanimals = "sell";
    } else {
        var rpcanimals = "✅";
    }
} else {
    var rpcanimals = "❌";
}
if (settings.inventory.inventorycheck == "true") {
    var rpcinventory = "✅";
} else {
    var rpcinventory = "❌";
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
        largeImageText: "v" + version,
        smallImageKey: "ban",
        smallImageText: rpcbant,
        instance: false,
        buttons: [
            {
                label: "Farm Bot",
                url: "https://github.com/Mid0aria/owofarmbot",
            },
            {
                label: "Github",
                url: "https://github.com/Mid0aria/",
            },
        ],
    });
});

if (extratoken === maintoken) {
    var extratokencheck = "false";
}

if (mainchannelid.length < 1) {
    console.log(chalk.red("Main Token Channel ID ❌"));

    process.exit(0);
}
if (maintokenuserid.length < 1) {
    console.log(chalk.red("Main Token User ID ❌"));

    process.exit(0);
}
if (owodmmainchannelid.length < 1) {
    console.log(chalk.red("Main Token OwO DM Channel ID ❌"));

    process.exit(0);
}

if (extratokencheck == "true") {
    if (extrachannelid.length < 1) {
        console.log(chalk.red("Extra Token Channel ID ❌"));

        process.exit(0);
    }
    if (extratokenuserid.length < 1) {
        console.log(chalk.red("Extra Token User ID ❌"));

        process.exit(0);
    }
    if (owodmextrachannelid.length < 1) {
        console.log(chalk.red("Extra Token OwO DM Channel ID ❌"));

        process.exit(0);
    }
}

checkversion();
//E <3

DiscordRPC.register(rpcclientid);

rpc.login({ clientId: rpcclientid }).catch((e) => {
    console.log(",..,");
});

console.log(chalk.cyan("github.com/mid0aria"));
console.log(chalk.cyan("Made with love for e <3"));

if (settings.huntandbattle == "true") {
    console.log(
        chalk.magenta("OwO Farm Bot Started ") +
            chalk.blue("version " + version)
    );
} else {
    console.log(
        chalk.red(
            "Hunt and Battle disabled!!! If you want to use the bot, activate it from the config.json file. "
        )
    );
    process.exit(0);
}

if (settings.banbypass == "true") {
    global.mainbanc = false;
    global.extrabanc = false;

    console.log(
        chalk.yellow("Captcha (ban) Bypass System by Aix ") +
            chalk.blue("version " + banversion)
    );
    console.log(`{/__/}\n( ^ . ^)\n/ > ` + chalk.red("Captcha Bypass"));
} else {
    global.mainbanc = true;
    global.extrabanc = true;
    console.log(chalk.red(`{/__/}\n( • . •)\n/ > 🥒`));
}

//----------------------------------------------------Check Main Token----------------------------------------------------//
// 定義一個函數來生成指定範圍內的隨機延遲時間
function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 設定最小和最大延遲時間
var minDelay = 7500; // 最小延遲時間（5秒）
var maxDelay = 14000; // 最大延遲時間（10秒）

request.get(
    {
        headers: {
            authorization: maintoken,
        },
        url: "https://canary.discord.com/api/v9/users/@me",
    },
    function (error, response, body) {
        var bod = JSON.parse(body);

        if (String(bod.message) === "401: Unauthorized") {
            console.log(chalk.red(`Main Token / ${String(bod.message)}`));
            setTimeout(() => {
                process.exit(0);
            }, getRandomDelay(minDelay, maxDelay)); // 使用隨機延遲
        } else {
            console.log(chalk.green("Main Token ✅"));
            console.log(
                `[Main Token] User: ${bod.username}#${bod.discriminator}`
            );

            checklist(maintoken, "Main Token", mainchannelid);
            sleepy("Main", "CheckList");

            setTimeout(() => {
                if (settings.huntandbattle == "true") {
                    setTimeout(() => {
                        hunt(maintoken, "StartUp", "Main Token", mainchannelid);
                    }, getRandomDelay(minDelay, maxDelay)); // 使用隨機延遲

                    setTimeout(() => {
                        battle(
                            maintoken,
                            "StartUp",
                            "Main Token",
                            mainchannelid
                        );
                    }, getRandomDelay(minDelay, maxDelay)); // 使用隨機延遲
                }
                if (settings.animals.enable == "true") {
                    setTimeout(() => {
                        animals(
                            maintoken,
                            "Main Token",
                            mainchannelid,
                            settings.animals.type
                        );
                    }, getRandomDelay(minDelay, maxDelay)); // 使用隨機延遲
                }
                if (settings.pray == "true") {
                    setTimeout(() => {
                        pray(maintoken, "Main Token", mainchannelid);
                    }, getRandomDelay(minDelay, maxDelay)); // 使用隨機延遲
                }
                if (settings.curse == "true") {
                    setTimeout(() => {
                        curse(maintoken, "Main Token", mainchannelid);
                    }, getRandomDelay(minDelay, maxDelay)); // 使用隨機延遲
                }
                if (settings.upgradeautohunt.enable == "true") {
                    setTimeout(() => {
                        upgradeall(maintoken, "Main Token", mainchannelid);
                    }, getRandomDelay(minDelay, maxDelay)); // 使用隨機延遲
                }
            }, getRandomDelay(minDelay, maxDelay)); // 使用隨機延遲
        }
    }
);


//----------------------------------------------------Check Extra Token----------------------------------------------------//
if (extratokencheck == "true") {
    global.etoken = true;
    request.get(
        {
            headers: {
                authorization: extratoken,
            },
            url: "https://canary.discord.com/api/v9/users/@me",
        },
        function (error, response, body) {
            var bod = JSON.parse(body);

            if (String(bod.message) === "401: Unauthorized") {
                global.etoken = false;
                console.log(chalk.red("Extra Token ❌"));
                console.log(chalk.red(`EXTRA TOKEN / ${String(bod.message)}`));
            } else {
                global.etoken = true;
                console.log(chalk.green("Extra Token ✅"));
                console.log(
                    `[Extra Token] User: ${bod.username}#${bod.discriminator}`
                );

                if (global.etoken) {
                    setTimeout(() => {
                        checklist(extratoken, "Extra Token", extrachannelid);
                        setTimeout(() => {
                            sleepy("Extra", "CheckList");
                        }, 5000);
                    }, 3500);
                    if (settings.huntandbattle == "true") {
                        setTimeout(() => {
                            hunt(
                                extratoken,
                                "StartUp",
                                "Extra Token",
                                extrachannelid
                            );
                        }, 5000);

                        setTimeout(() => {
                            battle(
                                extratoken,
                                "StartUp",
                                "Extra Token",
                                extrachannelid
                            );
                        }, 7500);
                    }
                    if (settings.animals.enable == "true") {
                        setTimeout(() => {
                            animals(
                                extratoken,
                                "Extra Token",
                                extrachannelid,
                                settings.animals.type
                            );
                        }, 9500);
                        //coded   by @mid0aria on gi thub
                    }
                    if (settings.pray == "true") {
                        setTimeout(() => {
                            pray(extratoken, "Extra Token", extrachannelid);
                        }, 11000);
                    }
                    if (settings.curse == "true") {
                        setTimeout(() => {
                            curse(extratoken, "Extra Token", extrachannelid);
                        }, 14000);
                    }
                    if (settings.upgradeautohunt.enable == "true") {
                        setTimeout(() => {
                            upgradeall(
                                extratoken,
                                "Extra Token",
                                extrachannelid
                            );
                        }, 17000);
                    }
                }
            }
        }
    );
} else {
    global.etoken = false;
}
//--------------------------HUNT BATTLE-------------------------------------------------------//
// 定義一個函數來生成隨機秒數
function getRandomDelay(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

// 設定最小和最大延遲時間
var minDelay = 11000; // 最小延遲時間（11秒）
var maxDelay = 15000; // 最大延遲時間（15秒）

let timerHuntBattle = setTimeout(function huntbattle(){

    var randomTimehuntDelay = getRandomDelay(minDelay, maxDelay);
    var randomTimebattleDelay = getRandomDelay(minDelay, maxDelay);
    if(randomTimehuntDelay < randomTimebattleDelay){
       randomTimebattleDelay += getRandomDelay(2000,4000);
    }else{
       randomTimehuntDelay += getRandomDelay(2000,4000);
    }
    if (settings.banbypass == "true") {
        bancheck(maintoken, mainchannelid);
        dmbancheck(maintoken, owodmmainchannelid);
    }
    if (settings.huntandbattle == "true") {
        if (global.mainbanc) {
            setTimeout(() => {
                hunt(maintoken, randomTimehuntDelay, "Main Token", mainchannelid);
                lastAction = "hunt"; // 設定上一個動作為 hunt
            }, randomTimehuntDelay); // 使用隨機秒數延遲

            setTimeout(() => {
                battle(maintoken, randomTimebattleDelay, "Main Token", mainchannelid);
                lastAction = "battle"; // 設定上一個動作為 battle
            }, randomTimebattleDelay); // 使用隨機秒數延遲

            if (settings.inventory.inventorycheck == "true") {
                setTimeout(() => {
                    checkinv(maintoken, mainchannelid, "Main Token");
                }, randomTimehuntDelay + randomTimebattleDelay + getRandomDelay(2000,3000)); // 使用隨機秒數延遲
            }
        }
    }
    timerHuntBattle = setTimeout(huntbattle, getRandomDelay(20000, 25000))
}, getRandomDelay(20000, 25000)); // 隨機的間隔時間（15到20秒之間）

if (false && global.etoken) {
    setInterval(() => {
        var timehunt = parseInt(rantime());
        if (timehunt <= 5000) {
            timehunt = timehunt + 2000;
        }

        var timebattle = timehunt + 1000;
        if (settings.banbypass == "true") {
            extrabancheck(extratoken, extrachannelid);
            dmextrabancheck(extratoken, owodmextrachannelid);
        }
        if (settings.huntandbattle == "true") {
            if (global.extrabanc) {
                setTimeout(() => {
                    hunt(extratoken, timehunt, "Extra Token", extrachannelid);
                    if (settings.inventory.inventorycheck == "true") {
                        setTimeout(() => {
                            checkinv(extratoken, extrachannelid, "Extra Token");
                        }, 2500);
                    } //E <3
                }, timehunt);

                setTimeout(() => {
                    battle(
                        extratoken,

                        timebattle,
                        "Extra Token",
                        extrachannelid
                    );
                }, timebattle + 1500);
            }
        }
    }, 17000);
}

function hunt(token, timehunt, tokentype, channelid) {
    request.post(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: "wh",
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(" [" + tokentype + "]") +
                    chalk.blue(" Hunt ✅ (" + timehunt + " ms)")
            );
        }
    );
}

function battle(token, timebattle, tokentype, channelid) {
    request.post(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: "wb",
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(" [" + tokentype + "]") +
                    chalk.blue(" Battle ✅ (" + timebattle + " ms)")
            );
        }
    );
}

//-----------------------------------ANIMALS----------------------------------------------//
if (settings.animals.enable == "true") {
    setInterval(() => {
        animals(maintoken, "Main Token", mainchannelid, settings.animals.type);
        if (global.etoken) {
            animals(
                extratoken,
                "Extra Token",
                extrachannelid,
                settings.animals.type
            );
        }
    }, 1200000);
}

//--------------------------------PRAY-------------------------------------------------//
if (settings.pray == "true") {
    setInterval(() => {
        pray(maintoken, "Main Token", mainchannelid);
        if (global.etoken) {
            pray(extratoken, "Extra Token", extrachannelid);
        }
    }, 303000);
}
//--------------------------------CURSE-------------------------------------------------//
if (settings.curse == "true") {
    setInterval(() => {
        curse(maintoken, "Main Token", mainchannelid);
        if (global.etoken) {
            curse(extratoken, "Extra Token", extrachannelid);
        }
    }, 303500);
}
//--------------------------------UPGRADE-------------------------------------------------//
if (settings.upgradeautohunt.enable == "true") {
    setInterval(() => {
        upgradeall(maintoken, "Main Token", mainchannelid);
        if (global.etoken) {
            upgradeall(extratoken, "Extra Token", extrachannelid);
        }
    }, 1205000);
}

//--------------------------------GAMBLE-------------------------------------------------//
// 定義一個函數來生成隨機秒數
function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // 設定最小和最大延遲時間
  var minDelay = 1000; // 最小延遲時間（2秒）
  var maxDelay = 5000; // 最大延遲時間（6秒）
  
  if (settings.gamble.coinflip.enable == "true") {
      setInterval(() => {
          coinflip(maintoken, "Main Token", maingamblechannelid);
          if (global.etoken) {
              extra_coinflip(extratoken, "Extra Token", extragamblechannelid);
          }
      }, getRandomDelay(minDelay, maxDelay)); // 使用隨機秒數延遲
  }
  

if (settings.gamble.slots.enable == "true") {
    setInterval(() => {
        slots(maintoken, "Main Token", mainchannelid);
        if (global.etoken) {
            slots(extratoken, "Extra Token", extrachannelid);
        }
    }, 23000);
}


//----------------------------------------------------FUNCTIONS----------------------------------------------------//

function checkversion() {
    var versi = path.join(__dirname, "/version.json");

    if (fs.existsSync(versi)) {
        console.log();
    } else {
        const versiun = https.get(
            "https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/version.json",
            function (response) {
                var versistream = fs.createWriteStream(versi);
                response.pipe(versistream);
                versistream.on("finish", () => {
                    versistream.close();
                });
            }
        );
    }
    setTimeout(() => {
        request.get(
            {
                url: "https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/version.json",
            },
            function (err, res, body) {
                let bod = JSON.parse(body);

                var apdater = path.join(__dirname, "/updater.js");
                if (bod.updater === require("./version.json").updater) {
                    console.log(
                        chalk.yellow(
                            `Updater Repo Version: ${
                                bod.updater
                            } / Updater Installed Version: ${
                                require("./version.json").updater
                            }`
                        )
                    );
                } else {
                    const boti = https.get(
                        "https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/updater.js",
                        function (response) {
                            var buotstream = fs.createWriteStream(apdater);
                            response.pipe(buotstream);
                            buotstream.on("finish", () => {
                                buotstream.close();
                                console.log("updater.js updated");
                            });
                        }
                    );
                }
                if (bod.version === version) {
                    console.log(
                        chalk.yellow(
                            `Repo Version: ${bod.version} / Installed Version: ${version}`
                        )
                    );
                } else {
                    console.clear();
                    console.log(
                        chalk.yellow(
                            `Repo Version: ${bod.version} / Installed Version: ${version}`
                        )
                    );
                    console.log(
                        chalk.red(
                            "Your farm bot is not up to date please run node updater.js"
                        )
                    );
                    process.exit(0);
                }
            }
        );
    }, 1500);
}

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
    var rng = seedrandom.xor4096(`seedaccess-entropyverror-apiv10.${token}`);
    return rng();
}

function sleepy(t, e) {
    console.log(
        chalk.red(
            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
        ) +
            chalk.magenta(` [${t} Token] `) +
            chalk.red(e + " Waiting ...")
    );
}

async function updatequestssocket(p1, p2) {
    socketio.emit("quest", {
        quest: `${global.questtitle}`,
        progress: `${p1} / ${p2}`,
        date: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
    });
}

async function updatechecklistsocket(i, e) {
    setTimeout(() => {
        //console.log(`${i}  +++  ${e}`);
        socketio.emit("checklist", {
            name: i,
            status: e,
        });
    }, 3000);
}

async function updateerrorsocket(eyl) {
    setTimeout(() => {
        socketio.emit("errors", {
            error: eyl,
        });
    }, 3100);
}
//----------------------------------------------------Main Features----------------------------------------------------//



/**
 * Sends a message to Discord with a list of animal types based on the configuration settings.
 * @param {string} token - The Discord bot token.
 * @param {string} tokentype - The type of token being used.
 * @param {string} channelid - The ID of the channel to send the message to.
 * @param {string} type - The type of action to perform (sacrifice or sell).
 */
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
    for (a in ranks) {
        var e = ranks[a];

        if (config.settings.animals.animaltype[e] === "true") {
            var animaltypes = animaltypes + `${e} `;
        }
    }

    if (type === "sacrifice" || type === "sell") {
        animalcheck = true;
    }

    if (animalcheck) {
        const request = require("request");
        request.post(
            {
                headers: {
                    authorization: token,
                },
                url: `https://discord.com/api/v9/channels/${channelid}/messages`,
                json: {
                    content: `owo ${type} ${animaltypes}`,
                    nonce: nonce(),
                    tts: false,
                    flags: 0,
                },
            },
            function (error, response, body) {
                console.log(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` +
                        ` [${tokentype}]` +
                        ` Animals ✅ / Type: ${type}`
                );
            }
        );
    } else {
        console.log(
            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` +
                ` [${tokentype}]` +
                ` Animals ❌ / Error: Incorrect Type`
        );
    }
}

/**
 * Sends a prayer message to a Discord channel using the provided token and channel ID.
 * @param {string} token - The Discord bot token.
 * @param {string} tokentype - The type of token being used.
 * @param {string} channelid - The ID of the Discord channel to send the message to.
 */
function pray(token, tokentype, channelid) {
    if (tokentype == "Extra Token") {
        var ct = "owo pray <@" + maintokenuserid + ">";
    } else {
        var ct = "owo pray";
    }
    request.post(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: ct,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(" [" + tokentype + "]") +
                    chalk.yellow(" Pray ✅")
            );
        }
    );
}

/**
 * Sends a "curse" message to a Discord channel using the provided token and channel ID.
 * @param {string} token - The Discord bot token.
 * @param {string} tokentype - The type of token being used.
 * @param {string} channelid - The ID of the Discord channel to send the message to.
 */
function curse(token, tokentype, channelid) {
    if (tokentype == "Extra Token") {
        var ct = "owo curse <@" + maintokenuserid + ">";
    } else {
        var ct = "owo curse";
    }
    request.post(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: ct,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(" [" + tokentype + "]") +
                    chalk.yellow(" Curse ✅")
            );
        }
    );
}

/**
 * Sends a checklist message to a Discord channel and updates the checklist status based on the message content.
 * @param {string} token - The Discord bot token.
 * @param {string} tokentype - The type of token (e.g. "Main Token", "Alt Token").
 * @param {string} channelid - The ID of the Discord channel to send the message to.
 * @returns {string} - A message indicating whether the checklist has been completed.
 */
function checklist(token, tokentype, channelid) {
    request.post(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: "owo cl",
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(" [" + tokentype + "]") +
                    chalk.yellow("Sending Checklist📜 ...")
            );
            setTimeout(() => {
                request.get(
                    {
                        headers: {
                            authorization: token,
                        },
                        url:
                            "https://discord.com/api/v9/channels/" +
                            channelid +
                            "/messages?limit=1",
                    },
                    function (error, response, body) {
                        try {
                            var bod = JSON.parse(body);
                            var cont = bod[0].embeds;
                            var des = cont[0].description;

                            chalk.magenta(" [" + tokentype + "]") +
                                chalk.yellow("Getting Checklist 🔎");
                            if (des.includes("☑️ 🎉")) {
                                updatechecklistsocket("all", "✅");
                                return "checklist completed";
                            }
                            if (des.includes("☑️ 💎")) {
                                updatechecklistsocket("lb", "✅");
                            }
                            if (des.includes("☑️ ⚔")) {
                                updatechecklistsocket("crate", "✅");
                            }

                            if (des.includes("⬛ 🎁")) {
                                daily(token, tokentype, channelid);
                            } else {
                                updatechecklistsocket("daily", "✅");
                            }
                            if (des.includes("⬛ 🍪")) {
                                cookie(token, tokentype, channelid);
                            } else {
                                updatechecklistsocket("cookie", "✅");
                            }
                            if (des.includes("⬛ 📝")) {
                                console.log(
                                    chalk.magenta(`[${tokentype}] `) +
                                        chalk.red(
                                            "YOUR DAILY VOTE IS AVAILABLE!"
                                        )
                                );
                            } else {
                                updatechecklistsocket("vote", "✅");
                            }
                            if (des.includes("⬛ 📜")) {
                                if (settings.autoquest === "true") {
                                    getquests(
                                        maintoken,
                                        mainautoquestchannelid,
                                        "Main Token"
                                    );
                                }
                            } else {
                                updatechecklistsocket("quest", "✅");
                            }
                        } catch (error) {
                            updateerrorsocket("Unable to get Checklist");
                            console.log(
                                chalk.red(
                                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                                ) +
                                    chalk.magenta(" [" + tokentype + "]") +
                                    chalk.red("Unable to get Checklist❗")
                            );
                        }
                    }
                );
            }, 2000);
        }
    );
}

/**
 * Sends a message "owo daily" to a Discord channel using the provided token and channel ID.
 * @param {string} token - The Discord bot token.
 * @param {string} tokentype - The type of token (e.g. "Bot").
 * @param {string} channelid - The ID of the Discord channel to send the message to.
 */
function daily(token, tokentype, channelid) {
    request.post(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: "owo daily",
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            updatechecklistsocket("daily", "✅");
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(" [" + tokentype + "]") +
                    chalk.yellow(" Daily ✅")
            );
        }
    );
}

/**
 * Sends a message to a Discord channel with a cookie command.
 * @param {string} token - The Discord bot token.
 * @param {string} tokentype - The type of Discord bot token.
 * @param {string} channelid - The ID of the Discord channel to send the message to.
 */
function cookie(token, tokentype, channelid) {
    request.post(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: "owo cookie <@408785106942164992>",
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            updatechecklistsocket("cookie", "✅");
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(" [" + tokentype + "]") +
                    chalk.yellow(" Cookie ✅")
            );
        }
    );
}

let currentBet = settings.gamble.coinflip.default_amount;
const maxBet = settings.gamble.coinflip.max_amount;

/**
 * Flips a coin in a Discord channel and handles the response.
 * @param {string} token - The Discord bot token.
 * @param {string} tokentype - The type of Discord bot token.
 * @param {string} channelid - The ID of the Discord channel to post the message in.
 */
function coinflip(token, tokentype, channelid) {
    request.post(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: `owo coinflip ${currentBet}`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        async function (error, response, body) {
            if (error) {
                console.error("Error posting request:", error);
                return;
            }

            await delay(6000);

            request.get(
                {
                    headers: {
                        authorization: token,
                    },
                    url:
                        "https://discord.com/api/v9/channels/" +
                        channelid +
                        "/messages?limit=1",
                },
                async function (error, response, body) {
                    if (error) {
                        console.error("Error getting response:", error);
                        return;
                    }

                    try {
                        const bod = JSON.parse(body);
                        const cont = bod[0].content;

                        if (cont.includes("and you lost it all... :c")) {
                            currentBet *= settings.gamble.coinflip.multipler;
                            if (Number.isNaN(currentBet)) {
                                currentBet = currentBet;
                            } else {
                                currentBet = Math.round(currentBet);
                            }

                            const lostamount = Math.round(currentBet / settings.gamble.coinflip.multipler);
                            console.log(
                                chalk.red(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
                                + chalk.magenta(" [" + tokentype + "]") + chalk.yellow(` Lost ${lostamount} in coinflip, next betting ${currentBet}`)
                            );
                            if (currentBet > maxBet) {
                                currentBet = settings.gamble.coinflip.default_amount;
                            }
                        } else if (cont.includes("captcha")) {
                            console.clear();
                            console.log(chalk.red(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
                                + chalk.magenta(" [" + tokentype + "]") + chalk.red(" CAPTCHA detected. Manual intervention required.")
                            );
                            notifier.notify({
                                title: "(" + tokentype + ") Captcha Detected!",
                                message: "Solve the captcha and restart the bot!",
                                icon: "./utilfiles/captcha.png",
                                sound: true,
                                wait: true,
                            });
                            notifier.on("click", function () {
                                console.log("click event detected.");
                            });
                            // Exit the program
                            process.exit(1);
                        } else if (cont.includes(" and you won")) {
                            console.log(chalk.red(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
                                + chalk.magenta(" [" + tokentype + "]") +
                                chalk.yellow(` You have won ${currentBet} in coinflip`)
                            );
                            currentBet = settings.gamble.coinflip.default_amount;

                        } else {
                            await delay(10000);
                            request.get(
                                {
                                    headers: {
                                        authorization: token,
                                    },
                                    url:
                                        "https://discord.com/api/v9/channels/" +
                                        channelid +
                                        "/messages?limit=1",
                                },
                                async function (error, response, body) {
                                    if (error) {
                                        console.error("Error getting response:", error);
                                        return;
                                    }

                                    try {
                                        const bod = JSON.parse(body);
                                        const cont = bod[0].content;

                                        if (cont.includes("and you lost it all... :c")) {
                                            currentBet *= settings.gamble.coinflip.multipler;
                                            if (Number.isNaN(currentBet)) {
                                                currentBet = currentBet;
                                            } else {
                                                currentBet = Math.round(currentBet);
                                            }

                                            const lostamount = Math.round(currentBet / settings.gamble.coinflip.multipler);
                                            console.log(
                                                chalk.red(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
                                                + chalk.magenta(" [" + tokentype + "]") + chalk.yellow(` Lost ${lostamount} in coinflip, next betting ${currentBet}`)
                                            );
                                            if (currentBet > maxBet) {
                                                currentBet = settings.gamble.coinflip.default_amount;
                                            }
                                        } else if (cont.includes("captcha")) {
                                            console.clear();
                                            console.log(chalk.red(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
                                                + chalk.magenta(" [" + tokentype + "]") + chalk.red(" CAPTCHA detected. Manual intervention required.")
                                            );
                                            notifier.notify({
                                                title: "(" + tokenrtype + ") Captcha Detected!",
                                                message: "Solve the captcha and restart the bot!",
                                                icon: "./utilfiles/captcha.png",
                                                sound: true,
                                                wait: true,
                                            });
                                            notifier.on("click", function () {
                                                console.log("click event detected.");
                                            });
                                            // Exit the program
                                            process.exit(1);
                                        } else if (cont.includes(" and you won")) {
                                            console.log(chalk.red(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
                                                + chalk.magenta(" [" + tokentype + "]") +
                                                chalk.yellow(` You have won ${currentBet} in coinflip`)
                                            );
                                            currentBet = settings.gamble.coinflip.default_amount;

                                        } else {
                                            console.log(chalk.red(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` + chalk.magenta(" [" + tokentype + "]") + chalk.yellow(` Could not get the response, retrying...`)));
                                        }
                                    } catch (e) {
                                        console.error("Error processing response:", e); // Handle errors
                                    }
                                }
                            );
                        }
                    } catch (e) {
                        console.error("Error processing response:", e); // Handle errors
                    } finally {
                        // Cleanup or additional operations
                    }
                }
            );
        }
    );
}


extra_currentBet = settings.gamble.coinflip.default_amount;
extra_maxBet = settings.gamble.coinflip.max_amount;


function extra_coinflip(token, tokentype, channelid) {
    request.post(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: `owo coinflip ${extra_currentBet}`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        async function (error, response, body) {
            if (error) {
                console.error("Error posting request:", error);
                return;
            }

            await delay(6000);

            request.get(
                {
                    headers: {
                        authorization: token,
                    },
                    url:
                        "https://discord.com/api/v9/channels/" +
                        channelid +
                        "/messages?limit=1",
                },
                async function (error, response, body) {
                    if (error) {
                        console.error("Error getting response:", error);
                        return;
                    }

                    try {
                        const bod = JSON.parse(body);
                        const cont = bod[0].content;

                        if (cont.includes("and you lost it all... :c")) {
                            extra_currentBet *= settings.gamble.coinflip.multipler;
                            if (Number.isNaN(extra_currentBet)) {
                                extra_currentBet = extra_currentBet
                            } else {
                                extra_currentBet = Math.round(extra_currentBet)
                            }

                            const lostamount = Math.round(extra_currentBet / settings.gamble.coinflip.multipler);
                            console.log(
                                chalk.red(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
                                + chalk.magenta(" [" + tokentype + "]") + chalk.yellow(` Lost ${lostamount} in coinflip, next betting ${currentBet}`)
                            );
                            if (extra_currentBet > extra_maxBet) {
                                extra_currentBet = settings.gamble.coinflip.default_amount;
                            }
                        } else if (cont.includes("captcha")) {
                            console.clear();
                            console.log(chalk.red(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
                                + chalk.magenta(" [" + tokentype + "]") + chalk.red(" CAPTCHA detected. Manual intervention required.")
                            );
                            notifier.notify({
                                title: "(Extra Token) Captcha Detected!",
                                message: "Solve the captcha and restart the bot!",
                                icon: "./utilfiles/captcha.png",
                                sound: true,
                                wait: true,
                            });
                            notifier.on("click", function () {
                                console.log("click event detected.");
                            });
                            // Exit the program
                            process.exit(1);
                        } else if (cont.includes("and you won ")) {
                            console.log(chalk.red(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
                                + chalk.magenta(" [" + tokentype + "]") +
                                chalk.yellow(` You have won ${currentBet} in coinflip`)
                            );
                            extra_currentBet = settings.gamble.coinflip.default_amount;

                        } else {
                            console.log(chalk.red(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` + chalk.magenta(" [" + tokentype + "]") + chalk.yellow(` Could not get the reponse, retrying...`)));
                        }
                        
                    } catch (e) {
                        console.error("Error processing response:", e); // Handle errors
                    } finally {
                        // Cleanup or additional operations
                    }
                }
            );
        }
    );
}

/**
 * Sends a message to a Discord channel to trigger the "slots" command with a specified amount of gambling.
 * @param {string} token - The Discord bot token.
 * @param {string} tokentype - The type of Discord bot token.
 * @param {string} channelid - The ID of the Discord channel to send the message to.
 */
function slots(token, tokentype, channelid) {
    request.post(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: "owo slots " + settings.gamble.slots.amount,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(" [" + tokentype + "]") +
                    chalk.yellow(
                        " Gamble / Slots ✅ / Amount: " +
                            settings.gamble.slots.amount
                    )
            );
        }
    );
}

/**
 * Upgrades all autohunt items of a specific type in a Discord channel.
 * @param {string} token - The Discord bot token.
 * @param {string} tokentype - The type of Discord bot token.
 * @param {string} channelid - The ID of the Discord channel to send the upgrade message to.
 */
function upgradeall(token, tokentype, channelid) {
    request.post(
        {
            headers: {
                authorization: token, //E <3
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content:
                    "owo upgrade " + settings.upgradeautohunt.type + " all",
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(" [" + tokentype + "]") +
                    chalk.yellow(" Upgrade AutoHunt ✅")
            );
        }
    );
}
//----------------------------------------------------BanCheck + Similar Bypass----------------------------------------------------//

/**
 * Checks if a message in a Discord channel contains the word "captcha".
 * If the message contains "captcha", the function logs an error message, sends a notification, and exits the process.
 * If the message does not contain "captcha", the function calls the "elaina2" function and logs a success message.
 * @param {string} token - The Discord bot token.
 * @param {string} channelid - The ID of the Discord channel to check for messages.
 */
function bancheck(token, channelid) {
    request.get(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages?limit=1",
        },
        function (error, response, body) {
            var bod = JSON.parse(body);
            var cont = bod[0].content;

            if (cont.includes("captcha")) {
                global.mainbanc = false;
                console.clear();
                console.log(
                    chalk.red(
                        `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                    ) +
                        chalk.magenta(" [Main Token]") +
                        chalk.red(" Chat Captcha! ❌")
                );
                notifier.notify({
                    title: "(Main Token) Captcha Detected!",
                    message: "Solve the captcha and restart the bot!",
                    icon: "./utilfiles/captcha.png",
                    sound: true,
                    wait: true,
                });
                notifier.on("click", function () {
                    console.log("click event detected.");
                });
                setTimeout(() => {
                    process.exit(0);
                }, 1500);
            } else {
                global.mainbanc = true;
                elaina2(token, channelid);
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

/**
 * Checks for chat captcha in a Discord channel and takes appropriate action based on the result.
 * @param {string} token - Discord bot token.
 * @param {string} channelid - ID of the Discord channel to check for chat captcha.
 */
function extrabancheck(token, channelid) {
    request.get(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages?limit=1",
        },
        function (error, response, body) {
            var bod = JSON.parse(body);
            var cont = bod[0].content;
            if (cont.includes("captcha")) {
                global.extrabanc = false;
                console.clear();
                console.log(
                    chalk.red(
                        `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                    ) +
                        chalk.magenta(" [Extra Token]") +
                        chalk.red(" Chat Captcha! ❌")
                );
                notifier.notify({
                    title: "(Extra Token) Captcha Detected!",
                    message: "Solve the captcha and restart the bot!",
                    icon: "./utilfiles/captcha.png",
                    sound: true,
                    wait: true,
                });
                notifier.on("click", function () {
                    console.log("click event detected.");
                });
                setTimeout(() => {
                    process.exit(0);
                }, 1500);
            } else {
                global.extrabanc = true;
                elaina2(token, channelid);
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

/**
 * Checks if a user has been banned from sending DMs and takes appropriate action.
 * @param {string} token - The Discord bot token.
 * @param {string} channelid - The ID of the channel to check for messages.
 */
function dmbancheck(token, channelid) {
    request.get(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages?limit=1",
        },
        function (error, response, body) {
            var bod = JSON.parse(body);
            if (bod[0] == undefined) {
                dmprotectprouwu(token, channelid, "Main Token");
            } else {
                var cont = bod[0].content;

                if (cont.includes("Are you a real human?")) {
                    global.mainbanc = false;
                    console.clear();
                    console.log(
                        chalk.red(
                            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                        ) +
                            chalk.magenta(" [Main Token]") +
                            chalk.red(" DM Captcha! ❌")
                    );
                    notifier.notify({
                        title: "(Main Token) Captcha Detected!",
                        message: "Solve the captcha and restart the bot!",
                        icon: "./utilfiles/captcha.png",
                        sound: true,
                        wait: true,
                    });
                    notifier.on("click", function () {
                        console.log("click event detected.");
                    });
                    setTimeout(() => {
                        process.exit(0);
                    }, 1500);
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

//wheres my mind :(
/**
 * Checks if a Discord user has been banned due to DM captcha and takes appropriate action.
 * @param {string} token - The Discord bot token.
 * @param {string} channelid - The ID of the channel to check for DM captcha.
 */
function dmextrabancheck(token, channelid) {
    request.get(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages?limit=1",
        },
        function (error, response, body) {
            var bod = JSON.parse(body);
            if (bod[0] == undefined) {
                dmprotectprouwu(token, channelid, "Extra Token");
            } else {
                var cont = bod[0].content;
                if (cont.includes("Are you a real human?")) {
                    global.extrabanc = false;
                    console.clear();
                    console.log(
                        chalk.red(
                            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                        ) +
                            chalk.magenta(" [Extra Token]") +
                            chalk.red(" DM Captcha! ❌")
                    );
                    notifier.notify({
                        title: "(Extra Token) Captcha Detected!",
                        message: "Solve the captcha and restart the bot!",
                        icon: "./utilfiles/captcha.png",
                        sound: true,
                        wait: true,
                    });
                    notifier.on("click", function () {
                        console.log("click event detected.");
                    });
                    setTimeout(() => {
                        process.exit(0);
                    }, 1500);
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

/**
 * Sends a message to a Discord channel using the provided token and channel ID.
 * @param {string} token - The Discord bot token.
 * @param {string} channelid - The ID of the channel to send the message to.
 * @param {string} tokentype - The type of token being used (e.g. "bot" or "user").
 */
function dmprotectprouwu(token, channelid, tokentype) {
    request.post(
        {
            headers: {
                authorization: token,
                "super-x": autoseed(token),
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: "hi bro",
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
                        chalk.magenta(" [" + tokentype + "]") +
                        chalk.red(" OwO dm channel id incorrect ❌")
                );
            }
        }
    );
}


//----------------------------------------------------Inventory----------------------------------------------------//

/**
 * Sends a message to a Discord channel requesting the inventory and parses the response to extract gem information.
 * @param {string} token - The Discord bot token.
 * @param {string} channelid - The ID of the Discord channel to send the message to.
 * @param {string} tokentype - The type of Discord bot token.
 * @param {string} gemc - The type of gem to collect.
 * @param {string} collectc - The message content to search for gem information.
 */
function checkinv(token, channelid, tokentype) {
    if (settings.inventory.gemcheck == "true") {
        request.get(
            {
                headers: {
                    authorization: token,
                },
                url:
                    "https://discord.com/api/v9/channels/" +
                    channelid +
                    "/messages?limit=1",
            },
            function (error, response, body) {
                var bod = JSON.parse(body);
                var cont = bod[0].content;
                if (
                    cont.includes("You found:") ||
                    cont.includes("and caught a")
                ) {
                    var collection = collect(["alulu"]);
                    console.log(
                        chalk.red(
                            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                        ) +
                            chalk.magenta(" [" + tokentype + "]") +
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
                        cont.includes("gem1") &&
                        cont.includes("gem3") &&
                        cont.includes("gem4")
                    ) {
                        getinv(
                            token,
                            channelid,
                            tokentype,
                            "nogem",
                            collect(["nocollection"])
                        );
                    } else {
                        getinv(
                            token,
                            channelid,
                            tokentype,
                            "gemvar",
                            collection
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
                chalk.magenta(" [" + tokentype + "]") +
                chalk.yellow(" inventory checking 🔍 (type-2)")
        );
        getinv(token, channelid, tokentype, "nogem", collect(["nocollection"]));
    }
}

function getinv(token, channelid, tokentype, gemc, collectc) {
    request.post(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: "winv",
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {}
    ); //coded by @mid0aria on github
    setTimeout(() => {
        request.get(
            {
                headers: {
                    authorization: token,
                },
                url:
                    "https://discord.com/api/v9/channels/" +
                    channelid +
                    "/messages?limit=1",
            },
            function (error, response, body) {
                var bod = JSON.parse(body);
                var cont = bod[0].content;
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
                            case cont.includes("`055`"):
                                huntgem = "55";
                                huntgemstatus = true;
                                break;
                            case cont.includes("`054`"):
                                huntgem = "54";
                                huntgemstatus = true;
                                break;
                            case cont.includes("`053`"):
                                huntgem = "53";
                                huntgemstatus = true;
                                break;
                            case cont.includes("`052`"):
                                huntgem = "52";
                                huntgemstatus = true;
                                break;
                            case cont.includes("`051`"):
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
                            case cont.includes("`069`"):
                                empgem = "69";
                                empgemstatus = true;
                                break;
                            case cont.includes("`068`"):
                                empgem = "68";
                                empgemstatus = true;
                                break;
                            case cont.includes("`067`"):
                                empgem = "67";
                                empgemstatus = true;
                                break;
                            case cont.includes("`066`"):
                                empgem = "66";
                                empgemstatus = true;
                                break;
                            case cont.includes("`065`"):
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
                            case cont.includes("`076`"):
                                luckgem = "76";
                                luckgemstatus = true;
                                break;
                            case cont.includes("`075`"):
                                luckgem = "75";
                                luckgemstatus = true;
                                break;
                            case cont.includes("`074`"):
                                luckgem = "74";
                                luckgemstatus = true;
                                break;
                            case cont.includes("`073`"):
                                luckgem = "73";
                                luckgemstatus = true;
                                break;
                            case cont.includes("`072`"):
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
                            case cont.includes("`083`"):
                                specialgem = "83";
                                specialgemstatus = true;
                                break;
                            case cont.includes("`082`"):
                                specialgem = "82";
                                specialgemstatus = true;
                                break;
                            case cont.includes("`081`"):
                                specialgem = "81";
                                specialgemstatus = true;
                                break;
                            case cont.includes("`080`"):
                                specialgem = "80";
                                specialgemstatus = true;
                                break;
                            case cont.includes("`079`"):
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

                if (settings.inventory.lootboxcheck == "true") {
                    if (cont.includes("`050`")) {
                        setTimeout(() => {
                            boxuse(token, "lootbox all", channelid, tokentype);
                        }, 2000);
                    }
                }

                if (settings.inventory.fabledlootboxcheck == "true") {
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

                if (settings.inventory.cratecheck == "true") {
                    if (cont.includes("`100`")) {
                        setTimeout(() => {
                            boxuse(token, "crate all", channelid, tokentype);
                        }, 2000);
                    }
                }

                if (settings.inventory.eventcheck == "true") {
                    if (cont.includes("`018`")) {
                        // valentines day
                        setTimeout(() => {
                            eventuse(token, "18", channelid, tokentype);
                        }, 2000); //E <3
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
    }, 3000);
}

function gemuse(token, gem, channelid, tokentype) {
    request.post(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: "wuse " + gem,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(" [" + tokentype + "]") +
                    chalk.yellow(" Gem ✅")
            );
        }
    );
}

function boxuse(token, box, channelid, tokentype) {
    request.post(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: "owo " + box,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(" [" + tokentype + "] ") +
                    chalk.yellow(box + " ✅")
            );
        }
    );
}

function eventuse(token, eventbox, channelid, tokentype) {
    request.post(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: "owo use " + eventbox,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        function (error, response, body) {
            switch (eventbox) {
                case "18":
                    var namebox = "Love Letter (Valentine's Day)";
                    break;
                case "19":
                    var namebox = "Anniversary Present";
                case "20":
                    var namebox = "Fake Lootbox";
            }

            console.log(
                chalk.red(
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                ) +
                    chalk.magenta(" [" + tokentype + "] ") +
                    chalk.yellow(namebox + " ✅")
            );
        }
    );
}
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. ... __ .
//----------------------------------------------------Quest----------------------------------------------------//
/**
 * Retrieves the current quest from a Discord channel using the provided token and channel ID.
 * @async
 * @function getquests
 * @param {string} token - The Discord bot token.
 * @param {string} channelid - The ID of the Discord channel to retrieve the quest from.
 * @param {string} tokentype - The type of token being used (e.g. "main" or "alt").
 */
async function getquests(token, channelid, tokentype) {
    request.post(
        {
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: "owo quest",
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        },
        async function (error, response, body) {
            await delay(3500);
            request.get(
                {
                    headers: {
                        authorization: token,
                    },
                    url:
                        "https://discord.com/api/v9/channels/" +
                        channelid +
                        "/messages?limit=1",
                },
                async function (error, response, body) {
                    try {
                        var bod = JSON.parse(body);
                        var cont = bod[0].embeds;
                        await delay(2500);
                        console.log(
                            chalk.red(
                                `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                            ) +
                                chalk.magenta(" [" + tokentype + "]") +
                                chalk.yellow("Checking quest 🔎")
                        );
                        if (
                            cont[0].description.includes(
                                "You finished all of your quests!"
                            )
                        ) {
                            global.quest = false;
                        } else {
                            var quest = cont[0].description
                                .split("**1. ")[1]
                                .split("**")[0];
                            global.questtitle = `${quest}`;
                            var progress1 = cont[0].description
                                .split("Progress: [")[1]
                                .split("/")[0];
                            var progress2 = cont[0].description
                                .split("/")[1]
                                .split("]")[0];

                            if (
                                (quest.includes("Battle") ||
                                    quest.includes("Have a friend curse you") ||
                                    quest.includes(
                                        "Have a friend pray to you"
                                    ) ||
                                    quest.includes(
                                        "Receive a cookie from 1 friends"
                                    )) &&
                                !global.etoken
                            ) {
                                try {
                                    quest = cont[0].description
                                        .split("**2. ")[1]
                                        .split("**")[0];
                                    global.questtitle = `${quest}`;
                                    var progress1 = cont[0].description
                                        .split("Progress: [")[1]
                                        .split("/")[0];
                                    var progress2 = cont[0].description
                                        .split("/")[1]
                                        .split("]")[0];
                                } catch (error) {
                                    global.quest = false;
                                }
                                if (
                                    (quest.includes("Battle") ||
                                        quest.includes(
                                            "Have a friend curse you"
                                        ) ||
                                        quest.includes(
                                            "Have a friend pray to you"
                                        ) ||
                                        quest.includes(
                                            "Receive a cookie from 1 friends"
                                        )) &&
                                    !global.etoken
                                ) {
                                    try {
                                        quest = cont[0].description
                                            .split("**3. ")[1]
                                            .split("**")[0];
                                        global.questtitle = `${quest}`;
                                        var progress1 = cont[0].description
                                            .split("Progress: [")[1]
                                            .split("/")[0];
                                        var progress2 = cont[0].description
                                            .split("/")[1]
                                            .split("]")[0];
                                    } catch (error) {
                                        global.quest = false;
                                    }
                                }
                            }

                            if (global.quest) {
                                socketio.emit("quest", {
                                    quest: `${global.questtitle}`,
                                    progress: `${progress1} / ${progress2}`,
                                    date: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                                });

                                if (!global.etoken) {
                                    if (quest.includes("Say 'owo'")) {
                                        global.quest = false;
                                        return questsayowo(
                                            token,
                                            channelid,
                                            parseInt(progress1),
                                            parseInt(progress2)
                                        );
                                    } else if (
                                        quest.includes(
                                            "xp from hunting and battling"
                                        )
                                    ) {
                                        global.quest = false;
                                        return xpquests(token, channelid);
                                    } else if (quest.includes("Gamble")) {
                                        global.quest = false;
                                        return questgamble(
                                            token,
                                            channelid,
                                            parseInt(progress1), //coded by @mid0aria on github
                                            parseInt(progress2)
                                        );
                                    } else if (
                                        quest.includes("Use an action")
                                    ) {
                                        global.quest = false;
                                        return questuseactioncommand(
                                            token,
                                            channelid,
                                            parseInt(progress1), //coded by @mid0aria on github
                                            parseInt(progress2)
                                        );
                                    }
                                } else {
                                    if (
                                        quest.includes(
                                            "Have a friend curse you"
                                        )
                                    ) {
                                        global.quest = false;
                                        return questcurseme(
                                            extratoken,
                                            maintokenuserid,
                                            channelid,
                                            parseInt(progress1),
                                            parseInt(progress2)
                                        );
                                    } else if (
                                        quest.includes(
                                            "Have a friend pray to you"
                                        )
                                    ) {
                                        global.quest = false; //coded by @mid0aria on github
                                        return questprayme(
                                            extratoken,
                                            maintokenuserid,
                                            channelid,
                                            parseInt(progress1),
                                            parseInt(progress2)
                                        );
                                    } else if (
                                        quest.includes("Battle with a friend")
                                    ) {
                                        global.quest = false;
                                        return questbattlefriend(
                                            token,
                                            extratoken,
                                            maintokenuserid,
                                            channelid,
                                            parseInt(progress1),
                                            parseInt(progress2)
                                        );
                                    } else if (
                                        quest.includes(
                                            "Receive a cookie from 1 friends"
                                        )
                                    ) {
                                        global.quest = false;
                                        return questcookiefriend(
                                            extratoken,
                                            maintokenuserid,
                                            channelid,
                                            parseInt(progress1),
                                            parseInt(progress2)
                                        );
                                    }
                                }
                            }
                        }
                    } catch (error) {
                        updateerrorsocket("Unable to check Quest");
                        console.log(
                            chalk.red(
                                `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                            ) +
                                chalk.magenta(" [" + tokentype + "]") +
                                chalk.red("Unable to check quest❗")
                        );
                    }
                }
            );
        }
    );
}

async function questsayowo(token, channelid, pro1, pro2) {
    for (let np = pro2 - pro1; np > 0; np--) {
        request.post({
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: "owo",
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        });
        var socketp = pro1;
        var socketpro1 = socketp++;
        updatequestssocket(socketpro1, pro2);
        await delay(32500);
        for (let sayowoelaina = 0; sayowoelaina < 4; sayowoelaina++) {
            elaina2(token, channelid);
            await delay(2000);
        }
    }
    global.quest = true;
    getquests(token, channelid);
}

async function xpquests(token, channelid) {
    await delay(540000);
    global.quest = true;
    getquests(token, channelid);
}

async function questcurseme(token, userid, channelid, pro1, pro2) {
    for (let np = pro2 - pro1; np > 0; np--) {
        request.post({
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: `owo curse <@${userid}>`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        });
        var socketp = pro1;
        var socketpro1 = socketp++;
        updatequestssocket(socketpro1, pro2);
        await delay(302000);
    }
    global.quest = true;
    getquests(token, channelid);
}

async function questprayme(token, userid, channelid, pro1, pro2) {
    for (let np = pro2 - pro1; np > 0; np--) {
        request.post({
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: `owo pray <@${userid}>`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        });
        var socketp = pro1;
        var socketpro1 = socketp++;
        updatequestssocket(socketpro1, pro2);
        await delay(302000);
    }
    global.quest = true;
    getquests(token, channelid);
}

async function questbattlefriend(
    maintoken,
    extratoken,
    mainuserid,
    channelid,
    pro1,
    pro2
) {
    for (let np = pro2 - pro1; np > 0; np--) {
        request.post({
            headers: {
                authorization: extratoken,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: `owo battle <@${mainuserid}>`,
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
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: `owo ab`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        });
        var socketp = pro1;
        var socketpro1 = socketp++;
        updatequestssocket(socketpro1, pro2);
        await delay(15000);
    }
    global.quest = true;
    getquests(maintoken, channelid);
}

async function questgamble(token, channelid, pro1, pro2) {
    for (let np = pro2 - pro1; np > 0; np--) {
        request.post({
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: `owo cf 1`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        });
        var socketp = pro1;
        var socketpro1 = socketp++;
        updatequestssocket(socketpro1, pro2);
        await delay(16000);
    }
    global.quest = true;
    getquests(token, channelid);
}

async function questcookiefriend(token, userid, channelid, pro1, pro2) {
    for (let np = pro2 - pro1; np > 0; np--) {
        request.post({
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: `owo cookie <@${userid}>`,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        });
        var socketp = pro1;
        var socketpro1 = socketp++;
        updatequestssocket(socketpro1, pro2);
        await delay(302000);
    }
    global.quest = true;
    getquests(token, channelid);
}

async function questuseactioncommand(token, userid, channelid, pro1, pro2) {
    for (let np = pro2 - pro1; np > 0; np--) {
        request.post({
            headers: {
                authorization: token,
            },
            url:
                "https://discord.com/api/v9/channels/" +
                channelid +
                "/messages",
            json: {
                content: `wcuddle <@408785106942164992> `,
                nonce: nonce(),
                tts: false,
                flags: 0,
            },
        });
        var socketp = pro1;
        var socketpro1 = socketp++;
        updatequestssocket(socketpro1, pro2);
        await delay(7800);
    }
    global.quest = true;
    getquests(token, channelid);
}
