'use strict';

class App extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      list: []
    };
    this.TableWrapMonth = tableWrap(MonthTable);
    this.TableWrapYear = tableWrap(YearTable);
    this.TableWrapSort = tableWrap(SortTable);
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
      this.setState(response.data);
    });
  }

  render() {
    const { TableWrapMonth, TableWrapYear, TableWrapSort } = this;
    return (
      <div id = "app">
        <TableWrapMonth list = {this.state.list} />
        <TableWrapYear list = {this.state.list} />
        <TableWrapSort list = {this.state.list} />
      </div>
    );
  }
}



function tableWrap(Component) {
  return class extends React.Component {
    render() {
      console.log(this, Component.name);
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







