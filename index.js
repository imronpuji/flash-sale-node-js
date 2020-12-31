const { Client, Chat } = require('whatsapp-web.js');
const client = new Client();
const chat = new Chat()
const qrCode = require('qrcode')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    client.on('qr', async (qr) => {
        // Generate and scan this code with your phone
        var gambar = await qrCode.toDataURL(qr);
        res.send(`<img src="${gambar}"/>`)
    });
    
    client.on('ready', () => {
        console.log('Client is ready!');
    });
    
    client.on('message', async (msg) => {
        let chats = await msg.getChat()
        console.log(chats)
        if(chats.name == 'Hilmi'){
        for(let i = 0; i < 5; i++){
            msg.reply('hai nyok mampus')
        }
        }
    });  
    
    
    client.initialize();
})

app.listen(5000, () => console.log('connect'))

