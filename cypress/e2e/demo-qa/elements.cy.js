import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtons from "../../pageObjects/radioButton";
import webtables from "../../pageObjects/WebTables.js";
import Buttonscen from "../../pageObjects/button.js";

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
    it('scenario 1', ()=>{
      RadioButtons.yesbutton.click();
    // Click yesButton
      RadioButtons.resultyes.should("have.text","Yes")
    // validate the message
      RadioButtons.impbutton.click();
      RadioButtons.resultimp.should("have.text","Impressive")
    // click impressiveButton
    // validate the message
      RadioButtons.nobutton.should('be.visible').should('have.class', 'disabled')
    // noButton - validate that the button exists but is disabled
    });
  });

  context("Web tables scenarios", () => {
    // Create WebTables page object
    beforeEach(() => {
      webtables.visit();
    });
    // Create scenario 1:
    it('scenario 1', ()=>{
    // Click add record button
    webtables.addbutton.click()
    // fill in the necessary information
    webtables.firstname.type("markuss");
    webtables.lastname.type("hari");
    webtables.email.type("markuss@gmail.com");
    webtables.age.type("20");
    webtables.salary.type("2");
    webtables.department.type("air");
    // click submit button
    webtables.submit.click()
    // search for the user based on previously added information
    webtables.clicksearch.click()
    webtables.clicksearch.type("Markuss");
    // validate tha the user is visible
    webtables.valid.should("have.text","markuss")
    });
    it('scenario 2', ()=>{
    // Create Scenario 2:
    webtables.delete.click()
    webtables.delete2.click()
    webtables.delete3.click()
    // Delete all table rows
    // Validate that we see text - No rows found
    webtables.nodata.should("have.text","No rows found")
    });
  });

  context("Buttons scenarios", () => {
    beforeEach(() => {
      Buttonscen.visit();
    });
    it.only('scenario 1', ()=>{
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    Buttonscen.dbl.dblclick()
    // Click Double click button
    Buttonscen.dblmsg.should("have.text","You have done a double click")
    // Validate the double click message
    Buttonscen.rclick.rightclick()
    // Click rightclick button
    Buttonscen.rclickmsg.should("have.text","You have done a right click")
    // Validate the right click message
    Buttonscen.regclick.click()
    // Do dynamic click
    Buttonscen.regmsg.should("have.text","You have done a dynamic click")
    // Validate dynamic click message
    })
  });
});
