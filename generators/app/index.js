'use strict';
var yeoman = require('yeoman-generator');

var ngcomponentGenerator = yeoman.Base.extend({

  //Configuration:
  initializing : function() {
    this.config.set({
      parentModule : this.config.get('parentModule') || 'testModule',
      company : this.config.get('company') || 'Test Company',
      templateDir : this.config.get('templateDir') ||'shared/templates/',
      componentDir : this.config.get('componentDir') || 'shared/components/',
      specDir : this.config.get('specDir') || 'test/unit/components/'
    });

    this.config.save();
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
    },
    {
      type: 'input',
      name: 'moduleName',
      message: 'What is the module name?',
      //Defaults to the project's folder name if the input is skipped
      default:  this.config.get('parentModule')
    }], function(answers) {
      self.component.name = answers.name;
      self.component.snakeCaseName = answers.name.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase();}) +"".replace(/^_/, "");

      self.cfg = this.config.getAll();
      self.cfg.templateDir = self.cfg.templateDir.replace('{component.name}', answers.name);
      self.cfg.componentDir = self.cfg.componentDir.replace('{component.name}', answers.name);
      self.cfg.specDir = self.cfg.specDir.replace('{component.name}', answers.name);
      self.cfg.parentModule = answers.moduleName;

      done();
    }.bind(this));
  },


  generateBasic: function() {
    var self = this;

    self.template('_component.js', self.cfg.componentDir + self.component.name + '.js');
    self.template('_component.spec.js', self.cfg.specDir + self.component.name + '.spec.js');
    self.template('_component.tpl.html', self.cfg.templateDir + self.component.name + '.tpl.html');
  }
});

module.exports = ngcomponentGenerator;
