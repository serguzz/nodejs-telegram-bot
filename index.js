const TelegramApi = require('node-telegram-bot-api');
// import TelegramApi from 'node-telegram-bot-api';

const token = '_______________';

const bot = new TelegramApi(token, {polling: true});
let messages = [];
let capcha = false;
let userId;


bot.on('message', async msg => {


    messages.push(msg);
    const text = msg.text;
    const chatId = msg.chat.id;

    userId = msg.from.id;
    

    //bot.sendMessage(chatId, `Вы написали: ${text}`)
    if (text === '/start') {
        
        // let membersCount = await bot.getChatMemberCount(chatId);
        // message = `Сейчас в чате: ${membersCount} пользователей.`;
        // message = await bot.sendMessage(chatId, message);
        // messages.push(message);

        let message = await bot.sendMessage(chatId, 'Пройдите капчу. Ответьте на вопрос: \n Сколько будет семнадцать - 8 ?')
        messages.push(message);


        // setTimeout(() => {
        //     if (!capcha) {
        //         // DELETE USER;
        //         // DELETE MESSAGES;
        //     }
        //     bot.leaveChat(chatId);
        // }, 20000);


        setTimeout(() => {

            console.log(messages);
            for ( i in messages) {
        
                let msgId = messages[i].message_id;
                // setTimeout( await bot.deleteMessage(chatId, msgId), 2 * 1000);
            
                console.log(i);
                setTimeout(() => { bot.deleteMessage(chatId, msgId)
                             }, i * 1000);
                
                
                //await bot.deleteMessage(msg.chat.id, messages[i].message_id);
            };
            messages = [];
          //  bot.leaveChat(chatId);
            //bot.banChatMember(chatId, userId);
        }, 8000);



    }

    if (text === '9') {
        capcha = true;
        let message = await bot.sendMessage(chatId, `Привет ${msg.chat.first_name}`);
        messages.push(message);
        
    }


})






