import { Command, flags } from '@oclif/command'
import cli from 'cli-ux'
import fs from 'fs-extra'
import path from 'path'
import { CredentialsManager } from "../utils/config/CredentialsManager"
const emoji = require('node-emoji');

export default class Login extends Command {
  static description = 'Use this to configure your sinch CLI'
  static examples = [
    `$ sinch login
   
  `,
  ]

  async run() {
    const { flags } = this.parse(Login);
    const config = path.join(this.config.configDir, 'config.json');

    try {
      if (!flags.ApplicationKey || !flags.ApplicationSecret) {
        const key = await prompt("ApplicationKey");
        const secret = await prompt("ApplicationSecret")

      await fs.ensureDir(this.config.configDir);
      await fs.writeJson(config, {
        ApplicationKey: flags.ApplicationKey,
        ApplicationSecret: flags.ApplicationSecret,
      });
      this.log(
        'Your Sinch CLI configuration has been generated!',
        emoji.get('rocket')
      );
      this.exit();
      }
    } 
    catch (error) {
      this.error(error || 'A Stream CLI error has occurred.', {
        exit: 1,
      });
    }
  }
}
  }
Login.flags = {
  key: flags.string({
    char: 'k',
    description: 'Application key for configuration.',
    required: false,
  }),
  secret: flags.string({
    char: 's',
    description: 'Application secret for configuration.',
    required: false,
  }),

};