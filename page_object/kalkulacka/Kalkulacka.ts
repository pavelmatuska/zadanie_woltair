import {Page} from "@playwright/test"

export class Kalkulacka {
    readonly page: Page;

    constructor(page : Page){
        this.page = page;
    }

    async naviguj(){
        await this.page.goto("https://www.woltair.cz/tepelna-cerpadla/kalkulacka?krok=0");
        await this.page.click("//*[text()='Povolit vše']");
    }

    async tlacidloSpet(){
        await this.page.click("//*[@alt='Šipka zpět']");
    }

}