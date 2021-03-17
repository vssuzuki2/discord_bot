module.exports = {
	name: 'ban',
	description: "ban member command",
	execute(message, args){
		message.channel.send('ban');
	}
}