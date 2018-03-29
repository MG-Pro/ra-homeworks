'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      viewType: VIEW_MODULE
    };
  }
  switchHandler(e) {
    console.log("сменился тип вывода");

    let viewType;
    if(e.target.textContent === VIEW_MODULE) {
      viewType = VIEW_LIST;
    } else {
      viewType = VIEW_MODULE
    }
    this.setState({
      viewType: viewType
    });
  }

  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.state.viewType}
            onSwitch={(e) => this.switchHandler(e)} />
        </div>
        {this.renderLayout(this.state.viewType === VIEW_MODULE)}
      </div>
    );
  }

  renderLayout(cardView) {
    if (cardView) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (cardView) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }
}
