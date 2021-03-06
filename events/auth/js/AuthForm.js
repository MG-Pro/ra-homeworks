'use strict';

const AuthForm = props => {
  let form;

  function submit(e) {
    e.preventDefault();
    const user = {};
    user.name = form.name.value;
    user.email = form.email.value;
    user.pass = form.pass.value;
    props.onAuth(user);
  }


  function checkInput(e) {
    const regEmail = /[^\w@\.-]/i;
    const regPass = /\W/i;
    if (e.target.type === 'email') {
      if (regEmail.test(e.target.value)) {
        e.target.value = e.target.value.replace(regEmail, '');
      }
    } else {
      if (regPass.test(e.target.value)) {
        e.target.value = e.target.value.replace(regPass, '');
      }
    }
  }

  return (
    <form className = "ModalForm" action = "/404/auth/" method = "POST" ref = {elem => form = elem} onSubmit = {submit}>
      <div className = "Input">
        <input required type = "text" placeholder = "Имя" name = "name"/>
        <label/>
      </div>
      <div className = "Input">
        <input type = "email" placeholder = "Электронная почта" onChange = {checkInput} name = "email"/>
        <label/>
      </div>
      <div className = "Input">
        <input required type = "password" placeholder = "Пароль" onChange = {checkInput} name = "pass"/>
        <label/>
      </div>
      <button type = "submit" >
        <span>Войти</span>
        <i className = "fa fa-fw fa-chevron-right"/>
      </button>
    </form>
  );
};