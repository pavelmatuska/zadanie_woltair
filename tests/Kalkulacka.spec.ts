import { test, expect } from '@playwright/test';
import { Kalkulacka } from '../page_object/kalkulacka/Kalkulacka';
import { KalkulackaStep0, KalkulackaStep1, KalkulackaStep2, KalkulackaStep3, KalkulackaStep4, KalkulackaStep4_5a, KalkulackaStep5, KalkulackaStep6, KalkulackaStep7 } from '../page_object/kalkulacka/Kalkulacka_steps';
import { Kraj, PocetOsob, PritomnostEnergetickyNarocnychSpotrebicov, SpusobOhrivaniVody, SpusobVytapeni, SpusobVytapeniTuhaPaliva, ZnalostTepelnejStraty } from '../page_object/kalkulacka/Kalkulacka_enum';


/* Scenarios should be data-driven, hence all available flow combinations could be parametrically called and tested */
/* As I have not researched how composition is done in typescript, I have used declaration of each step separatellyin test, in order to simulate composition 
  (example would be step 4_5a / 4_5b which are interchangeable without change to the rest of test steps). */

test('Example of single positive flow', async ({ page }) => {

  const kalkulacka = new Kalkulacka(page);
  const step0 = new KalkulackaStep0(page);
  const step1 = new KalkulackaStep1(page);
  const step2 = new KalkulackaStep2(page);
  const step3 = new KalkulackaStep3(page);
  const step4 = new KalkulackaStep4(page);
  const step4_5 = new KalkulackaStep4_5a(page);
  const step5 = new KalkulackaStep5(page);
  const step6 = new KalkulackaStep6(page);
  const step7 = new KalkulackaStep7(page);

  await kalkulacka.naviguj();
  await step0.vyberTypTopeni(SpusobVytapeni.tuhaPaliva,SpusobVytapeniTuhaPaliva.prvaDruhaTrieda);
  await step1.vyberTypOhrevu(SpusobOhrivaniVody.elBojler);
  await step2.vyberPocetOsob(PocetOsob.pet);
  await step3.zadajVelkostPlochy("111");
  await step3.potvrdFormular();
  await step4.vyberZnalostTepelnejStraty(ZnalostTepelnejStraty.ano);
  await step4_5.zadajZnalostTepelnejStraty("100");
  await step4_5.potvrdFormular();
  await step5.vyberEnergetickyNarocneSpotrebice(PritomnostEnergetickyNarocnychSpotrebicov.ano);
  await step6.vyberKraj(Kraj.praha);
  await step6.potvrdFormular();
  await step7.vyplnFormular("testemail@gmail.com", "+420 000 000 000", true, "AAA", true );
  

  await expect(page).toHaveURL("https://www.woltair.cz/tepelna-cerpadla/kalkulacka?krok=7a");
});


test('Defect01 - able to pass step 4.5a with empty value', async ({ page }) => {

  const kalkulacka = new Kalkulacka(page);
  const step0 = new KalkulackaStep0(page);
  const step1 = new KalkulackaStep1(page);
  const step2 = new KalkulackaStep2(page);
  const step3 = new KalkulackaStep3(page);
  const step4 = new KalkulackaStep4(page);
  const step4_5 = new KalkulackaStep4_5a(page);
  const step5 = new KalkulackaStep5(page);
  const step6 = new KalkulackaStep6(page);
  const step7 = new KalkulackaStep7(page);

  await kalkulacka.naviguj();
  await step0.vyberTypTopeni(SpusobVytapeni.tuhaPaliva,SpusobVytapeniTuhaPaliva.prvaDruhaTrieda);
  await step1.vyberTypOhrevu(SpusobOhrivaniVody.elBojler);
  await step2.vyberPocetOsob(PocetOsob.pet);
  await step3.zadajVelkostPlochy("111");
  await step3.potvrdFormular();
  await step4.vyberZnalostTepelnejStraty(ZnalostTepelnejStraty.ano);
  await step4_5.zadajZnalostTepelnejStraty("100");
  await step4_5.potvrdFormular();
  await step5.tlacidloSpet();
  await step4.vyberZnalostTepelnejStraty(ZnalostTepelnejStraty.ano);
  await step4_5.zadajZnalostTepelnejStraty("");
  await step4_5.potvrdFormular();
  

  await expect(page).toHaveURL("https://www.woltair.cz/tepelna-cerpadla/kalkulacka?krok=4.5a");
});

