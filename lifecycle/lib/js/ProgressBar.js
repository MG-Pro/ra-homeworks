class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.canvas;
  }

  drawProgress(progress) {
    const ctx = this.canvas.getContext('2d');
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);

    ctx.beginPath();
    ctx.strokeStyle = "#4ca89a";
    ctx.lineWidth = '7';
    ctx.arc(w / 2, h / 2, 52, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.closePath();

    let deg = 360*progress/100;
    let rad = deg*Math.PI/180;

    ctx.beginPath();
    ctx.strokeStyle = "#96d6f4";
    ctx.arc(w / 2, h / 2, 45, 0, rad, false);
    ctx.stroke();
    ctx.closePath();

    ctx.font = "bold 25px sans-serif";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(`${progress}%`, w / 2, h / 2);

  }

  componentDidMount() {
    this.drawProgress(0);
  }

  componentWillReceiveProps(newProps) {
    let progress = newProps.completed === 1
      ? 0 : Math.round(newProps.completed * 100 / newProps.total);
    this.drawProgress(progress);
  }
  render() {
    return (
      <canvas id = "progressCanvas" width="150" height="120" className = "progress" ref = {canvas => this.canvas = canvas} style={{height: 'auto'}}/>
    );
  }
}


