export const command = {
  command: 'echo <...text>',
  desc: 'Echoes back your message',
  handler: (argv, message) => {
    message.channel.send(argv.text.join(' '));
  },
};
