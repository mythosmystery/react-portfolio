import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Parallax from './components/Parallax';
import About from './components/About';
import ProjectList from './components/ProjectList';
import VideoList from './components/VideoList';
import Footer from './components/Footer';

function App() {
   return (
      <div className="App">
         <NavBar />
         <Parallax />
         <About />
         <Parallax />
         <ProjectList />
         <Parallax />
         <VideoList />
         <Parallax />
         <Footer />
      </div>
   );
}

export default App;
