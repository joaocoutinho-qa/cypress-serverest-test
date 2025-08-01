const userInfo = require('../../fixtures/userInfo.js')
const randomEmail = `joaoqa${Date.now()}@qa.com`

describe('API - users', () => {
  it('Should create a user with success', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: "João QA",
        email: randomEmail,
        password: "pswjoao",
        administrador: "true"
      }
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.have.property('message', 'Cadastro realizado com sucesso');
    })
  })
})