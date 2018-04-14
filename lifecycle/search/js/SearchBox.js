class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  scrollHandler() {
    this.setPosition(this.isFixed(window.pageYOffset));
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
    window.addEventListener('scroll', this.scrollHandler.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler.bind(this));
  }


  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }
}
