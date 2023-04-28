function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector('.close');
const form = document.querySelector('form');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener('click', closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close Modal
function closeModal() {
  modalbg.style.display = 'none';
}

// validate modal form

var firstError = document.getElementById("first1");
var lastError = document.getElementById("last1");
var emailError = document.getElementById("email1");
var birthDateError = document.getElementById("birthdate1");
var quantityError = document.getElementById("quantity1");
var locationsError = document.getElementById("locations1");
var checkboxError = document.getElementById("checkbox");


function validate(input) {
  var first = document.getElementById("first").value;

  if (first.length < 2) {
    firstError.innerHTML = "Please enter 2+ characters for the first name field.";
    input.style.border = "2px solid #e54858";
    return false;
  }
  if(/^\s*$/.test(input.value)){
    input.style.border = "2px solid #e54858";
    input.value = '';
  }
  firstError.innerHTML = '';
  input.style.border = "2px solid #2e8b57";
  return true;
}


function validate1(input){
  var last = document.getElementById("last").value;

  if (last.length < 2) {
    lastError.innerHTML = "Please enter 2+ characters for the last name field.";
    input.style.border = "2px solid #e54858";
    return false;
  }
  if(/^\s*$/.test(input.value)){
    input.style.border = "2px solid #e54858";
    input.value = '';
  }
  lastError.innerHTML = '';
  input.style.border = "2px solid #2e8b57";
  return true;
}

function validate2(input){
  var email = document.getElementById("email").value;

  if(/^\s*$/.test(input.value)){
    input.value = '';
  }

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    input.style.border = "2px solid #e54858";
    return false;
  }

  if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    emailError.innerHTML = "Enter email in the correct format (email@email.com)";
    input.style.border = "2px solid #e54858";
    return false;
  }

  emailError.innerHTML = '';
  input.style.border = "2px solid #2e8b57";
  return true;
}

function validate3(input) {

  var birthdate = document.getElementById("birthdate").value;
  if(!/^\d{4}-\d{2}-\d{2}$/.test(birthdate)) {
      return -1;
  }
  let parts = birthdate.split('-');
  let now = new Date();
  let year = parseInt(parts[0], 10);
  let currentYear = now.getFullYear();
  
  if(year >= currentYear) {
    birthDateError.innerHTML = 'You must enter valid date.';
    input.style.border = "2px solid #e54858";
    return false;
  }
  if( (currentYear - year) < 18 ){
    birthDateError.innerHTML = 'You are under 18.';
    input.style.border = "2px solid #e54858";
    return false;
  }
  birthDateError.innerHTML = '';
  input.style.border = "2px solid #2e8b57";
  return true;
}

function validate4(input) {
  var quantity = document.getElementById("quantity").value;

  if (quantity.length == 0) {
      quantityError.innerHTML = 'Please enter a numeric value.';
      input.style.border = "2px solid #e54858";
      return false;
  }
  
  quantityError.innerHTML = '';
  input.style.border = "2px solid #2e8b57";
  return true;
}

function validate5() {
  var location = document.getElementsByName("location");
  let currentLocation;
  for (i = 0; i < location.length; i++) {
    if (location[i].checked) {
      currentLocation = location[i].value;
    }
  }
  if (typeof currentLocation == 'undefined') {
    locationError.innerHTML = 'You must choose one option';
    return false;
  }
    locationError.innerHTML = '';
    return true;
}
















