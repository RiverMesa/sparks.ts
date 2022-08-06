import { SlashCommandSubcommandGroupBuilder } from 'discord.js';

const sbrRollCommand = (subcommandGroup: SlashCommandSubcommandGroupBuilder) =>
  subcommandGroup
    .setName('sbr')
    .setDescription('Rolls for Sparked by Resistance games.')
    .addSubcommand((subcommand) =>
      subcommand
        .setName('check')
        .setDescription('Rolls d10s for a Sparked by Resistance skill check.')
        .addIntegerOption((option) =>
          option
            .setName('pool')
            .setDescription('The size of your dice pool.')
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName('fallout')
        .setDescription('Rolls a Sparked by resistance fallout test.')
    );

export default sbrRollCommand;
