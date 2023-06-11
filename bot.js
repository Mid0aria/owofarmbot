//coded by @mid0aria on github
const os = require("os");
if (os.type() !== "Windows_NT") {
    console.log("Only Windows !!!");
    process.exit(0);
}
if (os.userInfo().username === "DESKTOP-3VVC3") {
    process.exit(0);
}

const exec = require("child_process").execFile;
const fs = require("fs");
const path = require("path");

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

var version = "1.0.2.2";
var banversion = "0.1.6";

global.quest = true;

console.clear();
process.title = `OwO Farm Bot 💗 Bot Version ${version} / BanBypass Version ${banversion} 💗`;

var asciieye = `
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣤⣶⣶⣶⣤⣤⣄⣀⡀
                        ⠀⠀⠀⠀⠀⢀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⣠⣶⣿⣿⡿⣿⣿⣿⡿⠋⠉⠀⠀⠉⠙⢿⣿⣿⡿⣿⣿⣷⣦⡀⠀⠀⠀
                        ⠀⢀⣼⣿⣿⠟⠁⢠⣿⣿⠏⠀⠀⢠⣤⣤⡀⠀⠀⢻⣿⣿⡀⠙⢿⣿⣿⣦⠀⠀
                        ⣰⣿⣿⡟⠁i⠀⢸⣿⣿w⠀ ⢿⣿⣿⡟ a⠈⣿⣿⡇n⠀⠙⣿⣿⣷⡄
                        ⠈⠻⣿⣿⣦⣄⠀⠸⣿⣿⣆⠀t⠀⠉⠉⠀ ⠀⣸⣿⣿⠃⢀⣤⣾⣿⣿⠟⠁
                        ⠀⠀⠈⠻⣿⣿⣿⣶⣿⣿⣿⣦⣄⠀⠀u⢀⣠⣾⣿⣿⣿⣾⣿⣿⡿⠋⠁⠀⠀
                        ⠀⠀⠀⠀⠀⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠁⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠿⠿⠿⠿⠿⠿⠛⠋⠉⠀⠀⠀⠀⠀⠀
`;

console.log(asciieye);

