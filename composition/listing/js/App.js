'use strict';

// v.1

//const App = (props) => (
//    <List items = {props.items} />
//);
//
//const List = props => {
//   return (
//     <main>
//       {props.items.map(item => {
//         switch(item.type) {
//           case 'unisex':
//             return <Item color="black" item={item} />;
//           case 'male':
//             return <Item color="blue" item={item} />;
//           case 'female':
//             return <Item color="orange" item={item} />;
//         }
//       })}
//     </main>
//   );
//};

// v. 2

const App = (props) => (
  <main>
    {getItems(props.items)}
  </main>
);

const getItems = items => {
  return items.map(item => {
        switch(item.type) {
          case 'unisex':
            return <Item color="black" item={item} />;
          case 'male':
            return <Item color="blue" item={item} />;
          case 'female':
            return <Item color="orange" item={item} />;
        }
      })


};
