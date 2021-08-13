import '@testing-library/cypress/add-commands';

Cypress.Commands.add("findCompanies", function () {
  var companyName;
  var count;
  var customerDetails = [];

  // Captures the length of the list of companies on the page
  cy.get('[class*="browse-body"]').findAllByRole('link').then(function ($count) {
    count = $count.length});

  // Get a list of companies
  cy.get('[class*="browse-body"]').findAllByRole('link').each(($list, index) => {
    // Capture details about the first, the third and the last company on the page
    if (index === 0 || index === 2 || index === count - 1) {

      // Click on the company 
      cy.get($list).invoke("attr", "href").then(href => {
        // navigate to the company page
        cy.visit(href); 

      // The details must include the company name, the logo and all contact information. 
        cy.findAllByRole("heading", {level: 1}).then(($heading) => {
          companyName = $heading.text()
          cy.log("company name = " + companyName)
        });
        
        let title;
        let value;
          cy.get('.gfdCompanyDetailsCol div').each(($details, index) => {
            if (index % 2 == 1) {
            value = $details.text()
            cy.log(title, value)
            customerDetails.push({Title: title, Value: value.trim()});

            } else {
              title = $details.text()
            }
        }).then (() => {
      
        // Add the company details to an internal data structure. Include the filename of the image file
        // Output the internal data structure of the company details as a JSON or XML file. 
        cy.writeFile( "cypress/testOutput/" + companyName + ".json", {name: companyName, customerDetails } 
        );
        });
      });
    };
  });
});
    
  


