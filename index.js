const Discord = require("discord.js")
const fetch = require('node-fetch')
const client = new Discord.Client()

const prefix1 = 'TUC '
const prefix2 = 'Count '
console.log(Date(2))

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === 'UTC'){
    msg.reply('Current time is ' + Date())
  }

})

client.on("message", msg => {
  if (msg.content === '?ping') {
    msg.reply('Pong!');
    console.log(msg.content.toUpperCase());
  }
})
client.on('message', msg =>{
    if(!msg.content.startsWith(prefix1) || msg.author.bot) return;
    msg.reply(msg.content.toUpperCase())
})

client.on('message', msg =>{
    if(!msg.content.startsWith(prefix2) || msg.author.bot) return;
    msg.reply('The character count is: ' + (msg.content.length-6))
})

client.on('message', msg => {
  if (msg.content === '?help') {
    msg.reply('```Type >?ping< for pong! \nType >TUC < for upper case \nType >Count < for character count \n Type >UTC< for time in UTC```')
  }
})

client.on('message', msg => {
  if (msg.content === 'trial') {
    msg.channel.send('and error')
  }
})

client.login('ODQ2MDE3NTQxNjYyMTc5MzY5.YKpZPA.niATxdT7GZblcLLDJB60yMvGGXE')