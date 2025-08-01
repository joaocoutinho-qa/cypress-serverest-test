class createAccount {

visitURL () {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
}

fillValidCreateAccountInfo (user) {
    cy.get('[data-testid="nome"]').type(user.name)
    cy.get('[data-testid="email"]').type(user.email)
    cy.get('[data-testid="password"]').type(user.password)
}
fillInvalidNameCreateAccountInfo (user) {
    cy.get('[data-testid="nome"]').clear()
    cy.get('[data-testid="email"]').type(user.email)
    cy.get('[data-testid="password"]').type(user.password)
}
fillInvalidEmailCreateAccountInfo (user) {
    cy.get('[data-testid="nome"]').type(user.name)
    cy.get('[data-testid="email"]').type(user.email)
    cy.get('[data-testid="password"]').type(user.password)
}
fillInvalidPswCreateAccountInfo (user) {
    cy.get('[data-testid="nome"]').type(user.name)
    cy.get('[data-testid="email"]').type(user.email)
    cy.get('[data-testid="password"]').clear()
}

checkBoxAndClickToCreate (){
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrar"]').click()
}

validateCreateAccountSuccesful(){
    cy.contains('Cadastro realizado com sucesso').should('be.visible')
}

validateWrongNameMessage(){
    cy.get('.alert > :nth-child(2)').should('contain','Nome é obrigatório')
    cy.url().should('include','/cadastrarusuarios')
}

validateWrongEmailMessage(){
    cy.url().should('include','/cadastrarusuarios')
}

validateWrongPswMessage(){
    cy.url().should('include','/cadastrarusuarios')
    cy.get('.alert > :nth-child(2)').should('contain','Password é obrigatório')
}

}
export default new createAccount()