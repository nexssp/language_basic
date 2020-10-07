let languageConfig = Object.assign({}, require("./basic.win32.nexss.config"));

const os = require(`${process.env.NEXSS_SRC_PATH}/node_modules/@nexssp/os/`);
const sudo = os.sudo();

languageConfig.builders = {
  freebasic: {
    install: `${sudo}apt install -y libtinfo5 gcc make lib{ncurses5,gpm,x11,xext,xpm,xrandr,xrender,gl1-mesa,ffi}-dev
${sudo}apt-get install -y libc6-i386 lib32ncurses5-dev gcc-multilib g++-multilib lib32mudflap0
wget http://frozenfox.freehostia.com/cappy/getlibs-all.deb
${sudo}sudo dpkg -i getlibs-all.deb`,
    command: "fbc",
    build: function () {
      return "fbc";
    },
    args: "-x <destinationFile> <file> && <destinationFile>",
    help: ``,
  },
};
languageConfig.compilers = {};

module.exports = languageConfig;
