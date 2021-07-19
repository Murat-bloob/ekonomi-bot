const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  let s = message.mentions.users.first()
  let args1 = args[1]
  let args2 = args[2]
    if (!s) {
    const embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription(`adam`);
    message.channel.send(embed);
    return;
  }
  if (!args[1]) {
    const embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription(`kasa gir l1 l2 l3`);
    message.channel.send(embed);
    return;
  }
  if (!args[2]) {
    const embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription(`sayı`);
    message.channel.send(embed);
    return;
  }
  if (args1 == "l1") {
    db.add(`l1_${s.id}`, -args2);

    message.channel.send("oluyo");
  } else if (args1 == "l2") {
    db.add(`l2_${s.id}`, -args2);
    message.channel.send("oluyo");
  } else if (args1 == "l3") {
    db.add(`l3_${s.id}`, -args2);
    message.channel.send("oluyo");
  } else return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "kasa-al",
  description: "kasa-al",
  usage: "kasa-al"
};