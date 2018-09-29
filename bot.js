const Discord = require("discord.js");
const Bot = new Discord.Client();
const settings = require("./settings.json")
Bot.on("ready", async () {
  console.log("Bot is ready!")
})
