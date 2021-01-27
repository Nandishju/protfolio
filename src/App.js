import NavBar from './components/navbar/navbar'
import { RoutesComp } from './components/RoutesComp/RoutesComp'
import './App.scss';
import ScrollToTop from './components/scrolltotop/scrolltotop'
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
       
          <RoutesComp></RoutesComp>
          <ScrollToTop />          
      
      </Router>

    </div>
  );
}

export default App;
