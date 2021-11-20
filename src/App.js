import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListKeys from "./tests/ListKeys";
import IndexAsKey from "./tests/listKeys/IndexAsKey";
import IdAsKey from "./tests/listKeys/IdAsKey";
import Logo from "./Logo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <p>Select element to test.</p>
          <ul>
            <li>
              <Link to="/index-as-key">Index as Key in lists</Link>
            </li>
            <li>
              <Link to="/id-as-key">Unique Id as Key in lists</Link>
            </li>
          </ul>
        </header>
      </div>
      <Routes>
        <Route
          path="/index-as-key"
          element={
            <ListKeys ListItem={IndexAsKey} key={1} title="Index as a Key" />
          }
        />
        <Route
          path="/id-as-key"
          element={<ListKeys ListItem={IdAsKey} title="Id as a Key" />}
        />
        <Route exact path="/" element={<Logo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
