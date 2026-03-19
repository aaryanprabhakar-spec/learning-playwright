import{test,expect} from '@playwright/test'
import { LoginPage } from '../utils/LoginPage'
import UserData from '../test-data/login.json'



test('valid_credentials',async({page})=>{
    const login=new LoginPage(page);
    await login.goto();
    await login.login(UserData.valid.username,UserData.valid.password);
    await expect(page).toHaveURL('/target-profiles/accounts')
    await page.context().storageState({ path: 'auth.json' });
})

test('invalid credentials',async({page})=>{
    const login=new LoginPage(page);
    await login.goto();
    await login.login(UserData.invalid.username,UserData.invalid.password);
    await expect(page).not.toHaveURL('/target-profiles/accounts')
})

test('api_valid_credentials',async({page})=>{
    const login=new LoginPage(page);
    const response_body=await login.login_api(UserData.valid.username,UserData.valid.password)
    await page.goto('/target-profiles/accounts');
    await expect(page).toHaveURL('/target-profiles/accounts')
    await expect(response_body.status).toBe('success');
    

})

test('api_invalid_credentials',async({page})=>{
    const login=new LoginPage(page);
    const response_body=await login.login_api(UserData.invalid.username,UserData.invalid.password);
    await page.goto('/target-profiles/accounts');
    await expect(page).not.toHaveURL('/target-profiles/accounts')
    await expect(response_body.status).toBe('failed')
})