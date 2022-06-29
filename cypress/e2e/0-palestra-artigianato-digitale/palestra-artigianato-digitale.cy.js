context('Palestra artigianato digitale', () => {

  it('Primo test', () => {

    cy.origin('https://slope.it', () => {

      cy.visit('/');

      cy.get('main')
        .should('contain', 'Slope')
        .should('contain', 'Software gestionale hotel');

      cy.get('header a.raven-button').last().click(); // Click on "Richiedi demo"
    })
  });
})
