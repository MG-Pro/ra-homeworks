'use strict';

class App extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      list: []
    };
    this.TableWrapComp = tableWrap(MonthTable);
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
      this.setState(response.data);
    });
  }

  render() {
    const { TableWrapComp } = this;
    return (
      <div id = "app">
        <TableWrapComp list = {this.state.list} />
      </div>
    );
  }
}



function tableWrap(Component) {
  return class extends React.Component {
    render() {
      console.log(this);
      const list = this.props.list.map(item => {
        const element = {};
        element.month = (new Date(item.date)).toLocaleString('en-us', { month: "short" });
        element.amount = item.amount;
        return element;
      });
      return <Component list = {list}/>
    }

  }
}







