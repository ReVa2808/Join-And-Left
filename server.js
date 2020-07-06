const Discord = require('discord.js');
const client = new Discord.Client();

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
    
    if (args[1] === "join") {
      
      if (args[2] === "on") {
        
        
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
