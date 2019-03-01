const withCSS = require("@zeit/next-css");
(module.exports = withCSS()),
  {
    assetPrefix: process.env.NODE_ENV === "production" ? "/{Pokemon-Facts}" : ""
  };
