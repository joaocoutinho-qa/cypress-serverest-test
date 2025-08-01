class userLogin {
 
visitURL () {
    cy.visit('https://front.serverest.dev/login')
}

fillValidLoginInformation (user) {
    cy.get('[data-testid="email"]').type(user.email)
    cy.get('[data-testid="senha"]').type(user.password)
}

fillInvalidLoginEmail() {
    cy.get('[data-testid="email"]').type('fulanoqa.com')
    cy.get('[data-testid="senha"]').type('teste')
}

fillInvalidLoginPassword() {
    cy.get('[data-testid="email"]').type('fulano@qa.com')
    cy.get('[data-testid="senha"]').type('invalidpsw')
}

clickLoginButton () {
    cy.get('[data-testid="entrar"]').click()
}
validateLoginSuccessful () {
    cy.url().should('include', '/home')
    cy.get('h1').should('contain','Bem Vindo')
}
validateWrongEmailMessage () {
    cy.url().should('include', '/login')
    //validar pop up de email invalido
}
validateWrongPasswordMessage () {
    cy.url().should('include', '/login')
    cy.get('.alert > :nth-child(2)').should('contain','Email e/ou senha inválidos')
}
}

export default new userLogin()