let languageConfig = Object.assign({}, require("./basic.win32.nexss.config"));
languageConfig.builders = {
  freebasic: {
    install: `apt install -y libtinfo5 gcc make lib{ncurses5,gpm,x11,xext,xpm,xrandr,xrender,gl1-mesa,ffi}-dev
`,
    command: "fbc",
    build: function () {
      return "fbc";
    },
    args: "-x <destinationFile> <file> && <destinationFile>",
    help: ``,
  },
};
languageConfig.compilers = {};
languageConfig.errors = require("./nexss.basic.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
