import {Page} from '@playwright/test'


export class CreateSignal{
    constructor(private page: Page) {}


    enrichment_button=this.page.getByRole('button', { name: 'Enrichment' });
    signals_container=this.page.locator('.ais-card-content').getByText('Signals', { exact: true });
    library_list=this.page.locator('.ai-research-feature-create-tab-suggestions-container-suggestion-item-text')
    enrich_button=this.page.getByText('Next: Enrich Settings', { exact: true })
    proceed_button= this.page.getByRole('button', { name: 'Proceed' })



    async createPredefinedSignal(){
        await this.enrichment_button.click();
        await this.signals_container.click();
        await this.library_list.first().click();
        await this.enrich_button.click();
        await this.proceed_button.click();
    }






}