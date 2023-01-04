import "./chart.css";
import ChartBar from "./Chartbar";
const Chart = (props) => {
  const datapointvalues = props.Datapoints.map((e) => e.value);
  const totalmaximum = Math.max(...datapointvalues);
  return (
    <div className="chart">
      {props.Datapoints.map((datapoint) => {
        return (
          <ChartBar
            value={datapoint.value}
            label={datapoint.label}
            maxValue={totalmaximum}
            key={datapoint.label}
          />
        );
      })}
    </div>
  );
};
export default Chart;
