'use strict';

fetch('https://neto-api.herokuapp.com/etsy')
  .then(response => {
    return response.json();
  })
  .then(result => {
    console.log(result);
    ReactDOM.render(
      <Listing items = {result}/>,
      document.getElementById('root')
    );
  })
  .catch(error => {
    console.log(`Ошибка ${error}`);
  });

let Listing = props => {
  return (
    <div className = 'item-list' >
      {
        props.items.map(item => {
          let currency = '';
          let currencyOther = '';
          let quantityLevel;

          if(item.currency_code === 'USD') {
            currency = '$';
          } else if(item.currency_code === 'EUR') {
            currency = '&#8364;';
          } else {
            currencyOther = ' GBR'
          }

          if(item.quantity <= 10) {
            quantityLevel = 'level-low';
          } else if(item.quantity <= 20) {
            quantityLevel = 'level-medium';
          } else {
            quantityLevel = 'level-high';
          }

          return (
            <div className='item' key = {item.listing_id}>
              <div className='item-image'>
                <a href = {item.url}>
                  <img src = {item.MainImage.url_570xN}/>
                </a>
              </div>
              <div className='item-details'>
                <p className='item-title'>{item.title}</p>
                <p className='item-price'>{`${currency}${item.price} ${currencyOther}`}</p>
                <p className={`item-quantity ${quantityLevel}`}>{`${item.quantity} left`}</p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

