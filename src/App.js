import Header from "./components/Header";
function App() {
const clickMe = (name)=>{
  console.log('Hello: '+name)
}

  return (
  <div>
    <Header/>
    <button onClick={()=>clickMe('Triyono')}>Click me</button>
  </div>
  );
}

export default App;
