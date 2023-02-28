import A from "./components/propDrilling/A";
import CompA from "./components/contextAPI/CompA";
function App() {
  const name = "Faisal";
  return (
    <div>
      <A name={name}>This is comming from App Component.</A>
      <hr color="magenta" />
      <CompA />
      <hr color="pink" />
    </div>
  );
}

export default App;
