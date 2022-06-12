import Header from "./components/Header";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Contact from "./components/Contact";
import {useState, useEffect} from "react"
import { Route, BrowserRouter as Router , Routes} from "react-router-dom";
// switch di ganti routes
// https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom


function App() {
const [products,  setProducts] = useState([
  {id:1,title:"nama product 1",price:90000},
  {id:2,title:"nama product 2",price:99918},
  {id:3,title:"nama product 3",price:15525},
  {id:4,title:"nama product 4",price:37736},
  {id:5,title:"nama product 5",price:15522},
])

const [name, setName] = useState("Triyono");

const deleteProduct = (productId)=>{
  const newPoducts = products.filter(product => product.id !== productId);
  setProducts(newPoducts);
}

useEffect(()=>{
  console.log('Use effect running');
},[name])
  return (

  <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductList products={products} deleteProduct= {deleteProduct}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
    </Router>


  </div>
  );
}

export default App;
