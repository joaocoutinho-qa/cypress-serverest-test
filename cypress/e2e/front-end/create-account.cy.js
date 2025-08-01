import createAccount from "../../pages/front-end/createaccountPage"
const userInfo = require('../../fixtures/userInfo.js')

beforeEach(function () {
  createAccount.visitURL()
})

describe('Create account', () => {
  it('should create a valid account', function() {
    createAccount.fillValidCreateAccountInfo(userInfo.validCreateAccountInfo)
    createAccount.checkBoxAndClickToCreate()
    cy.contains('Cadastro realizado com sucesso').should('be.visible')
  })

  it('should not create an account with invalid name', function() {
    createAccount.fillInvalidNameCreateAccountInfo(userInfo.invalidNameCreateAccountInfo)
    createAccount.checkBoxAndClickToCreate()
    createAccount.validateWrongNameMessage()
  })
  it('should not create an account with invalid email', function() {
    createAccount.fillInvalidEmailCreateAccountInfo(userInfo.invalidEmailCreateAccountInfo)
    createAccount.checkBoxAndClickToCreate()
    createAccount.validateWrongEmailMessage()
  })
  it('should not create an account with invalid password', function() {
    createAccount.fillInvalidPswCreateAccountInfo(userInfo.invalidPswCreateAccountInfo)
    createAccount.checkBoxAndClickToCreate()
    createAccount.validateWrongPswMessage()
  })
})