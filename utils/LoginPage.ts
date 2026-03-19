import { Page } from '@playwright/test'

export class LoginPage {


    constructor(private page: Page) {}
    username_locator=this.page.getByRole('textbox', { name: 'Enter your email' })
    password_locator=page.getByRole('textbox', { name: 'Enter your password' })
    sign_in=page.getByRole('button', { name: 'Sign in' })


    // get username_locator() {
    //     return this.page.getByRole('textbox', { name: 'Enter your email' })
    // }

    // get password_locator(){
    //     return this.page.getByRole('textbox', { name: 'Enter your password' })
    // }

    // get sign_in (){
    //     return this.page.getByRole('button', { name: 'Sign in' })
    // }

    async goto() {
        await this.page.goto('/login')
    }

    async login(username: string, password: string) {
        await this.username_locator.fill(username)
        await this.password_locator.fill(password),
        await this.sign_in.click();
    }

    async login_api(email:string,password:string){
        const response=await this.page.request.post('https://prodms.sprouts.ai/login/sprous-login',{
            data:{
                email,
                password,
                recap:"HFM3oxIAMVVRx5YW4EHVAVHBY7RxozGHM2dAN4cBRxdCo-YnNCW3VZOCZNJz4SJxxWCGtyQkkVMXooX388Qjc7M2QOLmxNdz1wOVwsVxIVCjcveTk0PjlAISU3BFoSHxUDCjAYAz4qJSsoXDkNBmMjPixxOR5OTXQtb3EmaAUHI3wCfzpAAl4bEV1aTHtrHCxrE2dlexFidF05c3AkB0MQZjE6Fn5NZQlVbHwDQQtAQgtdOX8adn5lJjg4ZzJaKWAyYnEsVxJYTAB6OC5mN05CBEhIdHcJS1MpF3ICFXkbcihyLzsoEzksNhY7O2IvMhktb3FyN3VyQhwGaHEZHlcRVwFPQBExfnAxa2cpJ0coMW0sZHIpPRNOOiU4e3xYZntAe34XG1VGRh5LSRlGM2o_NyNecDApNX85bkhsB2sUCmZtTCk0SDJBUSU3chM7Om89NmdFNW9rOyYoEm5uWDwDMiE_ZAVOTQdLNTE4aFNyQmh6Mz1eQhVAXAMsRw9SOiRgMVlle2VydSknZXRCWwRZP1A"
            }
        })
        const response_body=await response.json();
        return response_body;

    }
}