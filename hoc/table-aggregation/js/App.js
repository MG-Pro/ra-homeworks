'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
      this.setState(response.data);
    });
  }

  render() {
    return (
      <div id = "app">
        <TableWrapComp list = {this.state.list} />
      </div>
    );
  }
}

const TableWrapComp = tableWrap(MonthTable);

function tableWrap(Component) {
  return function (props, ...args) {
    const list = props.list.map(item => {
      const element = {};
      element.month = (new Date(item.date)).getMonth();
      element.amount = item.amount;
      return element;
    });
    return Component.apply(this, [list, ...args])
  }
}







