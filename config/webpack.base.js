module.exports = {
  module: {
    rules: [
      {
        // use babel-loader compiles js & jsx file
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                  'primary-color': '#2BB6BE',
                  'link-color': '#2BB6BE',
                },
              }
            }
          }
        ],
      }
    ],
  }
};