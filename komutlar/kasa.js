const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  let user = message.author;
  let para = await db.fetch(`para_${message.guild.id}_${message.member.id}`);
  let komut = args[0];
  if (!komut) {
    const embed = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(
        "Lütfen bir komut giriniz! \n\nKasa Açmak İçin; **\`!kasa aç <KASA ADI>\`** \nKasa Almak İçin; **\`!kasa al <KASA ADI>\`**"
      )
      .setFooter(`Kasalarınıza bakmak için; !kasalarım`);
    message.channel.send(embed);
    return;
  }

  if (komut == "aç") {
    let kasa = args[1];
    if (!kasa) {
      const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setDescription(
          ":x: Lütfen bir kasa adı giriniz! \n\n **Örnek:** **\`!kasa aç L1-KASA\`** \n\nKasa Almak İçin; **\`!kasa al\`**"
        )
        .setFooter(`Kasalarınıza bakmak için; !kasalarım`);
      message.channel.send(embed);
      return;
    }

    if (kasa == "L1-KASA") {
      let l1 = await db.fetch(`l1_${message.member.id}`);
      if (!l1) {
        const embed = new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(
            ":x: Ne yazık ki hiç **\`L1-KASA\`** kasanız yok! \n\n Kasa Almak İçin; **\`!kasa al\`**"
          )
          .setFooter(`Kasalarınıza bakmak için; !kasalarım`);
        message.channel.send(embed);
        return;
      } else if (l1 <= 0) {
        const embed = new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(
          ":x: Ne yazık ki hiç **\`L1-KASA\`** kasanız yok! \n\n Kasa Almak İçin; **\`!kasa al\`**"
          )
          .setFooter(`Kasalarınıza bakmak için; !kasalarım`);
        message.channel.send(embed);
        return;
      } else {
        const şans = [
          "150",
          "151",
          "152",
          "153",
          "154",
          "155",
          "156",
          "157",
          "158",
          "159",
          "155",
          "149",
          "148",
          "160",
          "156",
          "157",
          "151",
          "153"
        ];
        var şans1 = şans[Math.floor(Math.random() * şans.length)];
        db.add(`l1_${message.member.id}`, -1);
        db.add(`para_${message.guild.id}_${message.member.id}`, +şans1);
        message.channel.send(
          ":white_check_mark: **L1-KASA** Kasan açıldı ve içinden **" + şans1 + "** puan çıkardın!"
        );
      client.channels
        .get("689796937393897517")
        .send(":moneybag: <@" + message.member.id + "> **L1-KASA**'yı açtı içinden  **" + şans1 + "** puan çıktı!");
      }
    } else if (kasa == "L2-KASA") {
      let l1 = await db.fetch(`l2_${message.member.id}`);
      if (!l1) {
        const embed = new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(
            ":x: Ne yazık ki hiç **\`L2-KASA\`** kasanız yok! \n\n Kasa Almak İçin; **\`!kasa al\`**"
          )
          .setFooter(`Kasalarınıza bakmak için; !kasalarım`);
        message.channel.send(embed);
        return;
      } else if (l1 <= 0) {
        const embed = new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(
            ":x: Ne yazık ki hiç **\`L2-KASA\`** kasanız yok! \n\n Kasa Almak İçin; **\`!kasa al\`**"
          )
          .setFooter(`Kasalarınıza bakmak için; !kasalarım`);
        message.channel.send(embed);
        return;
      } else {
        const şans = [
          "200",
          "201",
          "202",
          "203",
          "204",
          "205",
          "206",
          "207",
          "208",
          "209",
          "210",
          "199",
          "198",
          "205",
          "201",
          "203"
        ];
        var şans1 = şans[Math.floor(Math.random() * şans.length)];
        db.add(`l2_${message.member.id}`, -1);
        db.add(`para_${message.guild.id}_${message.member.id}`, +şans1);
        message.channel.send(
          ":white_check_mark: **L2-KASA** Kasan açıldı ve içinden **" + şans1 + "** puan çıkardın!"
        );
        client.channels
        .get("757976521100230826")
        .send(":moneybag: <@" + message.member.id + "> **L2-KASA**'yı açtı içinden  **" + şans1 + "** puan çıktı!");
      }
    } else if (kasa == "L3-KASA") {
      let l1 = await db.fetch(`l3_${message.member.id}`);
      if (!l1) {
        const embed = new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(
            ":x: Ne yazık ki hiç **\`L3-KASA\`** kasanız yok! \n\n Kasa Almak İçin; **\`!kasa al\`**"
          )
          .setFooter(`Kasalarınıza bakmak için; !kasalarım`);
        message.channel.send(embed);
        return;
      } else if (l1 <= 0) {
        const embed = new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(
            ":x: Ne yazık ki hiç **\`L3-KASA\`** kasanız yok! \n\n Kasa Almak İçin; **\`!kasa al\`**"
          )
          .setFooter(`Kasalarınıza bakmak için; !kasalarım`);
        message.channel.send(embed);
        return;
      } else {
        const şans = [
          "250",
          "251",
          "252",
          "253",
          "254",
          "255",
          "356",
          "257",
          "258",
          "259",
          "260",
          "249",
          "248",
          "251",
          "252",
          "253",
          "255",
          "259",
          "257"
        ];
        var şans1 = şans[Math.floor(Math.random() * şans.length)];
        db.add(`l3_${message.member.id}`, -1);
        db.add(`para_${message.guild.id}_${message.member.id}`, +şans1);
        message.channel.send(
          ":white_check_mark: **L3-KASA** Kasan açıldı ve içinden **" + şans1 + "** puan çıkardın!"
        );
         client.channels
        .get("757976521100230826")
        .send(":moneybag: <@" + message.member.id + "> **L3-KASA**'yı açtı içinden  **" + şans1 + "** puan çıktı!"); 
      }
    } else {
      const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setDescription(
          "Lütfen bir kasa ismi giriniz! \n\nKasa Açmak İçin; **\`!kasa aç <KASA ADI>\`** \nKasa Almak İçin; **\`!kasa al <KASA ADI>\`**"
        )
        .setFooter(`Kasalarınıza bakmak için; !kasalarım`);
      message.channel.send(embed);
      return;
    }
  } else if (komut == "al") {
    let kasa = args[1];
    if (!kasa) {
      const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setDescription(
          ":x: Lütfen açmak istediğiniz kasanın ismini yazın! \n\nKasa Açmak İçin; **\`!kasa aç <KASA ADI>\`** \nKasa Almak İçin; **\`!kasa al <KASA ADI>\`**  \n\n__KASALAR:__**\nL1-KASA - 150 PUAN\nL2-KASA - 200 PUAN\nL3-KASA - 250 PUAN**\n\n Örnek: **\`!kasa al L1-KASA\`** \n\nKasa Açmak İçin; **\`!kasa aç L1-KASA\`**"
        )
        .setFooter(`Kasalarınıza bakmak için; !kasalarım`);
      message.channel.send(embed);
      return;
    }

    if (kasa == "L1-KASA") {
      if (!para) {
        const embed = new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(
            "Ne yazık ki hiç puanınız yok!\n\nKASALAR;\nL1-KASA - 150 PUAN\nL2-KASA - 200 PUAN\nL3-KASA - 250 PUAN\n\nKasa Açmak İçin; !kasa aç <KASA ADI>\nKasa Almak İçin; !kasa al <KASA ADI>"
          )
          .setFooter(`Kasalarınıza bakmak için; !kasalarım`);
        message.channel.send(embed);
        return;
      } else if (para < 150) {
        const embed = new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(
            "Ne yazık ki hiç puanınız yok!\n\nKASALAR;\nL1-KASA - 150 PUAN\nL2-KASA - 200 PUAN\nL3-KASA - 250 PUAN\n\nKasa Açmak İçin; !kasa aç <KASA ADI>\nKasa Almak İçin; !kasa al <KASA ADI>"
          )
          .setFooter(`Kasalarınıza bakmak için; !kasalarım`);
        message.channel.send(embed);
        return;
      } else {
        db.add(`l1_${message.member.id}`, +1);
        db.add(`para_${message.guild.id}_${message.member.id}`, -150);
        message.channel.send(":dollar: **L1-KASA**'yı başarıyla aldınız! \n **\`!kasalarım\`** Kasalarınıza bakabilirsiniz.");
        client.channels.get("757976521100230826").send(`:dollar:  ${message.member} **L1-KASA**'yı satın aldı!`)
        
      }
      
    } else if (kasa == "L2-KASA") {
      if (!para) {
        const embed = new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(
            "Ne yazık ki hiç puanınız yok!\n\nKASALAR;\nL1-KASA - 150 PUAN\nL2-KASA - 200 PUAN\nL3-KASA - 250 PUAN\n\nKasa Açmak İçin; !kasa aç <KASA ADI>\nKasa Almak İçin; !kasa al <KASA ADI>"
          )
          .setFooter(`Kasalarınıza bakmak için; !kasalarım`);
        message.channel.send(embed);
        return;
      } else if (para < 200) {
        const embed = new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(
            "Ne yazık ki hiç puanınız yok!\n\nKASALAR;\nL1-KASA - 150 PUAN\nL2-KASA - 200 PUAN\nL3-KASA - 250 PUAN\n\nKasa Açmak İçin; !kasa aç <KASA ADI>\nKasa Almak İçin; !kasa al <KASA ADI>"
          )
          .setFooter(`Kasalarınıza bakmak için; !kasalarım`);
        message.channel.send(embed);
        return;
      } else {
        db.add(`l2_${message.member.id}`, +1);
        db.add(`para_${message.guild.id}_${message.member.id}`, -200);
        message.channel.send(":dollar: **L2-KASA**'yı başarıyla aldınız! \n **\`!kasalarım\`** Kasalarınıza bakabilirsiniz.");
        client.channels.get("757976521100230826").send(`:dollar:  ${message.member} **L2-KASA**'yı satın aldı!`)

      }
    } else if (kasa == "L3-KASA") {
      if (!para) {
        const embed = new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(
            "Ne yazık ki hiç puanınız yok!\n\nKASALAR;\nL1-KASA - 150 PUAN\nL2-KASA - 200 PUAN\nL3-KASA - 250 PUAN\n\nKasa Açmak İçin; !kasa aç <KASA ADI>\nKasa Almak İçin; !kasa al <KASA ADI>"
          )
          .setFooter(`Kasalarınıza bakmak için; !kasalarım`);
        message.channel.send(embed);
        return;
      } else if (para < 250) {
        const embed = new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(
            "Ne yazık ki hiç puanınız yok!\n\nKASALAR;\nL1-KASA - 150 PUAN\nL2-KASA - 200 PUAN\nL3-KASA - 250 PUAN\n\nKasa Açmak İçin; !kasa aç <KASA ADI>\nKasa Almak İçin; !kasa al <KASA ADI>"
          )
          .setFooter(`Kasalarınıza bakmak için; !kasalarım`);
        message.channel.send(embed);
        return;
      } else {
        db.add(`l3_${message.member.id}`, +1);
        db.add(`para_${message.guild.id}_${message.member.id}`, -250);
        message.channel.send(":dollar: **L3-KASA**'yı başarıyla aldınız! \n **\`!kasalarım\`** Kasalarınıza bakabilirsiniz.");
        client.channels.get("757976521100230826").send(`:dollar:  ${message.member} **L3-KASA**'yı satın aldı!`)
      }
    } else {
      const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setDescription(
          "Lütfen düzgün bir kasa adı giriniz!\n\nKasa Açmak İçin; !kasa aç <KASA ADI>\nKasa Almak İçin; !kasa al <KASA ADI>"
        )
        .setFooter(`Kasalarınıza bakmak için; !kasalarım`);
      message.channel.send(embed);
      return;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kasa",
  description: "kasa",
  usage: "kasa"
};