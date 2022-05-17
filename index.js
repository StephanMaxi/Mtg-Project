const {Client, Intents, Message, GuildMember, Presence, User, Activity } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({intents: [Intents.FLAGS.GUILDS, 
                                    Intents.FLAGS.GUILD_MESSAGES,
                                    Intents.FLAGS.GUILD_BANS,
                                    Intents.FLAGS.GUILD_MEMBERS,
                                    Intents.FLAGS.GUILD_PRESENCES] });

client.once('ready', () => {
    console.log('Ready!');
})


client.on('messageCreate', async(message) => {
if(message.author.id === client.user.id) return;

if(message.content === "ping"){
        await message.reply(message.author.username);
} 

})
client.on('messageCreate', async(message) =>{
    if(message.author.id === client.user.id) return;

    if(message.content === 'off'){
       await message.reply('turning off now!');
        await client.destroy();
    } 
})

client.login(token);




