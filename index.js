// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS], partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const roleClaim = require('./role-claim');

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');

  roleClaim(client);
});


// Login to Discord with your client's token
client.login(process.env.token);