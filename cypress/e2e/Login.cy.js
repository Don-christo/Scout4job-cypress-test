describe("Login a user", () => {
  it("login", () => {
    cy.visit("https://www.scout4job.com/");

    // cy.get("button[class=' w-fit items-center bg-white py-[11px] px-[26.8px] text-sm font-bold text-secondary shadow-[-6px_6px_0px_0px_#191919] transition duration-200 hover:shadow-[6px_6px_0px_0px_#191919]']").click();

    //<---------- login user ---------->
    cy.get("button[class=' w-fit items-center bg-white py-[11px] px-[26.8px] text-sm font-bold text-secondary shadow-[-6px_6px_0px_0px_#191919] transition duration-200 hover:shadow-[6px_6px_0px_0px_#191919]']")
      // .should("have.css", "display", "none")
      .should('not.be.visible')
      .then((element) => {
        if (element) {
          cy.get("div[role='button']").click();
          cy.contains("button", "Login").click();
        } else {
          cy.contains("button", "Login").click();
        }
        cy.get("input#email").type("odokoroikechukwujnr@gmail.com");
        cy.get("input#password").type("Odokoro123!");
        cy.get("button[type='submit']").click();
      });

    // After the login, to confirm it's then user that has logged in.

    let expectedName = "Ikechukwu Odokoro";

    cy.wait(15000);

    cy.get(".mt-2.text-base").then((name) => {
      let actualName = name.text();
      expect(actualName).to.equal(expectedName);
    });
  });
});
