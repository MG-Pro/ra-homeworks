'use strict';

function FeedbackForm(props) {
  console.log(props);
  const Salutation = data => {
    const salutation = [
      ['Мистер', 'mr'],
      ['Мисис', 'mrs'],
      ['Мис', 'ms']
    ];

    const list = [];
    salutation.forEach((item) => {
      let checked = false;
      if (data.data === item[0]) {
        checked = true;
      }
      list.push(<input className = "contact-form__input contact-form__input--radio" id = {`salutation-${item[1]}`}
        name = "salutation" type = "radio" value = {item[0]} defaultChecked = {checked}/>);
      list.push(<label className = "contact-form__label contact-form__label--radio"
        htmlFor = {`salutation-${item[1]}`}>{item[0]}</label>)
    });

    return (
      <div className = "contact-form__input-group">
        {list}
      </div>
    );
  };

  const Snacks = data => {
    const snacks = [
      ['Пиццу', 'пицца', 'snacks-pizza'],
      ['Пирог', 'пирог', 'snacks-cake']
    ];
    const list = [];
    snacks.forEach(item => {
      let checked = data.data.some(val => {
        return item[1] === val
      });

      list.push(<input className = "contact-form__input contact-form__input--checkbox" id = {item[2]} name = "snacks"
        type = "checkbox" value = {item[1]} defaultChecked = {checked}/>);
      list.push(<label className = "contact-form__label contact-form__label--checkbox"
        htmlFor = {item[2]}>{item[0]}</label>);
    });

    return (
      <div className = "contact-form__input-group">
        <p className = "contact-form__label--checkbox-group">Хочу получить:</p>
        {list}
      </div>
    )
  };

  let form;

  function submitHandler(e) {
    e.preventDefault();
    //debugger;
    const data = {};
    data.salutation = form.querySelector('input[name=salutation]:checked').value;
    data.name = document.getElementById('name').value;
    data.email = document.getElementById('email').value;
    data.subject = form.querySelector('select[name=subject]').value;
    data.message = document.getElementById('message').value;
    data.snacks = Array.from(form.querySelectorAll('input[name=snacks]:checked')).map(item => {
      return item.value
    });

    props.onSubmit(JSON.stringify(data));
  }

  return (
    <form className = 'content__form contact-form' ref = {elem => form = elem}>
      <div className = "testing">
        <p>Чем мы можем помочь?</p>
      </div>
      <Salutation data = {props.data.salutation || null}/>
      <div className = "contact-form__input-group">
        <label className = "contact-form__label" htmlFor = "name">Имя</label>
        <input className = "contact-form__input contact-form__input--text" id = "name" name = "name" type = "text"
          defaultValue = {props.data.name || null}/>
      </div>
      <div className = "contact-form__input-group">
        <label className = "contact-form__label" htmlFor = "email">Адрес электронной почты</label>
        <input className = "contact-form__input contact-form__input--email" id = "email" name = "email" type = "email"
          defaultValue = {props.data.email || null}/>
      </div>
      <div className = "contact-form__input-group">
        <label className = "contact-form__label" htmlFor = "subject">Чем мы можем помочь?</label>
        <select className = "contact-form__input contact-form__input--select" id = "subject" name = "subject"
          defaultValue = {props.data.subject || null}>
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>
      <div className = "contact-form__input-group">
        <label className = "contact-form__label" htmlFor = "message">Ваше сообщение</label>
        <textarea className = "contact-form__input contact-form__input--textarea" id = "message" name = "message"
          rows = "6" cols = "65" defaultValue = {props.data.message || null}/>
      </div>
      <Snacks data = {props.data.snacks || []}/>
      <button className = "contact-form__button" onClick = {submitHandler} type = "submit"> Отправить сообщение!
      </button>
      <output id = "result"/>
    </form>
  );
}