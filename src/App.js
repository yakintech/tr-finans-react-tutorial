import { useContext } from "react"
import { Routes, Route, Link } from "react-router-dom"
import AddCategory from "./dersler/baseNetworkPages/AddCategory"
import CategoriesList from "./dersler/baseNetworkPages/CategoriesList"
import CategoryDetail from "./dersler/baseNetworkPages/CategoryDetail"
import { cartContext } from "./dersler/contextSample/CartContext"
import CartPage from "./dersler/contextSample/CartPage"
import Favorites from "./dersler/contextSample/Favorites"
import { favoritesContext } from "./dersler/contextSample/FavoritesContext"
import ProductsList from "./dersler/contextSample/ProductsList"
import DataGridSample from "./dersler/dataGrid/DataGridSample"
import SupplierDetail from "./dersler/dataGrid/SupplierDetail"
import SuppliersDataGrid from "./dersler/dataGrid/SuppliersDataGrid"
import AddSupplierForm from "./dersler/formikSample/AddSupplierForm"
import AddProductForm from "./dersler/hookFormSample/AddProductForm"
import BaseComponents from "./dersler/materialUISample/BaseComponents"
import GridSample from "./dersler/materialUISample/GridSample"
import AddCustomer from "./dersler/react-query/AddCustomer"
import CustomersUserQuery from "./dersler/react-query/CustomersUserQuery"
import About from "./dersler/routingSample/About"
import Contact from "./dersler/routingSample/Contact"
import CustomerDetail from "./dersler/routingSample/CustomerDetail"
import CustomerTable from "./dersler/routingSample/CustomerTable"
import Home from "./dersler/routingSample/Home"
import NotFound from "./dersler/routingSample/NotFound"


function App() {

  let { favorites } = useContext(favoritesContext);
  let { cart } = useContext(cartContext);



  return <>
    <h3>Site Header</h3>
    <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/materialbase'>Material Base</Link></li>
      <li><Link to='/gridsample'>Grid Sample</Link></li>
      <li><Link to='/datagrid'>Data Grid</Link></li>
      <li><Link to='/suppliers'>Suppliers</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/favorites'>Favorites ( {favorites.length} )</Link></li>
      <li><Link to='/cart'>Cart ( {cart.length} )</Link></li>
      <li><Link to='/addsupplier'>Add Supplier</Link></li>
      <li><Link to='/addproductform'>Add Product</Link></li>
      <li><Link to='/customersUserQuery'>Customers</Link></li>
      <li><Link to='/addCustomer'>Add Customer</Link></li>
      <li><Link to='/categories'>Categories</Link></li>
      <li><Link to='/addcategory'>Add Category</Link></li>

    </ul>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/customers" element={<CustomerTable />}></Route>
      <Route path="/customers/:id" element={<CustomerDetail />}></Route>
      <Route path="/materialbase" element={<BaseComponents />}></Route>
      <Route path="/gridsample" element={<GridSample />}></Route>
      <Route path="/datagrid" element={<DataGridSample />}></Route>
      <Route path="/suppliers" element={<SuppliersDataGrid />}></Route>
      <Route path="/suppliers/:id" element={<SupplierDetail />}></Route>
      <Route path="/products" element={<ProductsList />}></Route>
      <Route path="/favorites" element={<Favorites />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/addsupplier" element={<AddSupplierForm />}></Route>
      <Route path="/addproductform" element={<AddProductForm />}></Route>
      <Route path="/customersUserQuery" element={<CustomersUserQuery />}></Route>
      <Route path="/addCustomer" element={<AddCustomer />}></Route>
      <Route path="/categories" element={<CategoriesList />}></Route>
      <Route path="/categories/:id" element={<CategoryDetail />}></Route>
      <Route path="/addcategory" element={<AddCategory />}></Route>
     
      <Route path="*" element={<NotFound />}></Route>
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