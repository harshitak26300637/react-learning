function Student(props) {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React Props Practice</h1>

      <Student name="Rahul" course="React JS" />
      <Student name="Priya" course="JavaScript" />
    </div>
  );
}
export default App;
