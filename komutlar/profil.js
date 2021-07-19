const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let i = await db.fetch(`para_${message.guild.id}_${message.member.id}`);
  const embed = new Discord.RichEmbed()

    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("BLUE")
    .setThumbnail(message.author.avatarURL)
    .addField(":bust_in_silhouette: Ad", message.author.tag, true)
    .addField(":dollar: Puan", i || 0, true)
    .addField(":game_die: ID", message.author.id, true)
    .addField(
      ":rosette: Durumu",
      message.author.presence.status
        .replace("dnd", "Rahatsız Etmeyin")
        .replace("idle", "Boşta")
        .replace("offline", "Çevrimdışı")
        .replace("online", "Çevrimiçi"),
      true
    )
    .addField(
      ":video_game: Oynuyor bölümü",
      message.author.presence.game ? message.author.presence.game.name : "Boş.",
      true
    )
    .addField(
      ":calendar_spiral: Hesabın oluşturulduğu tarih",
      message.author.createdAt
        .toUTCString()
        .replace("Nov", "Kasım")
        .replace("Jan", "Ocak")
        .replace("Feb", "Şubat")
        .replace("Mar", "Mart")
        .replace("Aug", "Ağustos")
        .replace("Sep", "Eylül")
        .replace("Oct", "Ekim")
        .replace("Fri", "Cuma")
        .replace("Mon", "Pazartesi")
        .replace("Sun", "Pazar")
        .replace("Sat", "Cumartesi")
        .replace("Tue", "Salı")
        .replace("Wed", "Çarşamba")
        .replace("Thu", "Perşembe")
    );

  return message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["profıl"],
  permLevel: 0
};

module.exports.help = {
  name: "profil",
  description: "Yardım Menüsünü Gösterir.",
  usage: "yardım"
};