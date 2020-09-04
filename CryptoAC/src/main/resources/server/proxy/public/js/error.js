"use strict";

// this JS file animates the error page


let loop1,loop2,loop3,time=40, i=0, number, selector1, selector2, selector3, finalDigitForSelector1, finalDigitForSelector2, finalDigitForSelector3;


function randomNum() {
    return Math.floor(Math.random() * 9)+1;
}

// when the document is ready
$(document).ready( function() {

    selector1 = document.getElementsByClassName("firstDigit")[0];
    selector2 = document.getElementsByClassName("secondDigit")[0];
    selector3 = document.getElementsByClassName("thirdDigit")[0];

    finalDigitForSelector1 = selector1.textContent;
    finalDigitForSelector2 = selector2.textContent;
    finalDigitForSelector3 = selector3.textContent;

    loop3 = setInterval(function() {
      "use strict";
        if(i > 40) {
            clearInterval(loop3);
            selector3.textContent = finalDigitForSelector3;
        }
        else {
            selector3.textContent = randomNum();
            i++;
        }
    }, time);
    loop2 = setInterval(function() {
      "use strict";
        if(i > 80) {
            clearInterval(loop2);
            selector2.textContent = finalDigitForSelector2;
        }
        else {
            selector2.textContent = randomNum();
            i++;
        }
    }, time);
    loop1 = setInterval(function() {
      "use strict";
        if(i > 100) {
            clearInterval(loop1);
            selector1.textContent = finalDigitForSelector1;
        }
        else {
            selector1.textContent = randomNum();
            i++;
        }
    }, time);
});