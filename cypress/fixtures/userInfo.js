function generateRandomEmail() {
  const random = Math.floor(Math.random() * 100000);
  return `joao.silva${random}@example.com`;
}

const randomEmail = generateRandomEmail();

module.exports = 
{
  validInfo: {
    email: "fulano@qa.com",
    password: "teste"
  },

  invalidEmail: {
    email: "wrongemail.com",
    password: "teste"
  },

  invalidPassword: {
    email: "fulano@qa.com",
    password: "invalidpsw"
  },
  
  validCreateAccountInfo: {
    name: "João QA",
    email: randomEmail,
    password: "123456"
  },

  invalidNameCreateAccountInfo: {
    email: "emailnaonexistente@qa.com",
    password: "123456"
  },

  invalidEmailCreateAccountInfo: {
    name: "João QA",
    email: "emailinvalid",
    password: "123456"
  },

  invalidPswCreateAccountInfo: {
    name: "João QA",
    email: "emailnaoexistente@qa.com",
  }
};