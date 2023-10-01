describe("Sign up a user", () => {
  it("sign up", () => {
    // verifies url and title
    cy.visit("https://scout4job.com/");

    cy.url().should("include", "scout4job").and("eq", "https://scout4job.com/");
    cy.title()
      .should("include", "the #1 job site")
      .and(
        "equal",
        "Scout4Job | Jobs and Recruitment on scout4job.com, the #1 job site"
      );

    // go to the sign up page
    cy.get(
      "button[class=' w-fit items-center bg-white py-[11px] px-[26.8px] text-sm font-bold text-secondary shadow-[-6px_6px_0px_0px_#191919] transition duration-200 hover:shadow-[6px_6px_0px_0px_#191919]']"
    ).click();
    cy.get("a[class='text-primary ']").should("exist").click();

    // clicks on job seeker button
    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(4) > ul:nth-child(1) > button:nth-child(1)"
    )
      .should("exist")
      // .and('have.attr', 'button')
      .should("include.text", "I'm a Job seeker")
      .click();

    // fill in the details of the form
    cy.get("#firstName").should("exist").type("Ikechukwu"); // first name
    cy.get("#lastName").should("exist").type("Odokoro"); // last name
    cy.get("#email").should("exist").type("odokoroikechukwujnr@gmail.com"); // email address

    cy.get('select[name="phoneCountry"]')
      .should("exist")
      .and("not.be.visible")
      .select("NG", { force: true }); // phone country
    cy.get('input[name="phone"]').should("exist").type("08155052702"); // phone number

    cy.get("#password").should("exist").type("Ikechukwu123!"); // password
    cy.get("#confirmPassword").should("exist").type("Ikechukwu123!"); // confirm password

    // click on the signup button
    cy.get("button[type='submit']").should("exist").click();
  });
});
