document.addEventListener('DOMContentLoaded', () => {
  const subscribeForm = document.forms.subscribe;
  let subInput = subscribeForm.textinput;
  let subBtn = subscribeForm.subscribebutton;
  subBtn.addEventListener('click', (event) => {
    // Отменяем стандартное поведение. Дальше собираем данные и можем их отправить
    // на сервер с помощью fetch. Без перезагрузки страницы.
    event.preventDefault();
    console.log(subInput.value)
    subInput.value = '';
  });
});