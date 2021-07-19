const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.addField('**Gold Üye Komutları**', '**\`komut\` : Komutlarımız Hızlıca Ekleniyor!**')
.addField('**Gold Üye Nasıl Olunur?**', '**Gold Üye olmak için Destek Sunucumuza gelerek, \`Ücret\` veya \`Gold Puanı\` ile gold satın alabilirsiniz.**')
.addField('**Üye Komutları**', '**\`!günlük\` : Günlük Gold Puanı Alırsınız\n \`!market\` : Gold Marketimizden Ürün Satın Alabilirsiniz\n \`!puan\` : Gold Puanınıza Bakabilirsiniz\n \`!puan @user\` : Etiketlediğiniz Üyenin Gold Puanına Bakarsınız**')
.setDescription("[Destek Sunucusu](https://discord.gg/TCsQgWC)")
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
  name: 'gold',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};