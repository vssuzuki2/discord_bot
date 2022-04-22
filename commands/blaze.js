module.exports = {
	name:'blaze',
	description: 'Joins and plays audio',
	async execute(message,args) {
		const voiceChannel = message.member.voice.channel;

		if(!voiceChannel){
			return message.channel.send('loga na porra de um canal pra eu tocar seu fela da puta');
		}

		const connection =  await voiceChannel.join();

        const items = [
            './audio/blaze3.m4a',
            './audio/blaze4.m4a',
            './audio/blaze5.mp3',
            './audio/blaze6.mp3',
            './audio/blaze7.mp3',
        ]

        function random_item(items)
        {
            return items[Math.floor(Math.random()*items.length)];
             
        }
        blaze = random_item(items);

        connection.play(blaze)
        .on('finish', () =>{
            voiceChannel.leave();
        });

    }
}