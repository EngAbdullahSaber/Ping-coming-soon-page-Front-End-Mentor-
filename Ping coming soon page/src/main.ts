const form = document.querySelector('.email-form');

function validateEmail(email: string) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const container: HTMLDivElement = form.querySelector('.email-form__input-container');
  const input: HTMLInputElement = form.querySelector('.email-form__input');

  if (input.value === '' || !validateEmail(input.value)) {
    container.classList.add('email-form__error');
  } else {
    container.classList.remove('email-form__error');
  }
});
