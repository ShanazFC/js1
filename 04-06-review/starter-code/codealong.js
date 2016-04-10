// var firstName = "Johnny"
// var lastName = "Austin"
//
// // console.log("The person's first name is " + firstName)
// // console.log("The person's last name is " + lastName)
//
//
// var number = "15"
// var number2 = 15
//
//
//
// // console.log(number)
// // console.log(number2)
// // console.log("He is " + number + 3)
// // console.log("He is " + (number2 + 3))
//
// var names = ["johnny", "austin"]
//
// // console.log(names)
// // console.log("The number of names is " + names.length)
// // console.log(names.push('ray'))
// // console.log(names)
//
//
// var things = ["foo", "bar", "beep"];
//
// for (var i=0; i < things.length; i++) {
//   console.log(things);
//   // console.log(things[i]);
// }
//
// things.forEach(function(thing, index) {
//   console.log(thing);
// })
//
// // var myObj = [
// //   key: 'value';
// //   aNum: 22;
// //   doSomething: function();
// // ]
// //
// // console.log(myObj);
// //
// // name: 'johnny',
// // anotherobj: {
// //     another one: {
// //       name: 'dj khaled'
// //
// //     },
// //     anotherTwo: {
// //       name: 'me'
// //     },
// // }
// //
// // var anArray = {
// //   123: {
// //     name: 'johnny',
// //     id: 123
// //   },
// //   321: {
// //     name: 'jimmy',
// //     id: 321,
// //   }
// // };
// //
// // for (var i = 0; i < anArray.length; i++) {
// //   var localObj = anArray[i];
// //   console.log(anArray.id)
// // }
//
// var myObj = {
//   array1: ['foo', 'bar'],
//   array2: ['beep', 'boop'],
//   key: ['whaaat'],
// };
//
// for (var key in myObj) {
//   console.log(myObj[key]);
// }
//
// var printName = function(name) {
//   console.log(first + ' ' + last);
// }

var firstName = "Sam";
var lastName = "Austin";
var printName = function(first, last) {
  console.log(first + ' ' + last);
}
printName(firstName, lastName);
