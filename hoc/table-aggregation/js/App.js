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
    const {TableWrapMonth, TableWrapYear, TableWrapSort} = this;
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

    getDataType(type) {
      if (type === 'month') {
        return groupBy(this.props.list, type);
      } else if (type === 'year') {
        return groupBy(this.props.list, type);
      } else if (type === 'sort') {
        return this.props.list.sort((a, b) => {
          return (new Date(b.date)) - (new Date(a.date));
        });
      }
    }

    render() {
      return <Component list = {this.getDataType(this.state.type) || []}/>
    }
  }
}

function groupBy(list, param) {
  return list.reduce((result, item) => {
    const metod = param === 'month' ?
      (new Date(item.date)).toLocaleString('en-us', {month: "short"}) :
      (new Date(item.date)).getFullYear();

    let curElem = result.find(resItem => {
      return resItem[param] === metod;
    });

    if (curElem) {
      curElem.amount += item.amount;
    } else {
      result.push({[param]: metod, amount: item.amount});
    }
    return result;
  }, []);
}



