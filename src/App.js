import NavBar from './components/navbar/navbar'
import { RoutesComp } from './components/RoutesComp/RoutesComp'
import './App.scss';
import ScrollToTop from './components/scrolltotop/scrolltotop'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <div className="appContainer">
          <RoutesComp></RoutesComp>
          <ScrollToTop />          
        </div>
      </Router>

    </div>
  );
}

export default App;
