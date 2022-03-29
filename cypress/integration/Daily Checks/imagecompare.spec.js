Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

beforeEach(() => {
  cy.clearLocalStorage()
  cy.clearCookies()
})

describe('Visuals', () => {
    it('Homepage compare', () => {
      cy.visit('https://www.unipro.io')
      cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
      cy.compareSnapshot('Home Page', {
        capture: 'fullPage',
        errorThreshold: 0.1
      });

    })

    

    it('Insights page compare', () => {
      cy.visit('https://insight.unipro.io')
      cy.compareSnapshot('insights-page', {
        capture: 'fullPage',
        errorThreshold: 0.1
      });
    })


    it('Resources page compare', () => {
      cy.visit('https://insight.unipro.io/resources')
      cy.compareSnapshot('resources-page', {
        capture: 'fullPage',
        errorThreshold: 0.1
      });

    })


    it('About page compare', () => {
      cy.visit('https://www.unipro.io/about')
      cy.compareSnapshot('about-page', {
        capture: 'fullPage',
        errorThreshold: 0.1
      });

    })


    it('News page compare', () => {
      cy.visit('https://insight.unipro.io/news')
      cy.compareSnapshot('news-page', {
        capture: 'fullPage',
        errorThreshold: 0.1
      });

    })


    it('Careers UK compare', () => {
      cy.visit('https://www.unipro.io/careers')
      cy.compareSnapshot('careersuk-page', {
        capture: 'fullPage',
        errorThreshold: 0.1
      });

    })


    it('Careers Mauritius compare', () => {
      cy.visit('https://www.unipro.io/careers-mauritius')
      cy.compareSnapshot('careersmauritius-page', {
        capture: 'fullPage',
        errorThreshold: 0.1
      });
    })


    it('Digital transformation page compare', () => {
      cy.visit('https://www.unipro.io/digital-transformation')
      cy.compareSnapshot('digitaltransformation-page', {
        capture: 'fullPage',
        errorThreshold: 0.1
      });
    })


    it('Performance optimisation page compare', () => {
      cy.visit('https://www.unipro.io/performance-optimisation')
      cy.compareSnapshot('performanceoptimisation-page', {
        capture: 'fullPage',
        errorThreshold: 0.1
      });

    })


    it('Application development page compare', () => {
      cy.visit('https://www.unipro.io/application-development')
      cy.compareSnapshot('applicationdevelopment-page', {
        capture: 'fullPage',
        errorThreshold: 0.1
      });

    })


    it('Low Code page compare', () => {
      cy.visit('https://www.unipro.io/low-code')
      cy.compareSnapshot('lowcode-page', {
        capture: 'fullPage',
        errorThreshold: 0.1
      });

    })


    it('Traditional coding page compare', () => {
      cy.visit('https://www.unipro.io/traditional-coding')
      cy.compareSnapshot('traditionalcoding-page', {
        capture: 'fullPage',
        errorThreshold: 0.1
      });

    })


    it('Team augmentation page compare', () => {
      cy.visit('https://www.unipro.io/team-augmentation-and-training')
      cy.compareSnapshot('teamaugmentation-page', {
        capture: 'fullPage',
        errorThreshold: 0.1
      });

    })


    it('How we work page compare', () => {
      cy.visit('https://www.unipro.io/how-we-work')
      cy.compareSnapshot('howwework-page', {
        capture: 'fullPage',
        errorThreshold: 0.1
      });
    })


    it('Our work page compare', () => {
      cy.visit('https://www.unipro.io/our-work')
      cy.compareSnapshot('ourwork-page', {
        capture: 'fullPage',
        errorThreshold: 0.1
      });
    })


    it('Contact page compare', () => {
      cy.visit('https://www.unipro.io/contact')
      cy.compareSnapshot('contactpage-page', {
        capture: 'fullPage',
        errorThreshold: 0.1
      });
    })


    it('Services page compare', () => {
      cy.visit('https://www.unipro.io/services')
      cy.compareSnapshot('services-page', {
        capture: 'fullPage',
        errorThreshold: 0.1
      });
    })




  })