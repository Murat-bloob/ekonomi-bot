const db = require(`quick.db`)

exports.run = async(client, message, args) => {
let kisi = message.mentions.users.first()
if(!kisi){
message.reply(`Lütfen birini taglayınız.`)
return
}
db.delete(`gold_${kisi.id}`)
    let enis = client.users.get(kisi.id)
  client.channels.get(`757975588127637514`).send(`${enis.tag} **Gold** yetkisi alındı!`)
message.channel.send(`Başarıyla **${kisi}** adlı şahıs **Gold** üyeden oldu!`)
return
}
exports.conf = {
enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: "puan"
}
exports.help = {
name: "gold-çıkar",
  description: "sa",
  usage: "as"
}