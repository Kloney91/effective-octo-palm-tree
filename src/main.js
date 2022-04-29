import discord from "discord.js";
const token="OTY5Mzc0Mzg1Nzg4MDU1NjEy.YmsePw.ePUBCn6Iv5CgGbdcabwDdsHhcoQ";
const answer="my password";
const client=new discord.Client({
    intents:['GUILDS','GUILD_MESSAGES'],
});

function onReady();

/**
 * 
 * @param {discord.message} message 
 */

function onMessage(message) {
    console.log(`${message.author.username} sent a message`);
}

client.on('messageCreate', onMessage);
client.on(, onReady);
client.login(token);



