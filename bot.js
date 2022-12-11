const puppeteer = require('puppeteer')

const BASE_URL="https://instagram.com/"
const instagram = {
    browser: null,
    page: null,
    initialize: async () => {
        instagram.browser = await puppeteer.launch({
            headless: false,
            executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'

        });
        instagram.page=await instagram.browser.newPage();
        await instagram.page.goto(BASE_URL,{waitUntil:'networkidle2'})
    }
}

module.exports=instagram
