const formName = document.getElementById('formName');
const formNameLabel = document.getElementById('formNameLabel');

export default function handleFormName() {
  let errorStatus = 0;
  if (formName.value.length <= 3) {
    errorStatus = 1;
    formName.classList.add('error__input');
    formNameLabel.classList.add('error__text');
    formNameLabel.innerHTML = 'Imię i nazwisko musi zawierać więcej niż 3 znaki';
  } else if (formName.classList.contains('error__input')) {
    formName.classList.remove('error__input');
    formNameLabel.classList.remove('error__text');
    formNameLabel.innerHTML = 'Podaj imię i nazwisko';
  }
  return errorStatus;
}
