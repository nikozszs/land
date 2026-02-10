import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Welcome } from './pages/Welcome'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Welcome />} />
      </Routes>
    </>
  )
}

export default App
