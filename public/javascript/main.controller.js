//==================== MAIN CONTROLLER ==================================
    angular.module('stdControllers').controller('mainCtrl', function(){
        var mainControl = this;
        console.log("Main controller loaded!");

        mainControl.textField = "";
        mainControl.gradeField  = "";
        mainControl.creditField  = "";


        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        mainControl.data = [
            {text: "fish"},
            {text: "kittens"},
            {text: "snake"},
            {text: "badger"},
            {text: "puppies"},
            {text: "lizard"}

        ];

        mainControl.gpadata= [

            ];

        mainControl.gpaAdd = function(){
            if( mainControl.letterToNum(mainControl.gradeField)>-1 && !isNaN(parseInt(mainControl.creditField))) {
                //console.log("Valid!");
                mainControl.gpadata.push({grade: mainControl.gradeField, credits: mainControl.creditField});
                mainControl.gradeField  = "";
                mainControl.creditField  = "";
            }
        };


        mainControl.letterToNum = function(grd){
            if(grd == "A"){
                return 4.00;
            }else if(grd == "A-"){
                return 3.667;
            }else if(grd == "B+"){
                return 3.333;
            }else if(grd == "B"){
                return 3.00;
            }else if(grd == "B-"){
                return 2.667;
            }else if(grd == "C+"){
                return 2.333;
            }else if(grd == "C"){
                return 2.00;
            }else if(grd == "C-" || "S"){
                return 1.667;
            }else if(grd == "D+"){
                return 1.333;
            }else if(grd == "D"){
                return 1.00;
            }else if(grd == "F" || "N"){
                return 0.00;
            }
            else return -1;

        }

        mainControl.addData = function(){
            if(mainControl.textField.length >= 1) {
                mainControl.data.push({text: mainControl.textField});
                mainControl.textField = "";
            }
        };

        mainControl.removeGpaData = function(index){
            mainControl.gpadata.splice(index, 1);
        };

        mainControl.removeData = function(index){
            mainControl.data.splice(index, 1);
        };

        mainControl.cat = function(str1, str2){
            return str1 + str2;
        };

        mainControl.itemsInList = function(){
            return mainControl.data.length;
        };

        mainControl.classesInList = function(){
            return mainControl.gpadata.length;
        };

        mainControl.totalCredits = function(){
            var total = 0;
            var end = mainControl.gpadata.length;
            for(var i = 0; i < end; i++ ) {
                total += parseInt(mainControl.gpadata[i].credits);
            }
            return total;
        }

        mainControl.grdPts = function(grd1, grd2, grd3){


            var totalPts = grdPts1 + grdPts2 + grdPts3;
            return totalPts;
        }

        mainControl.gpa = function(){

        }

        mainControl.classesInList = function(){
            return mainControl.gpadata.length;
        };

    });
