const puppeteer = require('puppeteer')
const BASE_URL = "https://instagram.com/"
const instagram = {
    browser: null,
    page: null,
    initialize: async () => {
        instagram.browser = await puppeteer.launch({
            headless: false,
            executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'

        });
        instagram.page = await instagram.browser.newPage();
    },
    login: async (username, password) => {
        await instagram.page.goto(BASE_URL, { waitUntil: 'networkidle2' });
        // await instagram.page.waitFor(1000);

        await instagram.page.waitForNavigation({ waitUntil: 'networkidle2' })
        await instagram.page.type('input[name="username"]', username, { delay: 50 })
        await instagram.page.type('input[name="password"]', password, { delay: 50 })
        /*click*/
        let loginButton = await instagram.page.$x("//div[contains(text(), 'Log in')]")
        console.log(loginButton)
        loginButton[0].click();
        /*clcik*/
        debugger;
    }
}

module.exports = instagram;
