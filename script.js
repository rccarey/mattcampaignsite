/* global $ */

// vars
var viewportWidth = $( window ).width();

//functions
function triangleCalculate() {
    $(".triangle").css(
        'border-width', Math.round(viewportWidth * .07) + 'px ' + //top
                        viewportWidth + 'px ' + //left
                        0 + 'px ' + //bottom
                        0 //right
    );
}

//main
$( document ).ready(function () {
    //triangle
    triangleCalculate();

    // window resize
    $( window ).resize(function() {
        triangleCalculate();
        
        var originalVars;
        //breakpoints
        if (viewportWidth > 600) {
            
        } else {
            
        }
    });
    
});

