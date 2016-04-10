var zen = ["patience","yoga","silence"]
console.log(zen)

zen.push("bikram")
console.log(zen) //* Add an element to the back of an array.


zen.pop()
console.log(zen) //* Remove an element from the back of an array.


zen.unshift("meditation")
console.log(zen) //* Add an element to the front of an array.


zen.shift()
console.log(zen) //* Remove an element from the front of an array.


console.log("Today, I practiced " + zen[0] + "." + " Tomorrow, I will practice " + zen[2] + ".") //*Concatenates all the elements in an array into a string.

var message = ["i", "love", "GA"]
console.log(message)
console.log(message.join(" ")) //* Separates the characters of a string into an array.



var numbers = [ 2, 4, 6, 8 ];
numbers.pop(); //removes 8
numbers.push( 10 ); //adds 10 to the end
numbers.unshift( 3 ); //adds 3 to the beginning
console.log(numbers)

var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " ); //adds dash between each word
console.log(morse)
console.log(moreMorse)
moreMorse.split( " " ); //
console.log(moreMorse.split(" "))
