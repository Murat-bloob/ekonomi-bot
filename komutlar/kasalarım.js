const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  let l1 = (await db.fetch(`l1_${user.id}`)) || "0";
  let l2 = (await db.fetch(`l2_${user.id}`)) || "0";
  let l3 = (await db.fetch(`l3_${user.id}`)) || "0";
  const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setDescription(`L1 KASA: ${l1}x\nL2 KASA: ${l2}x\nL3 KASA: ${l3}x`)
    .setFooter(`Kasalarınıza almak için; !kasa al`);
  message.channel.send(embed);
  return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kasalarım",
  description: "kasalarım",
  usage: "kasalarım"
};