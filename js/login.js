import { getFormData } from "./utils.js";
import { endpoints } from "../utils/endpoints.js";
import { alertCustom } from "../utils/alertCustom.js";

const login = async(e) => {
  e.preventDefault();
  // const data = Object.fromEntries(new FormData(e.target))
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  emailInput.classList.remove('is-invalid');
  passwordInput.classList.remove('is-invalid');


  const formData = getFormData(e)
  try {
    const response = await fetch(`${endpoints.users}?email=${formData.email}`)
    const data = await response.json()
    const [user] = data;
    if (!user) {
      emailInput.classList.add('is-invalid');
      return;
    }
    if (formData.password !== user.password) {
      passwordInput.classList.add('is-invalid');
      return;
    }
  
    delete user.password;
    localStorage.setItem('user', JSON.stringify(user));
    window.location.replace('../index.html');
  } catch (error) {
    alertCustom('Uppss...', 'Ha ocurrido un error', 'error', () => 
      window.location.replace('../index.html')
    )
  }


};


document.getElementById('loginForm').addEventListener('submit', login);

