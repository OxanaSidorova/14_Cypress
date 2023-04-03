// const { should } = require("chai")

describe ("login",()=> {
  const selectorEmail= "[name='email']";
  const selectorButton = ".btn-main'";
  const selectorPassword = "[name='password']"

    beforeEach(() => {
      cy.visit("/login")
    })
    it("login correct", ()=> {
    
       cy.enterLogin(selectorEmail,'oxana.s.sidorova@gmail.com'),

       cy.get(selectorPassword).type(333338),
       cy.get(selectorButton).click(),
       cy.request("/api/login?redirect=%2F")
      cy.get("[class='base--clickable header-item header-item--right']").should ("have.text", "OxanaOxana")
     })
     it ("login incorrect",()=>{
      cy.enterLogin(selectorEmail,'oxana.s.sidorova@gmail'),
       cy.get(selectorPassword).type(333338),
       cy.get(selectorButton).click(),
       cy.get("[class='txt-secondary txt txt--red']").should("have.text" ,"В форме допущены ошибки")

       })
       it ("login blank",()=>{
        cy.enterLogin(selectorEmail,' '),
       cy.get(selectorPassword).type(333338),
       cy.get(selectorButton).click(),
       cy.get("[class='txt-secondary txt txt--red']").should("have.text" ,"В форме допущены ошибки")
    })
})
