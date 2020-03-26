/* eslint-disable no-undef */
describe("Test our inputs and submit our form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })

    it("Add text to inputs and submit form", () => {
        cy.get('input[name="name"]')
          .type("Micah")
          .should("have.value", "Micah");

        cy.get('input[name="email"]')
          .type("micahjank@gmail.com")
          .should("have.value", "micahjank@gmail.com");

        cy.get('textarea[name="motivation"]')
          .type('This is some text')
          .should('contain.value', 'some text');

        cy.get('select[name="positions"]')
          .select('Yard Work')
          .should('have.value', 'Yard Work');

        cy.get('input[name="terms"]')
          .check()
          .should('be.checked');

        cy.get('button[type="submit"]')
          .click();

        // cy.get('pre')
        //   .should('contain.value', "Micah")
    })
})