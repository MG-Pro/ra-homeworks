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
        <SortTableWrap>
          <MonthTable list = {this.state.list}/>
          <YearTable list = {this.state.list}/>
          <SortTable list = {this.state.list}/>
        </SortTableWrap>
      </div>
    );
  }
}

class SortTableWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: this.props.children
    }
  }

  componentDidUpdate() {
    const children = this.props.children.map(item => {
      console.log(item);
       item.props.list
    });
  }


  render() {
    return this.props.children;
  }

}