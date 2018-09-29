const Discord = require("discord.js");
const Bot = new Discord.Client();
const settings = require("./settings.json")
const fs = require('fs')
const Enmap = require('enmap')
const prefix = settings.prefix
Bot.login(settings.token)
// Ready Handler
Bot.on("ready", async () => {
  console.log("Bot is ready!")
});
// Welcome Handler
Bot.on("GuildMemberAdd", async member => {

});
// Message Handler

Bot.on("message", message => {
  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
});

// Command Handler

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    Bot.on(eventName, event.bind(null, Bot));
  });
});

Bot.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}!`);
    Bot.commands.set(commandName, props);
  });
});
