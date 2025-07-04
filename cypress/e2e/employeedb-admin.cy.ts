describe('Accessing the Employee Management page with admin credentials', () => {
  it('Signs in as admin and navigates to Employee Database section', () => {
    cy.visit('/signin');
    cy.get('input[id="email"]').should('not.be.disabled').type('admin@gmail.com');
    cy.get('input[id="password"]').should('not.be.disabled').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.url({ timeout: 60000 }).should('include', '/redirect');
    cy.url({ timeout: 60000 }).should('include', '/dashboard');

    cy.contains('button', 'Employee').should('be.visible').click();
    cy.url({ timeout: 60000 }).should('include', '/employeedatabase');
  });
});
