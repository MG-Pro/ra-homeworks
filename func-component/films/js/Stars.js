'use strict';

function Stars(props) {
  //debugger;
  return (
    <ul className = "card-body-stars u-clearfix">
      {
        Array.from({length: props.count}).map((item, i) => {
          return (
            <li>
              <Star key = {`item_${i}`}/>
            </li>
          )
        })
      }
    </ul>
  );
}
