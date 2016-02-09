'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl as mainControl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    describe("testing data functionality: ", function(){
        it("should contain some data by default", function(){
            expect(scope.mainControl.data.length > 0).toEqual(true);
        });

        it("should be able to remove an item from the list", function(){
           var initialLength = scope.mainControl.data.length;
           scope.mainControl.removeData(1);
           expect(scope.mainControl.data.length < initialLength).toEqual(true);
        });

        it("should be able to add an item to the list", function(){
            var initialLength = scope.mainControl.data.length;
            scope.mainControl.textField = "kittens";
            scope.mainControl.addData();
            expect(scope.mainControl.data.length > initialLength).toEqual(true);
        });
    });
});

//=== Testing navbarCtrl ===========================================
describe('Testing controller: navbarCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));
    it("should be able to remove an item from the list", function(){
        scope.mainControl.gpadata.push({grade: "A", credits: "1"});
        var initialLength = scope.mainControl.gpaqdata.length;
        scope.mainControl.removeData(0);
        expect(scope.mainControl.data.length < initialLength).toEqual(true);
    });

    it("should be able to add an item to the list", function(){
        var initialLength = scope.mainControl.gpadata.length;
        scope.mainControl.gradeField = "A";
        scope.mainControl.creditsField = "1";
        scope.mainControl.addData();
        expect(scope.mainControl.gpadata.length > initialLength).toEqual(true);
    });

    it("should ignore improper cases when adding data", function(){
        // First, set up proper input data.
        scope.mainControl.gradeField = "A";
        scope.mainControl.creditsField = "1";

        expect(scope.mainControl.gpadata.length).toBe(0);
        scope.mainControl.addData();
        expect(scope.mainControl.gpadata.length).toBe(1);

        // Test without course field. Should add anyhow.
        scope.mainControl.gradeField = "A";
        scope.mainControl.creditsField = "1";
        scope.mainControl.addData();
        expect(scope.mainControl.gpadata.length).toBe(2);

        // Test without grade field. Should not add anything.
        scope.mainControl.gradeField = "";
        scope.mainControl.creditsField = "1";
        scope.mainControl.addData();
        expect(scope.mainControl.gpadata.length).toBe(2);

        // Test without credits field. Should not add anything.
        scope.mainControl.gradeField = "A";
        scope.mainControl.creditsField = "";
        scope.mainControl.addData();
        expect(scope.mainControl.gpadata.length).toBe(2);
    });

    it("Should be able to get the length of the list", function(){
        var initialLength = scope.mainControl.classesInList();
        expect(initialLength).toBe(0);
        scope.mainControl.gpadata.push({grade: "A", credits: "1"});
        expect(scope.mainControl.classesInList()).not.toBe(initialLength);
        expect(scope.mainControl.classesInList()).toBe(1);
        scope.mainControl.removeData(0);
        expect(scope.mainControl.classesInList()).toBe(0);
    });

    it("Testing letter to number conversions", function(){
        expect(scope.mainControl.letterToNum("A")).toBe(4.00);
        expect(scope.mainControl.letterToNum("A-")).toBe(3.66);
        expect(scope.mainControl.letterToNum("B+")).toBe(3.33);
        expect(scope.mainControl.letterToNum("B")).toBe(3.00);
        expect(scope.mainControl.letterToNum("B-")).toBe(2.66);
        expect(scope.mainControl.letterToNum("C+")).toBe(2.33);
        expect(scope.mainControl.letterToNum("C")).toBe(2.00);
        expect(scope.mainControl.letterToNum("C-")).toBe(1.66);
        expect(scope.mainControl.letterToNum("D+")).toBe(1.33);
        expect(scope.mainControl.letterToNum("D")).toBe(1.00);
        expect(scope.mainControl.letterToNum("D-")).toBe(0.66);
        expect(scope.mainControl.letterToNum("F")).toBe(0);
        expect(scope.mainControl.letterToNum("Q")).toBe(-1);
    });

    it("Should be able to calculate GPA properly", function(){
        expect(scope.mainControl.gpa()).toBe("");

        // Test letter grades for proper functionality.
        scope.mainControl.gpadata.push({grade: "A", credits: "1"});
        expect(scope.mainControl.gpa()).toBe('4.00');

        scope.mainControl.gpadata.push({grade: "B", credits: "1"});
        expect(scope.mainControl.gpa()).toBe('3.50');

        scope.mainControl.gpadata.push({grade: "C", credits: "1"});
        expect(scope.mainControl.gpa()).toBe('3.00');

        scope.mainControl.gpadata.push({grade: "D", credits: "1"});
        expect(scope.mainControl.gpa()).toBe('2.50');

        scope.mainControl.gpadata.push({grade: "F", credits: "1"});
        expect(scope.mainControl.gpa()).toBe('2.00');


        // Reset data. Removes all the courses.
        scope.mainControl.gpadata = [];


        // Testing on +/- grades, and number of credits.
        scope.mainControl.gpadata.push({grade: "A-", credits: "1"});
        expect(scope.mainControl.gpa()).toBe('3.66');
        scope.mainControl.removeData(0);

        scope.mainControl.gpadata.push({grade: "B+", credits: "2"});
        expect(scope.mainControl.gpa()).toBe('3.33')
        scope.mainControl.removeData(0);

        scope.mainControl.gpadata.push({grade: "B-", credits: "3"});
        expect(scope.mainControl.gpa()).toBe('2.66');
        scope.mainControl.removeData(0);

        scope.mainControl.gpadata.push({grade: "C+", credits: "4"});
        expect(scope.mainControl.gpa()).toBe('2.33')
        scope.mainControl.removeData(0);
    it("should be able to remove an item from the list", function(){
        scope.mainControl.gpadata.push({grade: "A", credits: "1"});
        var initialLength = scope.mainControl.gpaqdata.length;
        scope.mainControl.removeData(0);
        expect(scope.mainControl.data.length < initialLength).toEqual(true);
    });

    it("should be able to add an item to the list", function(){
        var initialLength = scope.mainControl.gpadata.length;
        scope.mainControl.gradeField = "A";
        scope.mainControl.creditsField = "1";
        scope.mainControl.addData();
        expect(scope.mainControl.gpadata.length > initialLength).toEqual(true);
    });

    it("should ignore improper cases when adding data", function(){
        // First, set up proper input data.
        scope.mainControl.gradeField = "A";
        scope.mainControl.creditsField = "1";

        expect(scope.mainControl.gpadata.length).toBe(0);
        scope.mainControl.addData();
        expect(scope.mainControl.gpadata.length).toBe(1);

        // Test without course field. Should add anyhow.
        scope.mainControl.gradeField = "A";
        scope.mainControl.creditsField = "1";
        scope.mainControl.addData();
        expect(scope.mainControl.gpadata.length).toBe(2);

        // Test without grade field. Should not add anything.
        scope.mainControl.gradeField = "";
        scope.mainControl.creditsField = "1";
        scope.mainControl.addData();
        expect(scope.mainControl.gpadata.length).toBe(2);

        // Test without credits field. Should not add anything.
        scope.mainControl.gradeField = "A";
        scope.mainControl.creditsField = "";
        scope.mainControl.addData();
        expect(scope.mainControl.gpadata.length).toBe(2);
    });

    it("Should be able to get the length of the list", function(){
        var initialLength = scope.mainControl.classesInList();
        expect(initialLength).toBe(0);
        scope.mainControl.gpadata.push({grade: "A", credits: "1"});
        expect(scope.mainControl.classesInList()).not.toBe(initialLength);
        expect(scope.mainControl.classesInList()).toBe(1);
        scope.mainControl.removeData(0);
        expect(scope.mainControl.classesInList()).toBe(0);
    });

    it("Testing letter to number conversions", function(){
        expect(scope.mainControl.letterToNum("A")).toBe(4.00);
        expect(scope.mainControl.letterToNum("A-")).toBe(3.66);
        expect(scope.mainControl.letterToNum("B+")).toBe(3.33);
        expect(scope.mainControl.letterToNum("B")).toBe(3.00);
        expect(scope.mainControl.letterToNum("B-")).toBe(2.66);
        expect(scope.mainControl.letterToNum("C+")).toBe(2.33);
        expect(scope.mainControl.letterToNum("C")).toBe(2.00);
        expect(scope.mainControl.letterToNum("C-")).toBe(1.66);
        expect(scope.mainControl.letterToNum("D+")).toBe(1.33);
        expect(scope.mainControl.letterToNum("D")).toBe(1.00);
        expect(scope.mainControl.letterToNum("D-")).toBe(0.66);
        expect(scope.mainControl.letterToNum("F")).toBe(0);
        expect(scope.mainControl.letterToNum("Q")).toBe(-1);
    });

    it("Should be able to calculate GPA properly", function(){
        expect(scope.mainControl.gpa()).toBe("");

        // Test letter grades for proper functionality.
        scope.mainControl.gpadata.push({grade: "A", credits: "1"});
        expect(scope.mainControl.gpa()).toBe('4.00');

        scope.mainControl.gpadata.push({grade: "B", credits: "1"});
        expect(scope.mainControl.gpa()).toBe('3.50');

        scope.mainControl.gpadata.push({grade: "C", credits: "1"});
        expect(scope.mainControl.gpa()).toBe('3.00');

        scope.mainControl.gpadata.push({grade: "D", credits: "1"});
        expect(scope.mainControl.gpa()).toBe('2.50');

        scope.mainControl.gpadata.push({grade: "F", credits: "1"});
        expect(scope.mainControl.gpa()).toBe('2.00');


        // Reset data. Removes all the courses.
        scope.mainControl.gpadata = [];


        // Testing on +/- grades, and number of credits.
        scope.mainControl.gpadata.push({grade: "A-", credits: "1"});
        expect(scope.mainControl.gpa()).toBe('3.66');
        scope.mainControl.removeData(0);

        scope.mainControl.gpadata.push({grade: "B+", credits: "2"});
        expect(scope.mainControl.gpa()).toBe('3.33')
        scope.mainControl.removeData(0);

        scope.mainControl.gpadata.push({grade: "B-", credits: "3"});
        expect(scope.mainControl.gpa()).toBe('2.66');
        scope.mainControl.removeData(0);

        scope.mainControl.gpadata.push({grade: "C+", credits: "4"});
        expect(scope.mainControl.gpa()).toBe('2.33')
        scope.mainControl.removeData(0);

        scope.mainControl.gpadata.push({grade: "C-", credits: "5"});
        expect(scope.mainControl.gpa()).toBe('1.66');
        scope.mainControl.removeData(0);

        scope.mainControl.gpadata.push({grade: "D+", credits: "6"});
        expect(scope.mainControl.gpa()).toBe('1.33')
        scope.mainControl.removeData(0);

        scope.mainControl.gpadata.push({grade: "D-", credits: "7"});
        expect(scope.mainControl.gpa()).toBe('0.66');
        scope.mainControl.removeData(0);


    })


        scope.mainControl.gpadata.push({grade: "C-", credits: "5"});
        expect(scope.mainControl.gpa()).toBe('1.66');
        scope.mainControl.removeData(0);

        scope.mainControl.gpadata.push({grade: "D+", credits: "6"});
        expect(scope.mainControl.gpa()).toBe('1.33')
        scope.mainControl.removeData(0);

        scope.mainControl.gpadata.push({grade: "D-", credits: "7"});
        expect(scope.mainControl.gpa()).toBe('0.66');
        scope.mainControl.removeData(0);


    })


    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('navbarCtrl as navbar', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('should contain pages', function(){
      expect(scope.navbar.pages.length > 0).toEqual(true);
    });
});

