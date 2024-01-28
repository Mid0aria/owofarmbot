dWdnY2Y6Ly9iY3JhLmZjYmd2c2wucGJ6L2dlbnB4LzVwc2tIZ1B4Y3hQVkVlWGxxVVhGb1kgcm90MTM= </br>
6 28 15 26 15<br> {/\_\_/}</br>( • . •)</br>/ > 🤍

If you make a video about using the farmbot, upload it to YouTube with the hashtag #thankumid0 and let me know.

<h1 align="center">OwO Farm Bot V1.0.6.3 </h1>

<p align="center">

<a href="https://github.com/Mid0aria/owofarmbot"><img src="https://hits.sh/github.com/Mid0aria/owofarmbot.svg?view=today-total&label=Repo%20Today/Total%20Views&color=770ca1&labelColor=007ec6"/></a>
<a href="https://github.com/Mid0aria/owofarmbot"><img src="https://img.shields.io/github/last-commit/mid0aria/owofarmbot" /></a><br>
Tutorial needed? <a href="https://youtu.be/sso05qx8Hac">Click Here</a><br>
Tutorial 2 (replit) <a href="https://www.youtube.com/watch?v=tiSd99NEhb4">Click Here</a> (Thanks Hiếu LoneLy)<br>
Do you want new feature? <a href ="https://github.com/Mid0aria/owofarmbot/issues/24">Click Me</a>

</p>

# Contents

