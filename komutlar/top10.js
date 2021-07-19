const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  try {
    async function getLeaderboard(page, per_page) {
      const money = await db.startsWith(`para_${message.guild.id}`, {
        sort: ".data"
      });
      var page = page || 1,
        per_page = per_page || 10,
        offset = (page - 1) * per_page,
        paginatedItems = money.slice(offset).slice(0, per_page),
        total_pages = Math.ceil(money.length / per_page);

      let id = money.slice(`para_${message.guild.id}`);

      var leaderboardMessage = "";
      let i = 0;
      for (i in paginatedItems) {
        i++;
        //if (i > 10) return;
        leaderboardMessage += `**${i}.**  <@!${
          money[i - 1].ID.split("_")[2]
        }> •** ${paginatedItems[i - 1].data} **Puan\n`;
      }

      let end = {
        page: page,
        per_page: per_page,
        pre_page: page - 1 ? page - 1 : null,
        next_page: total_pages > page ? page + 1 : null,
        total: money.length,
        total_pages: total_pages,
        data: paginatedItems,
        message: leaderboardMessage
      };

      const topembed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setAuthor(`${message.guild.name} Liderlik Tablosu!`)
        .setDescription(leaderboardMessage || "YOK!");
      return message.channel.send(topembed);
    }
    getLeaderboard(1, 10);
  } catch (err) {
    const embed = new Discord.RichEmbed()
      .setDescription(
        "Sanırım bir sorun var! Bunu yetkililere bildir!\nDestek Sunucusu: [Tıkla!](https://discord.gg/GPupfb2)"
      )
      .setColor("RED")
      .setTimestamp();
    message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["lt", "top10"],
  permLevel: 0
};

exports.help = {
  name: "liderlik-tablosu",
  description: "liderlik-tablosu",
  usage: "liderlik-tablosu"
};