function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

class App extends React.Component {
  componentWillMount() {
    this.setState({
      data: [],
      series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
      labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
      colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
    })
  }

  componentDidMount() {
    this.populateArray();
    setInterval(this.populateArray.bind(this), 2000);
  }

  populateArray() {
    const series = 5;
    const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

    this.setState({data});
  }

  render() {
    return (
      <section>
        <ChartsDefault options = {this.state}/>
        <ChartsStacked options = {this.state}/>
        <ChartsLayered options = {this.state}/>
        <ChartsHorizontal options = {this.state}/>
        <Legend options = {this.state}/>
      </section>
    );
  }
}

const Legend = props => {
  const {colors, labels} = props.options;
  return (
    <div className = "Legend">
      {labels.map((label, labelIndex) => {
        return (
          <div>
            <span className = "Legend--color" style = {{backgroundColor: colors[labelIndex % colors.length]}}/>
            <span className = "Legend--label">{label}</span>
          </div>
        );
      })}
    </div>
  );
};

const ChartsDefault = props => {
  const data = Object.assign(props.options, {
    type: '',
    style: {
      right: null
    },
    mainHeight: 250,
    mainClass: ''
  });
  return <Charts options = {data}/>
};

const ChartsStacked = props => {
  const data = Object.assign(props.options, {
    type: 'stacked',
    style: {
      opacity: 1
    },
    mainHeight: 250,
    mainClass: ''
  });
  return <Charts options = {data}/>
};

const ChartsLayered = props => {
  const data = Object.assign(props.options, {
    type: 'layered',
    mainHeight: 250,
    mainClass: ''
  });
  return <Charts options = {data}/>
};

const ChartsHorizontal = props => {
  const data = Object.assign(props.options, {
    type: 'horizontal',
    mainClass: 'horizontal',
    mainHeight: 'auto'
  });
  return <Charts options = {data}/>
};

const Charts = ({options}) => {
  const max = options.data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);
  return (
    <div className = {`Charts ${options.mainClass}`}>
      {options.data.map((serie, serieIndex) => {
        return <ChartSerie serie = {serie} index = {serieIndex} max = {max} options = {options}/>;
      })}
    </div>
  );
};

const ChartSerie = props => {
  let {colors, labels, series, type} = props.options;
  let sortedSerie = props.serie.slice(0);
  let sum = props.serie.reduce((carry, current) => carry + current, 0);
  sortedSerie.sort(compareNumbers);
  if (props.options.type === 'horizontal') {
    labels = series;
    type = '';
  }
  return (
    <div className = {`Charts--serie ${type}`}
      key = {props.index}
      style = {{height: props.options.mainHeight}}
    >
      <label>{labels[props.index]}</label>
      {props.serie.map((item, itemIndex) => {
        let size = item / (props.max) * 100;
        if (type === 'stacked') {
          size = item / sum * 100;
        } else if (type === 'layered') {
          props.options.style = {
            right: ((sortedSerie.indexOf(item) / (props.serie.length + 1)) * 100) + '%'
          }
        } else if (type === '' && props.options.mainClass === 'horizontal') {
          props.options.style = {
            height: null,
            width: size + '%'
          }
        }
        const style = Object.assign({
          backgroundColor: colors[itemIndex],
          opacity: item / props.max + .05,
          zIndex: item,
          height: size + '%',
          color: colors[itemIndex]
        }, props.options.style);
        return <ChartItem type = {type || ''} style = {style} id = {itemIndex} item = {item}/>;
      })}
    </div>
  );
};

const ChartItem = props => {
  const {type, style, itemIndex, item} = props;
  return (
    <div
      className = {`Charts--item ${type}`}
      style = {style}
      key = {itemIndex}
    >
      <b style = {{color: style.color}}>{item}</b>
    </div>
  );
};

