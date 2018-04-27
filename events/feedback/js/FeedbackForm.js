'use strict';



function FeedbackForm(props) {

  let form;
  let name;
  let email;
  let message;
  let subject;

  function submitHandler(e) {
    e.preventDefault();
    const data = {};
    data.salutation = form.querySelector('input[name=salutation]:checked').value;
    data.name = name.value;
    data.email = email.value;
    data.subject = subject.value;
    data.message = message.value;
    data.snacks = Array.from(form.querySelectorAll('input[name=snacks]:checked')).map(item => {
      return item.value
    });
    if(typeof props.onSubmit !== 'function') {
      console.log('Передан неверный параметр');
    }
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
          defaultValue = {props.data.name || null} ref={elem => name = elem}/>
      </div>
      <div className = "contact-form__input-group">
        <label className = "contact-form__label" htmlFor = "email">Адрес электронной почты</label>
        <input className = "contact-form__input contact-form__input--email" id = "email" name = "email" type = "email"
          defaultValue = {props.data.email || null} ref={elem => email = elem}/>
      </div>
      <div className = "contact-form__input-group">
        <label className = "contact-form__label" htmlFor = "subject">Чем мы можем помочь?</label>
        <select className = "contact-form__input contact-form__input--select" id = "subject" name = "subject"
          defaultValue = {props.data.subject || null} ref={elem => subject = elem}>
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>
      <div className = "contact-form__input-group">
        <label className = "contact-form__label" htmlFor = "message">Ваше сообщение</label>
        <textarea className = "contact-form__input contact-form__input--textarea" id = "message" name = "message"
          rows = "6" cols = "65" defaultValue = {props.data.message || null} ref={elem => message = elem}/>
      </div>
      <Snacks data = {props.data.snacks || []}/>
      <button className = "contact-form__button" onClick = {submitHandler} type = "submit"> Отправить сообщение!
      </button>
      <output id = "result"/>
    </form>
  );
}

const Salutation = props => {

  return (
    <div className="contact-form__input-group">
      <input className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" value="Мистер" defaultChecked={'Мистер' === props.data}/>
      <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
      <input className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" type="radio" value="Мисис" defaultChecked={'Мисис' === props.data}/>
      <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
      <input className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" type="radio" value="Мис" defaultChecked={'Мис' === props.data}/>
      <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
    </div>
  );
};

const Snacks = props => {
  console.log(props);
  return (
    <div className = "contact-form__input-group">
      <p className = "contact-form__label--checkbox-group">Хочу получить:</p>
      <input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца" defaultChecked={props.data.includes('пицца')}/>
      <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
      <input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог" defaultChecked={props.data.includes('пирог')}/>
      <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
    </div>
  )
};