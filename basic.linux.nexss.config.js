let languageConfig = Object.assign({}, require("./basic.win32.nexss.config"));
languageConfig.builders = {
  freebasic: {
    install:
      "apt install gcc make lib{ncurses5,gpm,x11,xext,xpm,xrandr,xrender,gl1-mesa,ffi}-dev",
    command: "fbc.exe",
    build: function () {
      return "fbc.exe";
    },
    args: "-x <destinationFile> <file> && <destinationFile>",
    help: ``,
  },
};
languageConfig.compilers = {};
languageConfig.errors = require("./nexss.basic.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
// console.log(languageConfig.get(`errors`));
// console.log(languageConfig.get("author"));
// console.log(Object.keys(languageConfig.get("osPackageManagers")));
// console.log(Object.keys(languageConfig.get("languagePackageManagers")));
