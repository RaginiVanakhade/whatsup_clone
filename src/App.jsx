import { Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import WpHomePage from "./Components/WpHomePage"
import WpProfile from "./Components/WpProfile"
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/wphomepage" element={<WpHomePage/>}/>
      <Route path="/wpprofile" element={<WpProfile/>}/>
    </Routes>    </>
  )
}

export default App
