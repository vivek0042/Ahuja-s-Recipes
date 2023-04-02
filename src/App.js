import React from 'react'
import Galleryshow from './Galleryshow'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import("bootstrap");


const App = () => {
  return (
    // <BrowserRouter>
    <div>
    {/* <Navbar/> */}
    <Galleryshow/>
    </div>
      
    // </BrowserRouter>
  )
}

export default App

