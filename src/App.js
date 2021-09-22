import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Parallax from './components/Parallax';
import About from './components/About';
import ProjectList from './components/ProjectList';
import VideoList from './components/VideoList';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
   return (
      <div className="App">
         <NavBar />
         <Parallax />
         <About />
         <Parallax />
         <Skills />
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
