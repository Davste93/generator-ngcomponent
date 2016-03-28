'use strict';
//var util = require('util');
//var path = require('path');
var yeoman = require('yeoman-generator');

var generateDir = 'generated/';


var tsdatalayerGenerator = yeoman.Base.extend({

//Configuration:
config : function() {
  this.config.set({
    parentModule : this.config.get('parentModule') || 'testModule',
    company : this.config.get('company') || 'Test Company',
    templateUrl : this.config.get('templateUrl') ||'shared/templates/',
    componentDir : this.config.get('componentDir') || 'shared/components/',
    specDir : this.config.get('specDir') || 'test/unit/components/'
  });

},

//Configurations will be loaded here.
  //Ask for user input
  prompting: function() {
    var done = this.async();
    var self = this;

    self.component = {};

    this.prompt([{
      type: 'input',
      name: 'name',
      message: 'What is the name of your component in camelCase?',
      //Defaults to the project's folder name if the input is skipped
      default: 'testComponent'
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of your component?',
      //Defaults to the project's folder name if the input is skipped
      default: 'testComponent description'
    }], function(answers) {
      self.component.name = answers.name;
      self.component.snakeCaseName = answers.name.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase();}) +"".replace(/^_/, "");
      done();
    }.bind(this));
  },


generateBasic: function() {
  var self = this;

  self.cfg = self.config.getAll();


  self.template('_component.js', self.cfg.componentDir + self.component.name + '.js');
  self.template('_component.spec.js', self.cfg.specDir + self.component.name + '.spec.js');
  self.template('_component.tpl.html', self.cfg.templateUrl + self.component.name + '.tpl.html');
}

});

module.exports = tsdatalayerGenerator;
