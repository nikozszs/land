import { Route, Routes } from 'react-router-dom'
import { Welcome } from './pages/Welcome'
import { Header } from './components/Header'
import { Technology } from './pages/Technology'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </>
  )
}

export default App
