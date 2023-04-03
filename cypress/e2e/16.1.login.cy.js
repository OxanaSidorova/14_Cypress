// const { should } = require("chai")
const users = require ("../fixtures/example.json");
describe ("login",()=> {
  const selectorEmail= "[name='email']";
  const selectorButton = '.btn-main';
  const selectorPassword = "[name='password']"

    beforeEach(() => {
      cy.visit("/login")
    })
    it("login correct", ()=> {
      // cy.validLogin16 (users.correct.email)
    
       cy.enterLogin(selectorEmail,users.correct.email),

       cy.get(selectorPassword).type(users.correct.password),
       cy.get(selectorButton).click(),
       cy.request("/api/login?redirect=%2F")
      cy.get("[class='base--clickable header-item header-item--right']").should ("have.text", "OxanaOxana")
     })
     it ("login incorrect",()=>{
      cy.enterLogin(selectorEmail,users.wrongEmail.email),
       cy.get(selectorPassword).type(users.wrongEmail.password),
       cy.get(selectorButton).click(),
       cy.get("[class='txt-secondary txt txt--red']").should("have.text" ,"В форме допущены ошибки")

       })
       it ("login blank",()=>{
        cy.enterLogin(selectorEmail,users.blancEmail.email),
       cy.get(selectorPassword).type(users.blancEmail.password),
       cy.get(selectorButton).click(),
       cy.get("[class='txt-secondary txt txt--red']").should("have.text" ,"В форме допущены ошибки")
    })
})
