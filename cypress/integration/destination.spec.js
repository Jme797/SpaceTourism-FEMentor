/// <reference types="cypress"/>

context("Destination Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/Destination/");
  })

  it("Test all destination page links", () => {
    const linksToCheck = [
      {
        name: "Home",
        path: "/"
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

  it("Tests planet tabs", () => {
    let tabItems = ['Moon', 'Mars', 'Europa', 'Titan'];
    tabItems.forEach(item => {
      cy.get('[data-test-id="tabs"]').contains(item).click()
      cy.get('[data-test-id="planet-name"]').should(element => {
        expect(element.text()).to.eq(item)
      }
      );
    })
  })
})