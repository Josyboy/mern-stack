const constants = require("./constants")
const Email = require('sendgrid-template-helper');
const config = require('../config');

const email =
  config.env === constants.ENV_TEST
    ? { send: () => Promise.resolve({}) }
    : new Email({...new Email({
      apiKey: config.sendgrid.apiKey,
      prefix: `${config.app.name}_`,
    }) })

module.exports = email;
