import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {!userIsRegistered ? <Form name="register" t /> : <Form name="login" />}
    </div>
  );
}

export default App;
