module.exports = {
	name:'oniichan',
	description: 'Joins and plays audio',
	async execute(message,args) {
		const voiceChannel = message.member.voice.channel;

		if(!voiceChannel){
			return message.channel.send('loga na porra de um canal pra eu tocar seu fela da puta');
		}

		const connection =  await voiceChannel.join();

        connection.play('./audio/oniichan.mp3')
        .on('finish', () =>{
            voiceChannel.leave();
        });

    }
}