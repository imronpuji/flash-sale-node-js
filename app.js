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
    
    const browser = await puppeteer.launch({userDataDir:'%LOCALAPPDATA%\Google\Chrome\User Data', headless:false});
    const page = await browser.newPage();

    await page.setViewport({
        width: 1280,
        height: 1024,
        deviceScaleFactor: 1,
        });
    
    
    await page.goto('https://shopee.co.id/product/3474590/505037375/', {waitUntil: 'load'});
    

    
    
        
        // unkomen untuk login terlebih dahulu
        // await page.waitForNavigation({timeout:60000})
        
        
        console.log('sudah ternavigasi')
        await page.waitForXPath('//*[@id="main"]/div/div[2]/div[2]/div[2]/div[2]/div[3]/div/div[5]/div/div/button[2]', {timeout:10000})
        const elements = await page.$x('//*[@id="main"]/div/div[2]/div[2]/div[2]/div[2]/div[3]/div/div[5]/div/div/button[2]')
        elements[0].click()
        
        await page.waitForNavigation()

        await page.waitForXPath('//*[@id="main"]/div/div[2]/div[2]/div[3]/div[2]/div[7]/div[5]/button', {timeout:60000})
        console.log('sudah diklik')
        const checkout = await page.$x('//*[@id="main"]/div/div[2]/div[2]/div[3]/div[2]/div[7]/div[5]/button')
        checkout[0].click()
        
        
        await page.waitForNavigation()
                
        // await page.waitForXPath('//*[@id="modal"]/div[2]/div[1]/div[1]/div[2]/div/div[2]/div[2]/div/div/div/div/div[2]/div[2]/div/div[2]/div[2]/div[1]/div[1]/div/div')
        // const opsiSend = await page.$x('//*[@id="modal"]/div[2]/div[1]/div[1]/div[2]/div/div[2]/div[2]/div/div/div/div/div[2]/div[2]/div/div[2]/div[2]/div[1]/div[1]/div/div')
        //  opsiSend[0].click()
         
        //  await page.waitForXPath('//*[@id="modal"]/div[2]/div[1]/div[2]/div/button[2]', {timeout:50000})
        // const opsiButton = await page.$x('//*[@id="modal"]/div[2]/div[1]/div[2]/div/button[2]')
        // opsiButton[0].click()
        
        // await page.waitForXPath('//*[@id="main"]/div/div[2]/div[3]/div[4]/div[1]/div/div[1]/div[2]/span[6]/button', {timeout:50000})
        // const qris = await page.$x('//*[@id="main"]/div/div[2]/div[3]/div[4]/div[1]/div/div[1]/div[2]/span[6]/button')
        // qris[0].click()
        

            
            await page.waitForXPath('//*[@id="main"]/div/div[2]/div[3]/div[4]/div[2]/div[9]/button')
            const pesanan = await page.$x('//*[@id="main"]/div/div[2]/div[3]/div[4]/div[2]/div[9]/button')
            console.log(pesanan)
            await pesanan[0].click()

        
        
        
        
        
        
    
})();