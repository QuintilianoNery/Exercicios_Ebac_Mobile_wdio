const { join } = require('path')

exports.config = {
    hostname: 'localhost',
    baseUrl: 'http://localhost',
    port: 4723,
    path: '/wd/hub',
    specs: ['./test/specs/**/*.js'],
    framework: 'mocha',
    waitforTimeout: 10000,
    maxInstances: 1,
    capabilities: [
        {
            deviceName: "samsung-galaxy-s20",
            platformName: "Android",
            platformVersion: "13",
            automationName: "UiAutomator2",
            app: join(process.cwd(), './app/android/wdioNative.apk'),
            appPackage: "com.wdiodemoapp",
            appActivity: ".SplashActivity",
            appWaitActivity: ".MainActivity",
            udid: "RX8N305B2CK",
            noReset: "true",
        }
    ],
    before: function () {
        return {
            shortCircuit: true,
        };
    },
}

