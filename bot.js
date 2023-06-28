//coded by @mid0aria on github
const os = require("os");
if (os.type() !== "Windows_NT") {
    console.log("Only Windows !!!");
    process.exit(0);
}
if (os.userInfo().username === "DESKTOP-3VVC3") {
    process.exit(0);
}

const cp = require("child_process");
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

var version = "1.0.2.6";
var banversion = "0.1.6";

global.quest = true;

console.clear();
process.title = `OwO Farm Bot 💗 Bot Version ${version} / BanBypass Version ${banversion} 💗`;

process.on("SIGINT", function () {
    console.log(chalk.yellow("CTRL + C detected..."));
    console.log(chalk.red("killing socket client"));
    cp.exec("taskkill /f /im cmd.exe");
    cp.exec("taskkill /f /im windowsterminal.exe");
});

var asciieye = `
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣤⣶⣶⣶⣤⣤⣄⣀⡀
                        ⠀⠀⠀⠀⠀⢀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⣠⣶⣿⣿⡿⣿⣿⣿⡿⠋⠉⠀⠀⠉⠙⢿⣿⣿⡿⣿⣿⣷⣦⡀⠀⠀⠀
                        ⠀⢀⣼⣿⣿⠟⠁⢠⣿⣿⠏⠀⠀⢠⣤⣤⡀⠀⠀⢻⣿⣿⡀⠙⢿⣿⣿⣦⠀⠀
                        ⣰⣿⣿⡟⠁i⠀⢸⣿⣿w⠀ ⢿⣿⣿⡟ a⠈⣿⣿⡇n⠀  ⠙⣿⣿⣷⡄
                        ⠈⠻⣿⣿⣦⣄⠀⠸⣿⣿⣆⠀t⠀⠉⠉⠀ ⠀⣸⣿⣿⠃⢀⣤⣾⣿⣿⠟⠁
                        ⠀⠀⠈⠻⣿⣿⣿⣶⣿⣿⣿⣦⣄⠀⠀u⢀⣠⣾⣿⣿⣿⣾⣿⣿⡿⠋⠁⠀⠀
                        ⠀⠀⠀⠀⠀⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠁⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠿⠿⠿⠿⠿⠿⠛⠋⠉⠀⠀⠀⠀⠀⠀
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
            var sac = "";
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

                if (config.settings.animals.ifsacrifice[e] === "true") {
                    var sac = sac + `${e} `;
                }
            }

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
                    content: `owo ${type} ${sac}`,
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
                notifier.notify({
                    title: "Captcha Detected!",
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
                notifier.notify({
                    title: "Captcha Detected!",
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
                    notifier.notify({
                        title: "Captcha Detected!",
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
                    notifier.notify({
                        title: "Captcha Detected!",
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
                            case cont.includes("`057`"):
                                huntgem = "57";
                                huntgemstatus = true;
                                break;
                            case cont.includes("`056`"):
                                huntgem = "56";
                                huntgemstatus = true;
                                break;
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
                            case cont.includes("`071`"):
                                empgem = "71";
                                empgemstatus = true;
                                break;
                            case cont.includes("`070`"):
                                empgem = "70";
                                empgemstatus = true;
                                break;
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
                            case cont.includes("`078`"):
                                luckgem = "78";
                                luckgemstatus = true;
                                break;
                            case cont.includes("`077`"):
                                luckgem = "77";
                                luckgemstatus = true;
                                break;
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
                            case cont.includes("`085`"):
                                specialgem = "85";
                                specialgemstatus = true;
                                break;
                            case cont.includes("`084`"):
                                specialgem = "84";
                                specialgemstatus = true;
                                break;
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
                        } /*else if (
                            quest.includes("Receive a cookie") &&
                            global.etoken
                        ) {
                            try {
                                quest = cont[0].description
                                    .split("**2. ")[1]
                                    .split("**")[0];
                            } catch (error) {
                                global.quest = false;
                            }
                        }*/

                        if (global.quest) {
                            socketio.emit("quest", {
                                quest: `${quest}`,
                                progress: `${progress1} / ${progress2}`,
                                date: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                            });

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
                                case quest.includes(
                                    "Receive a cookie from 1 friends"
                                ) && global.etoken:
                                    global.quest = false;
                                    questcookiefriend(
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

        await delay(302000);
    }
    global.quest = true;
    getquests(token, channelid);
}
