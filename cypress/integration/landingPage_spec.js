describe('SpellSlots', () => {
  beforeEach(() => {
    cy.intercept('https://www.dnd5eapi.co/api/spells/', {
      "count": 5,
      "results": [
      {
      "index": "acid-arrow",
      "name": "Acid Arrow",
      "url": "/api/spells/acid-arrow"
      },
      {
      "index": "acid-splash",
      "name": "Acid Splash",
      "url": "/api/spells/acid-splash"
      },
      {
      "index": "aid",
      "name": "Aid",
      "url": "/api/spells/aid"
      },
      {
      "index": "alarm",
      "name": "Alarm",
      "url": "/api/spells/alarm"
      },
      {
      "index": "alter-self",
      "name": "Alter Self",
      "url": "/api/spells/alter-self"
      }
  ]})
      .visit('http://localhost:3000')
  })
  it('Should display the website header/title', () => {
    cy.get('header').get('h1').should('have.text', 'Spell Spotter')
  })

  it('Should display an intro message', () => {
    cy.get('.slots-intro').should('have.text', 'Enter your maximum Spell Slots per Spell Level')
  })

  it('Should display labels + inputs for each spell level', () => {
    cy.get('label').should('have.text', '1st2nd3rd4th5th6th7th8th9th')
    cy.get('form input[name="level1"]')
    cy.get('form input[name="level2"]')
    cy.get('form input[name="level3"]')
    cy.get('form input[name="level4"]')
    cy.get('form input[name="level5"]')
    cy.get('form input[name="level6"]')
    cy.get('form input[name="level7"]')
    cy.get('form input[name="level8"]')
    cy.get('form input[name="level9"]')
  })

  it('Should display a prompt with a link for how to determine spell slots', () => {
    cy.get('.stuck-prompt').should('have.text', 'Not sure? Follow this link, click on your class, and find your level within the table.')
    cy.get('.stuck-link').should('have.text', 'this link')
  })

  it('Should have a Link for submitting spells which takes user to new page', () => {
    cy.get('.submit-spells').click()
    cy.url().should('include', '/spellbook')
  })
})

describe('Loading Spells', () => {
  it('Should render a loading message while waiting for fetched data for spells', () => {
    cy.intercept('https://www.dnd5eapi.co/api/spells/', [])
      .visit('http://localhost:3000')
      .get('.loading')
      .should('have.text', "Loading...")
  })
})

describe('Spells Error Handling', () => {
  it('Should render an error message when there is an error with fetching data for spells', () => {
    cy.intercept('https://www.dnd5eapi.co/api/spells', {statusCode: 404})
      .visit('http://localhost:3000/')
      .get('.error-message')
      .should('have.text', 'Could not retrieve spells! The Head Wizard probably found the ale again.')
  })
})

describe('Bad URL Handling', () => {
  it('Should display an error message upon a bad URL', () => {
    cy.visit('http://localhost:3000/badurl')
      .get('.not-found').should('have.text', 'URL Not Found - Click button to return')
  })

  it('Should have a button that returns to main page when clicked', () => {
    cy.visit('http://localhost:3000/badurl')
      .get('.return-home').should('have.text', 'Return Home').click()
      .url().should('eq', 'http://localhost:3000/')
  })
})