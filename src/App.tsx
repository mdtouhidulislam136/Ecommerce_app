import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar/NavBar'
import SignIn from './components/auth/SignIn/SignIn'
import { Products } from './pages/Product/Products'
import { Shopping } from './pages/Cart/Shopping'
import NotFound from './components/cart/notfound/NotFound'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <Router>
      <ToastContainer />
      <NavBar />
      <main>
        <Routes>
          <Route path="/signIn" element={<SignIn />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/product" element={<Products />}></Route>
          <Route path="/shopping" element={<Shopping />}></Route>
        </Routes>
      </main>
    </Router>
  )
}

export default App
