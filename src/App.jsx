import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Aboutus from "./sections/Aboutus"
import Hero from "./sections/Hero"
import Joinclub from "./sections/Joinclub"
import Partner from "./sections/Partner"
import Products from "./sections/Products"


function App() {


  return (
    <>
     <Navbar/>

     <div>
      <Hero/>
     </div>

     <div className=" mt-8">
      <Aboutus/>
     </div>

     <div className=" mt-8">
      <Products/>
     </div>
     <div className=" mt-8 ">
      <Partner/>

     </div>

     <div className=" my-4">
      <Joinclub/>
     </div>

     <div className=" mt-4">
      <Footer/>

     </div>
    </>
  )
}

export default App
