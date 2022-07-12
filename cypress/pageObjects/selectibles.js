import BasePage from "./basePage";

class Select extends BasePage {
    static get url() {
        return "/selectable";
      }
    static get firstone(){
        return cy.get('[class="mt-2 list-group-item list-group-item-action"]');
    }
    static get grid(){
        return cy.get('[id="demo-tab-grid"]')
    }
    static get nr(){
        return cy.get('[class="list-group-item list-group-item-action"]')
    }
    

    }
export default Select;

