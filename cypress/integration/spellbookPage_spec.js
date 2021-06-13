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

  it('should display levels for each spell slot', () => {
    cy.get('.ammo-label').should('have.text', '1st2nd3rd4th5th6th7th8th9th')
  })

  it('should display numbers representing spell slot state', () => {
    cy.get('.ammo-p').should('have.text', '000000000')
  })

  it('should have Cast Spell buttons that reduce current spells by 1 when clicked without going below 0', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[name="level1"]').type(4)
    cy.get('.submit-spells').click()
    cy.get('.cast-spell').first().click()
    cy.get('.ammo-p').first().should('have.text', 3)
    cy.get('.cast-spell').first().click()
    cy.get('.ammo-p').first().should('have.text', 2)
    cy.get('.cast-spell').first().click()
    cy.get('.ammo-p').first().should('have.text', 1)
    cy.get('.cast-spell').first().click()
    cy.get('.ammo-p').first().should('have.text', 0)
    cy.get('.cast-spell').first().click()
    cy.get('.ammo-p').first().should('have.text', 0)
  })

  it('should display a heading stating Add Your Spells Here!', () => {
    cy.get('.your-spellbook').should('have.text', 'Add Your Spells Here!')
  })

  it('should display a dropdown containing a list of spell names to add', () => {
    cy.get('.spells-dropdown').should('have.text', 'Select Your Spells')
  })

  it('should display a note about containing only spells from original game', () => {
    cy.get('.spell-note').should('have.text', 'Note: Only contains spells from original game (no expansions)')
  })

  it('should render a spell card after clicking the Add to Spell Book button', () => {
    cy.get('.spells-dropdown').select('Acid Arrow')
    cy.get('.add-spell-button').click()
    cy.get('.spell-card').get('.spell-name').should('have.text', 'Acid Arrow')
    cy.get('.spell-level').should('have.text', 'Level 2')
    cy.get('.spell-range').should('have.text', 'Range: 90 feet')
    cy.get('.spell-castime').should('have.text', 'Cast Time: 1 action')
    cy.get('.spell-desc').should('have.text', 'A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.')
    cy.get('.remove-spell').should('have.text', 'Remove Spell')
  })

  it('should no longer render a card after clicking its Remove Spell button', () => {
    cy.get('.spells-dropdown').select('Acid Arrow')
    cy.get('.add-spell-button').click()
    cy.get('.remove-spell').click()
    cy.get('.spell-card').should('not.exist')
  })

  it('should have a Redo Spell Slots link/button that returns to main page', () => {
    cy.get('.redo').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})