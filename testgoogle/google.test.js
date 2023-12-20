const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});

test("can search Google for 'automation'", async () => {
  // TODO Navigate to google.com
  // Navigate to google.com
  await driver.get("https://www.google.com/");

  // TODO Uncomment the line below and replace SEARCH_BAR_NAME with the 
  // name of the search bar element
  await driver.findElement(By.name('q')).sendKeys("automation", Key.RETURN);
 
  // From demo below
  //await driver.wait(until.elementLocated(By.name('q')),1000).sendKeys("automation", Key.RETURN);
 
  // Wait for the results page to load
  await driver.wait(until.titleIs("automation - Google Search"), 1000);
});

test("can search Google twice", async () => {
  // Fix the TODOs below to finish the test
  // Navigate to google.com
  await driver.get("https://www.google.com/");

  // Searth for something
  await driver.findElement(By.name('q')).sendKeys("earth", Key.RETURN);

  await new Promise(r => setTimeout(r, 2000));

  // Call .clear() on the search bar element to clear the old search term
  await driver.findElement(By.name('q')).clear()

  // Pause to see it clear
  await new Promise(r => setTimeout(r, 2000));

  // TODO Call .sendKeys() on the search bar element to search for a new term
  await driver.findElement(By.name('q')).sendKeys("mars", Key.RETURN);

  // TODO Wait for the results page to load
  await driver.wait(until.titleIs("mars - Google Search"), 1000);
});
