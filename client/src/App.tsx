import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/common/Layout'
import Home from './components/Home'

function App() {

  return (
      <BrowserRouter>
        <Layout>
          <Routes >
            <Route path="/home" element={<Home />} />
          </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App
