import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const n = 15;
  const redTitle = true;

  return (
    <div className='App'>
      <h1>Css no React</h1>
      <MyComponent/>
      <p style={{color: "blue", padding: "25px", borderTop: "1px dotted blue", marginTop:"10px"}}>Usando inline</p>

      <h2 style={n>10 ? {color:"yellow"} : {color: "red"}}>
        CSS dinâmico
      </h2>

      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter uma classe dinâmica
      </h2>
      <Title/>
    </div>
  )
}

export default App
