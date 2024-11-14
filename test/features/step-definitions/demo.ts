import { Given, Then, When } from "@wdio/cucumber-framework";
import * as chai from 'chai';

Given("We open Google web page",async function(){
    await browser.url("https://www.google.com")
    browser.pause(8000)
})
When(/^we search with (.*)$/, async function(keyword){
    console.log(`>>Starting of we search with and keyword is ${keyword}`);
    let ele=$(`[name="q"]`);
    await ele.setValue(keyword);
    await browser.keys('Enter')
})
Then(/^we click on first result/, async function(){
    console.log(`>>Starting of we click on first result`);
    let ele1=$(`//h3`)
    await ele1.click()

})
Then(/^We should see this url (.*)$/,async function(expUrl){
    console.log(`The expected url is: ${expUrl}`);
    let url=await browser.getUrl();
    chai.expect(url).equal(expUrl)

})