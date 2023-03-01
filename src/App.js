import A from "./components/propDrilling/A";
import CompA from "./components/contextAPI/CompA";
import Comp1 from "./components/UseContext/Comp1";
import WorkingWithuseState from "./components/Hooks/WorkingWithuseState";
import DocTitleOne from "./components/Hooks/CustomHooks/DocTitleOne";
import DocTitleTwo from "./components/Hooks/CustomHooks/DocTitleTwo";
import WorkingWithuseEffect from "./components/Hooks/WorkingWithuseEffect";
function App() {
  const name = "Faisal";
  return (
    <div>
      <A name={name}>This is comming from App Component.</A>
      <hr color="magenta" />
      <CompA />
      <hr color="red" />
      <Comp1 />
      <hr color="green" />
      <WorkingWithuseState />
      <hr color="black" />
      <WorkingWithuseEffect />
      <p>useEffect Hook</p>
      <p>Uncomment the above line to see the useEffect Hook on fetch API.</p>
      <hr color="yellow" />
      <DocTitleOne />
      <DocTitleTwo />
      <hr color="indigo" />
    </div>
  );
}

export default App;
