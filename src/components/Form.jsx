import React from "react";

function Form(prop) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      {prop.t ? <input type="password" placeholder="Confirm Password" /> : null}

      <button type="submit">{prop.name}</button>
    </form>
  );
}

export default Form;
