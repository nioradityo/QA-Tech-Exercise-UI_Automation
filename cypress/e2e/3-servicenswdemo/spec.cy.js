import searchsuburb from "../../support/pageobject/searchsuburb" 
const searchinputan = require('../../fixtures/search.json')
describe('Search', () => {
  const Search = new searchsuburb()
  it('Sydney 2000', () => {
    cy.visit('https://www.service.nsw.gov.au/')
    cy.get('#homeautosuggestXQd-xtrTEWs > .form__text').type('Apply for a number plate')
    cy.get('[data-personalisation-type="default"] > .page-hero > .container > .page-hero__title > .form--hero-search-group > .form__actions > .button').click()
    cy.get('#page-title').should('contain', 'Search')
    cy.get('.MobileButton__menu-Zf6a9LYPkd').click()
    cy.get('.MobileNav__list-FRBlsRWCmw > :nth-child(4) > .NavLink__link-M-HSy9SYcc').click()
    Search.inputlocation(searchinputan.lokasi1)
    //cy.get('#locatorTextSearch').type('Sydney 2000')
    Search.clicksearchbutton()
    //cy.get('.form__actions > .button').click()
    Search.clicksearchfilter()
    //cy.get('[value="type:store"]').click()
    cy.get(':nth-child(6) > .location__title').should('contain','Marrickville Service Centre')
  })
  it('Sydney Domestic Airport 2020', () => {
    cy.visit('https://www.service.nsw.gov.au/')
    cy.get('#homeautosuggestXQd-xtrTEWs > .form__text').type('Apply for a number plate')
    cy.get('[data-personalisation-type="default"] > .page-hero > .container > .page-hero__title > .form--hero-search-group > .form__actions > .button').click()
    cy.get('#page-title').should('contain', 'Search')
    cy.get('.MobileButton__menu-Zf6a9LYPkd').click()
    cy.get('.MobileNav__list-FRBlsRWCmw > :nth-child(4) > .NavLink__link-M-HSy9SYcc').click()
    Search.inputlocation(searchinputan.lokasi2)
    //cy.get('#locatorTextSearch').type('Sydney Domestic Airport 2020')
    Search.clicksearchbutton()
    //cy.get('.form__actions > .button').click()
    Search.clicksearchfilter()
    //cy.get('[value="type:store"]').click()
    cy.get(':nth-child(5) > .location__title').should('contain', 'Rockdale Service Centre')
})
})