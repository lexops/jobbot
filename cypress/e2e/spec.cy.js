/// <reference types="Cypress" />

const baseUrl = 'https://www.linkedin.com/jobs/search'
const interval = '3600'
const distance = '50'
const keywords = '%22devops%22'

describe('LinkedIn Login', () => {
  it('access linkeind and tries to login', () => {

    cy.setCookie('li_theme', 'dark')
    cy.setCookie('li_at', process.env.LINKEDIN_TOKEN)
    cy.visit(`${baseUrl}/
      ?currentJobId=3966869566
      &distance=${distance}
      &f_TPR=r${interval}
      &geoId=106057199
      &keywords=${keywords}
      &origin=JOB_SEARCH_PAGE_JOB_FILTER
      &refresh=true`)
  })
})
