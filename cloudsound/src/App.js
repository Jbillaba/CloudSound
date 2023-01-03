import './App.css';
import Main from './Components/Main';
import NavBar from './Components/navbar';
import {AuthProvider} from './context/AuthContext'


function App() {
  return (
    <div className="App" >
    <AuthProvider>
      <NavBar />
      <Main/>
    </AuthProvider>
    </div>
  );
}

export default App;
