import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./constants/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  );
}

export default App;
