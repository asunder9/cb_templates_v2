const { ~cb-service-name-capitalize~ } = require('./~cb-service-name~.class');
const createModel = require('../../models/~cb-service-name~.model');
const hooks = require('./~cb-service-name~.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/~cb-service-name~', new ~cb-service-name-capitalize~(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('~cb-service-name~');

  service.hooks(hooks);
};
