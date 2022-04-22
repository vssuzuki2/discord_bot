const Discord = require('discord.js');
const client =  new Discord.Client();
const token = 'OTY2Nzg4Mjg2OTk3NzI1Mjk0.YmG1wQ.WkpwDwaSdEu2CLPTqKnkKuWESUY';
const prefix = '-';
const fs = require('fs');

client.login(token);

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const path = require('path');

for(const file of commandFiles){
	const command  = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}
function random_item(items)
{
	return items[Math.floor(Math.random()*items.length)];
     
}

const items = [
	'https://www.youtube.com/watch?v=5qRkN5iw35g',
	'https://www.youtube.com/watch?v=k4KB435Z-GY&list=RDk4KB435Z-GY&start_radio=1',
	'https://www.youtube.com/watch?v=JtjaMctnNpU',
	'https://www.youtube.com/watch?v=Gv7E0qVkuY0',
	'https://www.youtube.com/watch?v=M-VoJFNxngs',
	'Imposto é roubo.',
	'https://www.youtube.com/watch?v=dzMtCKWMynU',
] 

client.on('ready', () =>{
		console.log('pai ta on');
		client.user.setActivity('Sex Rolete com sua mãe');
});

client.on('message', message =>{
	if (message.content === 'eae jonny') {
    	message.reply('vai toma no cu');
    }

    if (message.content === 'solta a braba jonny') {
     	message.reply(random_item(items));
    }

	if(!message.content.startsWith(prefix) || message.author.bot) return;

	console.log(message.author.bot);
	const args = message.content.slice(prefix.length).split(/ +/);

	const command = args.shift().toLowerCase();
	if(command === 'ping'){
		client.commands.get('ping').execute(message, args);
	} else if(command === 'ban'){
		client.commands.get('ban').execute(message, args);
	} else if(command === 'kick'){
		client.commands.get('kick').execute(message, args);
	} else if(command === 'play'){
		client.commands.get('play').execute(message, args);
	} else if(command === 'blaze'){
		client.commands.get('blaze').execute(message, args);
	} else if(command === 'vaza'){
		client.commands.get('leave').execute(message, args);
	} else if(command === 'hadouken'){
		client.commands.get('hadouken').execute(message, args);
	} else if(command === 'oniichan'){
		client.commands.get('oniichan').execute(message, args);
	}
	
});