describe("Edit profile", () => {
  it("login", () => {
    cy.visit("https://www.scout4job.com/");

    //<---------- login user ---------->
    cy.contains("button", "Login").click();
    cy.get("input#email").type("odokoroikechukwujnr@gmail.com");
    cy.get("input#password").type("Odokoro123!");
    cy.get("button[type='submit']").click();

    // After the login, to confirm it's the user that has logged in.

    let expectedName = "Ikechukwu Odokoro";

    cy.wait(15000);

    cy.get(".mt-2.text-base").then((name) => {
      let actualName = name.text();
      expect(actualName).to.equal(expectedName);
    });

    //<---------- Process to edit profile ---------->
    cy.get("img[class='profile-picture h-[30px] w-[30px]']").click();

    // CSS property of the container; display is set to none. Set the container to be visible.
    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"
    ).invoke("css", "display", "block");

    cy.get("div[class='absolute top-[120px] right-12 z-[1000] -mt-[10px]']")
      .should("be.visible")
      .then(() => {
        cy.contains("a", "Profile", { force: true }).click();
      });

    // Set the display to its default
    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"
    ).invoke("css", "display", "none");

    cy.get(".mt-3.text-xl.font-bold")
      .should("exist")
      .trigger("mouseover")
      .click();
    cy.get("img[alt='edit icon']", { force: true }).click({ force: true });

    cy.wait(10000);

    //<---------- Edit profile ---------->

    // Where are you based?
    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > p:nth-child(2)"
    ).should("include.text", "Where are you based?");

    cy.get("#address").clear();
    cy.get("#address").type("Nigeria");

    // How many years of experience do you have?
    cy.get("label[for='yearsOfExperience'] p[class='font-neue text-[16px]']")
      .should("exist")
      .and("include.text", "How many years of experience do you have?");

    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)"
    )
      .scrollIntoView()
      .should("be.visible")
      .click();

    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(6)"
    ).click();

    // Your website
    cy.get("label[for='website'] p[class='font-neue text-[16px]']").should(
      "include.text",
      "Your website"
    );

    cy.get("#website").clear();
    cy.get("#website").type("https://ikechukwuodokoroportfolio.netlify.app/#");

    // Your LinkedIn profile
    cy.get("label[for='linkedin'] p[class='font-neue text-[16px]']").should(
      "contain",
      "Your Linkedin"
    );
    cy.get("#linkedin").clear();
    cy.get("#linkedin").type("https://linkedin.com/in/ikechukwuodokoro");

    // What is your current level?
    cy.get("label[for='currentLevel'] p[class='font-neue text-[16px]']").should(
      "contain",
      "What is your current level?"
    );
    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)"
    )
      .scrollIntoView()
      .should("be.visible")
      .click();

    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(6)"
    ).click();

    // What is your qualification?
    cy.get(
      "label[for='qualification'] p[class='font-neue text-[16px]']"
    ).should("include.text", "What is your qualification?");
    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)"
    )
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3)"
    ).click();

    // check the box for "I'm currently employed"
    cy.get("#isEmployed").uncheck();
    cy.get("#isEmployed").check();

    // Where do you work currently?
    cy.get(
      "label[for='currentOrganizationName'] p[class='font-neue text-[16px]']"
    ).should("include.text", "Where do you work currently");
    cy.get("#currentOrganizationName").clear().type("Softstructures");

    // What is your current job title?
    cy.get(
      "label[for='currentJobTitle'] p[class='font-neue text-[16px]']"
    ).should("contain", "current job title");
    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)"
    )
      .clear()
      .type("QA Intern");

    // What is your current job type?
    cy.get("label[for='jobType'] p[class='font-neue text-[16px]']").should(
      "have.text",
      "What is your current job type?"
    );
    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)"
    )
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(5)"
    )
      .scrollIntoView()
      .should("be.visible")
      .click();

    //   Click the button to update profile
    cy.contains("button", "Edit profile")
      .scrollIntoView()
      .should("be.visible")
      .click();

    // Exit the edit profile modal

    // cy.scrollTo(0, 0); Element is not scrollable.

    // cy.get(
    //   "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2)"
    // )
    // //   .find("button")
    //   .scrollIntoView()
    //   .should("be.visible")
    //   .click();
  });
});
