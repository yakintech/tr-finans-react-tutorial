import { Routes, Route, Link } from "react-router-dom"
import BaseComponents from "./dersler/materialUISample/BaseComponents"
import GridSample from "./dersler/materialUISample/GridSample"
import About from "./dersler/routingSample/About"
import Contact from "./dersler/routingSample/Contact"
import CustomerDetail from "./dersler/routingSample/CustomerDetail"
import CustomerTable from "./dersler/routingSample/CustomerTable"
import Home from "./dersler/routingSample/Home"
import NotFound from "./dersler/routingSample/NotFound"

function App() {
  
  //Link = <a href='' />
  return <>
  <h3>Site Header</h3>
  <ul style={{display:'flex', justifyContent:'space-between'}}>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    <li><Link to='/customers'>Customers</Link></li>
    <li><Link to='/materialbase'>Material Base</Link></li>
    <li><Link to='/gridsample'>Grid Sample</Link></li>


  </ul>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/customers" element={<CustomerTable/>}></Route>
          <Route path="/customers/:id" element={<CustomerDetail/>}></Route>
          <Route path="/materialbase" element={<BaseComponents/>}></Route>
          <Route path="/gridsample" element={<GridSample/>}></Route>

          <Route path="*" element={<NotFound/>}></Route>
      </Routes>

      <h3>Site Footer</h3>
  </>

}

export default App

//JSX
//class yerine className
//style property içerisine bir JS objesi alır
//string olmayan tüm özellikler {} içerisinde gösterilir!
//JSX içerisinde Javascript kodu yazmak için {} kullanılır.