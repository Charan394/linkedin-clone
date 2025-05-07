import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/home";


function App() {


  return (
    <>
        <BrowserRouter>
        
        <Routes>
        <Route path="/" element={<Login/>}/>

        <Route path="/Home" element={<Home/>}/>

        </Routes>
          
        
        </BrowserRouter>
     
    </>
  )
}

export default App
