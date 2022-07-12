// import page objects
import Select from "../../pageObjects/selectibles.js";
context("Interactions", () => {
  context("Selectable", () => {
    // Create SelectablePage page object
    beforeEach(() => {
      Select.visit();
    });
    it("scenario 1", () => {
    // Create scenario 1:
    // Click on "Cras justo odio"
    Select.firstone.contains('Cras justo odio').click().should('have.class', 'active')
    // Validate that class contains active
    // Click on "Dapibus ac facilisis in"
    Select.firstone.contains('Dapibus ac facilisis in').click().should('have.class', 'active')
    // Validate that chosen buttons contains class active
    })
    // Create scenario 2:
    it.only('scenario 2',()=>{
      Select.grid.click()
    // Click on grid
    Select.nr.contains('Four').click().should('have.class', 'active')
    Select.nr.contains('Eight').click().should('have.class', 'active')
    Select.nr.contains('Six').click().should('have.class', 'active')
    Select.nr.contains('Two').click().should('have.class', 'active')
    // Click on numbers 4, 8, 6, 2
    // Validate that chosen buttons contains class active
    });
  });
});
