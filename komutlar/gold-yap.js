const db = require("quick.db");
const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (message.author.id != 702766932902019102) {
    return message.channel.send("Bu komut sahibime özdür.");
  }

  let şahıs = message.mentions.users.first()

  if (!şahıs) return message.channel.send("Gold verilecek şahsı etiketle.");
  let enis = client.users.get(şahıs.id)
client.channels.get(`757975588127637514`).send(`${enis.tag} **Gold** oldu!`)
  message.channel.send(`\`${şahıs.tag}\` artık **Gold!**`);
db.push(`goldlar`, şahıs.tag)
  db.set(`gold_${şahıs.id}`, "acik");
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: "yapımcı"
};
exports.help = {
  name: "goldyap",
  description: "Napcan?",
  usage: "goldyap"
};