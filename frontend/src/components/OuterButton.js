import "./OuterButton.css";
import Annotation from "./Annotation.js";

const OuterButton = (props) => {
  const turnVar = 1 / props.numStudents;

  const seatClick = (_event) => {
    props.outerButtonClick(props.student);
  };

  // this part is where we did linear regression over what
  // looked nice to find the div width
  const width = 240 - 9 * props.numStudents;

  // the bottom names are flipped
  const flipName = props.index > props.numStudents / 4 && props.index < (props.numStudents * 3) / 4;
  const flipTransform = flipName ? "scaleY(-1) scaleX(-1)" : "";
  const flipAlignItems = flipName ? "flex-end" : "flex-start";

  // programatically inject styles
  const styles = {
    transform:
      `translate(${300 - width / 2}px) translateY(${300 - 25}px) rotate(${
        turnVar * props.index
      }turn) translateY(${-300}px)` + flipTransform,
    width: `${width}px`,
    alignItems: flipAlignItems,
  };

  return (
    <div className="outer-button" onClick={seatClick} style={styles}>
      {props.showAnnotations && (
        <>
          <Annotation letter="T" count={props.annotationMap[props.student.student_id]["T"]} />
          <Annotation letter="A" count={props.annotationMap[props.student.student_id]["A"]} />
          <Annotation letter="C" count={props.annotationMap[props.student.student_id]["C"]} />
          <Annotation letter="Q" count={props.annotationMap[props.student.student_id]["Q"]} />
          <Annotation letter="R" count={props.annotationMap[props.student.student_id]["R"]} />
          <Annotation letter="F" count={props.annotationMap[props.student.student_id]["F"]} />
        </>
      )}
    </div>
  );
};

export default OuterButton;