[⭐・Star History](#star-history)<br>
[❗・Important](#important)<br>
[👑・Features](#features)<br>
[⚙・Config.json example](#configjson-example)<br>
[⚙・.env example](#dotenv-example)<br>
[💎・Get Token](#get-token)<br>
[📍・OwO DM channel id](#owo-dm-channel-id)<br>
[📚・Discord RPC](#discord-rpc)<br>
[⚠️・Captcha Alert](#captcha-alert)<br>
[📡・Socket Client](#socket-client)<br>
[🔗・Required Links](#required-links)<br>
[🎈・Usage](#usage)<br>
[🥰・Thanks for contribution](#thanks-for-contribution)<br>

## ⭐・Star History

<h2 align="center">Goal: <a href="https://github.com/Mid0aria/owofarmbot/stargazers"><img src="https://img.shields.io/github/stars/Mid0aria/owofarmbot" /></a> / 512</h2>
⭐⭐⭐ You can also give this repository a star to show more people and they can use this repository<br>

[![Star History Chart](https://api.star-history.com/svg?repos=Mid0aria/owofarmbot,mid0aria/owofarmbotv2&type=Date)](https://star-history.com/#Mid0aria/owofarmbot&mid0aria/owofarmbotv2&Date)

## ❗・Important

-   We would like to point out that long-term use of farm bots may result in a ban from owo and we do not accept responsibility.
-   Discord may restart as a result of discord rpc overload.
-   It can detect virus due to captcha(ban) bypasser please turn off your antivirus.

## 👑・Features

-   Auto Hunt
-   Auto Battle
-   Inventory Check
    -   Auto Gem Use (beta)
    -   Auto Lootbox Use
    -   Auto Fabled Lootbox Use
    -   Auto Crate Use
    -   Auto Eventbox Use (like anniversary present or valentine's day)
-   Auto Gamble
    -   Auto Coinflip
    -   Auto Slots
-   Auto Animals Sell OR Sacrifice,
-   Auto Upgrade Autohunt
-   Auto Pray
-   Auto CheckList (beta)
    -   Auto Quest
    -   Auto Daily
    -   Auto Cookie
-   Captcha(Ban) Protection v0.1.8 (beta)
-   Discord-RPC
-   Typing Indicator
-   **Extra Token**
    -   All Main Token Features
    -   Auto Pray for Main Token

## ⚙・config.json example

```
{
    "settings": {
        "times": {
            "enable": "", true or false
            "huntbottom": 11000,  / The time to be entered must be entered in milliseconds. Minimum time to run hunt command.
            "hunttop": 16000, / The time to be entered must be entered in milliseconds. Maximum time to run hunt command.
            "battlebottom": 10000,  / The time to be entered must be entered in milliseconds. Minimum time to run battle command.
            "battletop": 16000, / The time to be entered must be entered in milliseconds. Maximum time to run battle command.

            "intervals": {
                "huntbattle": {
                    "enable": "true", true or false
                    "time": 17000  / The time to be entered must be entered in milliseconds.
                },
                "animals": {
                    "enable": "true", true or false
                    "time": 1200000  / The time to be entered must be entered in milliseconds.
                },
                "pray": {
                    "enable": "true", true or false
                    "time": 303000  / The time to be entered must be entered in milliseconds.
                },
                "curse": {
                    "enable": "true", true or false
                    "time": 303500  / The time to be entered must be entered in milliseconds.
                },
                "upgrade": {
                    "enable": "true", true or false
                    "time": 1205000  / The time to be entered must be entered in milliseconds.
                },
                "gamble": {
                    "enable": "true", true or false
                    "coinflip": {
                        "time": 25000  / The time to be entered must be entered in milliseconds.
                    },
                    "slots": {
                        "time": 23000  / The time to be entered must be entered in milliseconds.
                    }
                }
            }
        },
        "huntandbattle": "", true or false
        "banbypass": "", true or false
        "discordrpc": "", true or false
        "typingindicator": "", true or false
        "pray": "", true or false
        "extratoken": "", true or false
        "autoquest": "", true or false
        "inventory": {
            "inventorycheck": "", true or false
            "gemcheck": "", true or false
            "lootboxcheck": "", true or false
            "fabledlootboxcheck": "", true or false
            "cratecheck": "", true or false
            "eventcheck": "" true or false
        },
        "animals": {
            "enable": "", true or false
            "type": "" sell or sacrifice
            "ifsacrifice": {
                "common": "", true or false
                "uncommon": "", true or false
                "rare": "", true or false
                "epic": "", true or false
                "mythical": "", true or false
                "patreon": "", true or false
                "cpatreon": "", true or false
                "legendary": "", true or false
                "gem": "", true or false
                "bot": "", true or false
                "distorted": "", true or false
                "fabled": "", true or false
                "special": "", true or false
                "hidden": "" true or false
            }
        },
        "upgradeautohunt": {
            "enable": "", true or false
            "type": "" efficiency, duration, cost, gain, exp or radar
        },
        "gamble": {
            "coinflip": {
                "default_amount"= , Enter the amount you want to start from
                "max_amount": 250000, Enter the amount where the bot will not bet more than that
                "multipler": , Enter a number by which the lost amount will be multipled by
                "enable": "", true or false
                "amount": "1"
            },
            "slots": {
                "enable": "", true or false
                "amount": "1"
            }
        }
    },
    "main":{
        "token":"", main token (if you use replit please edit .env file)
        "userid":"", token user id
        "channelid":"", channel id for main token
        "owodmchannelid":"", owo bot dm channel id
        "gamblechannelid":"", channel if for gambling
        "autoquestchannelid":"" auto quest channel id
    },
    "extra":{
        "token":"", extra token (if you use replit please edit .env file)
        "userid":"", extra token user id
        "channelid":"", channel id for extra token
        "gamblechannelid":"", channel if for gambling
        "owodmchannelid":"" extra token owo bot dm channel id
    }
}


```

## ⚙・dotenv example

If you use replit, you must enter your tokens in the .env file for the security of your tokens!

```
MAIN_TOKEN=mysupermaintokenblabla
EXTRA_TOKEN=mysuperextratokenblabla
```

## 💎・Get Token

```js
(webpackChunkdiscord_app.push([
    [""],
    {},
    (e) => {
        m = [];
        for (let c in e.c) m.push(e.c[c]);
    },
]),
m)
    .find((m) => m?.exports?.default?.getToken !== void 0)
    .exports.default.getToken();
```

## 📍・OwO DM channel id

![](https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/images/owochannelid.jpg)

## 📚・Discord RPC

![](https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/images/rpc.jpg)

## ⚠️・Captcha Alert

!!! If you want the captcha alert to work properly, turn off do not disturb

![](https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/images/captchaalert.png)

## 📡・Socket Client

![](https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/images/socketclient.png)

## 🔗・Required Links

[NodeJS](https://nodejs.org/en/)<br>
[Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701)<br>
[Farm Bot Zip File](https://github.com/Mid0aria/owofarmbot/archive/refs/heads/main.zip)

## 🎈・Usage

```
> YOU NEED LATEST NODEJS !
> download zip file or run git clone https://github.com/Mid0aria/owofarmbot.git
> edit config.json
```

```bash
> type npm install
```

```bash
> type node bot.js
```

## 🥰・Thanks for contribution

VihaanReddyM <a href="https://github.com/VihaanReddyM">(Github)</a><br>
Random-629671 <a href="https://github.com/Random-629671">(Github)</a><br>
Le-Khuong <a href="https://github.com/Le-Khuong">(Github)</a><br>
mallusrgreatv2 <a href="https://github.com/mallusrgreatv2">(Github)</a><br>

Hiếu LoneLy <a href="https://www.youtube.com/watch?v=tiSd99NEhb4">(Youtube)</a>
