import {BrowserRouter,Routes,Route} from "react-router-dom"
import Chess from "./pages/Chess"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chess/>}/>
      </Routes>
    </BrowserRouter>
    {/* <Chess/> */}
    </div>
  )
}

export default App
