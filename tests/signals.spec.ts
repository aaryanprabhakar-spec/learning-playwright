import {test,expect} from '@playwright/test'
import { CreateSignal } from '../utils/CreateSignal'



test('Create_Predefined',async({page})=>{
    const signal=new CreateSignal(page);
     await page.goto('/target-profiles/accounts');

     await signal.createPredefinedSignal();
     await page.waitForTimeout(60_000);


})
test('Create_CustomSignal',async({page})=>{
    const signal=new CreateSignal(page);
    await page.goto('/target-profiles/accounts');
    await signal.createCustomSignal();
    await page.waitForTimeout(60_000);


})