# OwO Farm Bot
<img src="https://i.ibb.co/ThgHqGQ/976d5c4f4522e5a1ae782516b58518f6.jpg" width="150" height="150" border="0" alt="PFP">

[![views](https://hits.sh/github.com/Mid0aria/owofarmbot.svg?label=Repo%20Views&color=770ca1&labelColor=007ec6)](https://hits.sh/github.com/Mid0aria/owofarmbot/)<br>
[❗・Important](#important)<br>
[👑・Features](#features)<br>
[⚙・Config.json example](#configjson-example)<br>
[📍・OwO DM channel id](#owo-dm-channel-id)<br>
[📚・Discord RPC](#discord-rpc)<br>
[🔗・Required Links](#required-links)<br>
[🎈・Usage](#usage)<br>
[⭐・Give A Star](#give-a-star)<br>

## ❗・Important

-   Discord may restart as a result of discord rpc overload.
-   It can detect virus due to captcha checker please turn off your antivirus.

## 👑・Features

-   Auto Hunt
-   Auto Battle
-   Inventory Check
    -   auto gem use (beta)
    -   auto lootbox use
    -   auto crate use
    -   auto eventbox use (like anniversary present or valentine's day)
-   Auto Sell All
-   Auto Pray
-   Captcha(Ban) Protection v0.0.7 (beta)
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
        "inventory": {
            "inventorycheck": "", true or false
            "gemcheck": "", true or false
            "lootboxcheck": "", true or false
            "cratecheck": "", true or false
            "eventcheck": "" true or false
        },
        "sell": "", true or false
        "pray": "", true or false
        "extratoken": "" true or false
    },
    "main":{
        "token":"", main token
        "userid":"", token user id
        "channelid":"", channel id for main token
        "owodmchannelid":"" owo bot dm channel id
    },
    "extra":{
        "token":"", extra token
        "userid":"", extra token user id
        "channelid":"", channel id for extra token
        "owodmchannelid":"" extra token owo bot dm channel id
    }
}


```

## 📍・OwO DM channel id

![](https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/images/owochannelid.jpg)

## 📚・Discord RPC

![](https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/images/newrpc.jpg)

## 🔗・Required Links

[NodeJS](https://nodejs.org/en/)<br>
[Zip File](https://github.com/Mid0aria/owofarmbot/archive/refs/heads/main.zip)

## 🎈・Usage

```
> YOU NEED LATEST NODEJS !
> download zip file or run git clone https://github.com/Mid0aria/owofarmbot.git
> edit config.json
```

```bash
> npm i
```

![](https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/images/f65fcbe0baea9ad79c73030d24f37b8f.gif)

```bash
> node bot.js
```

![](https://raw.githubusercontent.com/Mid0aria/owofarmbot/main/images/24578d5497a09af1d5aa03781a2028f9.gif)

## ⭐・Give A Star

You can also give this repository a star to show more people and they can use this repository
