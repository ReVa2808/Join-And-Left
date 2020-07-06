const Discord = require('discord.js');
const fs = require("fs")
const client = new Discord.Client();
let data = JSON.parse(fs.readFileSync("./data.json", "utf8"))
client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') { 
    msg.reply('Pong!');
  } 
});

client.on('message', msg => {
  let args = msg.content.split(" "),
      cmd = args[0];
  if (cmd === prefix + "set") {
    if (!data[msg.guild.id]) data[msg.guild.id] = {
      cat: "off",
      catId: "none",
      channelJoin: "off",
      channelJoinId: "none",
      memberJoin: 0,
      channelLeft: "off",
      channelLeftId: "none",
      memberLeft: 0
      }
    let dataD = data[msg.guild.id];
    if (args[1] === "join") {
      
      if (args[2] === "on") {
        if (dataD.channelJoin === "on") return msg.reply("we have a join channel");
        if (dataD.cat === "on") {
          
          } else {
            
            
            }
        
        }
      
      if (args[2] === "off") {
        
        
        
        }
      }
    
    if (args[1] === "left") {
     
      if (args[2] === "on") {
        
        
        }
      if (args[2] === "off") {
        
        
        }
      
      }
    
    }
})

client.login('token');
