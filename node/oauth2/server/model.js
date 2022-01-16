
/**
 * RFC 6749 Appendix A.12 specifies that access tokens must consist of characters inside the range 0x20..0x7E (i.e. only printable US-ASCII characters).
 */

async function generateAccessToken(client, user, scope) {

}

async function generateRefreshToken(client, user, scope) {

}

async function generateAuthorizationCode(client, user, scope) {

}

/**
 * @see https://oauth2-server.readthedocs.io/en/latest/model/spec.html
 */

async function getAccessToken(token) {
  // return {
  //   accessToken: token.access_token,
  //   accessTokenExpiresAt: token.expires_at,
  //   scope: token.scope,
  //   client: client, // with 'id' property
  //   user: user
  // };
}

async function getRefreshToken(refreshToken) {
  // return {
  //   refreshToken: token.refresh_token,
  //   refreshTokenExpiresAt: token.expires_at,
  //   scope: token.scope,
  //   client: client, // with 'id' property
  //   user: user
  // };
}

async function getAuthorizationCode(authorizationCode) {
  // return {
  //   code: code.authorization_code,
  //   expiresAt: code.expires_at,
  //   redirectUri: code.redirect_uri,
  //   scope: code.scope,
  //   client: client, // with 'id' property
  //   user: user
  // };
}

async function getClient(clientId, clientSecret) {
  // {
  //   id: 'string',
  //   redirectUris: ['string'],
  //   grants: ['string'],
  //   accessTokenLifetime: 12, // Client-specific lifetime of generated access tokens in seconds.
  //   refreshTokenLifetime: 12, // Client-specific lifetime of generated refresh tokens in seconds.
  // }
}

async function saveToken(token, client, user) {
  // return {
  //   accessToken: accessToken.access_token,
  //   accessTokenExpiresAt: accessToken.expires_at,
  //   refreshToken: refreshToken.refresh_token,
  //   refreshTokenExpiresAt: refreshToken.expires_at,
  //   scope: accessToken.scope,
  //   client: {id: accessToken.client_id},
  //   user: {id: accessToken.user_id}
  // };
}

async function saveAuthorizationCode(code, client, user) {
  // return {
  //   authorizationCode: authorizationCode.authorization_code,
  //   expiresAt: authorizationCode.expires_at,
  //   redirectUri: authorizationCode.redirect_uri,
  //   scope: authorizationCode.scope,
  //   client: {id: authorizationCode.client_id},
  //   user: {id: authorizationCode.user_id}
  // };
}

/*
 * Method used only by password grant type.
 */

async function getUser(username, password) {

}

/*
 * Method used only by client_credentials grant type.
 */

async function getUserFromClient(client) {
  // return db.queryUser({id: client.user_id});
}

/*
 * Methods used only by refresh_token grant type.
 */

async function getRefreshToken(refreshToken) {

}

// token	Object	The token to be revoked.
// token.refreshToken	String	The refresh token.
// [token.refreshTokenExpiresAt]	Date	The expiry time of the refresh token.
// [token.scope]	String	The authorized scope of the refresh token.
// token.client	Object	The client associated with the refresh token.
// token.client.id	String	A unique string identifying the client.
// token.user	Object	The user associated with the refresh token.

async function revokeToken(token) {

}

// code	Object	The return value.
// code.code	String	The authorization code.
// code.expiresAt	Date	The expiry time of the authorization code.
// [code.redirectUri]	String	The redirect URI of the authorization code.
// [code.scope]	String	The authorized scope of the authorization code.
// code.client	Object	The client associated with the authorization code.
// code.client.id	String	A unique string identifying the client.
// code.user	Object	The user associated with the authorization code.
// [callback]	Function	Node-style callback to be used instead of the returned Promise.

async function revokeAuthorizationCode(code) {
  // Return true if the revocation was successful or false if the authorization code could not be found.
}

async function verifyScope(accessToken, scope) {

}
