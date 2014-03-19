'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');


var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, '../templates'));

  if (typeof this.env.options.appPath === 'undefined') {
    try {
      this.env.options.appPath = require(path.join(process.cwd(), 'bower.json')).appPath;
    } catch (e) {}
    this.env.options.appPath = this.env.options.appPath || 'app';
  }
};

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.createViewFiles = function createViewFiles() {
  var data;
  var appPath = this.env.options.appPath;
  var fullPathJade = path.join(appPath, 'jade/index.jade');
  if (fs.existsSync(fullPathJade)) {
    data = this.createJadeViewFiles();
  }else {
    data = this.createHtmlViewFiles();
  }
  this.template(data.template, data.targetPath);
};

Generator.prototype.createHtmlViewFiles = function createHtmlViewFiles () {
  var targetPath = path.join(this.env.options.appPath, 'views', this.name.toLowerCase() + '.html');
  return {
    targetPath: targetPath,
    template: 'common/view.html'
  }
};

Generator.prototype.createJadeViewFiles = function createJadeViewFiles () {
  var targetPath = path.join(this.env.options.appPath, 'jade/views', this.name.toLowerCase() + '.jade');
  return {
    targetPath: targetPath,
    template: 'common/view.jade'
  }
};

