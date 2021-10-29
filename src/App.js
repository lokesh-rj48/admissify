import React, { Component } from "react";
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import "./scss/style.scss";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getToken} from "./utils/Auth/token"

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/login/Login"));

const isAuthenticated = getToken();

class App extends Component {
  render() {
    return (
      <BrowserRouter forceRefresh={true} >
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => isAuthenticated?(<TheLayout {...props} />): (<Login {...props} />)}
              // render={(props) =><Login {...props} />}
            />
            <Route
              path="/"
              name="Home"
              render={(props) =>isAuthenticated?( <TheLayout {...props} />):(
                <Redirect to="/login" />
              )}
              // render={(props) =><TheLayout {...props} />}
            />
          </Switch>
          <ToastContainer />
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
