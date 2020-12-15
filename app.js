const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    // const cookiesString = fs.readFileSync('./canvas-session.json', 'utf8');
    //console.log("cookiesString are ", cookiesString);
    // const cookies = JSON.parse(cookiesString);
    //console.log("cookies are ", cookies);

    // process.on('unhandledRejection', (reason, p) => {
	// console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // });
    
    const browser = await puppeteer.launch({userDataDir:'%LOCALAPPDATA%\Google\Chrome\User Data'});
    const page = await browser.newPage();
    await page.setViewport({
        width: 1280,
        height: 1024,
        deviceScaleFactor: 1,
        });
    
    
    await page.goto('https://shopee.co.id', {waitUntil: 'load'});
    
    await page.waitForNavigation(60000)
    // login form
    // await page.waitFor('input[name=loginKey]');

    // await page.type('input[name="loginKey"]', 'imronpuji5@gmail.com');
    // await page.type('input[name="password"]', 'Tahubladak123');

    // await page.keyboard.press('Enter', 1000)
    
    
        // await page.setCookie.apply(page, cookies);
        // await page.goto('https://shopee.co.id')
        // await page.waitForNavigation({timeout:50000})
        // await page.waitForXPath('//*[@id="main"]/div/div[2]/div[2]/div[2]/div[2]/div[3]/div/div[5]/div/div/button[2]', {timeout:10000})
        // const elements = await page.$x('//*[@id="main"]/div/div[2]/div[2]/div[2]/div[2]/div[3]/div/div[5]/div/div/button[2]')
        // elements[0].click()
        
        // await page.waitForNavigation()

        // await page.waitForXPath('//*[@id="main"]/div/div[2]/div[2]/div[3]/div[2]/div[7]/div[5]/button', {timeout:20000})
        // const checkout = await page.$x('//*[@id="main"]/div/div[2]/div[2]/div[3]/div[2]/div[7]/div[5]/button')
        // checkout[0].click()
        
        
        // await page.waitForNavigation()
                
        // await page.waitForXPath('//*[@id="modal"]/div[2]/div[1]/div[1]/div[2]/div/div[2]/div[2]/div/div/div/div/div[2]/div[2]/div/div[2]/div[2]/div[1]/div[1]/div/div')
        // const opsiSend = await page.$x('//*[@id="modal"]/div[2]/div[1]/div[1]/div[2]/div/div[2]/div[2]/div/div/div/div/div[2]/div[2]/div/div[2]/div[2]/div[1]/div[1]/div/div')
        //  opsiSend[0].click()
         
        //  await page.waitForXPath('//*[@id="modal"]/div[2]/div[1]/div[2]/div/button[2]', {timeout:50000})
        // const opsiButton = await page.$x('//*[@id="modal"]/div[2]/div[1]/div[2]/div/button[2]')
        // opsiButton[0].click()
        
        // await page.waitForXPath('//*[@id="main"]/div/div[2]/div[3]/div[4]/div[1]/div/div[1]/div[2]/span[6]/button', {timeout:50000})
        // const qris = await page.$x('//*[@id="main"]/div/div[2]/div[3]/div[4]/div[1]/div/div[1]/div[2]/span[6]/button')
        //  qris[0].click()
        

            
        //     await page.waitForXPath('//*[@id="main"]/div/div[2]/div[3]/div[4]/div[2]/div[12]/button', {timeout:50000})
        //     const pesanan = await page.$x('//*[@id="main"]/div/div[2]/div[3]/div[4]/div[2]/div[12]/button')
        //     await pesanan[0].click()
        
        
        
        
        
        
    
})();