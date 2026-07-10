const{test, expect} = require('@playwright/test');

test('login to rahulshetty academy', async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.getByText('Register here').click();
    await page.locator('#firstName').fill('Manogna');
    await page.getByPlaceholder('Last Name').fill('Berries');
    await page.getByPlaceholder('email@example.com').fill('berries431@gmail.com');
    await page.getByPlaceholder('enter your number').fill('9199025333');
    await page.locator('select').selectOption('Student');
    await page.getByRole('radio', {name: 'Female'}).check();
    await page.locator('#userPassword').fill('Hello@123');
    // await page.locator('#confirmPassword').fill('Hello@123');
    // await page.getByLabel('checkbox').click;
    await page.getByRole('button',{name:'Register'}).click();
})