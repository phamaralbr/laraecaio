import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { GlobalStyle } from './components/GlobalStyles'
import Home from "./pages/Home"


function App() {

  return (
    <Router>
      <GlobalStyle />
      <Home/>
    </Router>
  )
}

export default App
