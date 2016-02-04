/**
 * Created by perfe017 on 2/4/16.
 */

angular.module('stdComponents').controller('footerCtrl', function(){
    var footer = this;
    console.log("Footer controller loaded");

    footer.pages = [
        {text: "Authors: Nate and Sydney"},
        {text: "Copyright Info", link: '/wefwrtbertbeb'},
        {text: "Related Documents", link: '/wefwrtbertbeb'},
    ];
});
