// const { should } = require("chai")
// const { find } = require("cypress/types/lodash")

describe ("landed page",()=> {
    it("check page after login", ()=> {
    cy.visit("")
     })

     it("check a box page", ()=> {
        cy.visit("")
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
})



