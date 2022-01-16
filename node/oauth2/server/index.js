
const OAuth2Server = require('oauth2-server')
const { Request, Response } = OAuth2Server
const AccessDeniedError = require('oauth2-server/lib/errors/access-denied-error')

class Server {
  constructor(model) {
    Object.defineProperty(this, 'delegate', {
      value: new OAuth2Server({
        model,
        // accessTokenLifetime
      })
    })
  }

  async grantAccess() {
    return await this.delegate.token(request, response) // token
  }

  // https://github.com/manjeshpv/node-oauth2-server-implementation/blob/master/components/oauth/authenticate.js
  async authenticate() {
    var request = new Request({
      headers: {authorization: req.headers.authorization},
      method: req.method,
      query: req.query,
      body: req.body
    });
    var response = new Response(res);

    try {
      await this.delegate.authenticate(request, response)
      // The request was successfully authenticated.
    } catch (e) {
      // The request failed authentication.
    }
  }

  async authorize() {
    try {
      await this.delegate.authorize(request, response)
    } catch (e) {
      if (e instanceof AccessDeniedError) {
        // The resource owner denied the access request.
      } else {
        // Access was not granted due to some other error condition.
      }
    }
  }
}

module.exports = Server
