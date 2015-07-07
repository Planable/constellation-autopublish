Package.describe({
  name: 'babrahams:constellation-autopublish',
  version: '0.1.0',
  summary: 'Autopublish toggle plugin for Constellation',
  git: 'https://github.com/JackAdams/constellation-autopublish.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');

  api.use(['templating','session','tracker'], 'client');
  api.use(['underscore'], 'server');
  api.use('babrahams:constellation@1.0.0', 'client');
  api.use('dburles:mongo-collection-instances@0.3.3', 'server');

  api.addFiles('autopublish.css','client');
  api.addFiles('autopublish.html','client');
  api.addFiles('autopublish-client.js','client');
  api.addFiles('autopublish-server.js','server');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
