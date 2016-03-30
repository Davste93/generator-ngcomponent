# Installation
First, install the yeoman generator: http://yeoman.io/codelab/setup.html

Then,
```sh
$ npm install generator-ngcomponent -g
```

## Usage

1. Optionally, create a `.yo-rc.json` file in the same directory you will perform generation. If you do not create this file it will be automatically generated for you. Sample:
    ```json
    {
      "generator-ngcomponent": {
        "parentModule": "parent.module",
        "company": "Company Name",
        "templateDir": "src/app/modules/{component.name}/templates/",
        "componentDir": "src/app/modules/{component.name}/components/",
        "specDir": "test/unit/modules/{component.name}/"
      }
    }
    ```
    - @`parentModule`: This  parameter defines the default module name. You will be also asked for the name upon generation of the module.
    - @`templateDir`: This is the directory where the generator will put .tpl.html files for your component. Any folders that do not exist in this (as well as paths below) are created.
    - @`componentDir`: This is the directory where the generator will put .component.js files for your component.
    - @`specDir`: This is the directory where the generator will put test .spec.js files for your component.
    - @`{component.name}`: Instances of this text will be replaced with the component name.
2. Run the following command:
    ```json
    $ yo ngcomponent
    ```
    The generator will prompt you the following:
    - Component Name: Enter the name of the component in camel case. This will be converted to snake case wherever necessary throughout the code.
    - Description: A short description of the component.
    - Module Name: By default, this is taken from the "parentModule" parameter supplied in the yo.rc.json. The component is added to this module. This applies also for tests - the test uses `beforeEach('moduleName');` to locate the component. 
    
## Structure:
By default, the generator will create a structure similar to the following:
```
   shared/components/thing.js
   test/unit/components/thing.spec.js
   shared/templates/thing.tpl.html
```

## Post-Generation notes:
- The `templateUrl` in `shared/components/thing.js` must probably be changed.
- The test spec purposely contains this code which should remind you  to write tests:
-        it('should have tests', function(){
            expect(false).toBeTruthy();
        });
