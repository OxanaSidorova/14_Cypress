describe ("registration",()=> {
    const selectorName= (':nth-child(3) > .frm')
    beforeEach(() => {
      cy.visit("/register")
    })
    it("name and email letters with correct email", ()=> {
    
       cy.userName(selectorName,'Mash'),
       cy.get('[name="email"]').type('mash@mail.ru'),
       cy.get('.btn-main').click({force:true}), 
       cy.request("/api/login?redirect=%2F")
      cy.get("[class='picture-notice__title txt-h3--semi txt']").should ("have.text", "Письмо отправлено!")
     })

     it("name with numbers with correct email", ()=> {
    
       cy.userName(selectorName,'123456'),
      //  cy.get("[name='email']").type('oxana.s.sidorova@gmail.com'),
       cy.get('[name="email"]').type('masha@mail.ru'),
       cy.get('.btn-main').click(), 
       cy.request("/api/login?redirect=%2F")
      cy.get("[class='picture-notice__title txt-h3--semi txt']").should ("have.text", "Письмо отправлено!")
     })

     it("name wirh special cymbols and correct email", ()=> {
    
        cy.userName(selectorName,'###Masha'),
       //  cy.get("[name='email']").type('oxana.s.sidorova@gmail.com'),
        cy.get('[name="email"]').type('masha@mail.ru'),
        cy.get('.btn-main').click(), 
        cy.request("/api/login?redirect=%2F")
       cy.get("[class='picture-notice__title txt-h3--semi txt']").should ("have.text", "Письмо отправлено!")
      })
})
