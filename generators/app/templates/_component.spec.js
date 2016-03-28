describe('<%= component.name %>', function() {

    beforeEach(module('<%= cfg.parentModule %>'));

    describe('component', function(){
        var htmlTemplate,
            scope,
            elem,
            compiled,
            $ctrl;


        beforeEach(angular.mock.inject( function($rootScope, $compile) {
            //Setup HTML
            htmlTemplate = '<<%= component.snakeCaseName %> my-custom-binding="sampleValue"> </<%= component.snakeCaseName %>>';

            //Setup environment:
            scope = $rootScope.$new();
            scope.sampleValue = "test";
            elem = angular.element(htmlTemplate);
            compiled = $compile(elem)(scope);
            scope.$digest(); //call digest on scope (refresh)

            //Get controller (if component = Element, should not need to be changed):
            $ctrl = angular.element(elem[0].firstChild).scope().$ctrl;
            }
        ));

        it('should have tests', function(){
            expect(false).toBeTruthy();
        });

        it('should create child elements', function(){
            expect(elem.find('#customChildElement')).toBeTruthy();
        });

        it('should set myCustomBinding to scope.sampleValue', function(){
            scope.sampleValue = "test2";
            scope.$digest();

            expect($ctrl.myCustomBinding).toBe("test2");
        });
    });
});
