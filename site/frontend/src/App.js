import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
// importing browser router using react router dom

function App() {
  return (
//wrapping the app with the router
  <Router>
    <div className="App">
      {/* im assuming u can use routes to wrap and bundles of route*/}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpForm />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;