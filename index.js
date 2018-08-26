const botconfig = require("./botconfig");
const Discord = require("discord.js");


const bot = new Discord.Client({disableEveryone: true});
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`.help`, {type: `watching`})
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch (console.error);
});

bot.on("message", async message => {
    const commands = bot.channels.get(botconfig.commandsChannelID);
    const logsCommands = bot.channels.get(botconfig.logsChannelID);

  if(message.channel.type == "dm") {
    console.log(`${message.author.tag} שלח לי הודעה פרטית!`);
    return logsCommands.send(`${message.author.tag} שלח לי הודעה פרטית!`);
}

let prefix = botconfig.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

//link to designs
if(cmd === `${prefix}be`){
  let embed = new Discord.RichEmbed()
  .addField("link:", "https://www.behance.net/adamaskarov")
  .setDescription("my Behance")
  .setColor('RANDOM')
  .setFooter("bot made by avishaiDV");
  message.delete().catch(O_o=>{});
   message.channel.send(embed)
}

//link to twitter
if(cmd === `${prefix}twit`){
  let embed = new Discord.RichEmbed()
  .addField("link:", "https://twitter.com/DeXHyPe")
  .setDescription("My twitter account")
  .setColor('RANDOM')
  .setFooter("bot made by avishaiDV");
  message.delete().catch(O_o=>{});
  message.channel.send(embed)
}
//goodm
if(cmd === `${prefix}goodm`){
  message.delete().catch(O_o=>{});
  message.reply("Good Morning!");
}


});

bot.login(process.env.BOT_TOKEN);
