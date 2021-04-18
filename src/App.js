import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingScreen from "./components/LandingScreen";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <main>
        <div>
          <Route path="/" component={LandingScreen} exact />
          <Route path="/home" component={LandingScreen} />
          <Route path="/about" component={AboutUs} exact />

        </div>
      </main>
    </Router>
  );
}

export default App;
