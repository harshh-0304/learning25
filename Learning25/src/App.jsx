
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
import { FormDemo1 } from "./components/forms/FormDemo1";
import { FormDemo2 } from "./components/forms/FormDemo2";
import { FormDemo3 } from "./components/forms/FormDemo3";
import { FormDemo4 } from "./components/forms/FormDemo4";
import { FormDemo5 } from "./components/forms/FormDemo5";
import { FormDemo6 } from "./components/forms/FormDemo6";
import { FormDemo7 } from "./components/forms/FormDemo7";
import { FormDemo8 } from "./components/forms/FormDemo8";
import {ApiDemo1} from "./components/apis/ApiDemo1"; // Adjust the path as needed



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
        <Route path="/formdemo1" element={<FormDemo1></FormDemo1>}></Route>
        <Route path="/formdemo2" element={<FormDemo2></FormDemo2>}></Route>
        <Route path="/formdemo3" element={<FormDemo3></FormDemo3>}></Route>
        <Route path="/formdemo4" element={<FormDemo4></FormDemo4>}></Route>
        <Route path="/formdemo5" element={<FormDemo5></FormDemo5>}></Route>
        <Route path="/formdemo6" element={<FormDemo6></FormDemo6>}></Route>
        <Route path="/formdemo7" element={<FormDemo7></FormDemo7>}></Route>
        <Route path="/formdemo8" element={<FormDemo8></FormDemo8>}></Route>
        <Route path="/apidemo1" element={<ApiDemo1></ApiDemo1>}></Route>
        
         </Routes>
    </div>
  );
}

export default App;