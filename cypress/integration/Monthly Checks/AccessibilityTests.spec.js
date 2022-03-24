// /<reference types="cypress" />
describe('Page accessibility tests', () => {
    beforeEach(() => {
      cy.visit('https://www.unipro.io/');
      cy.injectAxe();
    });
    
    it('Should have no accessibility violations',() => {
      cy.checkA11y();
    });
  });