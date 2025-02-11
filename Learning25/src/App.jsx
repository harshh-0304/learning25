
import { Route, Routes } from "react-router-dom";
import { ArrayDemo2 } from "./components/ArrayDemo2";
import { ArrayDemo3 } from "./components/ArrayDemo3";
import { ArrayDemo4 } from "./components/ArrayDemo4";
import ArrayDemo5 from "./components/ArrayDemo5";
import HotstarHome from "./components/hotstar/HotstarHome";
import {InputDemo1} from "./components/InputDemo1";
import { InputDemo2 } from "./components/InputDemo2";
import { InputDemo3 } from "./components/InputDemo3";
import Navbar from "./components/Navbar";
import SalesData from "./components/SalesData";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import HotstarMovies from "./components/hotstar/HotstarMovies";
import HotstarWelcome from "./components/hotstar/HotstarWelcome";
import Error from "./components/hotstar/Error";


function App() {
  //js



  return (
    <div>
      <Navbar></Navbar>
       <Routes>
        <Route path="/home" element={<HotstarHome></HotstarHome>}/>  
        <Route path="/movies" element={<HotstarMovies></HotstarMovies>}/>  
        <Route path="/" element={<HotstarWelcome></HotstarWelcome>}/>
        <Route path="/*" element={<Error></Error>}/>
       </Routes>
    </div>
  );
}

export default App;