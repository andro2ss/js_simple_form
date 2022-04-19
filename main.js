import './main.scss';
import handleFormName from './src/handleFormName';
import handleFormEmail from './src/handleFormEmail';
import handleFormPhone from './src/handleFormPhone';

const pageForm = document.getElementById('pageForm');
const formContainer = document.querySelector('.form__container');

const formValidation = () => {
  return handleFormEmail() + handleFormName() + handleFormPhone();
};

const handleFormOnSubmit = (e) => {
  e.preventDefault();
  if (formValidation() === 0) {
    formContainer.innerHTML = `<span class="form__text--thanks">${'Dziękujemy za wypełnienie formularza'}</span>`;
  }
};

pageForm.addEventListener('submit', handleFormOnSubmit);
