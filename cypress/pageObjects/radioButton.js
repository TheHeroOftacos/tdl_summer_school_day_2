import BasePage from "./basePage";

class RadioButtons extends BasePage {
    static get url() {
        return "/radio-button";
      }
    static get yesbutton(){
        return cy.get('[class="custom-control custom-radio custom-control-inline"]').first();
    }
    static get resultyes(){
        return cy.get('[class="text-success"]')
    }
    static get impbutton(){
        return cy.get('[class="custom-control custom-radio custom-control-inline"]').last();
    }
    static get resultimp(){
        return cy.get('[class="text-success"]')
    }
    static get nobutton(){
        return cy.get('[class="custom-control disabled custom-radio custom-control-inline"]')
    }









    }
export default RadioButtons;

