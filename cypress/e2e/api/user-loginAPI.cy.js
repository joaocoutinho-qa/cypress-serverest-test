import userAuthAPI from "../../pages/api/authPage"

describe('Test user login request', () => {
  it('should validate a valid existing user', () => {
    userAuthAPI.requestValidLogin().then((res) => {
      userAuthAPI.validateValidResponse(res)
    })
  })

  it('should validate a no existing user', () => {
    userAuthAPI.requestNoExistingUserLogin().then((res) => {
      userAuthAPI.invalidNoExistingUserResponse(res)
    })
  })

  it('should validate a user with invalid crendentials', () => {
    userAuthAPI.requestInvalidCrendentialsLogin().then((res) => {
      userAuthAPI.invalidCrendentialsResponse(res)
    })
  })
})