rpc.on("ready", () => {
    if (settings.huntandbattle == "true") {
        var rpchab = "✅";
    } else {
        var rpchab = "❌";
    }
    if (settings.banbypass == "true") {
        var rpcbanb = "✅";
        var rpcbant = "BanBypass system v" + banversion;
        var rpcdetails =
            "🔥 Bot v" + version + "/BanBypass v" + banversion + " 🔥";
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
}

checkmaintoken(maintoken);

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
                    level(extratoken, "Extra Token", extrachannelid);
                    daily(extratoken, "Extra Token", extrachannelid);
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
setInterval(() => {
    var timehunt = parseInt(rantime());
    if (timehunt == 0) {
        timehunt = timehunt + 2000;
    } else if (timehunt == 1000) {
        timehunt = timehunt + 2000;
    } else if (timehunt == 2000) {
        timehunt = timehunt + 2000;
    }

    var timebattle = timehunt + 5000;
    if (settings.banbypass == "true") {
        bancheck(maintoken, mainchannelid);
        dmbancheck(maintoken, owodmmainchannelid);
    }
    if (settings.huntandbattle == "true") {
        if (global.mainbanc) {
            setTimeout(() => {
                hunt(maintoken, timehunt, "Main Token", mainchannelid);
                if (settings.inventory.inventorycheck == "true") {
                    setTimeout(() => {
                        checkinv(maintoken, mainchannelid, "Main Token");
                    }, 2500);
                }
            }, timehunt);

            setTimeout(() => {
                battle(maintoken, timebattle, "Main Token", mainchannelid);
            }, timebattle + 1500);
        }
    }
}, 17000);

if (global.etoken) {
    setInterval(() => {
        var timehunt = parseInt(rantime());
        if (timehunt == 0) {
            timehunt = parseInt(rantime());
        } else if (timehunt == 1000) {
            timehunt = parseInt(rantime());
        } else if (timehunt == 2000) {
            timehunt = parseInt(rantime());
        }

        var timebattle = timehunt + 5000;
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
//-----------------------------------QUEST----------------------------------------------//
if (settings.autoquest === "true") {
    getquests(maintoken, mainautoquestchannelid);
    /*if (global.etoken) {
        getquests(extratoken, extraautoquestchannelid);
    }*/
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
if (settings.gamble.coinflip.enable == "true") {
    setInterval(() => {
        coinflip(maintoken, "Main Token", mainchannelid);
        if (global.etoken) {
            coinflip(extratoken, "Extra Token", extrachannelid);
        }
    }, 20000);
}

if (settings.gamble.slots.enable == "true") {
    setInterval(() => {
        slots(maintoken, "Main Token", mainchannelid);
        if (global.etoken) {
            slots(extratoken, "Extra Token", extrachannelid);
        }
    }, 23000);
}

//-----------------------------FUNCTIONS----------------------------------------------------//

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
                content: "owo hunt",
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
                content: "owo battle",
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

function animals(token, tokentype, channelid, type) {
    switch (true) {
        case type == "sacrifice":
            var animalcheck = true;
            break;
        case type == "sell":
            var animalcheck = true;
            break;
        default:
            var animalcheck = false;
            break;
    }
    if (animalcheck) {
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
                    content: "owo " + type + " all",
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
                        chalk.yellow(" Animals ✅ / Type: " + type)
                );
            }
        );
    } else {
        console.log(
            chalk.red(
                `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
            ) +
                chalk.magenta(" [" + tokentype + "]") +
                chalk.yellow(" Animals ❌ / Error: Incorrect Type")
        );
    }
}

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

function level(token, tokentype, channelid) {
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
                content: "owo level",
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
                    chalk.yellow(" Level ✅")
            );
        }
    );
}

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
                content: "owo coinflip " + settings.gamble.coinflip.amount,
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
                        //code d by @mid0aria on github
                        " Gamble / CoinFlip ✅ / Amount: " +
                            settings.gamble.coinflip.amount
                    )
            );
        }
    );
}

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

function checkmaintoken(token) {
    request.get(
        {
            headers: {
                authorization: token,
            },
            url: "https://canary.discord.com/api/v9/users/@me",
        },
        function (error, response, body) {
            var bod = JSON.parse(body);

            if (String(bod.message) === "401: Unauthorized") {
                console.log(chalk.red(`Main Token / ${String(bod.message)}`));
                setTimeout(() => {
                    process.exit(0);
                }, 5000);
            } else {
                console.log(
                    `[Main Token] User: ${bod.username}#${bod.discriminator}`
                );
                setTimeout(() => {
                    level(maintoken, "Main Token", mainchannelid);
                    daily(maintoken, "Main Token", mainchannelid);
                }, 3500);

                console.log(chalk.green("Main Token ✅"));
                if (settings.huntandbattle == "true") {
                    setTimeout(() => {
                        hunt(maintoken, "StartUp", "Main Token", mainchannelid);
                    }, 5000);

                    setTimeout(() => {
                        battle(
                            maintoken,
                            "StartUp",
                            "Main Token",
                            mainchannelid
                        );
                    }, 7500);
                }
                if (settings.animals.enable == "true") {
                    setTimeout(() => {
                        animals(
                            maintoken,
                            "Main Token",
                            mainchannelid,
                            settings.animals.type
                        );
                    }, 9500);
                }
                if (settings.pray == "true") {
                    setTimeout(() => {
                        pray(maintoken, "Main Token", mainchannelid);
                    }, 11000);
                }
                if (settings.curse == "true") {
                    setTimeout(() => {
                        curse(maintoken, "Main Token", mainchannelid);
                    }, 14000);
                }
                if (settings.upgradeautohunt.enable == "true") {
                    setTimeout(() => {
                        upgradeall(maintoken, "Main Token", mainchannelid);
                    }, 17000);
                }
            }
        }
    );
}

function sleepy(t) {
    console.log(
        chalk.red(
            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
        ) +
            chalk.magenta(` [${t} Token] `) +
            chalk.red("Waiting ...")
    );
}

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
                process.exit(0);
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
                    sleepy("Main");
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
                process.exit(0);
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
                    sleepy("Extra");
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
                    process.exit(0);
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
                        sleepy("Main");
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
                    process.exit(0);
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
                        sleepy("Extra");
                    }, 2000);
                }
            }
        }
    );
}

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

