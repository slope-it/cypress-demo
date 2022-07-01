context('Palestra artigianato digitale', () => {

  it('Primo test', () => {

    cy.origin('https://booking.staging.slope.it/24ee90d9-2432-4d0d-aeec-8ce845fa18da', () => {

      cy.visit('/');

      cy.get('.banner-box')
        .should('contain', 'Welcome to Relais Villasole');

      cy.wait(1000);

      // accetto i cookie
      cy.get('#accept-explicit-cookie-policy').click();

      cy.wait(1000);

      // apro il modale cookie policy
      cy.get('a[data-modal-content="cookie-policies-modal"]').first().click();

      cy.wait(1000);

      // chiudo il modale
      cy.get('.slope-modal-close').click();

      cy.wait(1000);

      cy.get('a[data-lodging-id="bdc93283-2cc0-4b70-a590-3d941d7b7bda"]').click();

      cy.wait(1000);

      cy.get('a[data-rate-or-promotion-id="815dbc7d-9927-43cb-a82d-372ace50e16b"]').click();



      //cy.get('header a.raven-button').last().click(); // Click on "Richiedi demo"
    })
  });
})
