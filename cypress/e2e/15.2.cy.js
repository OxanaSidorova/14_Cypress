// const { should } = require("chai")
// const { find } = require("cypress/types/lodash")

// const { should } = require("chai")
// const cypress = require("cypress")

describe ("landed page",()=> {
    it("check page  login", ()=> {
   //  Cypress.config("baseUrl", "https://staging.lpitko.ru/")
    })

    it("login", ()=> {
   cy.visit("/login"),
   cy.get("[name='email']").type('oxana.s.sidorova@gmail.com'),
   cy.get("[name='password']").type(333338),
   cy.get('class=btn-main base--clickable').click(),
   cy.url().should("contain", "/api/session")

})

     it("check page after login", ()=> {
      cy.visit("/login")
       })
       it("authorised ")
      })

     it("check a box page", ()=> {
        cy.visit("/api/session")
      cy.find('[class="txt-buttons txt txt--white"]').should('have text', 'Создать коробку')

     })
     it("create a new box", ()=> {
      cy.visit("/box/new")
      find('input[frm=text')
      it ('can add a new box name', ()=>{
         const newName="Newbox"
         cy.get("input[type=text]").type(`${newName}{enter}`)
         cy.should('have.text', newName)
      })

   })

     it("fast randomizer", ()=> {
        cy.visit("/randomizer")
        find("input[type=text]")
         })
         it("check account", ()=> {
            cy.visit("/account")

             })
      
