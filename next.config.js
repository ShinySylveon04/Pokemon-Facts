const withCSS = require("@zeit/next-css");
(module.exports = withCSS()),
  {
    assetPrefix: process.env.NODE_ENV === "production" ? "/{Pokemon-Facts}" : ""
  };

const debug = process.env.NODE_ENV !== "production";

(module.exports = withCSS()),
  {
    exportPathMap: function() {
      // /Pokemon-Facts
      return {
        "/": { page: "/" },
        "/regions": { page: "/regions" }
      };
    },
    assetPrefix: !debug ? "https://shinysylveon04.github.io/Pokemon-Facts/" : ""
  };
