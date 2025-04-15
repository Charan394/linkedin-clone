import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {


  return (
    <>
        <BrowserRouter>
        
        <switch>
        <Route  path="/">
       < Login/>
        </Route>
          
        </switch>
        
        </BrowserRouter>
     
    </>
  )
}

export default App
