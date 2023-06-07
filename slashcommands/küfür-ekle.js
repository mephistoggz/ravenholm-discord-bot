const { SlashCommandBuilder, EmbedBuilder, SelectMenuBuilder, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const client = global.client
const { JsonDatabase } = require("wio.db")
const db = new JsonDatabase({databasePath: "database.json"})
const moment = require('moment')
require('moment-duration-format')
const fetch = require("node-fetch");
const fs = require('fs')

module.exports = {
      data: new SlashCommandBuilder()
        .setName('küfür-ekle')
        .setDescription("yazdığınız kelimeyi küfür engeline ekler.")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option => option.setName('küfür').setDescription('Küfürü yazınız.').setRequired(true)),
  async execute(interaction) {
    
  if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) return interaction.reply({content: "Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın.", ephemeral: true})
   
   let küfür = interaction.options.getString('küfür')
   
   db.push(`küfürler.${interaction.guild.id}`, küfür)
   
   interaction.reply({content: "Küfür engele eklendi.", ephemeral: true})
   

}
}