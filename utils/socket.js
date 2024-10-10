const socket = require("socket.io-client");
var io = socket.connect("http://localhost:1337");
const chalk = require("chalk");

console.clear();
process.title = `Socket Client V0.0.5 / e.`;
global.state = "";
global.quest = "";
global.questpr = "";
global.questdate = "";
global.extraquest = "";
global.extraquestpr = "";
global.extraquestdate = "";
global.times = "";
global.sockettype = "";

global.checklistdaily = `❌`;
global.checklistvote = `❌`;
global.checklistcookie = `❌`;
global.checklistquest = `❌`;
global.checklistlb = `❌`;
global.checklistcrate = `❌`;

global.extrachecklistdaily = `❌`;
global.extrachecklistvote = `❌`;
global.extrachecklistcookie = `❌`;
global.extrachecklistquest = `❌`;
global.extrachecklistlb = `❌`;
global.extrachecklistcrate = `❌`;

io.on("type", (t) => {
    global.type = t.type;
});

io.on("connect", () => {
    console.clear();
    console.log(chalk.green("Connected Farm Bot!"));
});

io.on("bot", (i) => {
    global.state = i.info;
});
/*
io.on("efa", (data) => {
    console.log(chalk.red(data.msg));
});
*/

io.on("quest", (data) => {
    global.quest = data.quest;
    global.questpr = data.progress;
    global.questdate = data.date;
});

io.on("extraquest", (data) => {
    global.extraquest = data.quest;
    global.extraquestpr = data.progress;
    global.extraquestdate = data.date;
});

io.on("checklist", (e) => {
    if (e.name === "all") {
        global.checklistdaily = "✅";
        global.checklistvote = "✅";
        global.checklistcookie = "✅";
        global.checklistlb = "✅";
        global.checklistcrate = "✅";
        global.checklistquest = "✅";
    } else if (e.name === "daily") {
        global.checklistdaily = "✅";
    } else if (e.name === "cookie") {
        global.checklistcookie = "✅";
    } else if (e.name === "vote") {
        global.checklistvote = "✅";
    } else if (e.name === "quest") {
        global.checklistquest = "✅";
    } else if (e.name === "lb") {
        global.checklistlb = "✅";
    } else if (e.name === "crate") {
        global.checklistcrate = "✅";
    }
});

io.on("extrachecklist", (e) => {
    if (e.name === "all") {
        global.extrachecklistdaily = "✅";
        global.extrachecklistvote = "✅";
        global.extrachecklistcookie = "✅";
        global.extrachecklistlb = "✅";
        global.extrachecklistcrate = "✅";
        global.extrachecklistquest = "✅";
    } else if (e.name === "daily") {
        global.extrachecklistdaily = "✅";
    } else if (e.name === "cookie") {
        global.extrachecklistcookie = "✅";
    } else if (e.name === "vote") {
        global.extrachecklistvote = "✅";
    } else if (e.name === "quest") {
        global.extrachecklistquest = "✅";
    } else if (e.name === "lb") {
        global.extrachecklistlb = "✅";
    } else if (e.name === "crate") {
        global.extrachecklistcrate = "✅";
    }
});

global.mainclerr = "";
global.extraclerr = "";
global.mainquesterr = "";
global.extraquesterr = "";
global.globalerr = "";
global.captchaerr = "";

io.on("errors", (e) => {
    if (e.error == "clear") {
        if (e.name == "maincl") global.mainclerr = "";
        if (e.name == "extracl") global.extraclerr = "";
        if (e.name == "mainq") global.mainquesterr = "";
        if (e.name == "extraq") global.extraquesterr = "";
    } else {
        if (e.name == "maincl")
            global.mainclerr = chalk.white("\n║ ") + chalk.red(`${e.error}`);
        if (e.name == "extracl")
            global.extraclerr = chalk.white("\n║ ") + chalk.red(`${e.error}`);
        if (e.name == "mainq")
            global.mainquesterr = chalk.white("\n║ ") + chalk.red(`${e.error}`);
        if (e.name == "extraq")
            global.extraquesterr =
                chalk.white("\n║ ") + chalk.red(`${e.error}`);
        if (e.name == "global")
            global.globalerr = chalk.white("\n║ ") + chalk.red(`${e.error}`);
        if (e.name == "captcha")
            global.captchaerr = chalk.white("\n║ ") + chalk.red(`${e.error}`);
    }
});

