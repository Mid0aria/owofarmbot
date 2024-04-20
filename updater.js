const fs = require("fs");
const { http, https } = require("follow-redirects");
const path = require("path");
const request = require("request");
const os = require("os");
console.log("updating ...");

request.get(
    {
        url: "https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/changes.json",
    },
    function (err, res, body) {
        let bod = JSON.parse(body);

        bod.c.forEach((a) => {
            if (a.includes("/")) {
                var i = a.indexOf("/");
                var v = a.slice(0, i);
                if (!fs.existsSync(path.join(__dirname, `/${v}`))) {
                    fs.mkdirSync(path.join(__dirname, `/${v}`));
                }
            }
            const newupdater = https.get(
                `https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/${a}`,
                function (response) {
                    var updaterstream = fs.createWriteStream(
                        path.join(__dirname, `/${a}`)
                    );
                    response.pipe(updaterstream);
                    updaterstream.on("finish", () => {
                        updaterstream.close();
                        console.log(`${a} updated`);
                    });
                }
            );
        });
    }
);
