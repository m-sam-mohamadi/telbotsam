const { Telegraf } = require('telegraf')
const bot = new Telegraf('1534411815:AAGDRU9GAW8w0tNkyNkFbUTzXszP_7MxY0M')
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()