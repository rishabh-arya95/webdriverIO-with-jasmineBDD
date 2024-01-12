import { config as sharedConfig } from './wdio.shared.conf.ts';

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        user: process.env.LT_USERNAME,
        key: process.env.LT_ACCESS_KEY,
        logFile: './log/api.log',
        //   services: [
        //       ['lambdatest']
        //   ],
        hostname: 'hub.lambdatest.com',
        path: '/wd/hub',
        port: 80,
        maxDuration: 12000,
        capabilities: [
            {
                maxInstances: 5,
                browserName: 'chrome',
                browserVersion: 'latest',
                platformName: 'Windows 10',
                'goog:chromeOptions': {
                    //headless: true
                }
            },
        ]

    }
}
