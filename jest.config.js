module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "moduleNameMapper": {
    ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$": "identity-obj-proxy"
  }

};