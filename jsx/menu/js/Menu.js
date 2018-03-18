const Menu = ({items, opened}) => {
  let content;
  let state;
  if (opened) {
    let list = items.map(item => {
      return (
        <li>
          <a href = {item.href}>{item.title}</a>
        </li>)
    });

    content = (
      <nav>
        <ul>
          {list}
        </ul>
      </nav>
    );
    state = 'menu-open';
  } else {
    content = null;
  }
  return (
    <div className = {['menu', state].join(' ')}>
      <div className = 'menu-toggle'><span></span></div>
      {content}
    </div>
  );
};