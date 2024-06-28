import s from "./styles.module.css";
import { useRef } from "react";

const LetsTalk = () => {
  const divRef = useRef(null);

  const deleteDiv = () => {
    if (divRef.current) {
      divRef.style.display = "none";
    }
  };

  return (
    <>
      <div
        id="1"
        style={{ color: "white", backgroundColor: "red" }}
        ref={divRef}
      >
        LetsTalk
      </div>
      <button onClick={deleteDiv}>Hello</button>
    </>
  );
};
export default LetsTalk;
