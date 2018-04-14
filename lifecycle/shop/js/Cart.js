class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      isOpen: newProps.items.length !== 0
    })
  }

  render() {
    return (
      <CartView {...this.props} isOpen = {this.state.isOpen}/>
    );
  }

}
