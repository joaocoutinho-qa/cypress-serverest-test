class listProducts {
  visitURL() {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('fulano@qa.com')
    cy.get('[data-testid="senha"]').type('teste')
    cy.get('[data-testid="entrar"]').click()
    cy.url().should('include', '/admin')
    cy.visit('https://front.serverest.dev/admin/listarprodutos')
  }

  getProductsListTable(){
    return cy.get('table')
  }

  validateTabletHeader(){
    cy.contains('th', 'Nome')
    cy.contains('th', 'Preço')
    cy.contains('th', 'Descrição')
    cy.contains('th', 'Quantidade')
  }

  getProductsList() {
    return cy.get('table tbody tr',{timeout: 10000}).then($rows => {
      const nomes = []

      $rows.each((_, row) => {
        const nome = Cypress.$(row).find('td').eq(0).text().trim()
        nomes.push(nome)
      })

      return nomes
    })
  }

  validateProductsList(nomes) {
    expect(nomes.length).to.be.greaterThan(0)
    expect(nomes).to.include('Samsung 60 polegadas')
  }

}

export default new listProducts()