// package metadata file for Meteor.js
var packageName = 'matthieuh:angular-img-cropper'; // https://atmospherejs.com/angularui/angular-ui-router
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '1.1.0';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: 'An image cropping tool for AngularJS',
  git: 'https://github.com/matthieuh/angular-img-cropper',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2'); // Meteor versions
  api.use('angular:angular@1.4.0', where); // Dependencies
  api.addFiles('src/angular-img-cropper.js', where); // Files in use
});
