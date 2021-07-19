const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Puan Sisteminin Komutları')
.setTimestamp()
.addField('!puan','Puanınızı atar.')
.addField('!günlük','24 Saate bir puan alırsınız.')
.addField('!kasa','Kasa sistemine erişim sağlarsınız.')
.addField('!kasa al','Kasa satın alırsınız.')
.addField('!kasa aç','Kasa açarsınız.')
.addField('!kasalarım','Kasalarınıza bakarsınız.')
.addField('!top10','Liderlik Tablosuna erişirsiniz.')
.setFooter('devTR')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'puan-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};