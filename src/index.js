import './index.html';
import './index.scss';

let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');
let submitBtn = document.querySelector('.form-button');

submitBtn.addEventListener('click', () => {
  console.log(`${password.value}, ${confirmPassword.value}`);
  comparePasswords(password.value, confirmPassword.value);
});

function comparePasswords(password1, password2) {
  if (password1 == '' || password2 == '') {
    alert('Fill in the password field');
    return;
  }
  if (password1 !== password2) {
    alert('Passwords do not match');
  } else if (password1 == password2) {
    alert('Passwords match');
  }
}
