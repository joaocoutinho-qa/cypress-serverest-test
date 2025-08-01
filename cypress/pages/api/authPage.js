class userAuthAPI {

requestValidLogin(){
  return cy.request({
    method: 'POST',
    url: 'https://serverest.dev/login',
    body: {
      email: "fulano@qa.com",
      password: "teste"
    }
  })
}

validateValidResponse(res){
    expect(res.status).to.eq(200)
    expect(res.body).to.have.property('authorization')
  }

requestNoExistingUserLogin(){
  return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: "teste3@qa.com",
        password: "psw"
      },
      failOnStatusCode: false 
  })
}

invalidNoExistingUserResponse(res){
    expect(res.status).to.eq(401)
    expect(res.body).not.to.have.property('authorization')
    cy.log(res.status)
  } 
  
requestInvalidCrendentialsLogin(){
  return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: "invalidemail",
        password: "invalidpsw"
      },
      failOnStatusCode: false 
  })
}

invalidCrendentialsResponse(res){
    expect(res.status).to.eq(400)
    expect(res.body).not.to.have.property('authorization')
    cy.log(res.status)
  }  
}

export default new userAuthAPI()
