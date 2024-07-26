dWdnY2Y6Ly9iY3JhLmZjYmd2c2wucGJ6L2dlbnB4LzVwc2tIZ1B4Y3hQVkVlWGxxVVhGb1kgcm90MTM= </br>
6 28 15 26 15<br> {/\_\_/}</br>( • . •)</br>/ > 💔

If you made a video about the farmbot, please upload it to YouTube with the hashtag #thankumid0 and let me know.

<h1 align="center">OwO Farm Bot V1.0.7.7(OPEN SOURCE)(EOL)</h1>
<h1>I do not recommend using this bot until v2 is released</h1>
<p align="center">

[![Total Views](https://hits.sh/github.com/Mid0aria/owofarmbot.svg?view=today-total&label=Repo%20Today/Total%20Views&color=770ca1&labelColor=007ec6)](https://github.com/Mid0aria/owofarmbot)
[![Last Commit](https://img.shields.io/github/last-commit/mid0aria/owofarmbot)](https://github.com/Mid0aria/owofarmbot)

## Tutorials

### Videos

-   [Windows](https://www.youtube.com/watch?v=sso05qx8Hac) - Official
-   [Android (Termux)](https://www.youtube.com/watch?v=78XrZgDtEXU) - OwO Sever
-   **Not Working** [Replit](https://www.youtube.com/watch?v=tiSd99NEhb4) - Hiếu LoneLy

### Text

-   [Windows / Linux](#windows--linux) - Official
-   [Android / iOS (Termux)](#android--ios-termux) - Official

To get auth key, join the Discord server [here](https://discord.gg/WzYXVbXt6C), go to [`#🤖・bot-commands`](https://discord.com/channels/1202294695091507230/1203705738770256032), and send `s!key`. The official bot will directly message you with the key.

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
[🎈・Installation](#Installation)<br>
[🥰・Contributors](#thanks-for-contribution)<br>

## ⭐・Star History

<h2 align="center">Goal: <a href="https://github.com/Mid0aria/owofarmbot/stargazers"><img src="https://img.shields.io/github/stars/Mid0aria/owofarmbot" /></a> / 512</h2>
⭐⭐⭐ You can also give this repository a star so that others know we're trusted!<br>

[![Star History Chart](https://api.star-history.com/svg?repos=Mid0aria/owofarmbot,mid0aria/owofarmbot_ui&type=Date)](https://star-history.com/#Mid0aria/owofarmbot&mid0aria/owofarmbot_ui&Date)

## ❗・Important (Anyone using the bot is deemed to have read and accepted these)

-   Use of this farm bot may lead to actions being taken against your OwO profile and/or your Discord account. We are not responsible for them.
-   Discord may restart as a result of discord RPC overload.
-   It can detect virus due to captcha (ban) bypasser please turn off your antivirus.
-   DO NOT USE ONE CHANNEL FOR TWO ACCOUNTS, USE IT FOR 1 ACCOUNT ONLY.

## 👑・Features

-   Auto Hunt
-   Auto Battle
-   Inventory Check
    -   Auto Gem Use (beta) with limition
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
-   Captcha(Ban) Protection v0.1.10 (beta)
-   Discord-RPC
-   Typing Indicator
-   Automated Workflow
-   Pause when OwO bot down
-   **Extra Token**
    -   All Main Token Features
    -   Auto Pray for Main Token

## ⚙・config.json example

```
{
    "midoservices_authkey": "", / Enter ur midoservices auth key. If you don't have one, join the discord server and get one now.
    "windowssettings": { "controlcdetect": false },
    "settings": {
        "times": {
            "enable": "", true or false
            "huntbottom": 11000,  / The time to be entered must be entered in milliseconds. Minimum time to run hunt command.
            "hunttop": 16000, / The time to be entered must be entered in milliseconds. Maximum time to run hunt command.
            "battlebottom": 10000,  / The time to be entered must be entered in milliseconds. Minimum time to run battle command.
            "battletop": 16000, / The time to be entered must be entered in milliseconds. Maximum time to run battle command.

            "intervals": {
                "animals": {
                    "enable": true, true or false
                    "time": 1200000  / The time to be entered must be entered in milliseconds.
                },
                "pray": {
                    "enable": true, true or false
                    "time": 303000  / The time to be entered must be entered in milliseconds.
                },
                "curse": {
                    "enable": true, true or false
                    "time": 303500  / The time to be entered must be entered in milliseconds.
                },
                "upgrade": {
                    "enable": true, true or false
                    "time": 1205000  / The time to be entered must be entered in milliseconds.
                },
                "gamble": {
                    "enable": true, true or false
                    "coinflip": {
                        "time": 25000  / The time to be entered must be entered in milliseconds.
                    },
                    "slots": {
                        "time": 23000  / The time to be entered must be entered in milliseconds.
                    }
                }
            }
        },
        "prefix": "", owo bot's prefix on your server
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
            "animaltype": {
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
        },
        "notifynumber": "1", //how many times to repeat the notification
        "notifymethod": "", //promt or notify, how the bot will notify you
                            //promt only work on Windows 10 and up, default is notify
        "notresponsewarning": {
            "enable": false, //true or false
            "value": "6" //how name time to pause when not getting response
        },
        "manualcontroller": { //some built-in automated workflow
            "main": {
                "stop_hunt_after_daily": false,   //stop hunt after daily (daily lootbox) is completed
                "stop_battle_after_daily": false, //stop battle after daily (daily crate) is completed
                "stop_hunt_after_quest": false,   //stop hunt after exp related quest is completed
                "stop_battle_after_quest": false, //stop battle after exp related quest is completed
                                                  //if enable both daily and quest, bot will prefer to complete daily first
                "maximum_gem_rarity": "" //common, uncommon, rare, epic, mythical, legendary
                                         //blank or other will use highest gem possible
            },
            "extra": {
                "stop_hunt_after_daily": false,
                "stop_battle_after_daily": false,
                "stop_hunt_after_quest": false,
                "stop_battle_after_quest": false,
                "maximum_gem_rarity": ""
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

If you use Replit, you must enter your tokens in the .env file for the security of your tokens!

```
MAIN_TOKEN=mysupermaintokenblabla
EXTRA_TOKEN=mysuperextratokenblabla
```

Optionally, you may also use the Secrets tab.

## 💎・Get Token

### PC

1. Open your preferred browser (with developer tools) and login to https://discord.com/app
2. Press CTRL + Shift + I and open the Console tab.
3. Paste the following code.
4. The text returned (excluding the quotes `'`) will be your Discord account token.

```js
(webpackChunkdiscord_app.push([
    [""],
    {},
    (e) => {
        for (let t in ((m = []), e.c)) m.push(e.c[t]);
    },
]),
m)
    .find((e) => e?.exports?.default?.getToken !== void 0)
    .exports.default.getToken();
```

### Mobile/Android

1. Open Chrome
2. Create a bookmark (by clicking on star button in 3 dots menu)
3. Edit it and set name to Token Finder and url to the following code:
    ```javascript
    javascript: (webpackChunkdiscord_app.push([[""],{},(e)=>{m=[];for (let c in e.c) m.push(e.c[c]);},]),m).find((m) => m?.exports?.default?.getToken%20!==%20void%200)%20%20%20%20.exports.default.getToken();
    ```
4. Open https://discord.com/app and log in.
5. Tap on search bar and type Token Finder (don't search it just type)
6. Click on the bookmark named Token Finder.
7. A new page will open, the text in the page will be your Discord account token.

## 📍・OwO DM channel id

![](https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/images/owochannelid.jpg)

## 📚・Discord RPC

![](https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/images/rpc.jpg)

## ⚠️・Captcha Alert

> [!NOTE]
> If you want the captcha alert to work properly, turn off do not disturb, or you can use promt mode

Notify mode:

![](https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/images/captchaalert.png)

Promt mode:

![](https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/images/Captchapromt.png)

## 📡・Socket Client

![](https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/images/socketclient.png)
Only works on **Windows** using [**Terminal**](https://apps.microsoft.com/detail/9n0dx20hk701)

## 🔗・Required Links

[NodeJS](https://nodejs.org/en/)<br>
[Terminal](https://apps.microsoft.com/detail/9n0dx20hk701)<br>
[Farm Bot ZIP File](https://github.com/Mid0aria/owofarmbot/archive/refs/heads/main.zip)

## 🎈・Installation

### 🖥️・Windows / Linux

```bash
# Check Node.js version:
node -v

# Clone the files with git:
git clone https://github.com/Mid0aria/owofarmbot
# Optionally you can also download from github at https://github.com/Mid0aria/owofarmbot/archive/refs/heads/main.zip

# Enter into the cloned directory:
cd owofarmbot

# Configure the bot
notepad config.json # On windows
nano config.json # On linux, can also use any other preferred file writing software

# Run the bot:
node bot.js
```

### 📱・Android / iOS (Termux)

```bash
# Install:

apt update -y && apt upgrade -y && pkg install wget
wget https://raw.githubusercontent.com/mid0aria/owofarmbot/main/termux-setup.sh
sh termux-setup.sh

# Edit config.json:

cd owofarmbot
nano config.json
```

## 🥰・Contributors

-   VihaanReddyM [(GitHub)](https://github.com/VihaanReddyM)
-   Random-629671 [(GitHub)](https://github.com/Random-629671)
-   Le-Khuong [(GitHub)](https://github.com/Le-Khuong)
-   mallusrgreatv2 [(GitHub)](https://github.com/mallusrgreatv2)
-   NotRichit [(GitHub)](https://github.com/NotRichit)
-   Hiếu LoneLy [(YouTube)](https://www.youtube.com/watch?v=tiSd99NEhb4)
-   OwO Sever [(YouTube)](https://www.youtube.com/watch?v=78XrZgDtEXU)
