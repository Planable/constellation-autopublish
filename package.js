Package.describe({
  name: "planable:autopublish",
  version: "0.4.11",
  summary: "Autopublish toggle plugin for Constellation",
  git: "https://github.com/Planable/constellation-autopublish.git",
  documentation: "README.md",
  debugOnly: true,
});

Package.onUse(function (api) {
  api.versionsFrom("2.3");

  api.use(["templating@1.4.1", "tracker"], "client");
  api.use("check", "server");
  api.use("underscore");
  api.use("planable:console@1.4.11", "client");
  api.use("planable:mongo-collection-instances@0.3.6", "server");

  api.addFiles("autopublish.html", "client");
  api.addFiles("autopublish-client.js", "client");
  api.addFiles("autopublish-server.js", "server");

  api.imply("planable:console");
});

Package.onTest(function(api) {
  api.use('tinytest');
});
