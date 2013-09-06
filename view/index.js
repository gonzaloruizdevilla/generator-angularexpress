'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');


module.exports = Generator;

function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, '../templates'));

  if (typeof this.env.options.appPath === 'undefined') {
    try {
      this.env.options.appPath = require(path.join(process.cwd(), 'bower.json')).appPath;
    } catch (e) {}
    this.env.options.appPath = this.env.options.appPath || 'app';
  }
}

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.createViewFiles = function createViewFiles() {
  var data;
  var appPath = this.env.options.appPath;
  var fullPathJade = path.join(appPath, 'jade/index.jade');
  if (fs.existsSync(fullPathJade)) {
    data = createJadeViewFiles(this.name, this.env);
  }else {
    data = createHtmlViewFiles(this.name, this.env);
  }
  this.template(data.template, data.targetPath);

}

function createHtmlViewFiles(name, env) {
  var targetPath = name;
  if (name.indexOf('/') === -1) {
    targetPath = 'views/' + targetPath;
  }
  targetPath = path.join(env.options.appPath, targetPath + '.html');
  return {
    targetPath: targetPath,
    template: 'common/view.html',
  }
};

function createJadeViewFiles(name, env) {
  var targetPath = name;
  if (name.indexOf('/') === -1) {
    targetPath = 'jade/views/' + targetPath;
  }
  targetPath =  path.join(env.options.appPath, targetPath + '.jade');
  return {
    targetPath: targetPath,
    template: 'common/view.jade',
  }
};

