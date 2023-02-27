exports.run = async (message, [...args]) => {

    const embed = new EmbedBuilder()
        .setTitle('embed title')
        .setDescription("embed description")

    message.channel.send({ embeds: [embed] })
    message.channel.send('standard message')

}