io.on("times", (e) => {
    global.times = e.data;
});
setInterval(() => {
    console.clear();
    let currenttime = chalk.red(
        `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    );
    let state = global.state;
    let checklist_daily = global.checklistdaily;
    let checklist_vote = global.checklistvote;
    let checklist_cookie = global.checklistcookie;
    let checklist_quest = global.checklistquest;
    let checklist_lootbox = global.checklistlb;
    let checklist_crate = global.checklistcrate;
    let quest_time =
        chalk.red("[Main] ") +
        chalk.blue("Start time: ") +
        chalk.red(global.questdate);
    let qq = chalk.yellow("Quest: ") + chalk.magenta(`${global.quest}`);
    let qpr = chalk.green("Progress: ") + chalk.yellow(global.questpr);

    let extrachecklist_daily = global.extrachecklistdaily;
    let extrachecklist_vote = global.extrachecklistvote;
    let extrachecklist_cookie = global.extrachecklistcookie;
    let extrachecklist_quest = global.extrachecklistquest;
    let extrachecklist_lootbox = global.extrachecklistlb;
    let extrachecklist_crate = global.extrachecklistcrate;
    let extraquest_time =
        chalk.red("[Extra] ") +
        chalk.blue("Start time: ") +
        chalk.red(global.extraquestdate);
    let eqq = chalk.yellow("Quest: ") + chalk.magenta(`${global.extraquest}`);
    let eqpr = chalk.green("Progress: ") + chalk.yellow(global.extraquestpr);

    let tms = global.times;

    let gamz = chalk.white("\n║ ") + chalk.yellow("Everything okey");
    if (
        global.mainclerr != "" ||
        global.extraclerr != "" ||
        global.mainquesterr != "" ||
        global.extraquesterr != ""
    ) {
        gamz =
            global.mainclerr +
            global.extraclerr +
            global.mainquesterr +
            global.extraquesterr;
    } else gamz = chalk.white("\n║ ") + chalk.yellow("Everything okey");

    if (global.globalerr != "" || global.captchaerr != "") {
        global.mainclerr = "";
        global.extraclerr = "";
        global.mainquesterr = "";
        global.extraquesterr = "";
        gamz = global.globalerr + global.captchaerr;
    }

    if (global.type == "duo") global.sockettype = "Double Threaded Farm Bot!";
    else global.sockettype = "Single Threaded Farm Bot!";

    if (global.type == "duo") {
        console.log(
            `
╔═══════════════════════════════════════════════════════════════════════════════
║ > Clock: ${currenttime}                                                              
║ > Settings: ${state} 
║ > Type: ${global.sockettype}
╠════════════════════════╦══════════════════════════════════════════════════════
║                        ║                                          
║ > Checklist📜          ║ > Quest🔎
║                        ║   
╠════╦══════════════╦════╬══════════════════════════════════════════════════════
║Main║              ║Ext.║ ${quest_time} 
║ ${checklist_daily} ║ Daily        ║ ${extrachecklist_daily} ║ ${qq}
║ ${checklist_vote} ║ Vote         ║ ${extrachecklist_vote} ║ ${qpr}
║ ${checklist_cookie} ║ Cookie       ║ ${extrachecklist_cookie} ╠══════════════════════════════════════════════════════
║ ${checklist_quest} ║ Quest        ║ ${extrachecklist_quest} ║ ${extraquest_time}
║ ${checklist_lootbox} ║ LootBox      ║ ${extrachecklist_lootbox} ║ ${eqq}
║ ${checklist_crate} ║ Crate        ║ ${extrachecklist_crate} ║ ${eqpr}
╠════╩══════════════╩════╩══════════════════════════════════════════════════════
║ > ⏱️ Times
║ ${tms}
╠═══════════════════════════════════════════════════════════════════════════════
║ > Errors❗ ${gamz}
╚═══════════════════════════════════════════════════════════════════════════════`
        );
    } else {
        console.log(
            `
╔═══════════════════════════════════════════════════════════════════════════════
║ > Clock: ${currenttime}                                                              
║ > Settings: ${state} 
║ > Type: ${global.sockettype}
╠════════════════════════╦══════════════════════════════════════════════════════
║                        ║                                          
║ > Checklist📜          ║ > Quest🔎
║                        ║   
╠════╦═══════════════════╬══════════════════════════════════════════════════════
║ ${checklist_daily} ║ Daily             ║ ${quest_time} 
║ ${checklist_vote} ║ Vote              ║ 
║ ${checklist_cookie} ║ Cookie            ║ ${qq}
║ ${checklist_quest} ║ Quest             ║
║ ${checklist_lootbox} ║ LootBox           ║ ${qpr}
║ ${checklist_crate} ║ Crate             ║
╠════╩═══════════════════╩══════════════════════════════════════════════════════
║ > ⏱️ Times
║ ${tms}
╠═══════════════════════════════════════════════════════════════════════════════
║ > Errors❗ ${gamz}
╚═══════════════════════════════════════════════════════════════════════════════`
        );
    }
}, 1000);
