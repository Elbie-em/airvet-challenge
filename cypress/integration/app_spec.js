/// <reference types="cypress" />

describe('Sign Up', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Adds person to course', () => {

    cy.get('input[name="name"]')
      .click()
      .type('Some Name')
      .should('have.value', 'Some Name')

    cy.get('input[name="email"]')
      .click()
      .type('some@email.com')

    cy.get('select[name="department"]')
      .select('core')
      .should('have.value', 'core')

    cy.get('select[name="course"]')
      .select('git-it')
      .should('have.value', 'git-it')

    cy.get('input[type="submit"]')
      .click()

    cy.contains('li','Some Name - some@email.com - core - git-it')
  })
})
