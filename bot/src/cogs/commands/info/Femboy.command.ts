import { CommandCog, CommandRunArgs } from "~/framework/CommandCog";

import { USERS } from "~/constants/users";

export default class Femboy extends CommandCog {
  constructor() {
    super({
      name: "femboy",
      permissions: ["SEND_MESSAGES"],
    });
  }

  async run(args: CommandRunArgs) {
    const { client, context } = args;

    const femboyUser = await client.users.fetch(USERS.SYMFIZ);

    if (femboyUser) {
      await context.channel.send(`<@${femboyUser.id}>`);
    } else {
      throw new Error(`User with the ID of ${USERS.SYMFIZ} was not found`);
    }
  }
}
