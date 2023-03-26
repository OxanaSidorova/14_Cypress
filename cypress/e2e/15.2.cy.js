// const { should } = require("chai")
// const { find } = require("cypress/types/lodash")

// const { contains } = require("cypress/types/jquery")

// const { should } = require("chai")
// const cypress = require("cypress")
// beforeEach(() => {

describe ("login",()=> {
beforeEach(() => {
  cy.visit("/login"),
   //  it("login correct", ()=> {
//    //  Cypress.config("baseUrl", "https://staging.lpitko.ru/")

  
   cy.get("[name='email']").type('oxana.s.sidorova@gmail.com'),
   cy.get("[name='password']").type(333338),
   cy.get('.btn-main').click(),
   cy.wait(500)
   cy.visit("/api/account"),
   cy.get('.header > [href="/"] > :nth-child(1)')
 })
// })
   // describe ("check my boxes",()=>{
      it("boxes page",()=>{
         cy.visit("/account/boxes"),
         cy.get('.toggle-menu-item--active > .txt--med')
      })
   // })
   // describe ("crete a new boxe",()=>{
      it("create a new box", ()=> {
         cy.visit("/box/new"),
          find('input[frm=text')
            it ('can add a new box name', ()=>{
                const newName="Newbox"
               cy.get("input[type=text]").type(`${newName}{enter}`)
               cy.should('have.text', newName)
               })
            })
         // })
         // describe ("crete a new boxe",()=>{
     it("fast randomizer", ()=> {
        cy.visit("/randomizer")
        find("input[type=text]")
         })
      it("check account", ()=> {
            cy.visit("/account")
         })
      })
