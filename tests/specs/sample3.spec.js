describe("Scaling tests with Docker", () => {
  it("Simple forEach loop to navigate through a menu", () => {
    const protractorSetupSubMenus = [
      "Setting Up Protractor",
      "Setting Up the Selenium Server",
      "Setting Up the Browser",
      "Choosing a Framework"
    ];

    protractorSetupSubMenus.forEach((submenu, index) => {
      browser.get("http://www.protractortest.org");

      const protractorSetupMenu = element(by.id("drop2"));

      protractorSetupMenu.click();

      const submenuLink = element
        .all(by.css(".dropdown.open .dropdown-menu li a"))
        .get(index);

      submenuLink.click();

      const heading = element(by.css("h1"));

      expect(heading.getText()).toEqual(submenu);
    });
  });
});
