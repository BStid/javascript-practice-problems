/*
Closures cannot access the arguments object of the parent, 
but, because functions are first class objects, we can pass a function as a parameter. 
The closure can now access the arguments object of the function that is passesd as a parameter.
So, there is no confusion as to which arguments object we want the closure to access. 
We're basically taking advantage of its limitations
*/
function demoMemo(func) {
  //we must return a function in order to keep state

  return function() {
    console.log(func); // >   function (num){num + num}
    console.log(arguments[0]); //  1
  };
}

// Our function expression here calls demoMemo and passes it an anonymous function.
var adder = demoMemo(function(num) {
  num + num;
});

//Once that is passed, as you can see, when we call our function expression,
//we have access to all the properties of the function we want to memoize

adder(1);
