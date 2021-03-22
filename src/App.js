import Info from "./components/Info";
// import Weather from "./components/Weather.js";
import GetApi from "./components/GetApi";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Info />
      {/* <Weather /> */}
      <GetApi />
    </div>
  );
}

export default App;
