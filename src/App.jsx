import {BrowserRouter,Routes ,Route, useNavigate} from 'react-router-dom'

// now we use lazy routing so that the bundle wont coe all in at once 
// rather it come when the use demand the page by clicking it
import { Suspense, lazy } from 'react'
const Dashboard = lazy(()=>import("./components/Dashboard"));
const Landing = lazy(()=>import("./components/Landing"))
  function App() {
  
  return(
    <div>
      
      
      <BrowserRouter>
      <Appbar/>
  <Routes>
    <Route path = "/dashboard" element= { <Suspense fallback={
      <div>Loading component...</div>
      }><Dashboard/></Suspense>}  />
      <Route path = "/" element= { <Suspense fallback={
      <div>Loading component...</div>
      }><Landing/></Suspense>}  />
   
  </Routes>
  </BrowserRouter>
    </div>
    
  )
}
function Appbar(){
  const navigate = useNavigate();
  return(
    <div>
 <button onClick={()=>{
       navigate("/")
    }}>Landing page</button>
    <button onClick={()=>{
      navigate("/dashboard")
    }}>Dashboard</button>
    </div>
  )
  }
  
  

export default App
