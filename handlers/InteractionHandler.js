const { Routes } = require('discord.js');
const { REST } = require('@discordjs/rest')
const fs = require('fs')
const commands = []
const commandFiles = fs.readdirSync('./slashcommands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
	const command = require(`../slashcommands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("755219756734480553"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();