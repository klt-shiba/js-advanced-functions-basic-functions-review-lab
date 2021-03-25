// Your code here

// This is a function declaration
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

saturdayFun();


// This is a function expression
let mondayWork = function(work="go to the office") {
    return `This Monday, I will ${work}.`;
}

mondayWork();


// Function-level scope || Scope chain
function wrapAdjective(string="*") {
    return function (adjective="special") {
        return `You are ${string}${adjective}${string}!`;
    }
}
let encouragingPromptFunction = wrapAdjective("!!!")
encouragingPromptFunction("a dedicated programmer");


// Adding functions to an object
let Calculator = {
    add: function(x, y) { 
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    },
    multiply: function(x, y) { 
        return x * y;
    },
    divide: function(x, y) {
        return x / y;
    }
}

// Calling functions using dot notation
Calculator.add(1, 3),
Calculator.subtract(1, 3),
Calculator.add(1, 3),
Calculator.subtract(10, 5)


let arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]

let emptyArray = []

function reduceLoopFunction(currentValue, currentFunction) {
    return currentFunction(currentValue);
}

function actionApplyer(a, b) {
        if (b == "") {    
            return a;
        } else {
            return b.reduce(reduceLoopFunction, a);

        }
    }


console.log(actionApplyer (13, emptyArray))

console.log(actionApplyer (13, arrayOfTransforms))
