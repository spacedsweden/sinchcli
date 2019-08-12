import { Command, flags } from '@oclif/command'
import cli from 'cli-ux'
import * as fs from 'fs-extra'
import * as path from 'path'
import CredentialsManager from "../utils/config/CredentialsManager"
const emoji = require('node-emoji');

export default class login extends Command {
  static description = 'Use this to configure your sinch CLI'
  static examples = [
    `$ sinch login
   
  `,
  ]

  async run() {
   // const { flags } = this.parse(login);
    const config = path.join(this.config.configDir, 'config.json');

    try {

      // if (!flags.applicationKey && flags.applicationSecret) {
      //   flags.applicationKey = await cli.prompt("ApplicationKey");
      //   flags.applicationSecret = await cli.prompt("ApplicationSecret")
      // }
      let key =  await cli.prompt("ApplicationKey");
      let secret = await cli.prompt("ApplicationSecret")
      await fs.ensureDir(this.config.configDir);
      await fs.writeJson(config, {
        applicationKey: key,
        applicationSecret: secret,
      });
      this.log(
        'Your Sinch CLI configuration has been generated!',
        emoji.get('rocket')
      );
      this.exit();

    }
    catch (error) {
      this.error(error || 'A Stream CLI error has occurred.', {
        exit: 1,
      });
    }
  }
}

// login.flags = {
//   applicationKey: flags.string({
//     char: 'k',
//     description: 'Application key for configuration.',
//     required: false,
//   }),
//   applicationSecret: flags.string({
//     char: 's',
//     description: 'Application secret for configuration.',
//     required: false,
//   }),

// };