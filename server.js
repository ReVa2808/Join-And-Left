const Discord = require('discord.js');
const fs = require("fs")
const math = require("math")
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



client.on("message", message => {
    if(message.content.startsWith(prefix + "verify")){
      if(message.channel.id !== `channel id`) return message.channel.send(`**⚠️  You Are not in the correct room **`).then(m => m.delete(5000));
      if(!message.channel.guild) return message.channel.send('**This is only for servers | ⚠️ **').then(m => m.delete(5000));
      
      let content = '';
      /*photo start*/
      	const canvas = Canvas.createCanvas(700, 250);
      	const ctx = canvas.getContext('2d')
        const background = await Canvas.loadImage('http://i8.ae/aByET')
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      /*photo pouse*/
      
             let fillter = m => m.author.id === message.author.id,
                 one = Math.floor(Math.random() * 10) + 1,
                 two = Math.floor(Math.random() * 10) + 1,
                 three = Math.floor(Math.random() * 10) + 1,
                 four = Math.floor(Math.random() * 10) + 1,
                 num = one two three four;
      /*photo resume*/
      ctx.font = '28px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(num, canvas.width / 2.5, canvas.height / 1.8);
      ctx.strokeStyle = '#74037b';
      ctx.strokeRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();
      const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
      	ctx.drawImage(avatar, 25, 0, 200, 200);
      
      
      const veryfiI = new Discord.MessageAttachment(canvas.toBuffer(), 'verify.png');
      /*photo stop*/
             await message.channel.send(veryfiI).then(e => {
     message.channel.awaitMessages(fillter, { time: 10 * 60 * 1000, max: 1 })
    .then(me => {
       let number = me.first().content;
        me.first().delete();
       /* ReVa */
       if (number===num) {
         message.member.addRole(message.guild.roles.find(role => role.name === 'role name'));

message.reply('Thanks For verify your self');
         
         } else {
           message.channel.send('the code is false')
           }
       })
               })
      })
      });



client.login('token');
