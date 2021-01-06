import logo from './logo.svg';
import {Button} from './components/common/styledComponents'
import NavBar from './components/navbar/navbar'
import './App.scss';
import { AppContent } from './components/appcontent/AppContent';

function App() {
  return (
    <div className="App">
      <conatiner className="appContainer">
      <NavBar></NavBar>
      <AppContent></AppContent>
      </conatiner>
      
    </div>
  );
}

export default App;
