
describe ("check links",()=> {
    it('has access to clipboard', { browser: 'electron' }, () => {
    it ("boxes",()=>{
        Cypress.config("baseUrl", "https://staging.lpitko.ru/")

        cy.visit("/login"),
        cy.get("[class='txt--med txt-Коробки-txt']"),
        cy.get("[class='txt-buttons txt txt--white-Создать коробку-']"),
        cy.get("[class='txt-buttons txt txt--orange-Быстрая жеребьевка-']"),
        cy.get("[class='class='base--clickable header-item header-item--right']")

    })
    //    beforeEach(() => {
})
})