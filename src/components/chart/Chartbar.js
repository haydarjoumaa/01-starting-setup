import "./chartbar.css";
const ChartBar = (props) => {
  let heightchart = "0%";
  if (props.maxValue) {
    heightchart = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: heightchart }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
