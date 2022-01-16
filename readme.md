
# Security.JS

Security utilities for Node.js and the Browser.

## Goals

- [ ] User session management with CSRF tokens
- [ ] CORS
- [ ] Oauth2 client application grants
- [ ] Oauth2 server
- [ ] Oauth2 browser / user authentication
- [ ] PKCE on top of the Oauth2
- [ ] Secure random hash generation
- [ ] Possibly [OIDC](https://github.com/panva/node-oidc-provider)
- [ ] Multifactor Authentication

Essentially, everything you'd need to implement robust authentication in your app without paying for it like with Okta or Auth0. In many cases it is just a thin wrapper around existing libraries, in other cases it does slightly more.

- [Oauth2orize](https://github.com/jaredhanson/oauth2orize) only works with Express.js and Passport.js (not Next.js)
- [Vanilla JS PKCE](https://github.com/aaronpk/pkce-vanilla-js/blob/master/index.html)
- [More PKCE](https://github.com/iambumblehead/pkce-pair/blob/master/pkce-pair.mjs)
- https://github.com/Tim-Erwin/oauth2-pkce/blob/main/helpers.ts
- [Oauth 2.0 Authorization Code Grant](https://oauth.net/2/grant-types/authorization-code/)
- https://www.oauth.com/oauth2-servers/single-page-apps/
- https://github.com/oauthjs/node-oauth2-server
- https://github.com/14gasher/oauth-example
- https://github.com/lelylan/simple-oauth2

## API

### Oauth2 Client in Node.js

```js
const Oauth2Client = require('@lancejpollard/security.js/node/oauth2/client')

const client = new Oauth2Client({
  clientId: 'abc',
  clientSecret: '123',
  accessTokenUri: 'https://github.com/login/oauth/access_token',
  authorizationUri: 'https://github.com/login/oauth/authorize',
  redirectUri: 'http://example.com/auth/github/callback',
  scopes: ['notifications', 'gist']
})
```

## Oauth 2 Database Schema

This is taken from [Simple Oauth2 table structures](https://github.com/myussufz/Simplified-OAuth-2.0), just in case it gets removed.

### `users`

| Column                  | Data Type
|----------               |-------------
| id                      | int
| name                    | string
| username                | string
| password                | string

### `clients`

| Column                  | Data Type
|----------               |-------------
| id                      | int
| client_id               | string
| client_secret           | string
| name                    | string
| home_page_url           | string
| logo_url                | string
| privacy_policy_url      | string
| user_id                 | string
| is_live                 | bool
| redirect_uri            | []string

### `client_access_tokens`

| Column                  | Data Type
|----------               |-------------
| id                      | int
| client_id               | int
| user_id                 | int
| client_refresh_token_id | int
| access_token            | string
| grant_type              | string
| scope                   | string
| audience                | string
| expired_at              | datetime

### `client_refresh_tokens`

| Column                  | Data Type
|----------               |-------------
| id                      | int
| client_id               | int
| user_id                 | int
| refresh_token           | string
| grant_type              | string
| scope                   | string
| audience                | string
| expired_at              | datetime

### `client_authorization_codes`

| Column                  | Data Type
|----------               |-------------
| id                      | int
| client_id               | int
| user_id                 | int
| code                    | string
| scope                   | []string
| is_used                 | bool
| redirect_uri            | string
| expired_at              | datetime
