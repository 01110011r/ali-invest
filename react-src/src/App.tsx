import './App.css'
import {BrowserRouter} from "react-router-dom";
import RouteController from "./RouteController.tsx";

function App() {
  return (
    <div className="container bg-blue-500">
     <BrowserRouter>
         <RouteController/>
     </BrowserRouter>
    </div>
  );
}

export default App;

