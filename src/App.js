import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar.js'

function App() {
  return (
    <div className="App">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
