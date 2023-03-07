import React from "react";
import { HashRouter, Link, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "./actions/userActions";
import HomeScreen from "./screens/HomeScreen";
import SigninScreen from "./screens/SigninScreen";

function App() {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <HashRouter>
      <div className="app-container">
        <main>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
      </div>
    </HashRouter>
  );
}
export default App;
