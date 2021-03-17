module.exports = {
	name: 'kick',
	description: "kick member command",
	execute(message, args){
		const member = message.mentions.users.first();

		if(member){
			const memberTarget = message.guild.members.cache.get(member.id);
			memberTarget.kick();
				message.channel.send('A DEMOCRACIA ESTA EM PERIGO!!!');	
		}else{
			message.channel.send('membro não encontrado');	
		}
	}
}