

const emoji = require('node-emoji');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs-extra');
class Credentials {
    
    constructor(appkey:string, appsecret:string) {
    this.ApplicationKey=  appkey;
this.ApplicationSecret = appsecret
 }
 ApplicationKey = "";
 ApplicationSecret = "";
}
export default class CredentialsManager
{
    
    public async GetCredentials(pathToConfig:string) : Promise<Credentials> {
        const config = path.join(pathToConfig, 'config.json');
        console.log(config);
        try {
            if (!(await fs.pathExists(config))) {
                await fs.outputJson(config, {
                    applicationKey: '',
                    applicationSecret: '',
                });
            }
    
            let { applicationKey, applicationSecret } = await fs.readJson(config);
    

            if (!applicationKey || !applicationSecret) {
                console.warn(
                    `Credentials not found. Run the command ${chalk.bold(
                        'sinch login'
                    )} .`,
                    emoji.get('warning')
                );
               
                
            }
    
            return new Credentials(applicationKey , applicationSecret 
                );
        } catch (error) {
            error(error || 'A sinch CLI error has occurred.', {
                exit: 1,
            });
        }
        return new Credentials("", "");
    }
}


