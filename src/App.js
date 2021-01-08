import logo from './logo.svg';
import { Button } from './components/common/styledComponents'
import NavBar from './components/navbar/navbar'
import { RoutesComp } from './components/RoutesComp/RoutesComp'
import './App.scss';
import { AppContent } from './components/appcontent/AppContent';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <conatiner className="appContainer">
          <RoutesComp></RoutesComp>
        </conatiner>
      </Router>

    </div>
  );
}

export default App;
