// create all of our DOM selectors
var inputUsername = document.getElementById("username")
var inputUsername = document.getElementById("password")
var inputUsername = document.getElementById("submit")

var currPassword = document.getElementById("curr-password")
var currUsername = document.getElementById("curr-username")
var submitButton = document.

// This is our baseline user object for when nothing is available in local storage
var userObj = { username: "", password: ""};
function loadPage(){

// Check local storage to see if anything is there
var userInStorage = localStorage.getItem("user");

// if we get anything from local storage, it will be a string
if(userInStorage !== null && userInStorage.length){
  userObj = JSON.parse(userInStorage);
}


// update the DOM with any username previously stored
if(userObj.username.length){
  currUsername.textContent = userObj.username;
}

if(userObj.password.length){
  currPassword.textContent = userObj.password;
}


function submitForm(event){
  event.preventDefault();


  var submittedUsername = inputUsername.value;
  var submittedPassword = inputPassword.value;

  if( !submittedUsername.lenght || !submittedPassword.length ){
    alert("fill out the form");
  } else {
    // its ok to proceed
    userObj.username = submittedUsernamd;
    userObj.password = submittedPassword;

    // we cannot write this object to local storage, needs to be a string
    var userObjStr = JSON.stringify(userObj)

    // write the string value in local storage
    localStorage.setItem("user", userObjStr);
  }

}

// create event listener for the submit button
submitButton.addEventListener("click", submitForm);

loadPage();