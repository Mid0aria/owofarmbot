const socket = require("socket.io-client");
var io = socket.connect("http://localhost:1337");
const chalk = require("chalk");

console.clear();
process.title = `Socket Client`;
global.state = "";
global.quest = "";
global.questpr = "";
global.questdate = "";

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

setInterval(() => {
    console.clear();
    console.log(
        chalk.red(
            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
        )
    );
    console.log(global.state);
    console.log(
        chalk.blue("Start time: ") +
            chalk.red(global.questdate) +
            chalk.blue(" Quest: ") +
            chalk.magenta(`${global.quest}`) +
            " | " +
            chalk.blue("Progress: ") +
            chalk.yellow(global.questpr)
    );
}, 5000);
