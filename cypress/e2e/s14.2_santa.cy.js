describe('secretSanta is active', () => {
 it('passes', () => {
    cy.visit('')
  })
it('name SecretSanta is loaded', () => {
//   // We use the `cy.get()` command to get all elements that match the selector.
//   // Then, we use `should` to assert that there are two matched items,
//   // which are the two default items.
  cy.get('[class="txt-h3--semi txt]')
    // .should('have.text', "Как это работает?")
  cy.find('[home-page-buttons]').should('be.visible')
  // We can go even further and check that the default todos each contain
  // the correct text. We use the `first` and `last` functions
  // to get just the first and last matched elements individually,
  // and then perform an assertion with `should`.
  //  cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
  // cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
   })
})