import Header from "./components/Header";
import {useState} from "react"
function App() {
const [title, setTitle] = useState('Hello word');
const changeTitle = ()=>{
  setTitle("Title changed")
}


  return (
  <div>
    <h1>{title}</h1>
    <button onClick={changeTitle}>Click me</button>
  </div>
  );
}

export default App;
