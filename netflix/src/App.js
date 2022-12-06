import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      {/* <h1>Lets build</h1> */}

      <Router>

        {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav> */}

        <Routes>


          <Route exact path="/" element={<HomeScreen />} />

        </Routes>
      </Router>

    </div >
  );
}

export default App;
