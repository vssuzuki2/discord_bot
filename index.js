const Discord = require('discord.js');
const client =  new Discord.Client();
const token = 'Nzg0MTE5Nzk1NjUwMDAyOTk0.X8kqdw.CAYKF74Yl-5pn49apnOQUiK9KjU';
const prefix = '-';
const fs = require('fs');

client.login(token);

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

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
	'O que vem de baixo não me atinge.',
	'A democracia desse discord só vai acontecer quando minhas permissões forem ilimitadas',
	'Meu criador é o cara mais incrível de todos os tempos',
	'Imposto é roubo.',
	'x1 Ruy vs Babs CSGO melhor de 3',
	'https://www.youtube.com/watch?v=dzMtCKWMynU',
	'Fall guys é tipo one direction, reflita',
	'vai arrumar o que fazer',
	'to de boa',
	'Hitler, Mussolini, Stalin, todos eram contra a descentralização do poder e apoiavam o estado acima de todos. Qualquer semelhança é mera coincidência'
] 

client.on('ready', () =>{
	console.log('pai ta on');
	client.user.setActivity('Sex Rolete com sua mãe');
});

client.on('message', message =>{
	if (message.content === 'eae jonny') {
    	message.reply('vai toma no cu');
    }
    if (message.content === 'oi jonny') {
    	message.reply('vai toma no cu');
    }
    if (message.content === 'olá jonny') {
    	message.reply('vai toma no cu');
    }
    if (message.content === 'ruy lixo') {
    	message.reply('concordo');
    }
    if (message.content === 'nico lixo') {
    	message.reply('concordo');
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
	}
	
});