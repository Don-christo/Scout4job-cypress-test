describe("Job Application; clicking on random/specific job to apply", () => {
  it("Select a job to apply at random", () => {
    cy.visit("https://www.scout4job.com/");

    // cy.get("button[class=' w-fit items-center bg-white py-[11px] px-[26.8px] text-sm font-bold text-secondary shadow-[-6px_6px_0px_0px_#191919] transition duration-200 hover:shadow-[6px_6px_0px_0px_#191919]']").click();

    //<---------- login user ---------->

    cy.get(
      "button[class=' w-fit items-center bg-white py-[11px] px-[26.8px] text-sm font-bold text-secondary shadow-[-6px_6px_0px_0px_#191919] transition duration-200 hover:shadow-[6px_6px_0px_0px_#191919]']"
    )
      // .should("have.css", "display", "none")
      .should("not.be.visible")
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

    //   Application for a job test
    cy.get("body div div div div div div div div a:nth-child(1)")
      .should("not.be.visible")
      .then((jobButton) => {
        if (jobButton) {
          cy.get("div[role='button']").click();
          cy.wait(3000);
          cy.contains("button", "Jobs").click();
        } else {
          cy.get("body div div div div div div div div a:nth-child(1)").click();
        }

        // Selecting the job container and secting a job at random
        cy.get(
          "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)"
        )
          .find(
            "button[class='cursor-pointer rounded-md border border-gray-100 bg-white p-3 shadow-lg transition duration-200 hover:shadow-sm sm:p-6']"
          )
          .then(($items) => {
            const randomIndex = Math.floor(Math.random() * $items.length);
            cy.wrap($items)
              .eq(randomIndex)
              .scrollIntoView()
              .should("be.visible")
              .click();
          });
      });
    // Applying for the job
    cy.wait(3000);
    cy.get(
      "form[class='w-full rounded-lg py-12 px-2 md:w-[500px] md:border md:border-[#E6E5E5] md:px-8']"
    )
      // let us know why you're a good fit.
      .find(
        "div[class='editor-class px-5 -mt-3 min-h-[150px] rdw-editor-main']"
      )
      .scrollIntoView()
      .type(
        "I am a good fit because based on the job description, I am well qualified for this kind of job."
      );

    // Choosing your resume from your device
    cy.get(
      "div[class='padding border-bg-[#F2F8FF] mt-4 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed py-6']"
    )
      .scrollIntoView()
      .invoke("css", "display", "block")
      .should("be.visible")

      .then(() => {
        // In Cypress, you cannot interact directly with the system file dialog that allows users to select file from their devices because the behaviour is restricted by the browser for security reasons. However, we can use the cy.fixture() to simulate file uploads without actually interacting with the system file dialog.

        // simulate a file upload in input field
        cy.fixture("../../../../Documents/Ikechukwu Odokoro.pdf").then(
          (fileContent) => {
            cy.get("input[type='file']")
              .invoke("css", "display", "block")
              .trigger("change", {
                target: {
                  files: [
                    new File(
                      [fileContent],
                      "../../../../Documents/Ikechukwu Odokoro.pdf",
                      { type: "application/pdf" }
                    ),
                  ],
                },
              });
          }
        );
        cy.get("input[type='file']").invoke("css", "display", "none");
      });

    cy.get(
      "div[class='padding border-bg-[#F2F8FF] mt-4 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed py-6']"
    )
      .scrollIntoView()
      .invoke("css", "display", "none");

    // cy.get("button[type='submit']").click();
  });

  it("Select a specific job", () => {
    cy.visit("https://www.scout4job.com/");

    // cy.get("button[class=' w-fit items-center bg-white py-[11px] px-[26.8px] text-sm font-bold text-secondary shadow-[-6px_6px_0px_0px_#191919] transition duration-200 hover:shadow-[6px_6px_0px_0px_#191919]']").click();

    //<---------- login user ---------->

    cy.get(
      "button[class=' w-fit items-center bg-white py-[11px] px-[26.8px] text-sm font-bold text-secondary shadow-[-6px_6px_0px_0px_#191919] transition duration-200 hover:shadow-[6px_6px_0px_0px_#191919]']"
    )
      // .should("have.css", "display", "none")
      .should("not.be.visible")
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

    //   Application for a job test
    cy.get("body div div div div div div div div a:nth-child(1)")
      .should("not.be.visible")
      .then((jobButton) => {
        if (jobButton) {
          cy.get("div[role='button']").click();
          cy.wait(3000);
          cy.contains("button", "Jobs").click();
        } else {
          cy.get("body div div div div div div div div a:nth-child(1)").click();
        }
      });

    // Selecting the job container and selecting a particular job
    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)"
    )
      .find(
        "button[class='cursor-pointer rounded-md border border-gray-100 bg-white p-3 shadow-lg transition duration-200 hover:shadow-sm sm:p-6']"
      )
      .eq(4) // Selecting the 5th job in the list
      .scrollIntoView()
      .should("be.visible")
      .click();

    // Applying for the job
    cy.wait(3000);
    cy.get(
      "form[class='w-full rounded-lg py-12 px-2 md:w-[500px] md:border md:border-[#E6E5E5] md:px-8']"
    )
      // let us know why you're a good fit.
      .find(
        "div[class='editor-class px-5 -mt-3 min-h-[150px] rdw-editor-main']"
      )
      .scrollIntoView()
      .type(
        "I am a good fit because based on the job description, I am well qualified for this kind of job."
      );

    // Choosing your resume from your device
    cy.get(
      "div[class='padding border-bg-[#F2F8FF] mt-4 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed py-6']"
    )
      .scrollIntoView()
      .invoke("css", "display", "block")
      .should("be.visible")
      .then(() => {
        // In Cypress, you cannot interact directly with the system file dialog that allows users to select file from their devices because the behaviour is restricted by the browser for security reasons. However, we can use the cy.fixture() to simulate file uploads without actually interacting with the system file dialog.

        // simulate a file upload in input field
        cy.fixture("../../../../Documents/Ikechukwu Odokoro.pdf").then(
          (fileContent) => {
            cy.get("input[type='file']")
              .invoke("css", "display", "block")
              .trigger("change", {
                target: {
                  files: [
                    new File(
                      [fileContent],
                      "../../../../Documents/Ikechukwu Odokoro.pdf",
                      { type: "application/pdf" }
                    ),
                  ],
                },
              });
          }
        );
        cy.get("input[type='file']").invoke("css", "display", "none");
      });

    cy.get(
      "div[class='padding border-bg-[#F2F8FF] mt-4 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed py-6']"
    )
      .scrollIntoView()
      .invoke("css", "display", "none");

    // cy.get("button[type='submit']").click();
  });
});
