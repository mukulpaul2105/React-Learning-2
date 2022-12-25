import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";

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
            </Routes>
         </BrowserRouter>
      </div>
   )
}