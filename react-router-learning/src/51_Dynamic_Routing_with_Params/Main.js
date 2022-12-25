import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import Page404 from "./Page404";
import User from "./User";

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
               <Route path="/user/:name" element={<User />} />
               <Route path="/*" element={<Navigate to="/" /> } />
            </Routes>
         </BrowserRouter>
      </div>
   )
}