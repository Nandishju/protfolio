import logo from './logo.svg';
import {Button} from './components/common/styledComponents'
import NavBar from './components/navbar/navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
          <Button>Click</Button>
        
      </header>
    </div>
  );
}

export default App;
