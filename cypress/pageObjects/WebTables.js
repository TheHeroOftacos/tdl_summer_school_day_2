import BasePage from "./basePage";


class WebTable extends BasePage {
  static get url() {
    return "/webtables";
  }
  static get addbutton(){
    return cy.get('[id="addNewRecordButton"]');
  }
  static get firstname(){
    return cy.get('[id="firstName"]');
  }
  static get lastname(){
    return cy.get('[id="lastName"]');
  }
  static get email(){
    return cy.get('[id="userEmail"]');
  }
  static get age(){
    return cy.get('[id="age"]');
  }
  static get salary(){
    return cy.get('[id="salary"]');
  }
  static get department(){
    return cy.get('[id="department"]');
  }
  static get submit(){
    return cy.get('[id="submit"]');
  }
  static get clicksearch(){
    return cy.get('[id="searchBox"]');
  }
  static get valid(){
    return cy.get('[class="rt-td"]').first()
  }
}

export default WebTable;