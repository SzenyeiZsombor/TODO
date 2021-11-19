import React, { useEffect, useRef } from "react";


function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function Todo(props) {
  const viewTemplate = (
    <div>
      <div className="check">
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <label htmlFor={props.id}>
            {props.name}
          </label>
        </div>
    </div>
  );

  return <li className="todoo">{viewTemplate}</li>;
}
