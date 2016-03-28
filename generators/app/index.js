'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var _ = require('underscore');

var generateDir = 'generated/';


var tsdatalayerGenerator = yeoman.generators.Base.extend({



  //Returns import string from a given model.

generateBasic: function() {


  var self = this;

    self.template('_modelDataRepository.ts', dataDir + m.name + 'DataRepository.ts');
}
  // //Configurations will be loaded here.
  // //Ask for user input
  // prompting: function() {
  //   var done = this.async();
  //   this.prompt({
  //     type: 'input',
  //     name: 'name',
  //     message: 'Your source file:',
  //     //Defaults to the project's folder name if the input is skipped
  //     default: this.appname
  //   }, function(answers) {
  //     this.props = answers
  //     this.log(answers.name);
  //     done();
  //   }.bind(this));
  // }

});

module.exports = tsdatalayerGenerator;
Status API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Contact Help
