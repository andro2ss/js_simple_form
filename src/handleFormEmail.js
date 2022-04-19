import { emailCheck } from './emailCheck';

const formEmail = document.getElementById('formEmail');
const formEmailLabel = document.getElementById('formEmailLabel');

export default function handleFormEmail() {
  let errorStatus = 0;
  if (!emailCheck.test(formEmail.value)) {
    errorStatus = 1;
    formEmail.classList.add('error__input');
    formEmailLabel.classList.add('error__text');
    formEmailLabel.innerHTML = 'Nieprawidłowa forma email';
  } else if (formEmail.classList.contains('error__input')) {
    formEmail.classList.remove('error__input');
    formEmailLabel.classList.remove('error__text');
    formEmailLabel.innerHTML = 'Podaj adres email';
  }
  return errorStatus;
}
