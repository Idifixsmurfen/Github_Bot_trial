const Discord = require("discord.js")
const fetch = require('node-fetch')
const client = new Discord.Client()

const prefix1 = 'TUC '
const prefix2 = 'Count '
let C 
let MTL
let HTL

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content.toUpperCase() === 'UTC'){
    msg.reply('Current time is ' + Date())
  }

})
console.log(parseInt(new Date().getHours()))

client.on('message', msg => {
  if (msg.content.toUpperCase() === '?LEET?'){


  let D = new Date()
let H = D.getHours()
let M = D.getMinutes()
let S = D.getSeconds()

if (H == 12 && M < 37){ MTL = 37 - M;
console.log(MTL)
msg.channel.send('time to leet is ' + MTL + ' minutes')
  // if (C != undefined) { C.send(' until LEETing')}
}

if (H == 12 && M == 37){ 
console.log(MTL)
msg.channel.send('time to leet is 24 hours')
  // if (C != undefined) { C.send(' until LEETing')}
}

if (H == 12 && M > 37){ MTL = 60 - M + 37;
console.log(MTL)
msg.channel.send('time to leet is 23 hours and ' + MTL + ' minutes')
  // if (C != undefined) { C.send(' until LEETing')}
}

  }})





setInterval(function() {
  let D = new Date()
let H = D.getHours()
let M = D.getMinutes()
let S = D.getSeconds()

if (H == 11 && M == 37 && S == 1){
  if (C != undefined) { C.send('LEET!')}
}
},997)













client.on('message', msg => {
  if (msg.content.toUpperCase() === '?HERE') {
    C = msg.channel

    msg.channel.send('gotcha fam')
  }
})

client.on("message", msg => {
  if (msg.content.toUpperCase() === '?ping') {
    msg.reply('Pong!');8
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
    msg.reply('```Type >?ping< for pong! \nType >TUC < for upper case \nType >Count < for character count \nType >UTC< for time in UTC\nType >?here< for LEETing\nType >?leet?< for time until leeting (work in progress)```')
  }
})

client.on('message', msg => {
  if (msg.content === 'trial') {
    msg.channel.send('and error')
  }
})

client.login('ODQ2MDE3NTQxNjYyMTc5MzY5.YKpZPA.dpD-mRipahsTbAoLP3Iurs2WB2g')