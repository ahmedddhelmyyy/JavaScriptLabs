console.log(printVariables("test of Question ","Num : 3 ","B : Calling before intialization line"));



// console.log(localVar); ////error
// console.log(testVar); ////error


function printVariables(val1, val2, val3 = 0) {
   
    if (arguments.length > 3) {
        console.log("note: extra arguments were passed but only the first 3 are used.");
    }



    var localVar=3;
testVar=5;

    return [val1, val2, val3];
}

//console.log(localVar); ////error because can not see outside function
 console.log("testing print test var: ",testVar); 




console.log(printVariables("Calling After " , "Intialization " , "Line"))

console.log(printVariables(3 , 5));

console.log(printVariables("if add a forth parameter the interpreter will skip it",2,3,4));

// =======================

//Function expression

// var printVariables = function(val1, val2, val3 = 0) {
//     var localVar = 3;
//     testingVar = 5;
//     return [val1, val2, val3];
// };


// ------------------------------------ASSIGNMENT 2----------------------------------------
// ====================================QUESTION 4=================================

function sumNum(num1, num2) {
    var sum = 0;
  
    if (!isFinite(num1)) {
      num1 = 0;
    }
  
    if (!isFinite(num2)) {
      num2 = 0;
    }
  
  
    sum = num1 + num2;
  
    return sum;
  }
  
  console.log("Sum =", sumNum(7, "h"));  // res = is 7


  