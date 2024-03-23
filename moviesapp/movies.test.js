const { By, Builder, Browser, until, Key } = require("selenium-webdriver");

let driver;

// Build a new driver for each test
beforeAll(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
  });
  
  // Quit a driver after each test
  afterEach(async () => {
    await driver.sleep(1000);
  });

  afterAll(async () => {
    await driver.quit();
  })

  describe("moviesapp", () => {
    test("can work the movie app", async () => {
        await driver.get("http://127.0.0.1:8080/")
        await driver.wait(until.titleIs("Movies List"), 1000);
    });

    test("Can submit a movie title", async () => {
        const movieTitle = "The Matrix";
        await driver.findElement(By.name("movieTitle")).sendKeys(movieTitle, Key.RETURN);
        await driver.wait(until.elementLocated(By.xpath(`//*[contains(text(), 'The Matrix')]`)), 1000)

        // driver.wait(until.elementTextIs("The Matrix", 1000))
        // await driver.sleep(2000);
        // const movieTitleElement = global.document.querySelector('label[for="movie-0"]')
        // await driver.wait(until.elementLocated("The Matrix"), 1000);
        // expect(movieTitleElement).toBe(movieTitle)
        
    })
  })