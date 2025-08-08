const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const webpack = require('@cypress/webpack-preprocessor');

module.exports = async (on, config) => {
  // Add image snapshot plugin
  addMatchImageSnapshotPlugin(on, config);
  
  // Add cucumber preprocessor plugin
  await addCucumberPreprocessorPlugin(on, config);
  
  // Add log task for accessibility tests
  on('task', {
    log(message) {
      console.log(message);
      return null;
    }
  });
  
  // Configure webpack preprocessor for cucumber
  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.ts', '.js']
      },
      module: {
        rules: [
          {
            test: /\.feature$/,
            use: [
              {
                loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                options: config
              }
            ]
          }
        ]
      }
    }
  };
  
  on('file:preprocessor', webpack(options));
  
  return config;
};