describe("My First Test", () => {
  it("Visits shotClock", () => {
    cy.visit("/");

    cy.get('[data-testid="startHome"]').click();
    cy.wait(500);
    cy.contains(20);
    cy.get('[data-testid="startVisitor"]').click();
    cy.wait(500);
    cy.contains(20);
    cy.contains(16);
  });
});
