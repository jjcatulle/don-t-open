const puppeteer = require('puppeteer');
const timestamp = require('time-stamp');

const chromeOptions = {
    //executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: false,
    slowMo: 10,
    defaultViewport: null
};

for (var i = 1; i < 2; i++) {
    (async function main() {
        const browser = await puppeteer.launch(chromeOptions);

        var page = await browser.newPage();
        await page.setViewport({
            width: 0,
            height: 0
        });

        await page.goto('https://www.consortium.co.uk/nike-sb-x-staple-dunk-low-pro-og-panda-pigeon-qs-black-white-green-gusto.html');
        console.log(timestamp('[HH:mm:ss:ms]') + 'found item');

        await page.mouse.up();
        //await page.mouse.move(200, 200);

        await page.evaluate(() => {
            function win() {

                jQuery('.yeezy-game-wrap').fadeIn();
                jQuery('.isNotLaunching').fadeIn();

                for (var i = 0; i < gameElements.length; i++) {
                    if (gameElements[i] == "Win") {
                        jQuery(".matching-pairs [data-id=" + i + "]").click();
                    }
                }
            }

            win();
        });

        await page.mouse.up();
        page
            .waitForSelector('#attribute502')
            .then(() => console.log(timestamp('[HH:mm:ss:ms]') + ' adding to cart'));
        await page.evaluate("document.querySelector('#attribute502').value='40'")

        await page.evaluate("document.querySelector('#product-addtocart-button').click()");
        await page.mouse.up();
        console.log('added to cart');

        await page.goto('https://www.consortium.co.uk/checkout/cart/');
        await page.mouse.up();

        await page.goto('https://www.consortium.co.uk/checkout/secure/login/');
        await page.mouse.up();
        page
            .waitForSelector('#login-email')
            .then(() => console.log(timestamp('[HH:mm:ss:ms]') + ' logging in'));

        await page.type('#login-email', 'youremail@gmail.com')
        await page.type('#login-password', 'yourpassword123')
        await page.evaluate("document.querySelector('body > div > div > section > div.wrapper > div > div.main-container.col1-layout > div > div > div.customer-account-login > div > div > div.left-login.columns.medium-6 > div > div > div.buttons-set > button > span > span > i').click()");
        await page.mouse.up();
        await pagwe.evaluate("document.querySelector('#shipping-method-buttons-container > button > span > span > i').click()")
        await page.mouse.up();
        await page.evaluate('document.querySelector("#p_method_sagepayserver").click()')

        await page.screenshot({
                path: 'test.png'
            })
            //await browser.close();

    })
    ()
}
