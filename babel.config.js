module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
      env: {
          development: {
              plugins: [
                  ['module-resolver', {
                      root: ['./'],
                      alias: {
                          '@assets': './assets/',
                          '@screens':'./screens/',
                      },
                  }],
              ],
          },
      },
  };
};
