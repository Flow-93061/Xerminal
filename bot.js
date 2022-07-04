const { Client, Intents, MessageEmbed } = require('discord.js');
const { token, prefix } = require('./config/config.json');

const client = new Client({ intents: [Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_SCHEDULED_EVENTS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_WEBHOOKS] });

client.once('ready', () => {
	console.log(`${client.user.username} is online!`);
});

client.on('messageCreate', async msg => {
	const author = msg.author;
	// eslint-disable-next-line no-unused-vars
	const guild = msg.guild;
	// eslint-disable-next-line no-unused-vars
	const channel = msg.channel;
	const bot = client.user;
	let command;

	if (msg.author.id === bot.id) return;
	if (msg.content.includes('>')) {
		command = msg.content.replace(prefix, '').replace('/ +/g', ' ');
	}

	if (command == 'help') {
		const help_embed = new MessageEmbed()
			.setTitle('Help.exe | process -> running | interaction -> none')
			.setAuthor({ name: `-- Requested by ${author.username}`, iconURL: author.avatarURL('jpg') })
			.setDescription('\tcurrently no command are available')
			.setColor('AQUA');
		msg.reply({ embeds: [help_embed] });
	}
});

client.login(token);