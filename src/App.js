import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Parallax from './components/Parallax';
import About from './components/About';

function App() {
   return (
      <div className="App">
         <NavBar />
         <Parallax />
         <About />
         <Parallax />
      </div>
   );
}

export default App;
