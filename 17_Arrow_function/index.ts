// Basic Arrow Functions Question:
// Define a Arrow function called greet that takes a parameter name and returns a greeting message including the provided name. Then, call the greet Arrow function with the argument "John" and log the result to the console.

      let  greet = () => (`"Good Morning , john!"`)
        
      console.log(greet())

// Arrow Function Return Value Question:
// Write a JavaScript Arrow function named calculateArea that takes two parameters: length and width, representing the length and width of a rectangle respectively. The Arrow function should calculate the area of the rectangle and return the result.

// Provide an example of calling this Arrow function with values 5 for length and 3 for width, and then print the result.
       
let calculateArea = (length: number, width:number ):number => 
    {
        let total = length*width
        return total
}
let result = calculateArea(5,3)
console.log(result);

// Default Parameter Arrow Function Question:
// Create a JavaScript Arrow function named greet that accepts two parameters: name and greeting. The Arrow function should return a greeting message using the provided name and greeting. If no greeting is provided, it should default to "Hello".

// For example:

// When greet("John", "Good morning") is called, it should return "Good morning, John!".
// When greet("Jane") is called, it should return "Hello, Jane!".

  
  let greet1 =(Name: string,greeting:string= "Hello"): string => {
    let message =  (`"Good Morning" , john!`)
    return message
}
let answer : string= greet1("john" , "Good Morning")
console.log(answer);

// Rest Parameter in Arrow Function Question:
// Explain the concept of a rest parameter in typescript. write a typeScript Arrow function named friend that accepts any name of parameters and returns all name in array.

// For example:

// If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].

let friend= (Name1:string,Name2:string,...names:string[]): string[] =>
{
    let list =  ["hira" , "adil" , "arham"]
    return list
}
let show : string[]= friend("hira" , "adil" , "arham")
console.log(show);


// Spread Operator in Arrow Function:
// Explain the concept of a spread operator in typescript. write a typeScript Arrow function named friend that accepts any name of parameters and returns all name in array.then make a copy of that name and pop last name form array. make sure your orignal array should not be change.

// For example:

// If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].

let friend =  ["hira" , "adil" , "arham", "zunaira"] : string =>{

    let list = [...friend]
    list.pop()
    console.log(list);
    

}


    console.log(friend1);
