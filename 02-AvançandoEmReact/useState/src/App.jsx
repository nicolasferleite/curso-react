import './App.css'

import Data from './components/Data'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'

function App() {
  return (
    <>
      <div className='App' style={{ paddingBottom: "400px" }}>
        <h1>useState</h1>
        <Data/>
        <ListRender/>
        <ConditionalRender/>
      </div>
    </>
  )
}

export default App
