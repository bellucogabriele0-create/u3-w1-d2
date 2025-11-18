import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import EbookNavbar from "./components/EbookNavbar";
import Home from "./components/Home.jsx";
import Romance from "./components/romance";
import Fantasy from "./components/Fantasy.jsx";
import Horror from "./components/Horror.jsx";
import Scifi from "./components/Scifi.jsx";



function App() {
  return <>
  <EbookNavbar/>
 <Romance/>
 <Home/>
 <Fantasy/>
 <Horror/>
 <Scifi/>

  </>;
}

export default App;
