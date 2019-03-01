const withCSS = require("@zeit/next-css");

const debug = process.env.NODE_ENV !== "production";

module.exports = withCSS({
  webpack(config) {
    // Further custom configuration here
    return config;
  },
  exportPathMap: function() {
    // /Pokemon-Facts
    return {
      "/": { page: "/" },
      "/regions": { page: "/regions" }
    };
  },
  assetPrefix: !debug ? "https://shinysylveon04.github.io/Pokemon-Facts/" : ""
});
