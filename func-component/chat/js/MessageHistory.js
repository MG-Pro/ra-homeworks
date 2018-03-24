'use strict';

const MessageHistory = props => {
  if (props.list.length === 0) {
    return null;
  }

  return (
    <ul>
      {props.list.map(item => {
        return getItem(item);
      })}
    </ul>
  );

  function getItem(item) {
    if (item.type === 'message') {
      return <Message key = {item.id} from = {item.from} message = {item}/>
    } else if(item.type === 'response') {
      return <Response key = {item.id} from = {item.from} message = {item}/>
    } else {
      return <Typing key = {item.id} from = {item.from} message = {item}/>
    }

  }
};