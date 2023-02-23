const { Client } = require('discord.js');
require('@discordjs/voice');
const client = new Client({ partials: ["CHANNEL", "MESSAGES", "GUILD_MEMBERS", "DIRECT_MESSAGES"], intents: 32767 });
const db = require('pro.db');
const ms = require('ms');
const { token , partner, link, idvc }  = require('./config.json');
client.on('ready',async () => {  await console.log(client.user.tag);})
client.on('ready', async () => {
 
 client.user.setActivity(`Partner`, { type:'WATCHING' })
});



client.on("messageCreate", (message) => {
    if (message.content === "Reklam") {
        message.reply(`🌹رێکلام لە تایبەت بۆم بنێرە`);
    }
    if (message.content === "رێکلام هەیە") {
        message.reply(`🌸رێکلام لە تایبەت بۆم بنێرە`);
    }
    if (message.content === "ريكلام") {
        message.reply(`😍رێکلام لە تایبەت بۆم بنێرە`);
    }
  if (message.content === "رێکلام") {
        message.reply(`🌼رێکلام لە تایبەت بۆم بنێرە`);
  }
  if (message.content === "reklam haya") {
        message.reply(`🌷رێکلام لە تایبەت بۆم بنێرە`);
}
  if (message.content === "Reklam haya") {
        message.reply(`🌻رێکلام لە تایبەت بۆم بنێرە`);
  }
  if (message.content === "Reklam?") {
        message.reply(`💐رێکلام لە تایبەت بۆم بنێرە`);
    }
  if (message.content === "REKLAM") {
        message.reply(`🌹رێکلام لە تایبەت بۆم بنێرە`);
  }
  if (message.content === "reklam?") {
        message.reply(`💖رێکلام لە تایبەت بۆم بنێرە`);
    }
if (message.content === "Reklam ?") {
        message.reply(`😍رێکلام لە تایبەت بۆم بنێرە`);
}
if (message.content === "reklam") {
        message.reply(`🌷رێکلام لە تایبەت بۆم بنێرە`);
}
if (message.content === "ریکلام هەیە") {
        message.reply(`🌻رێکلام لە تایبەت بۆم بنێرە`);
    }
if (message.content === "Reklam agornawa") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
    }
if (message.content === "CH UP") {
        message.reply(`Xot UP Dle Mn💕`);
    }
	if (message.content === "slaw") {
        message.reply(`❤سلاو لەتۆش دلی من`)
}
if (message.content === "@! 【CH】ZAMO#8452") {
        message.reply(`😘ببورە 🙏ڕۆل بەدەستێک تاگ بکە`)
}
if (message.content === "partner") {
        message.reply(`Send Link in Dm`)
}
if (message.content === "Partner") {
        message.reply(`Send Link in Dm`)
}
if (message.content === "اعلان") {
        message.reply(`ارسل بل خاص`)
}

});

client.on("messageCreate", async message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (message.content.match(new RegExp(`^<@!?${client.user.id}>`))) {
    return message.channel.send(`**Dm Me For Reklam**`);
  }
});


client.on('messageCreate',async (message) => {
    if (message.author.bot) return;
    if (message.channel.type == 'DM') {
      
    let share = await client.channels.cache.get(partner);
    let args = await message.content.split(' ');
    let cool = await db.get(`cool_${message.author.id}`);

    if(!share) return;
    if (cool > Date.now()) {
        return await message.author.send({content : 'ببورە ناتوانی ڕیکلامەکەت  دوبارە بکەیەوە تا نیو کاتژمێری تر🚦'}).catch(async (err) => {
            await message.channel.send({content : `${message.author} ببورە دەتوانیت جارێکی تر ڕیکلامەکەت بنێری دوای 1 کاتژمێر `})
        }).catch(err => undefined);
    }
    let time = await Date.now() + ms('10m');
    try {
    await client.fetchInvite(args[0]).then(async (invite) => {
        await db.set(`cool_${message.author.id}`,time);
        await share.send({content: `${invite}\n **📨 Posted By** ${message.author}`});
        await message.channel.send({content : `
> 📪 **Posted In ${share}**
> 📮 **Post This Link in Your Server To** ${link}`}).catch(async (err) => {
            await message.channel.send({content : `> **${message.author} You Server Posted in ${share}**`});
        })
    }).catch(async (err) => {
        await message.channel.send({content: '> ** Invalid Link Try Again!**'});
    })
   } catch (err) {
       return;
    }}
})






client.on("ready", async() => {
 try{
const { joinVoiceChannel } = require('@discordjs/voice'); 

client.channels.fetch(`${idvc}`).then((channel) => { 
  console.log(`${client.user.tag} Connected To Voice`) 
const VoiceConnection = joinVoiceChannel({ channelId: channel.id, 
guildId: channel.guild.id, 
adapterCreator: channel.guild.voiceAdapterCreator,
selfDeaf: true,
selfMute: true
  }); 
     });
  } catch (err) {
console.log(err)
}
});




client.login(token)
