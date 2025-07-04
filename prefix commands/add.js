export const command = {
  command: 'add <a> <b>',
  desc: 'Adds two numbers',
  builder: yargs => yargs
    .positional('a', { type: 'number', describe: 'First number' })
    .positional('b', { type: 'number', describe: 'Second number' }),
  handler: (argv, message) => {
    message.reply(`Result: ${argv.a + argv.b}`);
  },
};
