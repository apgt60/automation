const { By, Builder, Browser, until, Key } = require("selenium-webdriver");

let driver;

// Build a new driver for each test
beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

// Quit a driver after each test
afterEach(async () => {
  await driver.quit();
});

describe("Test the Movies List Page", () => {
    test("can search add a movie called 'Traffic'", async () => {
      // Navigate to localhost:3000
      await driver.get("http://localhost:3000");
  
      // Locate Add Movie input and type in Traffic
      await driver.findElement(By.name("movieTitle")).sendKeys("Traffic", Key.RETURN);

      // Wait until the movie is added to the list
      const labels = await driver.findElements(By.tagName("label"))

      expect(await labels[1].getText()).toBe('Traffic')

    });
  
    test("can we remove a movie from the list", async () => {
    // Navigate to localhost:3000
    await driver.get("http://localhost:3000");
  
    // Locate Add Movie input and type in Traffic
    await driver.findElement(By.name("movieTitle")).sendKeys("Traffic", Key.RETURN);
    
    // Locate Add Movie input and type in Traffic
    await driver.findElement(By.name("movieTitle")).sendKeys("Titanic", Key.RETURN);

    // Wait until the movie is added to the list
    let labels = await driver.findElements(By.tagName("label"))

    // Wait until the movie is added to the list
    const buttons = await driver.findElements(By.tagName("button"))
    const button = buttons[1]
    const actions = driver.actions({async: true})
    //await actions.click(button);
    await new Promise(r => setTimeout(r, 2000))
    //hit space (instead of click) on the first remove button for "Traffic"
    button.sendKeys(Key.RETURN)

    // Pause to see it remove
    await new Promise(r => setTimeout(r, 2000))

    //Refresh
    labels = await driver.findElements(By.tagName("label"))
    //Make sure first element in movie list is "Titanic"
    expect(await labels[1].getText()).toBe('Titanic')

    });
  });