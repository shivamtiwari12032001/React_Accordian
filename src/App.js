import "./App.css";
import Accordian from "./components/Accordian";

function App() {
  return (
    <div className="App">
      <h1>React Accordian</h1>
      <Accordian heading={"React usestate"} />
      <Accordian heading={"React useEffect"} />
      <Accordian heading={"React useContext"} />
      <Accordian heading={"React useLocation"} />
      <Accordian heading={"React useReducer"} />
      {/* <Accordian heading={"React useLocation"} />
      <Accordian heading={"React useParams"} />
      <Accordian heading={"React useFetch"} />
      <Accordian heading={"React useHistory"} /> */}
    </div>
  );
}

export default App;
