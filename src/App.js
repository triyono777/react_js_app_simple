import Header from "./components/Header";
function App() {
const clickMe = ()=>{
  console.log('Clicked')
}

  return (
  <div>
    <Header/>
    <button onClick={clickMe}>Click me</button>
  </div>
  );
}

export default App;
