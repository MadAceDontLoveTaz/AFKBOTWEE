const mineflayer = require('mineflayer');

const bot1 = mineflayer.createBot({
  host: 'SERVER_IP',
  port: SERVER_PORT,
  username: 'Bot1Username',
  password: 'Bot1Password',
  version: '1.16.5',
  auth: 'mojang'
});

const bot2 = mineflayer.createBot({
  host: 'SERVER_IP',
  port: SERVER_PORT,
  username: 'Bot2Username',
  password: 'Bot2Password',
  version: '1.16.5',
  auth: 'mojang'
});

function onSpawn(bot) {
  setTimeout(() => {
    bot.chat('/login pedal1');
    bot.chat('/server opfactions');
  }, 1500);
  
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => {
      bot.setControlState('jump', false);
    }, 500);
  }, 25000);
  
  setInterval(() => {
    bot.chat('/home');
  }, 50000);
}

bot1.on('spawn', () => {
  onSpawn(bot1);
});

bot2.on('spawn', () => {
  onSpawn(bot2);
});
