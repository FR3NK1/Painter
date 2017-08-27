const Discord = require("discord.js");
const Painter = new Discord.Client();

Painter.on('ready', () => {
  console.log(`I am ready!`);
});

Painter.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

Painter.on('message', msg => {
  if (msg.content === 'Гусь','гусь') {
    msg.reply('ЗАПУСКАЕМ');
  }
});

Painter.on('message', msg => {
  if (msg.content === 'Гусь','гусь') {
    msg.reply('░ГУСЯ░▄▀▀▀▀▀▄░░ТАКСИСТА░░░░');

  }
});

Painter.on('message', msg => {
  if (msg.content === 'Гусь','гусь') {
    msg.reply('░▄███▀░◐░░░░▐░░░░░░░░░░░░░');

  }
});

Painter.on('message', msg => {
  if (msg.content === 'Гусь','гусь') {
    msg.reply('░░░░▌░░░░░░░▐░░░░░░░░░░░░░');

  }
});

Painter.on('message', msg => {
  if (msg.content === 'Гусь','гусь') {
    msg.reply('░░░░▌▄▀▄▀▄▀▄▐░░░░░░░░░░░░░');

  }
});

Painter.on('message', msg => {
  if (msg.content === 'Гусь','гусь') {
    msg.reply('░░░░▌░░░░░░▄▐▄▄▄░░░░░░░░░░');

  }
});

Painter.on('message', msg => {
  if (msg.content === 'Гусь','гусь') {
    msg.reply('░░░░▌░░░░▄▀▄▀▄▀▄▀▄░░░░░░░░');

  }
});

Painter.on('message', msg => {
  if (msg.content === 'Гусь','гусь') {
    msg.reply('░░░▐░░░░▐▄▀▄▀▄▀▄▀▄▀▄░░░░░░');

  }
});

Painter.on('message', msg => {
  if (msg.content === 'Гусь','гусь') {
    msg.reply('░░░▐░░░░▐▄▀▄▀▄▀▄▀▄▀▄▀▄░░░░');

  }
});

Painter.on('message', msg => {
  if (msg.content === 'Гусь','гусь') {
    msg.reply('░░░░▀▄░░░░▀▄▀▄▀▄▀▄▀▄▀▄▀▄░░');

  }
});

Painter.on('message', msg => {
  if (msg.content === 'Гусь','гусь') {
    msg.reply('░░░░░░▀▄▄▄▄▄█▄▄▄▄▄▄▄▄▄▄▀▄░');

  }
});

Painter.on('message', msg => {
  if (msg.content === 'Гусь','гусь') {
    msg.reply('░░░░░░░░░▐█░▐█░░░░░░░░░░░░');

  }
});

Painter.on('message', msg => {
  if (msg.content === 'Гусь','гусь') {
    msg.reply('░░░░░░░░░▐█░▐█░░░░░░░░░░░░');

  }
});
Painter.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Играет в CS:GO");
  if (!playRole) return;

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Counter-Strike Global Offensive") {
    newMember.addRole(playRole);
  } else if(!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  }
});

Painter.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Играет в World of Warcraft");
  if (!playRole) return;

  if(newMember.user.presence.game && newMember.user.presence.game.name === "World of Warcraft") {
    newMember.addRole(playRole);
  } else if(!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  }
});

Painter.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Играет в Overwatch");
  if (!playRole) return;

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Overwatch") {
    newMember.addRole(playRole);
  } else if(!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  }
});

Painter.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Играет в Dota 2");
  if (!playRole) return;

  if(newMember.user.presence.game && newMember.user.presence.game.name === "DOTA 2") {
    newMember.addRole(playRole);
  } else if(!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  }
});

Painter.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Играет в Hearthstone");
  if (!playRole) return;

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Hearthstone") {
    newMember.addRole(playRole);
  } else if(!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  }
});

Painter.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Играет в Garry's Mod");
  if (!playRole) return;

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Garry's Mod") {
    newMember.addRole(playRole);
  } else if(!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  }
});

Painter.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Играет в HOTS");
  if (!playRole) return;

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Heroes of the storm") {
    newMember.addRole(playRole);
  } else if(!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  }
});

Painter.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Играет в osu!");
  if (!playRole) return;

  if(newMember.user.presence.game && newMember.user.presence.game.name === "osu!") {
    newMember.addRole(playRole);
  } else if(!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  }
});

Painter.login('MzUxMzUyNzc0NzMyMTUyODMz.DIRWSA.GJ8O8jcF2WNyajHrV4mMQukmOX0');
