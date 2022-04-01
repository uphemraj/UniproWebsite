
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      
            /*
      beforeEach(() => {
        cy.clearLocalStorage()
        cy.clearCookies()
      })
      */

      describe('Visuals', () => {
      it('Homepage compare', () => {
          cy.visit('https://www.unipro.io')
          cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
          cy.wait(5000)
          cy.get('footer').scrollIntoView({ duration: 3000 })
          cy.wait(10000)
          // Take a snapshot for visual diffing
          cy.percySnapshot('homepage');
        })



        it('Insights page compare', () => {
          cy.visit('https://insight.unipro.io')
          cy.wait(5000)
          //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
          cy.get('footer').scrollIntoView({ duration: 3000 })
          cy.wait(10000)
          // Take a snapshot for visual diffing
          cy.percySnapshot('insights page');
        })


        it('Resources page compare', () => {
          cy.visit('https://insight.unipro.io/resources')
          cy.wait(5000)
          //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
          cy.get('footer').scrollIntoView({ duration: 3000 })
          cy.wait(10000)
          // Take a snapshot for visual diffing
          cy.percySnapshot('resources page');
        })


        it('About page compare', () => {
          cy.visit('https://www.unipro.io/about')
          cy.wait(5000)
          //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
          cy.get('footer').scrollIntoView({ duration: 3000 })
          cy.wait(10000)
          // Take a snapshot for visual diffing
          cy.percySnapshot('about');
        })


        it('News page compare', () => {
          cy.visit('https://insight.unipro.io/news')
          cy.wait(5000)
          //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
          cy.get('footer').scrollIntoView({ duration: 3000 })
          cy.wait(10000)
          // Take a snapshot for visual diffing
          cy.percySnapshot('news page');
        })


        it('Careers UK compare', () => {
          cy.visit('https://www.unipro.io/careers')
          cy.wait(5000)
          //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
          cy.get('footer').scrollIntoView({ duration: 3000 })
          cy.wait(10000)
          // Take a snapshot for visual diffing
          cy.percySnapshot('careers page');
        })


        it('Careers Mauritius compare', () => {
          cy.visit('https://www.unipro.io/careers-mauritius')
          cy.wait(5000)
          //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
          cy.get('footer').scrollIntoView({ duration: 3000 })
          cy.wait(10000)
          // Take a snapshot for visual diffing
          cy.percySnapshot('careers mauritius page');
        })


        it('Digital transformation page compare', () => {
          cy.visit('https://www.unipro.io/digital-transformation')
          cy.wait(5000)
          //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
          cy.get('footer').scrollIntoView({ duration: 3000 })
          cy.wait(10000)
          // Take a snapshot for visual diffing
          cy.percySnapshot('digital transformation page');
        })


        it('Performance optimisation page compare', () => {
          cy.visit('https://www.unipro.io/performance-optimisation')
          cy.wait(5000)
          //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
          cy.get('footer').scrollIntoView({ duration: 3000 })
          cy.wait(10000)
          // Take a snapshot for visual diffing
          cy.percySnapshot('performance optimisation page');
        })


        it('Application development page compare', () => {
          cy.visit('https://www.unipro.io/application-development')
          cy.wait(5000)
          //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
          cy.get('footer').scrollIntoView({ duration: 3000 })
          cy.wait(10000)
          // Take a snapshot for visual diffing
          cy.percySnapshot('application development page');
        })


        it('Low Code page compare', () => {
          cy.visit('https://www.unipro.io/low-code')
          cy.wait(5000)
          //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
          cy.get('footer').scrollIntoView({ duration: 3000 })
          cy.wait(10000)
          // Take a snapshot for visual diffing
          cy.percySnapshot('low code page');
        })


        it('Traditional coding page compare', () => {
          cy.visit('https://www.unipro.io/traditional-coding')
          cy.wait(5000)
          //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
          cy.get('footer').scrollIntoView({ duration: 3000 })
          cy.wait(10000)
          // Take a snapshot for visual diffing
          cy.percySnapshot('traditional coding page');
        })


        it('Team augmentation page compare', () => {
          cy.visit('https://www.unipro.io/team-augmentation-and-training')
          cy.wait(5000)
          //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
          cy.get('footer').scrollIntoView({ duration: 3000 })
          cy.wait(10000)
          // Take a snapshot for visual diffing
          cy.percySnapshot('team augmentation page');
        })


        it('How we work page compare', () => {
          cy.visit('https://www.unipro.io/how-we-work')
          cy.wait(5000)
          //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()

          cy.get('footer').scrollIntoView({ duration: 3000 })
          cy.wait(10000)
          // Take a snapshot for visual diffing
          cy.percySnapshot('how we work page');
        })


        it('Our work page compare', () => {
          cy.visit('https://www.unipro.io/our-work')
          cy.wait(5000)
          //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
          cy.get('footer').scrollIntoView({ duration: 3000 })
          cy.wait(10000)
          // Take a snapshot for visual diffing
          cy.percySnapshot('our work page');
        })


        it('Contact page compare', () => {
          cy.visit('https://www.unipro.io/contact')
          cy.wait(5000)
          //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
          cy.get('footer').scrollIntoView({ duration: 3000 })
          cy.wait(10000)
          // Take a snapshot for visual diffing
          cy.percySnapshot('contact page');
        })


        it('Services page compare', () => {
          cy.visit('https://www.unipro.io/services')
          cy.wait(5000)
         //cy.xpath('/html/body/div[3]/div/div/div/div[3]/div[2]/button').should('be.visible').click()
         cy.get('footer').scrollIntoView({ duration: 3000 })
         cy.wait(10000)
          // Take a snapshot for visual diffing
          cy.percySnapshot('services page');

        })


    
    
      })