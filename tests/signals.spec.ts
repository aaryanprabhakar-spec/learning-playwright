import {test,expect} from '@playwright/test'
import { CreateSignal } from '../utils/CreateSignal'



test('Create_Predefined',async({page})=>{
    const signal=new CreateSignal(page);
     await page.goto('/target-profiles/accounts');

     await signal.createPredefinedSignal();
     await page.waitForTimeout(600000);


})