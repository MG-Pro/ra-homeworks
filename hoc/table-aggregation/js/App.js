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
        <TableWrapMonth list = {this.state.list} type = 'month'/>
        <TableWrapYear list = {this.state.list} type = 'year'/>
        <TableWrapSort list = {this.state.list} type = 'sort'/>
      </div>
    );
  }
}



function tableWrap(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        type: this.props.type
      };
    }

    getDataType() {
      const type = this.state.type;
      if(type === 'month') {
        return this.props.list.map(item => {
          const element = {};
          element[type] = (new Date(item.date)).toLocaleString('en-us', { month: "short" });
          element.amount = item.amount;
          return element;
        });
      } else if(type === 'year') {
        return this.props.list.map(item => {
          const element = {};
          element[type] = (new Date(item.date)).getFullYear();
          element.amount = item.amount;
          return element;
        });
      } else if (type === 'sort') {
        return this.props.list.sort((a, b) => {
          return a.date > b.date
        })
      }
    }

    render() {
      return <Component list = {this.getDataType() || null}/>
    }
  }
}







