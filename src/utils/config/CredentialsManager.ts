

const emoji = require('node-emoji');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs-extra');

export default class CredentialsManager
{
    async credentials(ctx) {
        const config = path.join(ctx.config.configDir, 'config.json');
    
        try {
            if (!(await fs.pathExists(config))) {
                await fs.outputJson(config, {
                    applicationKey: '',
                    applicationSecret: '',
                });
            }
    
            const { applicationKey, applicationSecret } = await fs.readJson(config);
    
            if (!applicationKey || !applicationSecret) {
                console.warn(
                    `Credentials not found. Run the command ${chalk.bold(
                        'sinch login'
                    )} .`,
                    emoji.get('warning')
                );
    
                ctx.exit(0);
            }
    
            return { applicationKey, applicationSecret };
        } catch (error) {
            ctx.error(error || 'A sinch CLI error has occurred.', {
                exit: 1,
            });
        }
    }
}


