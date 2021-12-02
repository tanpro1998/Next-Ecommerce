const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withLess(
    withImages(
      withSass({
        env: {
          ANY_ENV_KEY: "ANY_ENV_VARIABLE",
        },
      })
    )
  )
);

module.exports = {
  env: {
    BASE_URL: "http://localhost:3000",
    MONGO_URL:
      "mongodb+srv://tanpro1998:01668787693anh@e-commerce.7yn95.mongodb.net/E-Commerce?retryWrites=true&w=majority",
  },
};

module.exports = {
  reactStrictMode: true,
};
