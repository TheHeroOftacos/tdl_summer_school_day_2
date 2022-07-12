import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtons from "../../pageObjects/radioButton";


context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
    
    it("Filling in Text Boxes", () => {
      // add the necessary steps
      TextBoxPage.fullName.type("Markuss]");
      TextBoxPage.eMail.type("marl@gmail.com");
      TextBoxPage.cAdress.type("kuldiga 1");
      TextBoxPage.pAdress.type("kuldigas 2");
      TextBoxPage.submit.click();
      TextBoxPage.validateName.should('contain','Markuss');
      TextBoxPage.validateEMail.should('contain','marl@gmail.com');
      TextBoxPage.validateCAdress.should('contain','kuldiga 1');
      TextBoxPage.validatePAdress.should('contain','kuldigas 2');
    });
  });

  context("Check box scenarios", () => {
    // Create CheckBoxPage page object
    beforeEach(() => {
      CheckBoxPage.visit();
    });
    //cy.get(':nth-child(1) > .element-list > .menu-list > #item-1')
    // Create checkbox scenario 1:
    it("scenario 1", () => {
      // Click the "+"/expand button
      CheckBoxPage.plusButton.click();
      // Click Notes, React, Angular, General, Excel File.doc
      CheckBoxPage.checkNotes.click();
      CheckBoxPage.checkReact.click();
      CheckBoxPage.checkAngular.click();
      CheckBoxPage.checkGeneral.click();
      CheckBoxPage.checkExcel.click();
      // Validate the clicked checkboxes
      CheckBoxPage.resultNotes.should("have.text","notes");
      CheckBoxPage.resultReact.should("have.text","react");
      CheckBoxPage.resultAngular.should("have.text","angular");
      CheckBoxPage.resultGeneral.should("have.text","general");
      CheckBoxPage.resultExcel.should("have.text","excelFile");
    })
  
    it('scenario 2', () =>{
    // Create checkbox scenario 2:
    // Click expand button
    CheckBoxPage.plusButton.click();
    // Click Office
    CheckBoxPage.office.contains('Office').should('be.visible').click();
    // Validate the checked checkboxes
    CheckBoxPage.resultOffice.should("have.text","You have selected :officepublicprivateclassifiedgeneral");
  });
  });

  context("Radio button scenarios", () => {
    // Create RadioButtons page object
    beforeEach(() => {
      RadioButtons.visit();
    });
    // Scenario 1:
    it.only('scenario 1', ()=>{
      RadioButtons.yesbutton.click();
    // Click yesButton
      RadioButtons.resultyes.should("have.text","Yes")
    // validate the message
      RadioButtons.impbutton.click();
      RadioButtons.resultimp.should("have.text","Impressive")
    // click impressiveButton
    // validate the message
      RadioButtons.nobutton.should('be.visible').should('be.disabled')
    // noButton - validate that the button exists but is disabled
    });
  });

  context("Web tables scenarios", () => {
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
  });

  context("Buttons scenarios", () => {
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
