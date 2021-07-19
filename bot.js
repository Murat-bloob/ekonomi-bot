const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const db = require('quick.db');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam,  hoş geldin ^^');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);



//BOT KORUMA
client.on("guildMemberAdd", async member => {
  if (member.user.bot) {
   member.guild.roles.forEach(async function(yetkilirol) {
      if (yetkilirol.id === "653001733164761111") return;
      if (yetkilirol.hasPermission("ADMINISTRATOR")) {
        yetkilirol.setPermissions(yetkilirol.permissions - 8);
      }
    });
   let korumakanalı = client.channels.get("653007394338766888");
    if (!korumakanalı || korumakanalı === null) {
     member.ban(member);
      member.guild.owner.send(
        `Log kanalı olmadığı içim sunucu sahibinin DM'ine yazıyorum.| **Sunucuya bir bot eklendi ve koruma nedeniyle botu banladım. \nBanlanan Bot: **${member} `
      );
    } else {
      member.ban(member);
      korumakanalı.send(
       `** <@521315934825349121> Sunucuya bir bot eklendi ve koruma nedeniyle botu banladım. \nBanlanan Bot: **${member} **<@&652529875277840542>** @everyone`
      );
    }
  } else {
 }
});



//////




client.on("guildMemberAdd", member => { // hesap ceza sistemi fake üye
  var moment = require("moment")
  require("moment-duration-format")
  moment.locale("tr")
   var {Permissions} = require('discord.js');
   var x = moment(member.user.createdAt).add(30, 'days').fromNow()
   var user = member.user
   x = x.replace("birkaç saniye önce", " ")
   if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
   var rol = member.guild.roles.get("689774396021538827")
   var kayıtsız = member.guild.roles.get("653675608206737408")
   member.addRole(rol)
setTimeout(() => {

        member.removeRole(kayıtsız.id);

}, 1000)

  
    
   }
        else {

        }  
    });



client.on("message", async message => { // puan sistemi mesaj yazdıkça puan
  const request = require("node-superfetch");
  let dakdest = await db.fetch(`sğre11_${message.member.id}`);
  let timeout = 1800000; //1000 = 1 saniye //30dk şuan
  const ms = require("parse-ms");
  let amount = Math.floor(Math.random() * 5) + 2;
  if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
    let time = ms(timeout - (Date.now() - dakdest));
  } else {
    if (message.member.bot) return;
    if (message.content.length > 1) {
      db.add(`para_${message.guild.id}_${message.author.id}`, +amount);
      db.set(`sğre11_${message.author.id}`, Date.now());
      client.channels
        .get("757975588127637514")
        .send(
          `:rosette: ` + message.member.user.tag + ` **` + amount + `** puan kazandı!`
          //`:rosette: <@` + message.member.username + `> **` + amount + `** puan kazandı!`

        );
    }
  }
});

client.on("roleCreate", async role => { // rol koruma
  let kanal = await db.fetch(`rolk_${role.guild.id}`);
  if (!kanal) return;

  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_CREATE" })
    .then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == role.guild.owner.id) return;
  role.delete();
  role.guild.roles.forEach(r => {
    role.guild.members.get(entry.executor.id).removeRole(r.id);
  });
  const embed = new Discord.RichEmbed()
    .setTitle(`**Bir Rol Açıldı!**`)
    .setColor("BLACK")

    .addField(`**Açan**`, entry.executor.tag)
    .addField(`**Açılan Rol**`, role.name)
    .addField(`**Sonuç**`, `Rol Geri Silindi!`);
  client.channels.get(kanal).send(embed);
});

client.on("roleDelete", async role => {
  let kanal = await db.fetch(`rolk_${role.guild.id}`);
  if (!kanal) return;

  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == role.guild.owner.id) return;
  role.guild.createRole({
    name: role.name,
    color: role.hexColor,
    permissions: role.permissions,
    hook: true
  });
  role.guild.roles.forEach(r => {
    role.guild.members.get(entry.executor.id).removeRole(r.id);
  });
  const embed = new Discord.RichEmbed()
    .setTitle(`**Bir Rol Silindi!**`)
    .setColor("BLACK")

    .addField(`**Açan**`, entry.executor.tag)
    .addField(`**Açılan Rol**`, role.name)
    .addField(`**Sonuç**`, `Rol Geri Açıldı!`);
  client.channels.get(kanal).send(embed);
});

// sohbet neşelendirme
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bilmem') {
    msg.channel.sendMessage('Senin bilmediğini biz nasıl bilek');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bilmm') {
    msg.channel.sendMessage('Senin bilmediğini biz nasıl bilek');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hmm') {
    msg.channel.sendMessage('Ne düşünüon acaba :thinking: ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'nasılsınız') {
    msg.channel.sendMessage('İyi knk Sen Nasılsın');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'knk') {
    msg.channel.sendMessage('Efendim knk');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aq') {
    msg.channel.sendMessage('Küfür Etme Lan  :thinking: ');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'of') {
    msg.channel.sendMessage('Sıkıldınmı :thinking: ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bilmiyorum') {
    msg.channel.sendMessage('Senin bilmediğini biz nasıl bilek');
  }
});



client.on("guildMemberAdd", member => { // son üye
  setTimeout(() => {
    member.guild.channels
      .get("691405025435582504")
      .setName(`Son Üye • ${member.user.username}`);
  }, 5000);
});