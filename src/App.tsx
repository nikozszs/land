import { Route, Routes } from 'react-router-dom'
import { Welcome } from './pages/Welcome'
import { Header } from './Header'

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
