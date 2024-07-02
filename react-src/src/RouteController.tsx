import {Route, Routes} from "react-router-dom";
import Startup from "./pages/Startup.tsx";
import Investor from "./pages/Investor.tsx";
import Error404 from "./pages/Error404.tsx";


export default function RouteController() {
    return (
        <Routes>
            <Route path={"/"} element={<Startup/>}/>
            <Route path={"/investor"} element={<Investor/>}/>
            <Route path={"*"} element={<Error404/>}/>
        </Routes>
    )
}