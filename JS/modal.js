function editNav() {
  var x = document.getElementById('myTopnav');
  var y = document.getElementById('close-navbar');
  if (x.className === 'topnav') {
    x.className += ' responsive';
    y.className += 'close-div';
  } else {
    x.className = 'topnav';
    y.className = '';
  }
}
// Invisible Div to enable click away to close menu
function closeNav() {
  var x = document.getElementById('myTopnav');
  var y = document.getElementById('close-navbar');

  x.className = 'topnav';
  y.className = '';
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalSubmitted = document.querySelector('.bground_submitted');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const form = document.querySelector('form');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// Close Modal
function closeModal() {
  modalbg.style.display = 'none';
  modalSubmitted.style.display = 'none';
}

const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', closeModal);
document.querySelector('.close-modal').addEventListener('click', closeModal);
document.querySelector('.close-x').addEventListener('click', closeModal);

// validate modal form

const firstError = document.getElementById("first1");
const lastError = document.getElementById("last1");
const emailError = document.getElementById("email1");
const birthDateError = document.getElementById("birthdate1");
const quantityError = document.getElementById("quantity1");
const locationsError = document.getElementById("locations1");
const checkboxError = document.getElementById("checkbox");

// validate First name
function FirstName(input) {
  let first = document.getElementById("first").value;

  if (first.length <= 2) {
    firstError.innerHTML = "Please enter more than 2 characters.";
    return false;
  }
  if(/^\s*$/.test(input?.value)){
    input.value = '';
  }
  firstError.innerHTML = '';
  return true;
}

// validate Last name
function LastName(input){
  let last = document.getElementById("last").value;

  if (last.length <= 2) {
    lastError.innerHTML = "Please enter more than 2 characters.";
    return false;
  }
  if(/^\s*$/.test(input?.value)){
    input.value = '';
  }
  lastError.innerHTML = '';
  return true;
}

// validate Email
function Email(input){
  let email = document.getElementById("email").value;

  if(/^\s*$/.test(input?.value)){
    input.value = '';
  }

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    emailError.innerHTML = "Enter email in the correct format (email@email.com)";
    return false;
  }

  emailError.innerHTML = '';
  return true;
}

// validate Birthdate
function Birthdate(input) {

  let birthdate = document.getElementById("birthdate").value;
  if(!/^\d{4}-\d{2}-\d{2}$/.test(birthdate)) {
      return 0;
  }
  let parts = birthdate.split('-');
  let now = new Date();
  let year = parseInt(parts[0], 10);
  let currentYear = now.getFullYear();
  
  if(year >= currentYear) {
    birthDateError.innerHTML = 'You must enter valid date.';
    return false;
  }
  if( (currentYear - year) < 18 ){
    birthDateError.innerHTML = 'You are under 18.';
    return false;
  }
  birthDateError.innerHTML = '';
  return true;
}

// Validate Tournament Selection
function Quantity() {
  let quantity = document.getElementById("quantity");
  if (quantity.value == '' || quantity.value == null ) {
    quantityError.innerHTML = 'Please enter number of tournaments attended.';
    return false;
  }
  if (quantity.value == 0 ) {
    quantityError.innerHTML = 'You need to be at least participated in 1 tournament';
    return false;
  }
    quantityError.innerHTML = '';

    return true;
}

// Validate Location Selection
function Location() {
  let location = document.getElementsByName("location");
  for(let i=0; i<location.length; i++){
    if(location[i].checked){
      locationsError.innerHTML = '';
      return true;
    }
  }
    locationsError.innerHTML = 'Please select a location';
    return false;
}

// Validate Terms
function Terms() {
  let terms = document.getElementById("checkbox1");
  if (terms.checked == false) {
    checkboxError.innerHTML = 'You must accept the terms and conditions';
    return false;
  } else {
    checkboxError.innerHTML = '';
    return true;
  }
}

// Validate Form
let criteriaCheck = false;

function validate() {
  if (
    FirstName() === true &&
    LastName() === true &&
    Email() === true &&
    Birthdate() === true &&
    Quantity() === true &&
    Location() === true &&
    Terms() === true
  ) {
    criteriaCheck = true;
    return true;
  } else {
    return false;
  }
  
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let first = document.getElementById("first");
  let last = document.getElementById("last");
  let email = document.getElementById("email");
  let birthdate = document.getElementById("birthdate");
  let quantity = document.getElementById("quantity");
  let location = document.getElementsByName("location");
  let terms = document.getElementById("checkbox1");
  validate();
  if (criteriaCheck == true) {
    modalbg.style.display = 'none';
    modalSubmitted.style.display = 'block';
    first.value = '';
    last.value = '';
    email.value = '';
    birthdate.value = '';
    quantity.value = '';
    location.checked = false;
    terms.checked = false;
  }
});













