import React from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { useDispatch, useSelector } from 'react-redux';


import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import { useEffect } from "react";
import { auth } from "./firebase";
import { logout, login, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged in
        // console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,

        }));
      } else {
        //Logged out
        dispatch(logout);
        // console.log

      }
    })
    return unsubscribe;

  }, [])


  return (
    <div className="app">
      {/* <h1>Lets build</h1> */}

      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>


            <Route exact path="/" element={<HomeScreen />} />

          </Routes>
        )}

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


      </Router>

    </div >
  );
}

export default App;
