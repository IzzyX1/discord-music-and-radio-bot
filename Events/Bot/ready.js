module.exports = async (client) => {
    
  console.log(`${client.user.username} is online on ${client.guilds.cache.size} servers!`);
  client.user.setActivity('*help');
  client.user.setStatus('online');
    
}