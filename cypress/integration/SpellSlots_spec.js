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

  it('Should display an intro message', () => {
    cy.get('.slots-intro').should('have.text', 'First, please enter your maximum Spell Slots per Spell Level')
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
})
