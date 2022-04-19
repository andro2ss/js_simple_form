const formPhone = document.getElementById('formPhone');
const formPhoneLabel = document.getElementById('formPhoneLabel');

export default function handleFormPhone() {
  let errorStatus = 0;
  if (formPhone.value.length !== 9) {
    errorStatus = 1;
    formPhone.classList.add('error__input');
    formPhoneLabel.classList.add('error__text');
    formPhoneLabel.innerHTML = 'Numer musi składać się z 9 cyfr';
  } else if (formPhone.classList.contains('error__input')) {
    formPhone.classList.remove('error__input');
    formPhoneLabel.classList.remove('error__text');
    formPhoneLabel.innerHTML = 'Podaj numer telefonu';
  }
  return errorStatus;
};
