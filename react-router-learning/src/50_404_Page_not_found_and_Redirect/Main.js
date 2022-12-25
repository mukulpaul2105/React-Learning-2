import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import Page404 from "./Page404";

export default function Main()
{
   return (
      <div>
         {/* We cannot use Links and all outside BrouserRouter than we will get erro */}
         {/* <NavBar /> */}
         <BrowserRouter>
         <NavBar />
            <Routes>
               {/* <Route path="/home" element={<h1>Home Page</h1>} /> */}
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               {/* <Route path="/*" element={<Page404 />} /> */}
               {/* If  any Url does not exists than navigate to home page*/}
               <Route path="/*" element={<Navigate to="/" /> } />
            </Routes>
         </BrowserRouter>
      </div>
   )
}