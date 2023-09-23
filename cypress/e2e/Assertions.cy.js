describe('Assertions', () => {

    it('implicit assertions', () => {

        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // cy.url().should('include', 'orangehrmlive.com');
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // cy.url().should('contain', 'orangehrm');


        /*cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('include', 'orangehrmlive.com')
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain', 'orangehrm');*/

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')
        .and('not.contain', 'greenhrm');

        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('not.eq', 'greenhrm')

        cy.get('.orangehrm-login-branding > img').should('exist')
        .and('be.visible');

        cy.get("input[placeholder='Username']").type('Admin')
        .should('have.value', 'Admin')


    })



    it('explicit assertions', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click();

        let expectedName = "Paul Collings";

        cy.get(".oxd-userdropdown-name").then((x) => {
            let actualName = x.text();

            // BDD Style
            expect(actualName).to.equal(expectedName);
            // expect(actualName).to.not.equal(expectedName);

            // TDD Style
            assert.equal(actualName, expectedName);
            // assert.notEqual(actualName, expectedName);
        })

    })

})