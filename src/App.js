import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Search} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
