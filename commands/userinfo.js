const Discord = require('discord.js')
exports.run = (Bot, message, args) => {
  let userMentioned = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author;
//  let awaitMsg = await message.channel.send(`Generating userinfo for ${userMentioned}`);
  let embed = new Discord.RichEmbed()
  .setAuthor(userMentioned, userMentioned.avatarURL)
  .setDescription(`Info about __***${userMentioned}***__`)
  .setColor("#1865e0")
  .addField("Username", `${userMentioned}#${userMentioned.discriminator}`)
  .addField("ID", userMentioned.id)
  .setThumbnail(userMentioned.avatarURL)
  .addField("Is Bot", userMentioned.bot)
  .addField("Joined Server On", message.guild.joinedAt)
  .addField("Joined Discord on", userMentioned.createdAt);

//await message.channel.sendEmbed(embed);
awaitMsg.delete();
}
