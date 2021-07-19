const db = require("quick.db");
const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let şahıs = message.mentions.users.first();
  
  if (!şahıs) return message.channel.send("⛔️ Sıfırlanacak şahsı etiketleyiniz.");

  let enis = client.users.get(şahıs.id)
  client.channels.get(`757975588127637514`).send(`<@${şahıs.id}> Günlük **Gold** Puan Ödülü Sıfırlandı!`)
  //client.channels.get(`660453548500189224`).send(`<:tik2:660508273694474250> @${enis.tag} Günlük Ödülü Sıfırlandı!`)
  message.channel.send(`<@${şahıs.id}> Günlük **Gold** Puan süresı sıfırlandı!`);
  db.delete(`lastDaily_${şahıs.id}`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: "yapımcı"
};
exports.help = {
  name: "günlük-sıfırla",
  description: "günlük-süre",
  usage: "günlük-süre"
};
