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
            <Sidebar />
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path ="/">
                <Chat />
              </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
