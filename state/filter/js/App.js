'use strict'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: null,
      projects: null
    };
  }

  setFilter(filter)  {
    const filtered = this.props.projects.filter(item => {
      return item.category === filter;
    });
    this.setState({
      filter: filter,
      projects: filtered
    });
  };

  render() {
    return (
      <div>
        <Toolbar
          filters = {this.props.filters}
          selected = {this.state.filter || 'All'}
          onSelectFilter = {filter => this.setFilter(filter)}/>
        <Portfolio projects = {this.state.projects || this.props.projects}/>
      </div>
    );
  }
}



