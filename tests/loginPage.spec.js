const{test, expect} = require('@playwright/test');

test('login to rahulshetty academy', async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.getByText('Register here').click();
    await page.locator('#firstName').fill('Test');
    await page.getByPlaceholder('Last Name').fill('Berries');
    await page.getByPlaceholder('email@example.com').fill('gdcxe89030@minitts.net');
    await page.getByPlaceholder('enter your number').fill('9188025333');
    await page.locator('select').selectOption('Student');
    await page.getByRole('radio', {name: 'Female'}).check();
    await page.locator('#userPassword').fill('Lame@123');
    await page.locator('#confirmPassword').fill('Lame@123');
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Register' }).click();
    await expect(page.getByText('Account Created Successfully')).toBeVisible();
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText('Log in')).toBeVisible();
})

test.only('Login to shop', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    await page.getByPlaceholder('email@example.com').fill('gdcxe89030@minitts.net');
    await page.getByPlaceholder('enter your passsword').fill('Lame@123');
    await page.locator('#login').click();
    await page.waitForURL('https://rahulshettyacademy.com/client/#/dashboard/dash');

    const productID = page.locator('#products > div.container > div.row > div:nth-child(n) > div > div');
    const displayProductTitle = await productID.first().textContent();
    console.log(displayProductTitle);


})
