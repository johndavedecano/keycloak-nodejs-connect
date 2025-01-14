'use strict';

const requester = require('keycloak-request-token');
const baseUrl = 'http://localhost:8080/auth';

const settings = {
  username: 'test-admin',
  password: 'password',
  grant_type: 'password',
  client_id: 'admin-app',
  realmName: 'service-node-realm'
};

module.exports = () => requester(baseUrl, settings);
