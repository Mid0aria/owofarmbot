6 28 15 26 15<br>
<a href = "https://youtu.be/sso05qx8Hac">Tutorial (https://youtu.be/sso05qx8Hac)</a>
<h1 align="center">OwO Farm Bot V1.0.2 </h1>
<h2 align="center">Goal: <a href="https://github.com/Mid0aria/owofarmbot/stargazers"><img src="https://img.shields.io/github/stars/Mid0aria/owofarmbot" /></a> / 50</h2>

<p align="center">
⭐⭐⭐ You can also give this repository a star to show more people and they can use this repository<br>
<a href="https://github.com/Mid0aria/owofarmbot"><img src="https://hits.sh/github.com/Mid0aria/owofarmbot.svg?view=today-total&label=Repo%20Today/Total%20Views&color=770ca1&labelColor=007ec6"/></a>
<a href="https://github.com/Mid0aria/owofarmbot"><img src="https://img.shields.io/github/last-commit/mid0aria/owofarmbot" /></a>

Do you want new feature? <a href ="https://github.com/Mid0aria/owofarmbot/issues/24">Click Me</a>
</p>


[❗・Important](#important)<br>
[👑・Features](#features)<br>
[⚙・Config.json example](#configjson-example)<br>
[💎・Get Token](#get-token)<br>
[📍・OwO DM channel id](#owo-dm-channel-id)<br>
[📚・Discord RPC](#discord-rpc)<br>
[⚠️・Captcha Alert](#captcha-alert)<br>
[📡・Socket Client](#socket-client)<br>
[🔗・Required Links](#required-links)<br>
[🎈・Usage](#usage)<br>

## ❗・Important

-   Discord may restart as a result of discord rpc overload.
-   It can detect virus due to captcha(ban) bypasser please turn off your antivirus.

## 👑・Features

-   Auto Hunt
-   Auto Battle
-   Inventory Check
    -   auto gem use (beta)
    -   auto lootbox use
    -   auto fabled lootbox use
    -   auto crate use
    -   auto eventbox use (like anniversary present or valentine's day)
-   Auto Gamble
    -   auto coinflip
    -   auto slots
-   Auto animals sell or sacrifice all,
-   Auto upgrade autohunt
-   Auto Pray
-   Auto quest   
-   Captcha(Ban) Protection v0.1.2 (beta)
-   Discord-RPC
-   **Extra Token**
    -   All Main Token Features
    -   Auto Pray for Main Token

## ⚙・config.json example

```
{
    "settings": {
        "huntandbattle": "", true or false
        "banbypass": "", true or false
        "discordrpc": "", true or false
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
        "token":"", main token
        "userid":"", token user id
        "channelid":"", channel id for main token
        "owodmchannelid":"" owo bot dm channel id
        "autoquestchannelid":"" auto quest channel id
    },
    "extra":{
        "token":"", extra token
        "userid":"", extra token user id
        "channelid":"", channel id for extra token
        "owodmchannelid":"" extra token owo bot dm channel id
    }
}


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
> run install.bat
```

```bash
> run run.bat
```
