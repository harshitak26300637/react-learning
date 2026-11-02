import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setMessage("Hello " + name + "! Welcome to React.");
  }

  return (
    <div>
      <h1>React Events Practice</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />

      <button onClick={handleClick}>
        Submit
      </button>

      <h2>{message}</h2>
    </div>
  );
}

export default App;