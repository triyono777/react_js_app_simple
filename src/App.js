import Header from "./components/Header";
import ProductList from "./components/ProductList";
import {useState} from "react"
function App() {
const [products,  setProducts] = useState([
  {id:1,title:"nama product 1",price:90000},
  {id:2,title:"nama product 2",price:99918},
  {id:3,title:"nama product 3",price:15525},
  {id:4,title:"nama product 4",price:37736},
  {id:5,title:"nama product 5",price:15522},
])

const deleteProduct = (productId)=>{
  const newPoducts = products.filter(product => product.id !== productId);
  setProducts(newPoducts);
}
  return (
  <div>
    <ProductList products={products} deleteProduct= {deleteProduct}/>

  </div>
  );
}

export default App;
