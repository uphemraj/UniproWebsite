Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

//https://www.unipro.io/
it('load Home page',() => {
    cy.visit('https://www.unipro.io/', {timeout: 40000});
cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
})
