// https://on.cypress.io/api

describe('Test de Integracion', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should fill and submit the form, then display the data in Receptor', () => {
    // Fill the form
    cy.get('#nombre').type('John')
    cy.get('#apellido').type('Doe')
    cy.get('#email').type('john.doe@example.com')
    
    // Submit the form
    cy.get('form').submit()
    
    // Check the displayed data in Receptor
    cy.get('#Receptor').within(() => {
      cy.contains('Nombre: John')
      cy.contains('Apellido: Doe')
      cy.contains('Email: john.doe@example.com')
    })
  })
})
