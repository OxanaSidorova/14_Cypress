
describe ("login",()=> {
beforeEach(() => {
  cy.visit("/login"),
  
   cy.get("[name='email']").type('oxana.s.sidorova@gmail.com'),
   cy.get("[name='password']").type(333338),
   cy.get('.btn-main').click(),
   cy.wait(500)
   cy.contains("Коробки").should("exist");
   
 })

      it("boxes page",()=>{
         cy.visit("/account/boxes"),
         cy.get('.toggle-menu-item--active > .txt--med')
      })
   
      it("create a new box", ()=> {
         cy.visit("/box/new"),
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