//==============Tests for Footer===================
describe('Testing controller: footerCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('footerCtrl as footer', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('should contain pages', function(){
        expect(scope.footer.pages.length > 0).toEqual(true);
    });
});

//===================Tests Gpa Clac====================

describe("Testing Main Controller functionality: ", function(){

    it("should be able to remove an item from the list", function(){
        scope.mainControl.gpadata.push({grade: "A", credits: "1"});
        var initialLength = scope.mainControl.gpaqdata.length;
        scope.mainControl.removeData(0);
        expect(scope.mainControl.data.length < initialLength).toEqual(true);
    });

    it("should be able to add an item to the list", function(){
        var initialLength = scope.mainControl.gpadata.length;
        scope.mainControl.gradeField = "A";
        scope.mainControl.creditsField = "1";
        scope.mainControl.addData();
        expect(scope.mainControl.gpadata.length > initialLength).toEqual(true);
    });

    it("should ignore improper cases when adding data", function(){
        // First, set up proper input data.
        scope.mainControl.gradeField = "A";
        scope.mainControl.creditsField = "1";

        expect(scope.mainControl.gpadata.length).toBe(0);
        scope.mainControl.addData();
        expect(scope.mainControl.gpadata.length).toBe(1);

        // Test without course field. Should add anyhow.
        scope.mainControl.gradeField = "A";
        scope.mainControl.creditsField = "1";
        scope.mainControl.addData();
        expect(scope.mainControl.gpadata.length).toBe(2);

        // Test without grade field. Should not add anything.
        scope.mainControl.gradeField = "";
        scope.mainControl.creditsField = "1";
        scope.mainControl.addData();
        expect(scope.mainControl.gpadata.length).toBe(2);

        // Test without credits field. Should not add anything.
        scope.mainControl.gradeField = "A";
        scope.mainControl.creditsField = "";
        scope.mainControl.addData();
        expect(scope.mainControl.gpadata.length).toBe(2);
    });

    it("Should be able to get the length of the list", function(){
        var initialLength = scope.mainControl.classesInList();
        expect(initialLength).toBe(0);
        scope.mainControl.gpadata.push({grade: "A", credits: "1"});
        expect(scope.mainControl.classesInList()).not.toBe(initialLength);
        expect(scope.mainControl.classesInList()).toBe(1);
        scope.mainControl.removeData(0);
        expect(scope.mainControl.classesInList()).toBe(0);
    });

    it("Testing letter to number conversions", function(){
        expect(scope.mainControl.letterToNum("A")).toBe(4.00);
        expect(scope.mainControl.letterToNum("A-")).toBe(3.66);
        expect(scope.mainControl.letterToNum("B+")).toBe(3.33);
        expect(scope.mainControl.letterToNum("B")).toBe(3.00);
        expect(scope.mainControl.letterToNum("B-")).toBe(2.66);
        expect(scope.mainControl.letterToNum("C+")).toBe(2.33);
        expect(scope.mainControl.letterToNum("C")).toBe(2.00);
        expect(scope.mainControl.letterToNum("C-")).toBe(1.66);
        expect(scope.mainControl.letterToNum("D+")).toBe(1.33);
        expect(scope.mainControl.letterToNum("D")).toBe(1.00);
        expect(scope.mainControl.letterToNum("D-")).toBe(0.66);
        expect(scope.mainControl.letterToNum("F")).toBe(0);
        expect(scope.mainControl.letterToNum("Q")).toBe(-1);
    });

    it("Should be able to calculate GPA properly", function(){
        expect(scope.mainControl.gpa()).toBe("");

        // Test letter grades for proper functionality.
        scope.mainControl.gpadata.push({grade: "A", credits: "1"});
        expect(scope.mainControl.gpa()).toBe('4.00');

        scope.mainControl.gpadata.push({grade: "B", credits: "1"});
        expect(scope.mainControl.gpa()).toBe('3.50');

        scope.mainControl.gpadata.push({grade: "C", credits: "1"});
        expect(scope.mainControl.gpa()).toBe('3.00');

        scope.mainControl.gpadata.push({grade: "D", credits: "1"});
        expect(scope.mainControl.gpa()).toBe('2.50');

        scope.mainControl.gpadata.push({grade: "F", credits: "1"});
        expect(scope.mainControl.gpa()).toBe('2.00');


        // Reset data. Removes all the courses.
        scope.mainControl.gpadata = [];


        // Testing on +/- grades, and number of credits.
        scope.mainControl.gpadata.push({grade: "A-", credits: "1"});
        expect(scope.mainControl.gpa()).toBe('3.66');
        scope.mainControl.removeData(0);

        scope.mainControl.gpadata.push({grade: "B+", credits: "2"});
        expect(scope.mainControl.gpa()).toBe('3.33')
        scope.mainControl.removeData(0);

        scope.mainControl.gpadata.push({grade: "B-", credits: "3"});
        expect(scope.mainControl.gpa()).toBe('2.66');
        scope.mainControl.removeData(0);

        scope.mainControl.gpadata.push({grade: "C+", credits: "4"});
        expect(scope.mainControl.gpa()).toBe('2.33')
        scope.mainControl.removeData(0);

        scope.mainControl.gpadata.push({grade: "C-", credits: "5"});
        expect(scope.mainControl.gpa()).toBe('1.66');
        scope.mainControl.removeData(0);

        scope.mainControl.gpadata.push({grade: "D+", credits: "6"});
        expect(scope.mainControl.gpa()).toBe('1.33')
        scope.mainControl.removeData(0);

        scope.mainControl.gpadata.push({grade: "D-", credits: "7"});
        expect(scope.mainControl.gpa()).toBe('0.66');
        scope.mainControl.removeData(0);


    })

});
