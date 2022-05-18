const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

//Creating a new /command 
const commands = [
    new SlashCommandBuilder().setName('tictactoe').setDescription('Play a game of tic-tac-toe'),
]
//defining rest object to interact with the api
const rest = new REST({version: '9' }).setToken(token)
 //rest Put Call
rest.put(Routes.applicationGuildCommands(clientId, guildId), {body: commands.map(command => command.toJSON())})
    .then(()=> console.log('the application was successfuil'))
    .catch(console.error);