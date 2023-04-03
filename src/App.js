import Navbar from "./dersler/templateOrnek/Navbar"
import PageContent from "./dersler/templateOrnek/PageContent"
import SiteFooter from "./dersler/templateOrnek/SiteFooter"
import SiteHeader from "./dersler/templateOrnek/SiteHeader"

function App() {

  return <>
    <Navbar />
    <SiteHeader/>
    <PageContent/>
    <SiteFooter/>
  </>

}

export default App

//JSX
//class yerine className
//style property içerisine bir JS objesi alır
//string olmayan tüm özellikler {} içerisinde gösterilir!