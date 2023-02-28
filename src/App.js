import A from "./components/propDrilling/A";
function App() {
  const name = "Faisal";
  return (
    <div>
      <A name={name}>This is comming from App Component.</A>
    </div>
  );
}

export default App;
