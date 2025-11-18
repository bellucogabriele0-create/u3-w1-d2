import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import EbookNavbar from "./components/EbookNavbar";
import Home from "./components/Home.jsx";
import Romance from "./components/Romance.jsx";
import Fantasy from "./components/Fantasy.jsx";
import Horror from "./components/Horror.jsx";
import Scifi from "./components/Scifi.jsx";
import Welcome from "./components/Welcome.jsx";



function App() {
  return <>
  
  <EbookNavbar/>
  <Welcome/>
 <Romance/>
 <Home/>
 <Fantasy/>
 <Horror/>
 <Scifi/>

  </>;
}

export default App;
