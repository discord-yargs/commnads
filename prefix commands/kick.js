// !kicl @user
export const command = {
  command: 'kick <user>',
  desc: 'Kicks a user (requires permissions)',
  handler: async (argv, message) => {
    const member = message.mentions.members.first();
    if (!member) return message.reply('Mention a user to kick.');
    if (!message.member.permissions.has('KICK_MEMBERS')) {
      return message.reply('You lack kick permissions.');
    }
    try {
      await member.kick();
      message.channel.send(`Kicked ${member.user.tag}`);
    } catch (err) {
      message.channel.send(`Failed to kick: ${err.message}`);
    }
  },
};
