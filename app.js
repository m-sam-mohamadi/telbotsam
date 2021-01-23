// const { filter } = require('bluebird');
// var telegramBot = require('node-telegram-bot-api');
// var token = '1525922151:AAGy7gbJD6SIIeQ_bjtaTWObaUnnGMH4zW4'
// var bot = new telegramBot(token, { polling: true });


// bot.onText(/\/echo (.+)/, (msg, match) => {
//   const chatId = msg.chat.id;
//   const resp = match[1];
//   bot.sendMessage(chatId, resp);
 
// });

// let messageCounter = 0;

// bot.on('message', (msg, match) => {
//   const chatId = msg.chat.id;
//   if (msg.text == 'ربات') {
//     let reps = ["جاااان", "جوووون", "ها", "بگوز", "چیمیگی", "چیچیه"];
//     let random = Math.floor(Math.random() * reps.length)
//     bot.sendMessage(chatId,reps[random], {
//       ReplyKeyboardHide: {},
//       reply_to_message_id: msg.message_id,
//     })
//   }
  
//   bot.onReplyToMessage(chatId, msg.message_id, (mes) => {
//     if (msg.text == 'ban') {
//       if (msg.from.username == "m_sam_mohamadi") {
//         bot.kickChatMember(chatId, mes.reply_to_message.contact.id, {
//           ReplyKeyboardHide: {},
//           reply_to_message_id: msg.message_id,
//         })
//       }
//     }
//   })

//   if (msg.left_chat_member) {
//     bot.sendMessage(chatId, `بای ${msg.left_chat_member.first_name}`, {
//       ReplyKeyboardHide: {},
//       reply_to_message_id: msg.message_id,
//     });
//   }
//   if (msg.text == "عکس بده") {
//     bot.sendPhoto(chatId, "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png", {
//       ReplyKeyboardHide: {},
//       reply_to_message_id: msg.message_id,
//     })
//   }
//   messageCounter++; 
//   if (messageCounter == 100) {
//     bot.sendMessage(chatId, "!سرعت شما در حرف زدن بیش از حد مجاز است");
//     messageCounter = 0;
//   }

//   bot.onReplyToMessage(chatId, msg.message_id, (msg) => {
//     if (msg.text == 'پین کن' || msg.text == '📌') {
//       bot.pinChatMessage(chatId, msg.reply_to_message.message_id);
//       bot.sendMessage(chatId, `شد`, {
//         ReplyKeyboardHide: {},
//         reply_to_message_id: msg.message_id,
//       });
//     }
//   });

//   if (msg.text == "لینک گروه") {
//     bot.exportChatInviteLink(chatId).then(data => {
//       bot.sendMessage(chatId, `بیا  \n @${msg.chat.username} \n\n ${data}`, {
//         ReplyKeyboardHide: {},
//         reply_to_message_id: msg.message_id,
//       });
//     })
//   }
  
//   if (msg.text == 'حذف پیام') {
//     if (msg.from.username == 'm_sam_mohamadi') {
//       for (let i = 0; i < 10; i++) {
//         bot.deleteMessage(chatId, msg.message_id - i)
//       }
//     }
//   }
//   if (msg.text == 'حق نگو') {
//     bot.sendMessage(chatId, 'تو خودت یه پا حقی 😂', {
//       ReplyKeyboardHide: {},
//       reply_to_message_id: msg.message_id,
//     });
//   }
//   if (msg.text.includes('کسی هست')) {
//     bot.sendMessage(chatId, 'نه', {
//       ReplyKeyboardHide: {},
//       reply_to_message_id: msg.message_id,
//     });
//   }
//   if (msg.text == 'ربات بزن به چاک') {
//     if (msg.from.username == 'm_sam_mohamadi') {
//       bot.leaveChat(chatId)
//     }
//   }
//   if (msg.text.includes('https://', 0)) {
//     bot.sendMessage(chatId, 'بی ادب لینک نده', {
//       ReplyKeyboardHide: {},
//       reply_to_message_id: msg.message_id,
//     });
//   }

//   if (msg.text.includes('حق', 0) || msg.text.includes('haq', 0)) {
//     bot.kickChatMember(chatId, msg.from.id);
//     console.log(msg.from.username);
//   }

//   if (msg.text == '😂😐' || msg.text == '😐😂') {
//     var repsText = ["کوفت", "جوووون", "تو فقط بخند", "بلا", "مرض", "درد"];
//     var randomText = Math.floor(Math.random() * repsText.length)
//     bot.sendMessage(chatId, `${repsText[randomText]}`, {
//       ReplyKeyboardHide: {},
//       reply_to_message_id: msg.message_id,
//     });
//   }

// });
 


const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const url = 'https://api.telegram.org/bot';
const apiToken = '1525922151:AAGy7gbJD6SIIeQ_bjtaTWObaUnnGMH4zW4';
// Configurations
app.use(bodyParser.json());
// Endpoints
app.post('/', (req, res) => {
    console.log("ok");
     const chatId = req.body.message.chat.id;
     const sentMessage = req.body.message.text;
     // Regex for hello
     if (1 == 1) {
          axios.post(`${url}${apiToken}/sendMessage`,
               {
                    chat_id: chatId,
                    text: 'hello back 👋'
               })
               .then((response) => { 
                    res.status(200).send(response);
               }).catch((error) => {
                    res.send(error);
               });
     } else {
          // if no hello present, just respond with 200 
          res.status(200).send({});
     }
});
// Listening
app.listen(port, () => {
     console.log(`Listening on port ${port}`);
});

require('http')
  .createServer( app.post('/'))
  .listen(process.env.PORT || 4000)

require('https')
  .createServer(app.post('/'))
  .listen(process.env.PORT || 5000)