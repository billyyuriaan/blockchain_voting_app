import { Routes, Route } from 'react-router-dom'
import Home from './view/Home'
import Layouts from './components/Layouts'
import About from './view/About'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
