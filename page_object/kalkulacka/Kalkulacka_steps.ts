import {test, Page} from "@playwright/test" 
import { Kalkulacka } from "./Kalkulacka"
import { SpusobVytapeni } from "./Kalkulacka_enum";


export class KalkulackaStep0 extends Kalkulacka{
    constructor(page : Page){
        super(page)
    }
    
    async vyberTypTopeni(spusobVytapeni : string, tuhaPalivaDetail : string){
        await this.page.click("//label[text()='" + spusobVytapeni + "']");
        if (spusobVytapeni === SpusobVytapeni.tuhaPaliva){
            await this.page.click("//label[text()='" + tuhaPalivaDetail + "']");
        }
    }
}


export class KalkulackaStep1 extends Kalkulacka{
    constructor(page : Page){
        super(page)
    }

    async vyberTypOhrevu(spusobOhrevu : string){
        await this.page.click("//label[text()='" + spusobOhrevu + "']");
    }
}

export class KalkulackaStep2 extends Kalkulacka{
    constructor(page : Page){
        super(page)
    }

    async vyberPocetOsob(pocetOsob : string){
        await this.page.click("//label[text()='" + pocetOsob + "']");
    }
}

export class KalkulackaStep3 extends Kalkulacka{
    constructor(page : Page){
        super(page)
    }

    async zadajVelkostPlochy(velkostPlochy : string){
        await this.page.fill("//input[@data-testid='floorSquare']",velkostPlochy);
    }

    async potvrdFormular(){
        await this.page.click("//div[text()='Pokračovat']");
    }
}

export class KalkulackaStep4 extends Kalkulacka{
    constructor(page : Page){
        super(page)
    }

    async vyberZnalostTepelnejStraty(znalostTepelnejStraty : string){
            await this.page.click("//button//span[text()='" + znalostTepelnejStraty + "']");

    }
}

export class KalkulackaStep4_5a extends Kalkulacka{
    constructor(page : Page){
        super(page)
    }

    async zadajZnalostTepelnejStraty(tepelnaStrata : string){
        await this.page.fill("//input[@data-testid='houseHeatLoss']",tepelnaStrata);
    }

    async potvrdFormular(){
        await this.page.click("//div[text()='Pokračovat']");
    }
}

export class KalkulackaStep4_5b extends Kalkulacka{
    constructor(page : Page){
        super(page)
    }

    async vyberZnalostTepelnejStraty(znalostTepelnejStraty : boolean){
        await this.page.click("//label[text()='" + znalostTepelnejStraty + "']");
    }
}

export class KalkulackaStep5 extends Kalkulacka{
    constructor(page : Page){
        super(page)
    }

    async vyberEnergetickyNarocneSpotrebice(existujuEnergetickyNarocneSpotrebice : string){
        await this.page.click("//label[text()='" + existujuEnergetickyNarocneSpotrebice + "']");
    }
}

export class KalkulackaStep6 extends Kalkulacka{
    constructor(page : Page){
        super(page)
    }

    async vyberKraj(kraj : string){
        await this.page.click("//select[@data-testid='regionName']");
        await this.page.selectOption("//select[@data-testid='regionName']", kraj);
    }

    async potvrdFormular(){
        await this.page.click("//div[text()='Pokračovat']");
    }
}

export class KalkulackaStep7 extends Kalkulacka{
    constructor(page : Page){
        super(page)
    }

    async vyplnFormular(email : string, telefon : string, pouzitKodZnameho: boolean, kodZNameho: string, zajemOSchuzku: boolean){
        await this.page.fill("//input[@data-testid='email']",email);
        await this.page.fill("//input[@data-testid='phone']",telefon);
        if (pouzitKodZnameho){
            //Test in this row should not be static, but rather loaded via framework-type static text provider or be part of test input data
            await this.page.click("//span[text()='Zadat kód známého, který mi Woltair doporučil']/ancestor::label/input");
            await this.page.fill("//input[@name='affiliateCode']", kodZNameho);
        }
        if (zajemOSchuzku){
            await this.page.click("//label[text()='Mám zájem o schůzku s expertem']//input");
        }
    }

    async potvrdFormular(){
        //intentionally unimplemented
        console.log("Unimplemented send");
        await this.page.screenshot();
    }
}