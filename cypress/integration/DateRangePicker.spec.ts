
describe('DateRangePicker', () => {
  it('should render', () => {
    cy.visit('/');
    cy.get('.DateRangeSelect').should('be.visible');
  });
  it('should indicate invalid state for invalid date value', () => {
    cy.visit('/');
    cy.get('[data-cy="startDateInput"]').type('01/01/0000')
    cy.get('[data-cy="startDateInput"]').find('input').invoke('attr', 'aria-invalid').should('have.string', 'false')
  })
  it('should indicate invalid state for invlid date range that is typed but will fail', () => {
    cy.visit('/');
    cy.get('[data-cy="startDateInput"]').type('01/01/2000').type('{enter}')
    cy.get('[data-cy="endDateInput"]').type('01/01/1999')
    cy.get('[data-cy="startDateInput"]').find('input').invoke('attr', 'aria-invalid').should('have.string', 'true')
    cy.get('[data-cy="endDateInput"]').find('input').invoke('attr', 'aria-invalid').should('have.string', 'true')
  })
});
