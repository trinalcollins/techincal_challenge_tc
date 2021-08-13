### techincal_challenge_tc

### Completed tasks;

1. Navigating through companies browser menu
2. Get a list of companies and count
3. Capture Company Name, address, telephone and email address of the 1st, 3rd and last company on each company browser page
4. Write to testOutput directory in json format

### Outstanding tasks;

1. company information - not all companies contain the same information which means the test currently stops at Baxter because there is no telephone, if I had more time I would write a function that takes in the label e.g. "Address", "Email" etc checks if it is available and if not returns blank, then the test could continue
2. Store logo as an image file
3. Modularise functions
4. Install prettier
5. Break test spec file to be more specific - not sure how, needs more time

# Approach to the task

- Chose the tool based on experience chose Cypress, created a project repo on GH, got VSCode, installed cypress, cypress testing library, opened the project

- Challenge;

  -- Cypress testing library allows you to target the selectors based on their accessible role which is how a user would interact with the website, based on what they see and do, rather than using css selectors which if developers change structure or name e.g. class name then the tests would/could break, its more robust from a user perspective

  -- Created a test spec file and set the base url in cypress.json to the company url. Split into 3 main functional areas (which I would modularise if had more time);

  1. -- For each page of company browser - needed a function which navigated all the pages on that list e.g. A, B, C etc - focused on the links for the browse component, found them by their role and used cyp .each to loop through, grab the attribute href and then navigate to that page, .then forces cypress to run cy.get before the vist and the next function, forcing it to do things in a certain order (current project use a promise within a function which returns the promise at the end to force the order of running)

  2. -- For each of these pages navigate through all the companies on that page, select the first, third and last - create a function in the commands.js for "findCompanies" the idea was to create reusable functions and move into their own modules at the end but didnt have time

  - var's - dynamically created with function, need to be available outside for cy.write to file
  - $list would be better as $listItem/link as always = 1
  - count - need to know the last one which is always different
  - Another for loop with .each, run another function based on the index (0) which is first, (2) 3rd and last based on length -1 due to it starting at 0. Function visits each link (company)
  - On page locate company Name and assign it the var and grab the text, same with address and telephone
  - Final function write the text in the var's to the json file

  -- Problem - each company page contained different data

  -- Preferred approach - for loop which grabs all the company information based on title and value from p, stored into an array object, and where null store null on the json. This approach would allow the json to be a consistent structure with the same data which is fused could be compared based on a set template

  -- Problem - I couldnt grab the div and the p directly as all have the same class name. Ended up grabbing each div by its title name and navigating to the p which is next in dom structure

  -- Tried storing the Company DetailsCol into an alias or saved to a name to reuse for all the contact details and then navigate to the contains, couldnt get that to work

  3. -- Capture the contact details for the company data and output into a json file

  -- Not done this before so output to the newly created testOutput directory and created file based on customer name and grabbed all the var's and stored them

  -- Stuck at Baxter because there is no telephone hence being able to capture all the values and returning null and continuing function if null - no time

# Things that went well

-- I now know where my current skill level lies and eager to learn more

# Things that didnt go so well

-- reusing var's within functions
-- Transfering between jquery and cypress
-- Navigating the dom for cusomter details as was either either getting all the p's or all the div's
-- Loop for grabbing customer details needs to be created differently
-- Learn about cy.write to file - only used the fixture files to grab data for logging into application

# What I would do differently

-- company details to capture all info, including null values and output the same template structure into json for all companies
-- Modularise - move the functions into 3 respective areas;

1. navigate top menu
2. Navigate company list
3. Get value from company details based on parameter
4. Logo not complete -

# Approach in real life

-- Involved in AC's development
-- Once dev finishes jest test discuss these with dev to understand scope and coverage of the jest tests
-- Pair programme
-- Agree what the tests will do ensuring the tests that give us the most coverage for the least amount of effort due to tight time constraints, agree the modular structure based on how React has been structured, discuss if any node task would be needed to create and clear down data (devs write these), write the tests with dev support with more technical/javascripty functions
-- Manually test the new feature/write cypress tests at the same time
--
