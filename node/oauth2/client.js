
const ClientOAuth2 = require('client-oauth2')

class Client {
  constructor(opts) {
    Object.defineProperty(this, 'delegate', {
      value: new ClientOAuth2(opts)
    })
  }
}

module.exports = Client
