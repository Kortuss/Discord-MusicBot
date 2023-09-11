const { cli } = require("winston/lib/winston/config");
const Discord = require("discord.js")
const { TrackUtils, Player } = require("erela.js");
const GuildMember = new Discord.GuildMember();
const play = require("../commands/play");
const message = require("./message");

const getUserNum = (client) => {
  let c = 0;
  let discserver = client.guilds.cache.get("1053012064072912947").channels.cache.get("1053012064894984319").members
  for(bimbo of discserver) c++;
  return c;
}

module.exports = async (client,prova) => {
  (client.Ready = true),
    client.user.setPresence({
      status: client.botconfig.Presence.status, // You can show online, idle, and dnd
      activity: {
        name: client.botconfig.Presence.name,
        type: client.botconfig.Presence.type,
      },
    });
  client.Manager.init(client.user.id);
  client.log("Successfully Logged in as " + client.user.tag); // You can change the text if you want, but DO NOT REMOVE "client.user.tag"
  client.on("voiceStateUpdate",(oldMember,newMember)=>{
    //console.log(newMember.channelID, oldMember.channelID)
    const player = client.Manager.create({
      guild: "1053012064072912947",
      voiceChannel: "1053012064894984319",
      textChannel: "1053012064894984316",
      selfDeafen: client.botconfig.ServerDeafen,
      volume: client.botconfig.DefaultVolume,
    });
    const channel = client.channels.cache.get('1053012064894984316');
    //channel.send('/play');
    // console.log(channel.messages)
    GuildDB = client.GetGuild(client.user.id);
    let prova = {title: "https://www.youtube.com/watch?v=J4cQTp1S3cs"}
    const trunck = TrackUtils.build(prova.title)
    //player.queue.add(trunck);
    //player.play()
    play.usage = "momento gay"
    if(newMember.channelID === "1053012064894984319" && (oldMember !== newMember)){
     // if(getUserNum(client) > 1) 
    }
  
    // if (GuildMember.voice.channel) {
    //   console.log(GuildMember.voice.channel.members.size);
    // };
    //console.log(newMember)
    // if (newMember.channelID !== "1053012064894984319")
    //   console.log(oldMember.channelID)
    //   console.log(newMember.channelID)
  })
  client.RegisterSlashCommands();
};
