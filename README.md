# discord-music-andradio-bot

Yet another open source Discord bot using discord-player and discord.js.

 **Warning, this code uses the v12 of the Discord.js module. Previous versions of discord.js will not be supported.**
 
 ## Issues
 
 If you have any issue feel free to make a new issue [here](https://github.com/OpenSource-It1/discord-radio-bot/issues/new).

## Installation

Use the package manager [npm](https://npmjs.com) to install all the packages. Using `npm install`, will automatically install all the package needed. Make sure your node version is not below 12.

## Configuration

Start by editing the Config/botconfig.json file:

```js
{
  "prefix":"Your Bot Prefix",
  "embed":"Hex Colour",
  "error":"Hex Colour",
  "owner":["Your ID"]
}
```

**Another warning, please do not mess with the config.json file inside the Config folder.**

After you have finished editing the botconfig.json file, edit the .env file:

```js
token=YOUR_TOKEN_HERE
```

Reminder:

- `prefix`, the prefix that will be set to use the bot.
- `YOUR_TOKEN_HERE`, the token of the bot available on the [Discord Developers](https://discord.com/developers) section.
- `embed & error`, the embed colours your bot will use in embeds. Click [here](https://encycolorpedia.com/) to get link to a colour picker.
- `owner`, your ID to access developer-only commands if need be, to get your ID please refer to this Discord [article](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-#:~:text=On%20Android%20press%20and%20hold,name%20and%20select%20Copy%20ID).

## Commands


- `play <name>`, play music in a vocal salon.
- `pause`, pauses the current music.
- `resume`, puts the current music back on. 
- `queue`, see the next musics.
- `clear-queue`, delete the next music.
- `now-playing`, see music in progress.
- `repeat`to enable or disable the repeat function.


Utilities (to change the code) :

Functions available with the `discord-player` module that you can use :

```js
// Play a song in the voice channel and init the guild queue
client.player.play(voiceChannel, songName);

// Add a song to the queue
client.player.addToQueue(guildID, songName);
// Clear the queue
client.player.clearQueue(guildID);
// Get the queue
client.player.getQueue(guildID);
// Skip the current song
client.player.skip(guildID);


// Pause
client.player.pause(guildID);
// Resume
client.player.resume(guildID);
// Stop
client.player.stop(guildID);

// Check if music is playing in a guild
client.player.isPlaying(guildID);
// Get the currently playing song
client.player.nowPlaying(guildID);


// Current song will be repeated indefinitely
client.player.setRepeatMode(true);
// Current song will no longer be repeated indefinitely
client.player.setRepeatMode(false);
```


## License

[MIT](https://github.com/OpenSource-It1/discord-music-and-radio-bot/blob/master/LICENSE)

## Acknowledgements

I <3 Open Source, so I'd like to acknowledge the brilliant packages making this repository happen.

These are the open source libraries I use to make this bot:

- [Discord.JS](https://github.com/discordjs/discord.js)
- [discord-player](https://github.com/Androz2091/discord-player)
