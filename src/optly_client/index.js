'use strict';
const OPTLY = require('optimizely-server-sdk'),
    defaultErrorHandler = require('optimizely-server-sdk/lib/plugins/error_handler'),
    defaultLogger = require('optimizely-server-sdk/lib/plugins/logger'),
    rp = require('request-promise');

// Function to initialize Optimizely Full Stack SDK
module.exports.initializeClient = (url) => {
  let options = {uri: url, json: true};
  // Grabs datafile from CDN
  let initializePromise = new Promise((resolve, reject)=>{
    rp(options).then((datafile) => { 
        console.log('Initializing Optimizely Client with Datafile: ', datafile);
        let optlyClient = OPTLY.createInstance({
          datafile: datafile,
          errorHandler: defaultErrorHandler,
          logger: defaultLogger.createLogger()
        });
        resolve(optlyClient);
    });
  });
  return initializePromise;
};

module.exports.activateUser = (experiment_key, user_id, optlyClient) => {
  // Activate user in an experiment
  var variation = optlyClient.activate(experiment_key, user_id);
  return variation;
}

module.exports.track = (event_key, user_id, optlyClient) => {
  return optlyClient.track(event_key, user_id);
}