let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Basic";
languageConfig.description =
  "FreeBASIC is a free/open source (GPL), BASIC compiler for Microsoft Windows, DOS and Linux.";
languageConfig.url = "https://www.freebasic.net";
languageConfig.founders = ["John George Kemeny", "Thomas Kurtz"];
languageConfig.developers = [""];
languageConfig.years = ["1964"];
languageConfig.extensions = [".bas"];
languageConfig.executeCommandLine = "";
languageConfig.printCommandLine = "";
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "fbc.exe";
languageConfig.builders = {
    freebasic: {
      install: "scoop install freebasic",
      command: "fbc.exe",
      build: function() {
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
