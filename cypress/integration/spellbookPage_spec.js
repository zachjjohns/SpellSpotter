describe('SpellSelect', () => {
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
      .visit('http://localhost:3000/spellbook')
  })

  it('should display a heading for Todays Spell Ammo', () => {
    cy.get('.todays-ammo').should('have.text', 'Today\'s Spell Ammo by Level')
  })

  it('should display a note about cantrips', () => {
    cy.get('.cantrips').should('have.text', 'Remember: Cantrips (level 0 spells) are unlimited')
  })

  
})