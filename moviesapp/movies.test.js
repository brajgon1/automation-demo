const { By, Builder, Browser, until, Key } = require("selenium-webdriver");

let driver;

// Build a new driver for each test
beforeAll(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
  });
  
  // Quit a driver after each test
  afterEach(async () => {
    await driver.quit();
  });

  describe("moviesapp", () => {
    test("can work the movie app", async () => {
        await driver.get("http://127.0.0.1:8080/")
        await driver.wait(until.titleIs("Movies List"), 1000);
    });

    test("Can submit a movie title", async () => {
        await driver.findElement(By.name("movieTitle")).sendKeys("Matrix", Key.RETURN);
    })
  })