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
//6 28 15 26 15

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
            global.extraquesterr = chalk.white("\n║ ") + chalk.red(`${e.error}`);
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
    let cd = global.checklistdaily;
    let cv = global.checklistvote;
    let cc = global.checklistcookie;
    let cq = global.checklistquest;
    let cl = global.checklistlb;
    let gc = global.checklistcrate;
    let qst =
        chalk.red("[Main] ") +
        chalk.blue("Start time: ") +
        chalk.red(global.questdate);
    let qq = chalk.yellow("Quest: ") + chalk.magenta(`${global.quest}`);
    let qpr = chalk.green("Progress: ") + chalk.yellow(global.questpr);

    let ecd = global.extrachecklistdaily;
    let ecv = global.extrachecklistvote;
    let ecc = global.extrachecklistcookie;
    let ecq = global.extrachecklistquest;
    let ecl = global.extrachecklistlb;
    let egc = global.extrachecklistcrate;
    let eqst =
        chalk.red("[Extra] ") +
        chalk.blue("Start time: ") +
        chalk.red(global.extraquestdate);
    let eqq = chalk.yellow("Quest: ") + chalk.magenta(`${global.extraquest}`);
    let eqpr = chalk.green("Progress: ") + chalk.yellow(global.extraquestpr);

    let tms = global.times;
    
    let eyl = chalk.white("\n║ ") + chalk.yellow("Everything okey");
    if (global.mainclerr != "" ||
        global.extraclerr != "" ||
        global.mainquesterr != "" ||
        global.extraquesterr != "") {
            eyl = global.mainclerr + global.extraclerr + global.mainquesterr + global.extraquesterr;
        } else eyl = chalk.white("\n║ ") + chalk.yellow("Everything okey");
    
    if (global.globalerr != "" || global.captchaerr != "") {
        global.mainclerr = "";
        global.extraclerr = "";
        global.mainquesterr = "";
        global.extraquesterr = "";
        eyl = global.globalerr + global.captchaerr;
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
║Main║              ║Ext.║ ${qst} 
║ ${cd} ║ Daily        ║ ${ecd} ║ ${qq}
║ ${cv} ║ Vote         ║ ${ecv} ║ ${qpr}
║ ${cc} ║ Cookie       ║ ${ecc} ╠══════════════════════════════════════════════════════
║ ${cq} ║ Quest        ║ ${ecq} ║ ${eqst}
║ ${cl} ║ LootBox      ║ ${ecl} ║ ${eqq}
║ ${gc} ║ Crate        ║ ${egc} ║ ${eqpr}
╠════╩══════════════╩════╩══════════════════════════════════════════════════════
║ > ⏱️ Times
║ ${tms}
╠═══════════════════════════════════════════════════════════════════════════════
║ > Errors❗ ${eyl}
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
║ ${cd} ║ Daily             ║ ${qst} 
║ ${cv} ║ Vote              ║ 
║ ${cc} ║ Cookie            ║ ${qq}
║ ${cq} ║ Quest             ║
║ ${cl} ║ LootBox           ║ ${qpr}
║ ${gc} ║ Crate             ║
╠════╩═══════════════════╩══════════════════════════════════════════════════════
║ > ⏱️ Times
║ ${tms}
╠═══════════════════════════════════════════════════════════════════════════════
║ > Errors❗ ${eyl}
╚═══════════════════════════════════════════════════════════════════════════════`
        );
    }
}, 1000);
