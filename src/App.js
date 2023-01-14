import Navbar from './components/navbar/navbar.js'
import Home from './components/home/home.js'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
