import userLogin from "../../pages/front-end/loginPage"
const userInfo = require('../../fixtures/userInfo.js')

beforeEach(function () {
  userLogin.visitURL()
})

describe('Login', () => {
  it('Login with valid user', function() {
    userLogin.fillValidLoginInformation(userInfo.validInfo)
    userLogin.clickLoginButton()
    userLogin.validateLoginSuccessful()
  })

  it('Login with invalid email', function() {
    userLogin.fillInvalidLoginEmail(userInfo.invalidEmail)
    userLogin.clickLoginButton()
    userLogin.validateWrongEmailMessage()
  })

  it('Login with invalid password', function() {
    userLogin.fillInvalidLoginPassword(userInfo.invalidPassword)
    userLogin.clickLoginButton()
    userLogin.validateWrongPasswordMessage()
  })
})
