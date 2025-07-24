import {BrowserRouter,Routes,Route} from "react-router-dom"
import Chess from "./pages/Chess"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Chess}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
