// const { should } = require("chai")

describe ("login",()=> {
  const selectorEmail= "[name='email']";
    beforeEach(() => {
      cy.visit("/login")
    })
    it("login correct", ()=> {
    //    //  Cypress.config("baseUrl", "https://staging.lpitko.ru/")
    
       cy.enterLogin(selectorEmail,'oxana.s.sidorova@gmail.com'),
      //  cy.get("[name='email']").type('oxana.s.sidorova@gmail.com'),
       cy.get("[name='password']").type(333338),
       cy.get('.btn-main').click(),
       cy.request("/api/login?redirect=%2F")
      cy.get("[class='base--clickable header-item header-item--right']").should ("have.text", "OxanaOxana")
     })
     it ("login incorrect",()=>{
      cy.enterLogin(selectorEmail,'oxana.s.sidorova@gmail'),
       cy.get("[name='password']").type(333338),
       cy.get('.btn-main').click(),
       cy.get("[class='txt-secondary txt txt--red']").should("have.text" ,"В форме допущены ошибки")

       })
       it ("login blank",()=>{
        cy.enterLogin(selectorEmail,' '),
       cy.get("[name='password']").type(333338),
       cy.get('.btn-main').click(),
       cy.get("[class='txt-secondary txt txt--red']").should("have.text" ,"В форме допущены ошибки")
    })
})
