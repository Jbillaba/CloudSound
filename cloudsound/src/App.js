import './App.css';
import Discover from './Components/Discover';
import Landing from './Components/Landing';
import Main from './Components/Main';
import NavBar from './Components/navbar';

function App() {
  return (
    <div className="App" 
      onContextMenu={(e) => {
        // e.preventDefault() //this prevents right click normal behavior 
        // console.log("right click")
      }}
    >
      
      <NavBar />
      <Main/>
        
    </div>
  );
}

export default App;
