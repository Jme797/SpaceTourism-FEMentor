/// <reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it("Test all homepage links", () => {
    const linksToCheck = [
      {
        name: "Destination",
        path: "/Destination/"
      },
      {
        name: "Crew",
        path: "/Crew/"
      },
      {
        name: "Technology",
        path: "/Technology/"
      },
    ]

    cy.get(".st-Home-MegaButton>a").click()
    cy.location('pathname').should('eq', '/Destination/')
    cy.go('back')

    linksToCheck.forEach(link => {
      cy.contains(link.name).click()
      cy.location('pathname').should('eq', link.path)
      cy.go('back')
    })

    linksToCheck.forEach(link => {
      cy.viewport('iphone-6')
      cy.get('[aria-label="open menu"]').click()
      cy.contains(link.name).click()
      cy.location('pathname').should('eq', link.path)
      cy.go('back')
    })

    cy.get('[aria-label="open menu"]').click()
    cy.get('[aria-label="close menu"]').click()
  })
})