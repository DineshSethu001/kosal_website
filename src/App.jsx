import {Home} from "./pages";
import {Routes,Route} from 'react-router-dom'
import {ScrollToTop, Navbar, Footer} from './components'
import {About,Services,Contact} from './pages'
export default function App(){
  return(
    <div className="bg-gray-100 px-4 sm:px-[5vw] md:px-[7px] lg:px-[9px] pt-5">
      <Navbar/>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/products" element={<ProductList/>}/> */}
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      {/* <Route path="/admin-login" element={<AdminLogin/>}/> */}
    </Routes>
    <Footer/>
    </div>
  )
}