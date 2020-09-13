let languageConfig = Object.assign({}, require("./basic.win32.nexss.config"));
languageConfig.builders = {
  freebasic: {
    install:
      "brew install -y gcc make lib{ncurses5,gpm,x11,xext,xpm,xrandr,xrender,gl1-mesa,ffi}-dev",
    command: "fbc",
    build: function () {
      return "fbc";
    },
    args: "-x <destinationFile> <file> && <destinationFile>",
    help: ``,
  },
};

module.exports = languageConfig;
