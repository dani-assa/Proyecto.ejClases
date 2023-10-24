import { getFormData } from "./utils.js";
import db from '../fakeDb/db.json' assert {type: 'json'};

const login = (e) => {
  e.preventDefault();
  // const data = Object.fromEntries(new FormData(e.target))
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  emailInput.classList.remove('is-invalid');
  passwordInput.classList.remove('is-invalid');


  const formData = getFormData(e)
  const userExist = db.users.find((user) => user.email === formData.email);
  if (!userExist) {
    emailInput.classList.add('is-invalid');
    return;
  }
  if (formData.password !== userExist.password) {
    passwordInput.classList.add('is-invalid');
    return;
  }

  delete userExist.password;
  localStorage.setItem('user', JSON.stringify(userExist));
  window.location.replace('../index.html')
};


document.getElementById('loginForm').addEventListener('submit', login);

