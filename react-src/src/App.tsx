import './App.css'
import {BrowserRouter } from "react-router-dom";
import RouteController from "./RouteController.tsx";
import Navbar from "./components/Navbar.tsx";


function App() {
  return (
    <div className="container relative">
        <div className={'absolute bg-min-gradient -top-[160px] -left-[140px] rounded-full w-[310px] h-[310px]'}></div>

        <div>
            <Navbar/>
            <BrowserRouter>
            <RouteController/>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;

