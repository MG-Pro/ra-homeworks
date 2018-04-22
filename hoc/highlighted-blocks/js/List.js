'use strict';

const List = props => {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return <VideoWrapComp {...item} views = {item.views}/>;

      case 'article':
        return <ArticleWrapComp {...item} views = {item.views}/>;
    }
  });
};

const VideoWrapComp = viewsWrap(Video);
const ArticleWrapComp = viewsWrap(Article);

function viewsWrap(Component) {

  return (props, ...args) => {
    if (props.views >= 1000) {
      return (
        <Popular>
          {Component.apply(this, [props, ...args])}
        </Popular>
      );
    } else if (props.views <= 100) {
      return (
        <New>
          {Component.apply(this, [props, ...args])}
        </New>
      );
    } else {
      return Component.apply(this, [props, ...args])
    }
  };
}

