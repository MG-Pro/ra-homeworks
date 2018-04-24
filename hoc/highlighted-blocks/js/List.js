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
  return class extends React.Component {
    render() {
      if (this.props.views >= 1000) {
        return (
          <Popular>
            <Component  {...this.props}/>
          </Popular>
        );
      } else if (this.props.views <= 100) {
        return (
          <New>
            <Component  {...this.props}/>
          </New>
        );
      } else {
        return <Component  {...this.props}/>
      }
    }
  }
}

