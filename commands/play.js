const ytdl = require('ytdl-core');

const ytSearch = require('yt-search');

module.exports = {
	name:'play',
	description: 'Joins and plays audio',
	async execute(message,args) {
		const voiceChannel = message.member.voice.channel;

		if(!voiceChannel){
			return message.channel.send('loga na porra de um canal pra eu tocar seu fela da puta');
		}

		const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }

		if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
                message.channel.send('leaving channel');
            });
 
            await message.reply(`:thumbsup: TOKANDO ***PUNHETA!***`)
 
            return
        }

		const connection =  await voiceChannel.join();

		const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
 
        }

		const video = await videoFinder(args.join(' '));
 
        if(video){
            const stream  = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
            });
 
            await message.reply(`:thumbsup: TOKANDO ***${video.title}***`)
        } else {
            message.channel.send('SEM VIDEOS');
        }
    }
}