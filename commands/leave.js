module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("TEM QUE ESTAR NA PORRA DO CANAL!");
        await voiceChannel.leave();
        await message.channel.send('FLW :smiling_face_with_tear:')
 
    }
}