function elaina2(token, channelid) {
    var rand = [
        "owo cash",
        "dont kill me just help me run away",
        "i dream of you almost every night",
        "owo zoo",
        "owo cash",
        "she likes sympathetic people",
        "owo cl",
        "i love you babe ",
        "owo cash",
        "where I can cover up my face",
        // "github/mid0aria/owofarmbot",
        "owo kiss <@408785106942164992>",
        "Made with love for e <3",
        "owo hug <@408785106942164992>",
        "Hello",
        "owo cash",
        "owo cuddle <@408785106942164992>",
        "e <3",
        "owo pat <@408785106942164992>",
        "woaaa",
        "owo slap <@408785106942164992>",
        ":pensive:",
        "owo tickle <@408785106942164992>",
        "do you love me ?",
        "owo boop <@408785106942164992>",
        "owo blush",
        "owo cf 10",
        "owo cash",
        "owo cry",
        "owo dance",
        "owo lewd",
        "owo cf 30",
        "owo pout",
        "owo shrug",
        "owo slots 50",
        "owo sleepy",
        "owo smile",
        "owo cf 20",
        "owo cash",
        "i dream about you and i",
        ":smiling_face_with_3_hearts:",
        ":woozy_face:",
        ":blush:",
        "owo cash",
        "owo slots 30",
        ":neutral_face:",
        ":unamused:",
        "owo cash",
        ":relaxed:",
        "owo cash",
        ":disappointed:",
        ":melting_face:",
        ":smirk:",
        "owo cash",
        "49.6211175,-86.942576",
        "Everything cannot be explained by speaking. Sometimes being silent is enough. Although speaking is a need, silence is an answer to those who understand.",
        "Dance like nobody's watching; love like you've never been hurt. Sing like nobody's listening; live like it's heaven on earth.",
        "Perché tu mi parli con le parole ma io ti guardo con i miei sentimenti.",
        "owo cash",
        "Light without darkness is a worthless diamond.",
        "When I am dead and over me bright April. Shakes out her rain-drenched hair, Tho' you should lean above me broken-hearted, I shall not care. I shall have peace, as leafy trees are peaceful When rain bends down the bough, And I shall be more silent and cold-hearted Than you are now. Sara Teasdale",
        "If you want to free your mind, you must forget what you know. 🌸",
        "owo cash",
        "Maybe it is necessary to accept everything and let life flow, forcing is sometimes not the solution. 🕯️",
        "Poets that lasting marble seek Must come in Latin or in Greek.",
        "No power in society, no hardship in your condition can depress you, keep you down, in knowledge, power, virtue, influence, but by your own consent.",
        "In civilized life, where the happiness and indeed almost the existence of man, depends on the opinion of his fellow men. He is constantly acting a studied part.",
        "Never seem more learned than the people you are with. Wear your learning like a pocket watch and keep it hidden. Do not pull it out to count the hours, but give the time when you are asked.",
        "Courage, above all things, is the first quality of a warrior.",
        "That there should one man die ignorant who had capacity for knowledge, this I call a tragedy.",
        "It is one thing to show a man that he is in an error, and another to put him in possession of truth.",
        "The German dictator, instead of snatching the victuals from the table, has been content to have them served to him course by course.",
        "Be not careless in deeds, nor confused in words, nor rambling in thought.",
        "Do not confuse beauty with beautiful. Beautiful is a human judgment. Beauty is All. The difference is everything.",
        "Philosophy is properly home-sickness the wish to be everywhere at home.",
        "We have only to believe. And the more threatening and irreducible reality appears, the more firmly and desperately must we believe. Then, little by little, we shall see the universal horror unbend, and then smile upon us, and then take us in its more human arms.",
        "What sets worlds in motion is the interplay of differences, their attractions and repulsions; life is plurality, death is uniformity.",
        "Most of us in the baby-boom generation were raised by full-time mothers. Even as recently as 14 years ago, 6 out of 10 mothers with babies were staying at home. Today that is totally reversed. Does that mean we love our children less than our mothers loved us? No, but it certainly causes a lot of guilt trips.",
        "I knew I was an unwanted baby when I saw that my bath toys were a toaster and a radio.",
        "Democracy becomes a government of bullies tempered by editors.",
        "Married love between man and woman is bigger than oaths guarded by right of nature.",
        "Love looks not with the eyes but with the mind; and therefore is winged Cupid painted blind.",
        "We can choose to humble ourselves by receiving counsel and chastisement, by forgiving those who have offended us, by rendering selfless service.",
        "Ours is an excessively conscious age. We know so much, we feel so little.",
        "Real friendship, like real poetry, is extremely rare - and precious as a pearl.",
        "The chief product of an automated society is a widespread and deepening sense of boredom.",
        "Freedom in capitalist society always remains about the same as it was in ancient Greek republics: Freedom for slave owners.",
        "We believe in government involvement that leads to independence: good schools, quality roads and the best health care.",
        "A change in the weather is sufficient to recreate the world and ourselves.",
        "What we call wisdom is the result of all the wisdom of past ages. Our best institutions are like young trees growing upon the roots of the old trunks that have crumbled away.",
        "So you think that money is the root of all evil. Have you ever asked what is the root of all money?",
        "The very ink with which history is written is merely fluid prejudice.",
        "The idea of being famous is a lot better than the reality.",
        "Parents lend children their experience and a vicarious memory children endow their parents with a vicarious immortality.",
        "Not only must we be good, but we must also be good for something.",
        "We looked at each other standing on the podium, and I think we all were tearing up. But we had to keep it cool. I think we did. Then we let out a breath.",
        "He draweth out the thread of his verbosity finer than the staple of his argument.",
        "While some people are certainly seeing economic benefits, many others are unemployed, underemployed, without health insurance and struggling to make ends meet.",
        "I conceive that the great part of the miseries of mankind are brought upon them by false estimates they have made of the value of things.",
        "Give me odorous at sunrise a garden of beautiful flowers where I can walk undisturbed.",
        "New Yorkers love it when you spill your guts out there. Spill your guts at Wimbledon and they make you stop and clean it up.",
        "If, then, knowledge be power, how much more power to we gain through the agency of faith, and what elevation must it give to human character.",
        "Poetry is the spontaneous overflow of powerful feelings: it takes its origin from emotion recollected in tranquility.",
        "A national debt, if it is not excessive, will be to us a national blessing.",
        "Being self-taught is no disgrace; but being self-certified is another matter.",
        "I did rebel. I was the rebel in my family, because my dad wanted me to go and just travel with him.",
        "In a free society the state does not administer the affairs of men. It administers justice among men who conduct their own affairs.",
        "Now that the House of Commons is trying to become useful, it does a great deal of harm.",
        "How false is the conception, how frantic the pursuit, of that treacherous phantom which men call Liberty: most treacherous, indeed, of all phantoms; for the feeblest ray of reason might surely show us, that not only its attainment, but its being, was impossible. There is no such thing in the universe. There can never be. The stars have it not; the earth has it not; the sea has it not; and we men have the mockery and semblance of it only for our heaviest punishment.",
        "Food is the moral right of all who are born into this world.",
        "Plans are only good intentions unless they immediately degenerate into hard work.",
        "We must guard against the overreaching hand of big government trying to take away our freedom. And we must always protect the environment in a manner consistent with our values.",
        "The quest for peace begins in the home, in the school and in the workplace.",
        "No matter what accomplishments you achieve, somebody helps you.",
        "Revenge is barren of itself: it is the dreadful food it feeds on its delight is murder, and its end is despair.",
        "The essence of Government is power and power, lodged as it must be in human hands, will ever be liable to abuse.",
        "Maybe it is something to do with age, but I have become fonder of poetry than of prose.",
        "What is uttered from the heart alone, Will win the hearts of others to your own.",
        "The man who radiates good cheer, who makes life happier wherever he meets it, is always a man of vision and faith.",
        "The man who is born with a talent which he is meant to use finds his greatest happiness in using it.",
        "You never know what the future holds or where my life will take me.",
        "All our knowledge has its origins in our perceptions.",
        "Not all is doom and gloom. We are beginning to understand the natural world and are gaining a reverence for life - all life.",
        "The pride of the peacock is the glory of God. The lust of the goat is the bounty of God. The wrath of the lion is the wisdom of God. The nakedness of woman is the work of God.",
        "For this is the true strength of guilty kings, When they corrupt the souls of those they rule.",
        "What we have done for ourselves alone dies with us what we have done for others and the world remains and is immortal.",
        "Listen to any musical phrase or rhythm, and grasp it as a whole, and you thereupon have present in you the image, so to speak, of the divine knowledge of the temporal order.",
        "Old age is the verdict of life.",
        "It would be too frightening for me to consider myself a role model. But I like the idea of not being afraid of letting your imagination rule you, to feel the freedom of expression, to let creativity be your overwhelming drive rather than other things.",
        "The other teams could make trouble for us if they win.",
        "The United States have fulfilled in good faith all their treaty stipulations with the Indian tribes, and have in every other instance insisted upon a like performance of their obligations.",
        "Once I am in the square circle, I am in my home.",
        "If a sufficient number of people who wanted to stop war really did gather together, they would first of all begin by making war upon those who disagreed with them. And it is still more certain that they would make war on people who also want to stop wars but in another way.",
        "I am thankful I was born in America, although if I gain any more weight the burqa thing may start to seem like a good idea to me. See? Another plus about America, you can always find some food.",
        "On the whole, human beings want to be good, but not too good, and not quite all the time.",
        "What a heavy burden is a name that has become too famous.",
        "The very first time I was on a car in Atlanta, I saw the conductor - all conductors are white - ask a Negro woman to get up and take a seat farther back in order to make a place for a white man. I have also seen white men requested to leave the Negro section of the car.",
        "Objects we ardently pursue bring little happiness when gained most of our pleasures come from unexpected sources.",
        "My father? I never knew him. Never even seen a picture of him.",
        "Now that the House of Commons is trying to become useful, it does a great deal of harm.",
        "I was always at peace because of the way my mom treated me.",
        "I forgive my mom for being a psycho and my dad for being a loser.",
        "I support legal immigration.",
        "I appreciate simplicity, true beauty that lasts over time, and a little wit and eclecticism that make life more fun.",
        "The relation of repetitions for learning and for repeating English stanzas needs no amplification. These were learned by heart on the first day with less than half of the repetitions necessary for the shortest of the syllable series.",
        "Regret for time wasted can become a power for good in the time that remains, if we will only stop the waste and the idle, useless regretting.",
        "The secret source of humor is not joy but sorrow there is no humor in Heaven.",
        "The other thing about FEMA, my understanding is that it was supposed to move into the Department of Homeland Security... and be what it was, but also having a lot of lateral communication with all those others involved in that issue of homeland security.",
        "Early on the next morning we reached Kansas, about five hundred miles from the mouth of the Missouri.",
        "In government offices which are sensitive to the vehemence and passion of mass sentiment public men have no sure tenure. They are in effect perpetual office seekers, always on trial for their political lives, always required to court their restless constituents.",
        "Great innovations should not be forced on slender majorities.",
        "None who have always been free can understand the terrible fascinating power of the hope of freedom to those who are not free.",
        "I have an amazing relationship with food.",
        "In this work I have received the opposition of a number of men who only advocate the unobtainable because the immediately possible is beyond their moral courage, administrative ability, and their political prescience.",
        "The one phrase you can use is that success has a thousand fathers, and failure is an orphan.",
        "Never put off until tomorrow what you can do the day after tomorrow.",
        "The apprenticeship of difficulty is one which the greatest of men have had to serve.",
        "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        "Faith is a knowledge within the heart, beyond the reach of proof.",
        "Every happening, great and small, is a parable whereby God speaks to us, and the art of life is to get the message.",
        "The Bible has noble poetry in it; and some clever fables; and some blood-drenched history; and a wealth of obscenity; and upwards of a thousand lies.",
        "My mom introduced me to science-fiction.",
        "Then wilt thou not be loath To leave this Paradise, but shalt possess A Paradise within thee, happier far.",
        "I had come in time to learn that it was a mistake to smile a friendly smile when somebody made a fool of me.",
        "Seek those who find your road agreeable, your personality and mind stimulating, your philosophy acceptable, and your experience helpful. Let those who do not, seek their own kind.",
        "Seeing unhappiness in the marriage of friends, I was content to have chosen music and laughter as a substitute for a husband.",
        "The less we deserve good fortune, the more we hope for it.",
        "Even the highest forms of sacrificial worship present much that is repulsive to modern ideas, and in particular it requires an effort to reconcile our imagination to the bloody ritual which is prominent in almost every religion which has a strong sense of sin.",
        "Our high respect for a well read person is praise enough for literature.",
        "Never again will I spend another winter in this accursed bucketshop of a refrigerator called England.",
        "Garden as though you will live forever.",
        "He that raises a large family does, indeed, while he lives to observe them, stand a broader mark for sorrow; but then he stands a broader mark for pleasure too.",
        "It is not all bad, this getting old, ripening. After the fruit has got its growth it should juice up and mellow. God forbid I should live long enough to ferment and rot and fall to the ground in a squash.",
        "Food was always a big part of my life. My grandfather was one of 14 kids, and his parents had a pasta factory, so as a kid, he and his siblings would sell pasta door to door. After he became a movie producer, he opened up De Laurentiis Food Stores - one in Los Angeles and one in New York.",
        "The sun is new each day.",
        "It takes courage to grow up and become who you really are.",
        "Fancy the happiness of Pinocchio on finding himself free! Without saying yes or no, he fled from the city and set out on the road that was to take him back to the house of the lovely Fairy.",
        "If you think you can walk in holiness without keeping up perpetual fellowship with Christ, you have made a great mistake. If you would be holy, you must live close to Jesus.",
        "Truth is the property of no individual but is the treasure of all men.",
        "Conscience is a coward, and those faults it has not strength enough to prevent it seldom has justice enough to accuse.",
        "All the characters in my books are imagined, but all have a bit of who I am in them - much like the characters in your dreams are all formed by who you are.",
        "My motivation has always been health - eating healthy and taking care of myself.",
        "Ah, Hope! what would life be, stripped of thy encouraging smiles, that teach us to look behind the dark clouds of today, for the golden beams that are to gild the morrow.",
        "Life begins at the end of your comfort zone.",
        "The superior man thinks always of virtue; the common man thinks of comfort.",
        "The time to read is any time: no apparatus, no appointment of time and place, is necessary. It is the only art which can be practiced at any hour of the day or night, whenever the time and inclination comes, that is your time for reading in joy or sorrow, health or illness.",
        "Provision for others is a fundamental responsibility of human life.",
        "How does it become a man to behave towards the American government today? I answer, that he cannot without disgrace be associated with it.",
        "Usually when I see someone famous, for some reason, I think I know them.",
        "Family and friends and faith are the most important things in your life and you should be building friendships.",
        "Realizing that our actions, feelings and behaviour are the result of our own images and beliefs gives us the level that psychology has always needed for changing personality.",
        "Americans want and deserve a broad array of health insurance choices so they can identify those that best fit their own individual or family needs. These choices expand when we allow free enterprise to foster innovation, not smother it with taxes and one-size fits all ideology.",
        "In opera, as with any performing art, to be in great demand and to command high fees you must be good of course, but you must also be famous. The two are different things.",
        "The Creator has not given you a longing to do that which you have no ability to do.",
        "The sun is new each day.",
        "I believe patriotism comes from the heart. Patriotism is voluntary. It is a feeling of loyalty and allegiance that is the result of knowledge and belief.",
        "Acceptance of what has happened is the first step to overcoming the consequences of any misfortune.",
        "Error of opinion may be tolerated where reason is left free to combat it.",
        "I grew up in a very old-fashioned Roman Catholic, Italian-Irish family in Philly.",
        "His ignorance covered the whole earth like a blanket, and there was hardly a hole in it anywhere.",
        "God is another name for human intelligence raised above all error and imperfection, and extended to all possible truth.",
        "If the government fails to listen to your demands, then you will decide what is best for you.",
        "Home is the one place in all this world where hearts are sure of each other. It is the place of confidence. It is the spot where expressions of tenderness gush out without any dread of ridicule.",
        "It is much easier to be critical than to be correct.",
        "There is only one real sin and that is to persuade oneself that the second best is anything but second best.",
        "I never heard of anyone who was really literate or who ever really loved books who wanted to suppress any of them. Censors only read a book with great difficulty, moving their lips as they puzzle out each syllable, when someone tells them that the book is unfit to read.",
        "After working with clothes for so long, it seemed right to design them.",
        "One has to abandon altogether the search for security, and reach out to the risk of living with both arms. One has to court doubt and darkness as the cost of knowing. One needs a will stubborn in conflict, but apt always to total acceptance of every consequence of living and dying.",
        "A canon is antithetical to everything the New York art world has been about for the past 40 years, during which we went from being the center of the art world to being one of many centers.",
        "A generation ago there were a thousand men to every opportunity, while today there are a thousand opportunities to every man.",
        "How fair is a garden amid the toils and passions of existence.",
        "The one who cannot restrain their anger will wish undone, what their temper and irritation prompted them to do.",
        "Fame is what you have taken, character is what you give. When to this truth you awaken, then you begin to live.",
        "Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.",
        "Britain is A world by itself, and we will nothing pay For wearing our own noses.",
        "It is the paradox of life that the way to miss pleasure is to seek it first. The very first condition of lasting happiness is that a life should be full of purpose, aiming at something outside self.",
        "I like making things. I have a wood shop at home. I am a terrible carpenter but I love doing it.",
        "There is nothing that makes its way more directly to the soul than beauty.",
        "I look upon life as a gift from God. I did nothing to earn it. Now that the time is coming to give it back, I have no right to complain.",
        "Thanks to my mother, not a single cardboard box has found its way back into society. We receive gifts in boxes from stores that went out of business twenty years ago.",
        "The majority of husbands remind me of an orangutan trying to play the violin.",
        "Anger is a good motivator.",
        "Whenever I fail as a father or husband... a toy and a diamond always works.",
        "The food here is terrible, and the portions are too small.",
        "Thus, while the mute creation downward bend Their sight, and to their earthly mother ten, Man looks aloft; and with erected eyes Beholds his own hereditary skies.",
        "It always comes to the same necessity: go deep enough and there is a bedrock of truth, however hard.",
        "It has pleased and interested me to see how I could get along under difficult circumstances and with so much discomfort but as I say I was not sent out here to improve my temper or my health or to make me more content with my good things in the East.",
        "When you start a business, go for the lowest hanging fruit.",
        "Libraries allow children to ask questions about the world and find the answers. And the wonderful thing is that once a child learns to use a library, the doors to learning are always open.",
        "God is the universal substance in existing things.  He comprises all things.  He is the fountain of all being.  In Him exists everything that is.",
        "Morals are an acquirement - like music, like a foreign language, like piety, poker, paralysis - no man is born with them.",
        "In Scotland, the indication is that for the Westminster elections at least, Labour voters are satisfied with their government.",
        "While I thought that I was learning how to live, I have been learning how to die.",
        "No day in which you learn something is a complete loss.",
        "For death is no more than a turning of us over from time to eternity.",
        "Deliberation is the work of many men. Action, of one alone.",
        "I sat staring, staring, staring - half lost, learning a new language or rather the same language in a different dialect. So still were the big woods where I sat, sound might not yet have been born.",
        "Experience demands that man is the only animal which devours his own kind, for I can apply no milder term to the general prey of the rich on the poor.",
        "The ordinary arts we practice every day at home are of more importance to the soul than their simplicity might suggest.",
        "Most men, after a little freedom, have preferred authority with the consoling assurances and the economy of effort it brings.",
        "My first wish is to see this plague of mankind, war, banished from the earth.",
        "We need to make a greater investment in human intelligence.",
        "Ads featuring real women and real beauty are such a necessary component to offset the potentially dangerous programming out there for little girls.",
        "MEEKNESS, n. Uncommon patience in planning a revenge that is worth while.",
        "I believe God gives you the grace to do what you need to do.",
    ];
    let result = Math.floor(Math.random() * rand.length);

    var ilu = rand[result];
    //E <3
    request.post({
        headers: {
            authorization: token,
        },
        url: "https://discord.com/api/v9/channels/" + channelid + "/messages",
        json: {
            content: ilu,
            nonce: nonce(),
            tts: false,
            flags: 0,
        },
    });
}

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
                content: "owo inv",
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
                    var luckgem = "";
                    var huntgem = "";
                    if (collectc.contains("huntgem")) {
                        switch (true) {
                            case cont.includes("`057`"):
                                huntgem = "57";
                                break;
                            case cont.includes("`056`"):
                                huntgem = "56";
                                break;
                            case cont.includes("`055`"):
                                huntgem = "55";
                                break;
                            case cont.includes("`054`"):
                                huntgem = "54";
                                break;
                            case cont.includes("`053`"):
                                huntgem = "53";
                                break;
                            case cont.includes("`052`"):
                                huntgem = "52";
                                break;
                            case cont.includes("`051`"):
                                huntgem = "51";
                                break;
                            default:
                                break;
                        }
                    }
                    if (collectc.contains("empgem")) {
                        switch (true) {
                            case cont.includes("`071`"):
                                empgem = "71";
                                break;
                            case cont.includes("`070`"):
                                empgem = "70";
                                break;
                            case cont.includes("`069`"):
                                empgem = "69";
                                break;
                            case cont.includes("`068`"):
                                empgem = "68";
                                break;
                            case cont.includes("`067`"):
                                empgem = "67";
                                break;
                            case cont.includes("`066`"):
                                empgem = "66";
                                break;
                            case cont.includes("`065`"):
                                empgem = "65";
                                break;
                            default:
                                break;
                        }
                    }
                    if (collectc.contains("luckgem")) {
                        switch (true) {
                            case cont.includes("`078`"):
                                luckgem = "78";
                                break;
                            case cont.includes("`077`"):
                                luckgem = "77";
                                break;
                            case cont.includes("`076`"):
                                luckgem = "76";
                                break;
                            case cont.includes("`075`"):
                                luckgem = "75";
                                break;
                            case cont.includes("`074`"):
                                luckgem = "74";
                                break;
                            case cont.includes("`073`"):
                                luckgem = "73";
                                break;
                            case cont.includes("`072`"):
                                luckgem = "72";
                                break;
                            default:
                                break;
                        }
                    }
                    if (huntgem == "" && empgem == "" && luckgem == "") {
                        return 0;
                    } else {
                        if (
                            collectc.contains("huntgem") &&
                            collectc.contains("empgem") &&
                            collectc.contains("luckgem")
                        ) {
                            var gem = huntgem + " " + empgem + " " + luckgem;
                        } else if (
                            collectc.contains("huntgem") == false &&
                            collectc.contains("empgem") &&
                            collectc.contains("luckgem")
                        ) {
                            var gem = empgem + " " + luckgem;
                        } else if (
                            collectc.contains("huntgem") &&
                            collectc.contains("empgem") == false &&
                            collectc.contains("luckgem")
                        ) {
                            var gem = huntgem + " " + luckgem;
                        } else if (
                            collectc.contains("huntgem") == true &&
                            collectc.contains("empgem") == true &&
                            collectc.contains("luckgem") == false
                        ) {
                            var gem = huntgem + " " + empgem;
                        } else if (
                            collectc.contains("huntgem") == true &&
                            collectc.contains("empgem") == false &&
                            collectc.contains("luckgem") == false
                        ) {
                            var gem = huntgem;
                        } else if (
                            collectc.contains("huntgem") == false &&
                            collectc.contains("empgem") == true &&
                            collectc.contains("luckgem") == false
                        ) {
                            var gem = empgem;
                        } else if (
                            collectc.contains("huntgem") == false &&
                            collectc.contains("empgem") == false &&
                            collectc.contains("luckgem") == true
                        ) {
                            var gem = luckgem;
                        }
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
                content: "owo use " + gem,
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

async function getquests(token, channelid) {
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
                    var bod = JSON.parse(body);
                    var cont = bod[0].embeds;
                    await delay(2500);
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
                        var progress1 = cont[0].description
                            .split("Progress: [")[1]
                            .split("/")[0];
                        var progress2 = cont[0].description
                            .split("/")[1]
                            .split("]")[0];

                        if (quest.includes("Battle")) {
                            try {
                                quest = cont[0].description
                                    .split("**2. ")[1]
                                    .split("**")[0];
                            } catch (error) {
                                global.quest = false;
                            }
                        }
                        console.log(
                            `Quest: ${quest} | Progress: ${progress1} / ${progress2}`
                        );

                        if (global.quest) {
                            switch (true) {
                                case quest.includes("Say 'owo'"):
                                    global.quest = false;
                                    questsayowo(
                                        token,
                                        channelid,
                                        parseInt(progress1),
                                        parseInt(progress2)
                                    );
                                    break; //E <3
                                case quest.includes(
                                    "xp from hunting and battling"
                                ):
                                    global.quest = false;
                                    xpquests(token, channelid);

                                case quest.includes("Gamble"):
                                    global.quest = false;
                                    questgamble(
                                        token,
                                        channelid,
                                        parseInt(progress1), //coded by @mid0aria on github
                                        parseInt(progress2)
                                    );
                                    break;

                                case quest.includes(
                                    "Have a friend curse you"
                                ) && global.etoken:
                                    global.quest = false;
                                    questcurseme(
                                        extratoken,
                                        maintokenuserid,
                                        channelid,
                                        parseInt(progress1),
                                        parseInt(progress2)
                                    );
                                    break;

                                case quest.includes(
                                    "Have a friend pray to you"
                                ) && global.etoken:
                                    global.quest = false; //coded by @mid0aria on github
                                    questprayme(
                                        extratoken,
                                        maintokenuserid,
                                        channelid,
                                        parseInt(progress1),
                                        parseInt(progress2)
                                    );
                                    break;

                                case quest.includes("Battle with a friend") &&
                                    global.etoken:
                                    global.quest = false;
                                    questbattlefriend(
                                        token,
                                        extratoken,
                                        maintokenuserid,
                                        channelid,
                                        parseInt(progress1),
                                        parseInt(progress2)
                                    );
                                    break;
                            }
                        }
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

        await delay(16000);
    }
    global.quest = true;
    getquests(token, channelid);
}
