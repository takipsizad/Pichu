module.exports = {
    name: 'poke',
    category: 'fun',
    usage: 'pichu poke [@mention/username/user-id] ',
    description: 'Pokes someone',
    async execute(client,message,args,dbl,queue) {
       
        message.channel.send('Generating...').then(async msg => {
            let user = message.mentions.users.first() || client.users.cache.get(args.join(' ')) || client.users.cache.find(user => user.username.toLowerCase() === args.join(' ').toLowerCase()) || client.user
            const nekoclient = require('nekos.life')
            const neko = new nekoclient()
            const poke = await neko.sfw.poke()
            const Discord = require('discord.js')
            msg.edit(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`**${message.author.username}** pokes **${user.username}**`)
            .setImage(poke.url))
        })
    }
}