/**
 * @ngdoc component
 * @name <%= component.name %>
 * @element <%= component.snakeCaseName %>
 * @description
 *
 * <%- component.description %>
 *
 * @example:
 * <pre>
 *      <<%= component.snakeCaseName %>
 *            my-custom-binding="sampleValue">
 *      </<%= component.snakeCaseName %>>
 * </pre>
 *
 * @param {myCustomId} myCustomBinding - myCustomBinding value
 *
 * @copyright(C) Copyright 2016, <%= cfg.company %>
 */

angular.module('<%= cfg.parentModule %>').controller('<%= component.name %>Ctrl',
    class <%= component.name %> {
        constructor(){
            var vm = this;

            vm.customMethod = function(){

            };

            vm.anotherCustomMethod = function(param){

            };
        }
    })
    .component('<%= component.name %>', {
        bindings : {
            myCustomBinding : '=?'
        },
        templateUrl : '<%= cfg.templateDir %><%= component.name %>.tpl.html',
        controller : '<%= component.name %>Ctrl'
    });
