import "./Seat.css";

const Seat = (props) => {
  // get Name and last initial from full name
  const getName = (name) => {
    const words = name.split(" ");
    return words[0] + " " + words[words.length - 1][0] + ".";
  };

  // STROKE_FRACTION is a magic number we picked that
  // made the UI look nice
  const turnVar = 1 / props.numStudents;
  const STROKE_FRACTION = 0.7;

  const flipName = props.index > props.numStudents / 4 && props.index < (props.numStudents * 3) / 4;

  const styles = {
    transform: `rotate(${turnVar * props.index}turn)`,
  };

  const nameStyle = {
    transform: "scaleY(-1) scaleX(-1)",
  };

  // we create individual circle arcs as svgs programatically
  // then we rotate them to the correct place on the circle
  return (
    <div className="seat" style={styles}>
      <div className="name" style={flipName ? nameStyle : {}}>
        {getName(props.student.name)}
      </div>
      <svg viewBox="0 0 1000 1000">
        <circle
          r="450"
          cx="500"
          cy="500"
          fillOpacity="0"
          stroke="#D3D5D4"
          strokeWidth="30"
          pathLength="1"
          strokeDashoffset={`${0.25 + ((1 / props.numStudents) * STROKE_FRACTION) / 2}`}
          strokeDasharray={`${(1 / props.numStudents) * STROKE_FRACTION} ${
            1 - (1 / props.numStudents) * STROKE_FRACTION
          }`}
        />
      </svg>
    </div>
  );
};

export default Seat;
