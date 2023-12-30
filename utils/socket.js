const socket = require("socket.io-client");
var io = socket.connect("http://localhost:1337");
const chalk = require("chalk");

console.clear();
process.title = `Socket Client V0.0.2 / e.`;
global.state = "";
global.quest = "";
global.questpr = "";
global.questdate = "";
global.times = "";

global.checklistdaily = `❌`;
global.checklistvote = `❌`;
global.checklistcookie = `❌`;
global.checklistquest = `❌`;
global.checklistlb = `❌`;
global.checklistcrate = `❌`;

global.eyl = "Everything okay";

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

io.on("errors", (e) => {
    if (global.eyl === "Everything okay") {
        global.eyl = e.error;
    } else {
        global.eyl = `${global.eyl}\n${e.error}`;
    }
});

io.on("times", (e) => {
    global.times = e.data;
});
setInterval(() => {
    console.clear();
    var currenttime = chalk.red(
        `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    );
    var state = global.state;
    var cd = global.checklistdaily;
    var cv = global.checklistvote;
    var cc = global.checklistcookie;
    var cq = global.checklistquest;
    var cl = global.checklistlb;
    var gc = global.checklistcrate;
    var qst = chalk.blue("Start time: ") + chalk.red(global.questdate);
    var qq = chalk.yellow("Quest: ") + chalk.magenta(`${global.quest}`);
    var qpr = chalk.green("Progress: ") + chalk.yellow(global.questpr);
    var tms = global.times;
    if (global.eyl === "Everything okay") {
        var eyl = chalk.yellow(global.eyl);
    } else {
        var eyl = chalk.red(global.eyl);
    }

    console.log(
        `
╔═══════════════════════════════════════════════════════════════════════════
║ > Clock: ${currenttime}                                                              
║ > Settings: ${state} 
║
╠════════════════════════╦══════════════════════════════════════════════════
║                        ║                                          
║ > Checklist📜          ║ > Quest🔎
║                        ║   
╠════╦═══════════════════╬══════════════════════════════════════════════════
║ ${cd} ║ Daily             ║ ${qst} 
║ ${cv} ║ Vote              ║ 
║ ${cc} ║ Cookie            ║ ${qq}
║ ${cq} ║ Quest             ║
║ ${cl} ║ LootBox           ║ ${qpr}
║ ${gc} ║ Crate             ║
╠════════════════════════╩══════════════════════════════════════════════════
║ > ⏱️ Times
║ ${tms}
╠═══════════════════════════════════════════════════════════════════════════
║ > Errors❗ 
║ ${eyl}
╚═══════════════════════════════════════════════════════════════════════════

`
    );
}, 1000);
