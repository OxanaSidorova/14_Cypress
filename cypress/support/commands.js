// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// const cypress = require("cypress");

 
Cypress.Commands.add('enterLogin',(selector, email) => {
    cy.get(selector).type(email);
  });
  Cypress.Commands.add('typeUserName',(selector, name) => {
    cy.get(selector).type(name);
  });

  Cypress.Commands.add('typeUserEmail',(selector, email) => {
    cy.get(selector).type(email);
});

const regselectors = require("../fixtures/selectors.json")
Cypress.Commands.add('validLogin16', (email, password)  => { 
  cy.enterLogin(email),

  cy.get(regselectors.selectorPassword).type(password),
  cy.get(regselectors.selectorButton).click(),
  cy.request("/api/login?redirect=%2F")
 cy.get("[class='base--clickable header-item header-item--right']").should ("have.text", "OxanaOxana")
})




// Cypress.Commands.add("validLogin")

Cypress.Commands.add('changePassword',(typeUserName, newPassword)=>{
    cy.contains(typeUserName).click({force: true});
    cy.get(".layout-column-start > :nth-child(1) > .frm").type(newPassword);
    cy.get(':nth-child(4) > .form-page-group__main > .layout-column-start > :nth-child(2) > .frm').type(newPassword);
    cy.get('.layout-row-end > .btn-service').click()
    });

   
    Cypress.Commands.add("apiLoginOldPassword",(typeEmail,oldPassword,selectorCookie) => {
      cy.request({
        method: "POST",
        headers:{
            selectorCookie },
        url:"/login",
        body:[
          {password:oldPassword},
          {email:typeEmail}
      ]
    }).then((response)=> {
        expect(response.status).to.equal(200);
    });
    })

    
