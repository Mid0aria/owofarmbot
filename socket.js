const socket = require("socket.io-client");
var io = socket.connect("http://localhost:1337");
const chalk = require("chalk");

console.clear();
process.title = `Socket Client`;
// global.state = "";

io.on("connect", () => {
    console.clear();
    console.log(chalk.green("Connected Farm Bot!"));
});
/*
io.on("bot", (i) => {
    console.log(i);
});

io.on("efa", (data) => {
    console.log(chalk.red(data.msg));
});
*/
//6 28 15 26 15

io.on("quest", (data) => {
    console.log(
        chalk.red(data.date) +
            chalk.blue(" Quest: ") +
            chalk.magenta(`${data.quest}`) +
            " | " +
            chalk.blue("Progress: ") +
            chalk.yellow(data.progress)
    );
});
