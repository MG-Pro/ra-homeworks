'use strict';

const List = props => {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <ViewsWrap views = {item.views}>
            <Video {...item} />
          </ViewsWrap>
        );

      case 'article':
        return (
          <ViewsWrap views = {item.views}>
            <Article {...item} />
          </ViewsWrap>
        );
    }
  });
};

const ViewsWrap = props => {
  if (props.views >= 1000) {
    return (
      <Popular>
        {props.children}
      </Popular>
    );
  } else if (props.views <= 100) {
    return (
      <New>
        {props.children}
      </New>
    );
  } else {
    return props.children;
  }
};