
import './App.css'
import Header from './Components/Header/Header'
import {Route,Routes} from 'react-router-dom'
import Contacts from './Components/Contacts/Contacts'
import AddContacts from './Components/AddContacts/AddContacts'
function App() {
  

  return (
    <>

    <Header/>
    <Routes>
      <Route path='/' element={<Contacts/>}></Route>
      <Route path='/contacts' element={<Contacts/>}></Route>
      <Route path='/add' element={<AddContacts/>}></Route>
      <Route path='/edit' element={<AddContacts/>}></Route>

    </Routes>
      
    </>
  )
}

export default App
