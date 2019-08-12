import { Command, flags } from '@oclif/command'
import cli from 'cli-ux'
import CredentialsManager from "../utils/config/CredentialsManager"
import { setFlagsFromString } from 'v8';
import * as inquirer from 'inquirer'
import { string } from '@oclif/command/lib/flags';
export {};
let consoleOut = function (result:object) { console.log(result); }

export default class sendSMSVerification extends Command {
    static description = 'Send an SMS verification'

    static examples = [
        `$ sinch sendSMSVerification
creates a sms verification
`,
    ]

    static flags = {
        help: flags.help({ char: 'h' }),
        phoneNumber: flags.string({ char: 'p', description: 'Phone number to send a verification to' }),
        version: flags.version(),
        verificationType:flags.enum({
            options: ['sms', 'flashcall', 'callout'],
            char:'t',
            description:'Type of Verification to run'
        }) 
    }
    
  
    async run() {
        let config = new CredentialsManager();
        let c = await config.GetCredentials(this.config.configDir)
        let creds = {
            key: c.ApplicationKey,
            secret: c.ApplicationSecret
        }
  
         
        const sinchApi = require('sinch-rest-api')(creds);
        const { flags } = this.parse(sendSMSVerification)
        if (!flags.phoneNumber  || !flags.verificationType)  {
           let responses:any = await inquirer.prompt(
               [
                {
                    name: 'verificationType',
                    message: 'Select a verification type',
                    type: 'list',
                    choices: [{name: 'sms'}, {name: 'flashcall'}, {name: 'callout'}],
                  },
                  {
                      name:"phoneNumber",
                      message:"What phone number do you want to verify",
                      type:string
                  }
               ]
           )
           flags.phoneNumber = responses.phoneNumber;
           flags.verificationType =  responses.verificationType         
        }

        sinchApi.verification.verificationRequest(
            { identity: { "type": "number", "endpoint": 
                flags.phoneNumber }, method: flags.verificationType })
            .then(consoleOut)
            .fail(consoleOut)
    }
}