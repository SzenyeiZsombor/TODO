  import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName("");
  }


  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        <label htmlFor="new-input">
          Teendők felvétele
        </label>
      </h2>

      <input
        type="text"
        id="new-input"
        className="input"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn">
        Hozzáadás
      </button>
    </form>
  );
}

export default Form;
