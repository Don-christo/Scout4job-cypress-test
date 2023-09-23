describe('Edit profile', () => {

    it('login', () => {
        cy.visit('https://www.scout4job.com/');

        //<---------- login user ---------->
        cy.contains('button', 'Login').click();
        cy.get('input#email').type('odokoroikechukwujnr@gmail.com');
        cy.get('input#password').type('Odokoro123!');
        cy.get("button[type='submit']").click();

        // After the login, to confirm it's then user that has logged in.

        let expectedName = 'Ikechukwu Odokoro';

        cy.wait(15000);

        cy.get(".mt-2.text-base").then((name) => {

            let actualName = name.text();
            expect(actualName).to.equal(expectedName);
        })

        //<---------- Process to edit profile ---------->
        cy.get("img[class='profile-picture h-[30px] w-[30px]']").click();

        // CSS property of the container; display is set to none. Set the container to be visible.
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)").invoke('css', 'display', 'block');

        cy.get("div[class='absolute top-[120px] right-12 z-[1000] -mt-[10px]']")
        .should('be.visible')
        .then(() => {
            cy.contains("a", "Profile", { force: true }).click();
        })

        // Set the display to its default
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)").invoke('css', 'display', 'none');
        

        cy.get('.mt-3.text-xl.font-bold').should('exist').trigger('mouseover')
        .click();
        cy.get("img[alt='edit icon']", { force: true }).click({ force: true });

        //<---------- Edit profile ---------->


        
    })
})