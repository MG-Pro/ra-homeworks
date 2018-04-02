'use strict';

const content = [
  {
    header: 'Компоненты',
    article: 'Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.'
  },
  {
    header: 'Выучил раз, используй везде!',
    article: 'После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.'
  },
  {
    header: 'Использование JSX',
    article: 'JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.'
  },
];

class Accordion extends React.Component {

  render() {

    return (
      <main className='main'>
        <h2 className='title'>{this.props.header}</h2>
          {this.props.content.map((item, i) => {return <Item content={item} id={i}/>})}
      </main>
    );

  }
}

class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {content, id} = this.props;
    return (
      <section className={`section ${this.state.isOpen ? "open" : ""}`} key={`Item-${id}`}>
        <button>toggle</button>
        <h3 className='sectionhead' onClick = {() => this.toggleOpen()}>{content.header} </h3>
        <div className='articlewrap'>
          <div className='article'>{content.article}</div>
        </div>
      </section>
    );
  }
}

ReactDOM.render(
  <Accordion content={content} header={'React'}/>,
  document.getElementById('accordion')
);