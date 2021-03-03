function add (input) {
       return operation(input, function (result, input) {
            return result + input;
        })
    }
function subtract (input) {
    
    try{
    return operation(input, function (result, input) {
            return result - input;
        })
     } catch{
         return "cannot subtract two strings"
     }
    }
function divide (input) {

    return operation(input, function (result, input) {
        
        if (!Number.isFinite(result / input || input === 'error not finite')) {
            return "error not finite";
        }
            return result / input;
        });
        
        
    }
function multiple (input) {

    return operation(input, function (result, input) {
        
        if (!Number.isFinite(result * input )) {
            return "error not finite";
        }
            return result * input;
        });
        
            
    }
function modulo (input) {

    return operation(input, function (result, input) {
        console.log(result, input)
        if (!Number.isFinite(result % input )) {
            return "error not finite";
        }
            return result % input;
        });
            
                
        }
function pow (input) {

    return operation(input, function (result, input) {
        console.log(result, input)
        if (!Number.isFinite(result ** input )) {
            return "error not finite";
        }
            return result ** input;
        });
                    
                        
        }
function operation(input, operator) {
    var result = input.shift();
    for (i = 0; i < input.length; i++) {
        result = operator(result, input[i]);
    }

    return result;
}


module.exports = { add, subtract, divide, multiple, modulo, pow, operation}