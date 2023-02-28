import A from "./components/propDrilling/A";
import CompA from "./components/contextAPI/CompA";
import Comp1 from "./components/UseContext/Comp1";
import ChangeText from "./components/Hooks/ChangeText";
function App() {
  const name = "Faisal";
  return (
    <div>
      <A name={name}>This is comming from App Component.</A>
      <hr color="magenta" />
      <CompA />
      <hr color="red" />
      <Comp1 />
      <hr color="red" />
      <ChangeText />
    </div>
  );
}

export default App;
