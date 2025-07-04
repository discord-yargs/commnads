export const command = {
  command: 'ping',
  desc: 'Replies with Pong!',
  handler: async (argv, message) => {
    await message.channel.send('Pong!');
  },
};
