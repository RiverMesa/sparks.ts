import { SlashCommandSubcommandBuilder } from "discord.js";

const forgedRollCommand = (subcommand: SlashCommandSubcommandBuilder) =>
  subcommand
    .setName("forged")
    .setDescription("Rolls a Forged in the Dark roll.")
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("The type of roll you'd like to make.")
        .setRequired(true)
        .addChoices(
          { name: "action", value: "action" },
          { name: "resistance", value: "resist" },
          { name: "fortune/downtime", value: "fortune" },
          { name: "clear stress", value: "clearStress" }
        )
    )
    .addIntegerOption((option) =>
      option
        .setName("pool")
        .setDescription("The size of your dice pool.")
        .setRequired(true)
    );
export default forgedRollCommand;
