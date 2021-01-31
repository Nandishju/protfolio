import NavBar from './components/navbar/navbar'
import { Footer } from './components/footer/footer'
import { RoutesComp } from './components/RoutesComp/RoutesComp'
import './App.scss';
import ScrollToTop from './components/scrolltotop/scrolltotop'
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const owner = process.env.REACT_APP_OWNER_CODE;

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <RoutesComp></RoutesComp>
      </Router>
      <Footer></Footer>

    </div>
  );
}

export default App;
//Setting env varible at app start time:
//set "REACT_APP_NOT_SECRET_CODE=abcdef" && npm start (cmd)
//($env:REACT_APP_NOT_SECRET_CODE = "abcdef") -and (npm start) (powershell)