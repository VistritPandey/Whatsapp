import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar.js'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="app__body">
        <Router>
        <Switch>
          <Route path="/app">
          <Sidebar />
          <Chat />
          </Route>
          <Route path ="/">
            <h1>Home</h1>
          </Route>
        </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
