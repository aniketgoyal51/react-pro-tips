import './App.css'
import {Routes, Route , Link} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Registration from './components/Registration'

function App() {
  return (
    <>
      <nav>
        <div className='left'><Link to={'/'} className='link'>Kalvium</Link></div>
        <div className='right'>
          <Link to={'/contact'} className='link'>Conatct</Link>
          <Link to={'/Registration'} className='link'>Registration</Link>
        </div>
      </nav>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/Registration' element={<Registration/>}/>
        </Routes>
    </>
  )
}

export default App
