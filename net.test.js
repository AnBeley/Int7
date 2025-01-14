const { clickElement, putText, getText } = require("./lib/commands.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("Booking tickets tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

  test("The first link text 'Идём в кино'", async () => {
    const actual = await getText(page, "header");
    expect(actual).toContain("Идёмвкино");
  });

  test("The link on 'Унесенные ветром.'. No seats selected", async () => {
    await clickElement(page, "[data-seance-id='190']");
    const actual1 = await getText(page, "h2");
    await expect(actual1).toContain("Сталкер(1979)");
    await clickElement(page, ".buying .acceptin-button");
    const actual2 = await getText(page, "h2");
    await expect(actual2).toContain("Унесенные ветром.");
  });

  test("The link on 'Унесенные ветром.'. Seats selected", async () => {
    await clickElement(page, "[data-seance-id='190']");
    const actual1 = await getText(page, "h2");
    await expect(actual1).toContain("Унесенные ветром.");
    await clickElement(
      page,
      "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(6) > span:nth-child(7)"
    );
    await clickElement(
      page,
      "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(6) > span:nth-child(8)"
    );
    await clickElement(page, ".buying .acceptin-button");
    const actual2 = await getText(page, "h2");
    await expect(actual2).toContain("Вы выбрали билеты:");
  });
});
