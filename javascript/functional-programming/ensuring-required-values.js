const required = () => { throw new Error('Missing required param(s)') }

function multiply(a = required(), b = required() ){
	return a * b
}

multiply()             // ERROR: Missing required param(s) 
multiply(5) 		   // ERROR: Missing required param(s) 
multiply(5, undefined) // ERROR: Missing required param(s) 
multiply(undefined, 4) // ERROR: Missing required param(s) 
multiply(5, 4) // 20
