import { Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import WpHomePage from "./Components/WpHomePage"
import WpProfile from "./Components/WpProfile"
import WpChat from "./Components/WpChat"
import WpPageNotFount from "./Components/WpPageNotFount"
import { useState } from "react"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/wphomepage" element={<WpHomePage/>}/>
      <Route path="/wpprofile" element={<WpProfile/>}/>
      <Route path="/wpchat/:uniqueId" element={<WpChat/>}/>
      <Route path="/wppagenotfound" element={<WpPageNotFount/>}/>
    </Routes>    </>
  )
}

export default App



// import React, { useState } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import WpHomePage from './Components/WpHomePage'

// const App = () => {
//   const [login, setLogin] = useState(false)
//   return (
//     <>
//     <h1>routing app</h1>
//     <Routes>
//       <Route path='/' element={}></Route>
//     </Routes>
//     </>
//   )
// }

// function protectRout() {

// }


// export default App
