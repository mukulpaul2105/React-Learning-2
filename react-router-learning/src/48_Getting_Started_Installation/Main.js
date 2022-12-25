import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

export default function Main()
{
   return (
      <div>
         <BrowserRouter>
         <Routes>
            {/* <Route path="/home" element={<h1>Home Page</h1>} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
         </Routes>
         </BrowserRouter>
      </div>
   )
}