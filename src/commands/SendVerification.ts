import { Command, flags } from '@oclif/command'
let creds = {
    key: '7e732ad2-5fd0-400d-82cc-ef80745036fb',
    secret: 'QC+bTBdU406uRedFPI5m+g=='
}
let sinchApi = require('sinch-rest-api')(creds);
let consoleOut = function(result) { console.log(result); }

export default class sendSMSVerification extends Command {
    static description = 'Send an SMS verification'

    static examples = [
        `$ sinch sendSMSVerification
creates a sms verification
`,
    ]
    
    static flags = {
        help: flags.help({ char: 'h' }),
        // flag with a value (-n, --name=VALUE)
        phoneNumber: flags.string({ char: 'p', description: 'phonenumber to send a verification to' }),
        version: flags.version(),
        // flag with no value (-f, --force)
        force: flags.boolean({ char: 'f' }),
    }
    
    async run() {
        const { flags } = this.parse(sendSMSVerification)
        sinchApi.verification.verificationRequest({identity: {"type": "number", "endpoint": flags.phoneNumber}, method: "sms"})
        .then(consoleOut)
        .fail(consoleOut)
    }
}