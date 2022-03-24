describe('Visuals', () => {
    it('Homepage compare', () => {
      cy.visit('https://www.unipro.io')
      cy.compareSnapshot('home-page')
    })

    it('Insights page compare', () => {
      cy.visit('https://insight.unipro.io')
      cy.compareSnapshot('insights-page')
    })


    it('Resources page compare', () => {
      cy.visit('https://insight.unipro.io/resources')
      cy.compareSnapshot('resources-page')
    })


    it('About page compare', () => {
      cy.visit('https://www.unipro.io/about')
      cy.compareSnapshot('about-page')
    })


    it('News page compare', () => {
      cy.visit('https://insight.unipro.io/news')
      cy.compareSnapshot('news-page')
    })


    it('Careers UK compare', () => {
      cy.visit('https://www.unipro.io/careers')
      cy.compareSnapshot('careersuk-page')
    })


    it('Careers Mauritius compare', () => {
      cy.visit('https://www.unipro.io/careers-mauritius')
      cy.compareSnapshot('careersmauritius-page')
    })


    it('Digital transformation page compare', () => {
      cy.visit('https://www.unipro.io/digital-transformation')
      cy.compareSnapshot('digitaltransformation-page')
    })


    it('Performance optimisation page compare', () => {
      cy.visit('https://www.unipro.io/performance-optimisation')
      cy.compareSnapshot('performanceoptimisation-page')
    })


    it('Application development page compare', () => {
      cy.visit('https://www.unipro.io/application-development')
      cy.compareSnapshot('applicationdevelopment-page')
    })


    it('Low Code page compare', () => {
      cy.visit('https://www.unipro.io/low-code')
      cy.compareSnapshot('lowcode-page')
    })


    it('Traditional coding page compare', () => {
      cy.visit('https://www.unipro.io/traditional-coding')
      cy.compareSnapshot('traditionalcoding-page')
    })


    it('Team augmentation page compare', () => {
      cy.visit('https://www.unipro.io/team-augmentation-and-training')
      cy.compareSnapshot('teamaugmentation-page')
    })


    it('How we work page compare', () => {
      cy.visit('https://www.unipro.io/how-we-work')
      cy.compareSnapshot('howwework-page')
    })


    it('Our work page compare', () => {
      cy.visit('https://www.unipro.io/our-work')
      cy.compareSnapshot('ourwork-page')
    })


    it('Contact page compare', () => {
      cy.visit('https://www.unipro.io/contact')
      cy.compareSnapshot('contactpage-page')
    })


    it('Services page compare', () => {
      cy.visit('https://www.unipro.io/services')
      cy.compareSnapshot('services-page')
    })









  })