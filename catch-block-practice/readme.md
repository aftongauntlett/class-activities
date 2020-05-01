# Catch block practice

* Create a file that will be executable in node.
* Create three functions:
* The first takes two string arguments and console.logs how many characters total are in the two strings
* The second takes two number arguments and multiples them together, and console.logs the response
* The third takes a year as an argument, and console.logs how many years ago it was (you cannot hard code the current year; look up how to do this)
* Call each function, but wrap each function call inside a try/catch block. Example:

``` try {
    countLetters("hello", "world");
  } catch (err) {
    // Do stuff here
  } 
  ```

* You should call each function with correct parameters, and each function with incorrect parameters, so that your try/catch block can be tested.
* Have at least one of the functions throw a custom error. For instance, the year function can throw an error if the user supplies a year AFTER the current year
