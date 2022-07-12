import BasePage from "./basePage";

class Buttonscen extends BasePage {
    static get url() {
        return "/buttons";
      }
    static get dbl(){
        return cy.get('[id="doubleClickBtn"]')
    }
    static get dblmsg(){
        return cy.get('[id="doubleClickMessage"]')
    }
    static get rclick(){
        return cy.get('[id="rightClickBtn"]')
    }
    static get rclickmsg(){
        return cy.get('[id="rightClickMessage"]')
    }
    static get regclick(){
        return cy.get('button[class = "btn btn-primary"]').eq(2);

    }
    static get regmsg(){
        return cy.get('[id="dynamicClickMessage"]')
    }

}

export default Buttonscen;