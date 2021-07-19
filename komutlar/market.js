const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let istek = args[0];

  let user = message.mentions.users.first() || message.member;
  let para = await db.fetch(`para_${message.guild.id}_${message.member.id}`);

  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!istek) {
    const e = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `__Puanlı Roller:__ \n**Efsanevi** / **\`!market efsanevi\`** 300 Puan \n**Profesör** / **\`!market profesör\`** 250 Puan \n**Kadim** / **\`!market kadim\`** 170 Puan \n**Bilgeli** / **\`!market bilgeli\`** 130 Puan \n**Uzman** / **\`!market uzman\`** 90 Puan \n**Deneyimli** / **\`!market deneyimli\`** 60 Puan \n**Deneyimsiz** / **\`!market deneyimsiz\`** 40 Puan \n**Acemi** / **\`!market acemi\`** 20 Puan \n\n __Puanlı Kasalar:__ \n**L1-KASA** / **\`!kasa al L1-KASA\`** 150 Puan \n**L2-KASA** / **\`!kasa al L2-KASA\`** 200 Puan \n**L3-KASA** / **\`!kasa al L3-KASA\`** 250 Puan  \n\n Birşey karşılığında **Puan** kazanmak için \`Yetkiliye\`'ye ulaşın. `
      );
    message.channel.send(e);
    return;
  }

  if (istek === "acemi") {
     if (para > "20") {
      db.add(`para_${message.guild.id}_${message.member.id}`, -20)
      client.channels
        .get("757977710642462890")
        .send(`:money_with_wings: <@` + message.member.id + `> Marketen __Acemi__ rolünü satın aldı.`);
      message.member.addRole("757977305908904017");
      message.channel.send(":white_check_mark: Marketen __Acemi__ rolü satın aldınız.");
      return;
    } else {
      message.channel.send(":x: __Acemi__ rolünü almak için 20 puana sahip olmak zorundasın.");
      return;
    }
  } else if (istek === "deneyimsiz") {
    if (para > "40") {
      db.add(`para_${message.guild.id}_${message.member.id}`, -40)
      client.channels
        .get("757977710642462890")
        .send(`:money_with_wings: <@` + message.member.id + `> Marketen __Deneyimsiz__ rolünü satın aldı.`);
      message.member.addRole("757977347931504792");
      message.channel.send(":white_check_mark: Marketen __Deneyimsiz__ rolü satın aldınız.");
      return;
    } else {
      message.channel.send(":x: __Deneyimsiz__ rolünü almak için 40 puana sahip olmak zorundasın.");
      return;
    }
  } else if (istek === "deneyimli") {
    if (para > "60") {
      db.add(`para_${message.guild.id}_${message.member.id}`, -60)
      client.channels
        .get("757977710642462890")
        .send(`:money_with_wings: <@` + message.member.id + `> Marketen __Deneyimli__ rolünü satın aldı.`);
      message.member.addRole("757977379770466405");
      message.channel.send(":white_check_mark: Marketen __Deneyimli__ rolü satın aldınız.");
      return;
    } else {
      message.channel.send(":x: __Deneyimli__ rolünü almak için 60 puana sahip olmak zorundasın.");
      return;
    }
  } else if (istek === "uzman") {
    if (para > "90") {
      db.add(`para_${message.guild.id}_${message.member.id}`, -90)
      client.channels
        .get("757977710642462890")
        .send(`:money_with_wings: <@` + message.member.id + `> Marketen __Uzman__ rolünü satın aldı.`);
      message.member.addRole("757977442257469462");
      message.channel.send(":white_check_mark: Marketen __Uzman__ rolü satın aldınız.");
      return;
    } else {
      message.channel.send(":x: __Uzman__ rolünü almak için 90 puana sahip olmak zorundasın.");
      return;
    }
  } else if (istek === "bilgeli") {
    if (para > "130") {
      db.add(`para_${message.guild.id}_${message.member.id}`, -130)
      client.channels
        .get("757977710642462890")
        .send(`:money_with_wings: <@` + message.member.id + `> Marketen __Bilgeli__ rolünü satın aldı.`);
      message.member.addRole("757977460129136662");
      message.channel.send(":white_check_mark: Marketen __Bilgeli__ rolü satın aldınız.");
      return;
    } else {
      message.channel.send(":x: __Bilgeli__ rolünü almak için 130 puana sahip olmak zorundasın.");
      return;
    }
  } else if (istek === "kadim") {
    if (para > "170") {
      db.add(`para_${message.guild.id}_${message.member.id}`, -170)
      client.channels
        .get("757977710642462890")
        .send(`:money_with_wings: <@` + message.member.id + `> Marketen __Kadim__ rolünü satın aldı.`);
      message.member.addRole("757977495281598575");
      message.channel.send(":white_check_mark: Marketen __Kadim__ rolü satın aldınız.");
      return;
    } else {
      message.channel.send(":x: __Kadim__ rolünü almak için 170 puana sahip olmak zorundasın.");
      return;
    }
  } else if (istek === "profesör") {
    if (para > "250") {
      db.add(`para_${message.guild.id}_${message.member.id}`, -250)
      client.channels
        .get("757977710642462890")
        .send(`:money_with_wings: <@` + message.member.id + `> Marketen __Profesör__ rolünü satın aldı.`);
      message.member.addRole("757977520606806087");
      message.channel.send(":white_check_mark: Marketen __Profesör__ rolü satın aldınız.");
      return;
    } else {
      message.channel.send(":x: __Profesör__ rolünü almak için 250 puana sahip olmak zorundasın.");
      return;
    }
  } else if (istek === "efsanevi") {
    if (para > "300") {
      db.add(`para_${message.guild.id}_${message.member.id}`, -300)
      client.channels
        .get("757977710642462890")
        .send(`:money_with_wings: <@` + message.member.id + `> Marketen __Efsanevi__ rolünü satın aldı.`);
      message.member.addRole("757977553435754586");
      message.channel.send(":white_check_mark: Marketen __Efsanevi__ rolü satın aldınız.");
      return;
    } else {
      message.channel.send(":x: __Efsanevi__ rolünü almak için 300 puana sahip olmak zorundasın.");
      return;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "market",
  description: "Eşya",
  usage: "market"
};
