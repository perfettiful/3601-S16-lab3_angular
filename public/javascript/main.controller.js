//==================== MAIN CONTROLLER ==================================
    angular.module('stdControllers').controller('mainCtrl', function(){
        var mainControl = this;
        console.log("Main controller loaded!");

        mainControl.textField = "";

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

        mainControl.addData = function(){
            if(mainControl.textField.length >= 1) {
                mainControl.data.push({text: mainControl.textField});
                mainControl.textField = "";
            }
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

        mainControl.totalCredits = function(crd1, crd2, crd3){
            return crd1 + crd2 + crd3;
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
