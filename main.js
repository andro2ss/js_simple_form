import './main.scss';

const formularz = document.getElementById('formularz');
const nameField = document.getElementById('formName');
const emailField = document.getElementById('formEmail');
const phoneField = document.getElementById('formPhone');



function handleFormName() {
  console.log(nameField.value);
  if (nameField.value.length <= 3) {
    nameField.classList.add('error__input');
  } else if (nameField.classList.contains('error__input')) {
    nameField.classList.remove('error__input');
  }
}

function handleFormOnSubmit(e) {
  e.preventDefault();
  handleFormName();
  console.log(nameField.value);
}

formularz.addEventListener('submit', handleFormOnSubmit);
