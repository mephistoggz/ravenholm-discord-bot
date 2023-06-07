const Discord = require("discord.js");
const { Client, GatewayIntentBits, Partials, SlashCommandBuilder, EmbedBuilder, SelectMenuBuilder, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const moment = require('moment');
require("moment-duration-format")
moment.locale("tr")
let ms = require("parse-ms");
const { JsonDatabase } = require("wio.db")
const db = new JsonDatabase({ databasePath:"database.json" })

exports.run = async (client, message, args) => {
  if(!message.guild) return;
  if(!message.member.permissions.has(PermissionFlagsBits.Administrator)){
  if(message.channel.id !== "1115709729151385610" && message.channel.id !== "1077871605327339552") return;
  }
  
  if (!message.member.permissions.has(PermissionFlagsBits.Administrator) && !message.member.roles.cache.has("1089537013889372200") && !message.member.roles.cache.has("1089536569746141334")) return;
  
  const embed = new EmbedBuilder().setTitle('Rol Sistemi').setTimestamp().setFooter({ text: `mefisto#1414`, iconURL: client.user.avatarURL() })
  const komut = message.content.split(" ")
      
  const rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]) 
   if (!rol) return;
  const role = message.guild.roles.cache.get(rol.id)

  const user = message.mentions.users.first()
   if (!user) return;
  const member = message.guild.members.cache.get(user.id)
  
  if(komut[1] == "ver"){
    
    embed.setDescription("Üye zaten bu role sahip.")
    if(member.roles.cache.has(role.id)) return message.reply({embeds: [embed]})
    
    await member.roles.add(role.id)
    
    embed.setDescription(`${user} adlı üyeye ${rol} rolü verildi.`)
    return message.reply({embeds: [embed]})
    
  }
  
  if(komut[1] == "al"){
    
    embed.setDescription("Üye zaten bu role sahip değil.")
    if(!member.roles.cache.has(role.id)) return message.reply({embeds: [embed]})
    
    await member.roles.remove(role.id)
    
    embed.setDescription(`${user} adlı üyeden ${rol} rolü alındı.`)
    return message.reply({embeds: [embed]})
  }

  
  
}

exports.config = { 
name: "rol" ,
aliases: [] ,
description:  "",
usage: "",
cooldown: 0 
}
