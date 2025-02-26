import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'jquery/dist/jquery.js';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';

/* About */
import ListAbout from './pages/About/ListAbout';
import AddAbout from './pages/About/AddAbout';
import EditAbout from './pages/About/EditAbout';

/* Brand */
import ListBrand from './pages/Brand/ListBrand';
import AddBrand from './pages/Brand/AddBrand';
import EditBrand from './pages/Brand/EditBrand';

/* Category */
import ListCategory from './pages/Category/ListCategory';
import AddCategory from './pages/Category/AddCategory';
import EditCategory from './pages/Category/EditCategory';

/* Contact */
import ListContact from './pages/Contact/ListContact';
import AddContact from './pages/Contact/AddContact';
import EditContact from './pages/Contact/EditContact';

/* FAQ */
import ListFaq from './pages/Faq/ListFaq';
import AddFaq from './pages/Faq/AddFaq';
import EditFaq from './pages/Faq/EditFaq';

/* Order */
import ListOrder from './pages/Order/ListOrder';
import AddOrder from './pages/Order/AddOrder';
import EditOrder from './pages/Order/EditOrder';

/* Portfolio */
import ListPortfolio from './pages/Portfolio/ListPortfolio';
import AddPortfolio from './pages/Portfolio/AddPortfolio';
import EditPortfolio from './pages/Portfolio/EditPortfolio';

/* Product */
import ListProduct from './pages/Product/ListProduct';
import AddProduct from './pages/Product/AddProduct';
import EditProduct from './pages/Product/EditProduct';

/* ProductEnquiry */
import ListProductEnquiry from './pages/ProductEnquiry/ListEnquiry';
import AddProductEnquiry from './pages/ProductEnquiry/AddEnquiry';
import EditProductEnquiry from './pages/ProductEnquiry/EditEnquiry';

/* Service */
import ListService from './pages/Service/ListService';
import AddService from './pages/Service/AddService';
import EditService from './pages/Service/EditService';

/* User */
import ListUser from './pages/User/ListUser';
import AddUser from './pages/User/AddUser';
import EditUser from './pages/User/EditUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' Component={Login} />
        <Route path='/forgot-password' Component={ForgotPassword} />
        <Route path='/dashboard' Component={Dashboard} />

        <Route path='/about/list' Component={ListAbout} />
        <Route path='/about/add' Component={AddAbout} />
        <Route path='/about/edit/:id' Component={EditAbout} />

        <Route path='/brand/list' Component={ListBrand} />
        <Route path='/brand/add' Component={AddBrand} />
        <Route path='/brand/edit/:id' Component={EditBrand} />

        <Route path='/category/list' Component={ListCategory} />
        <Route path='/category/add' Component={AddCategory} />
        <Route path='/category/edit/:id' Component={EditCategory} />

        <Route path='/contact/list' Component={ListContact} />
        <Route path='/contact/add' Component={AddContact} />
        <Route path='/contact/edit/:id' Component={EditContact} />

        <Route path='/faq/list' Component={ListFaq} />
        <Route path='/faq/add' Component={AddFaq} />
        <Route path='/faq/edit/:id' Component={EditFaq} />

        <Route path='/order/list' Component={ListOrder} />
        <Route path='/order/add' Component={AddOrder} />
        <Route path='/order/edit/:id' Component={EditOrder} />

        <Route path='/portfolio/list' Component={ListPortfolio} />
        <Route path='/portfolio/add' Component={AddPortfolio} />
        <Route path='/portfolio/edit/:id' Component={EditPortfolio} />

        <Route path='/product/list' Component={ListProduct} />
        <Route path='/product/add' Component={AddProduct} />
        <Route path='/product/edit/:id' Component={EditProduct} />

        <Route path='/product-enquiry/list' Component={ListProductEnquiry} />
        <Route path='/product-enquiry/add' Component={AddProductEnquiry} />
        <Route path='/product-enquiry/edit/:id' Component={EditProductEnquiry} />

        <Route path='/service/list' Component={ListService} />
        <Route path='/service/add' Component={AddService} />
        <Route path='/service/edit/:id' Component={EditService} />

        <Route path='/user/list' Component={ListUser} />
        <Route path='/user/add' Component={AddUser} />
        <Route path='/user/edit/:id' Component={EditUser} />
      </Routes>
    </Router>
  );
}

export default App;
