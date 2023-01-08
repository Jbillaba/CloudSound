import './App.css';
import Main from './Components/Main';
import Header from './Components/header';
import {AuthProvider} from './context/AuthContext'


function App() {
  return (
    <div className="App" >
    <AuthProvider>
      <Header />
      <Main/>
    </AuthProvider>
    </div>
  );
}

export default App;
