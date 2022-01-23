const SASS_ROOT = "src/app/resources/css/";
const { ESLINT_MODES } = require("@craco/craco");
const path = require("path");

module.exports = {
  style: {
    sass: {
      loaderOptions:{
        sassOptions: {
          includePaths: [SASS_ROOT, "src"],
        },
      },
    },
  },
  eslint: {
    mode:          ESLINT_MODES.file,
    loaderOptions: {
      useEslintrc: true,
      ignore:      true,
    },
  },
  babel: {
    plugins: [
      [
        "babel-plugin-root-import",
        {
          rootPathSuffix: "src",
        },
      ],
    ],
  },
  webpack: {
    configure: {
      watch:        true,
      watchOptions: {
      },
      resolve: {
        symlinks: false,
      },
    },
  },
};
