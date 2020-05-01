function addStrings(str1, str2) {
 console.log(str1.length + str2.length);
}


function multiplyNumbers(num1, num2) {
  console.log (num1 * num2);
}


function calculateYears( year ){
  const currYear = new Date().getFullYear();

  if ( year > currYear ){
    throw new Error ("Stop looking into the future.");
  }

  const yearsAgo = currYear - year;
  console.log("The year you provided was " + yearsAgo + " years ago.");
}

// changed string, number and year into cat, meow and kitty to throw errors
try {
  addStrings("Happy", cat)
} catch (err) {
  console.log("No good")
}

try {
  multiplyNumbers("10", meow)
} catch (err) {
  console.log("Math is hard")
}

try {
  calculateYears(2021)
} catch (err) {
  console.log("Too old")
}

// garys code
// function addStrings( str1, str2 ){
//   if( typeof str1 === "string" && typeof str2 === "string" ){
//     console.log( str1.length + str2.length );
//   } else {
//     throw new Error("Only strings allowed.")
//   }
// }
// function multiplyNumbers( num1, num2 ){
//   console.log( num1 * num2 );
// }
// function calculateYears( year ){
//   const currYear = new Date().getFullYear();
//   if( year > currYear ){
//     throw new Error("Stop looking into the future.")
//   }
//   const yearsAgo = currYear - year;
//   console.log( "The year you provided was " + yearsAgo + " years ago." );
// }