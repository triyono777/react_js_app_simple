import Header from "./components/Header";
import {useState} from "react"
function App() {
const [product,  setProduct] = useState([
  {id:1,title:"nama product 1",price:90000},
  {id:2,title:"nama product 2",price:99918},
  {id:3,title:"nama product 3",price:15525},
  {id:4,title:"nama product 4",price:37736},
  {id:5,title:"nama product 5",price:15522},
])


  return (
  <div>
<ul>
  {product.map((product)=>(
    <li key={product.id}> {product.title} - {product.price}</li>
  ))}
</ul>
  </div>
  );
}

export default App;
