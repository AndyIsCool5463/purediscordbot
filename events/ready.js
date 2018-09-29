module.exports = (Bot) => {
  console.log(`Ready to serve in ${Bot.channels.size} channels on ${Bot.guilds.size} servers, for a total of ${Bot.users.size} users.`);
}
