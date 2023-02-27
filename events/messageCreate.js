const { Events } = require("discord.js");
const { prefix } = require("../config.json");
const { bot } = require("../prefix-commands.json");
var cmd

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {

        const botargs = message.content.slice(prefix.bot.length).trim().split(/ +/g);
        const botcommand = botargs.shift().toLowerCase();

        if (message.author.bot) return;

        if (message.content == 'prefix') {
            message.channel.send(`The bot prefix is: \`${prefix.bot}\``)
        }
        else if (message.content.indexOf(prefix.bot) == 0) {
            if (bot.includes(botcommand)) {
                cmd = require(`../commands-prefix/${botcommand}`);
                cmd.run(message, botargs)
            }
            else return

        }
        else return;

    }
}
