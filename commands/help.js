const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("commandName") //has to be in 1 word
        .setDescription("command description"),

    async execute(interaction) {

        await interaction.deferReply()

        const embed = new EmbedBuilder()
            .setTitle("embed title")
            .setDescription("embed description")
            .addFields(
                { name: 'here is an embed field', value: 'this separates sections in your embed' },
                { name: "embed field", value: 'inline makes them apear next to eachother', inline: true },
                { name: "inline field", value: 'like this', inline: true },
                { name: "and this", value: "heh" }
            )
            .setImage('https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403')


        await interaction.editReply({ embeds: [embed] });

    }
}