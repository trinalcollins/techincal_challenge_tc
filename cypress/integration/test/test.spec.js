describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/emc/browse-companies')
  })

  it.only('As a user navigate through the companies browser capturing contact details about the 1st, the 3rd and the last company in the list', () => {
    
    // accept cookies
    cy.findByRole('button', {name:"Accept All Cookies"}).click();
    
    // Verify page heading is displayed
    cy.findByRole('heading', {name: /Companies beginning with/i})
    
    // Navigating through companies browser menu
    cy.get('.browse').findAllByRole('link')
      .each(($link) => {
    
        cy.log($link)
        cy.get($link).invoke("attr", "href").then(href => {
          cy.visit(href)
    

          // Extract information about specific companies
          cy.findCompanies()
        })   
      });
  });

    // Development purpose only
    it('Dev Harness first company', () => {
    
      // accept cookies
      cy.findByRole('button', {name:"Accept All Cookies"}).click();
      
      // Verify page heading is displayed
      cy.findByRole('heading', {name: /Companies beginning with/i})
      
      // Capture details about the first, the third and the last company on the page
      cy.findCompanies()
    });
  });

//@todo - Store the logo as an image in a folder