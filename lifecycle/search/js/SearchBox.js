class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }


  isFixed(scroll) {
    const elem = document.querySelector('.search-box');
    return scroll > elem.offsetTop;
  }

  setPosition(isFixed) {
    this.setState({
      fixed: isFixed
    });
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
       this.setPosition(this.isFixed(window.pageYOffset));
    });
  }



  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }
}
