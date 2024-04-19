
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Signup} from './Pages/Signup'
import { Signin } from './Pages/Signin'
import { Homepage } from './Pages/Homepage'
import { Payment } from './Pages/Payment'
function App() {
        return (
            <div>
                <BrowserRouter>
                  <Routes>
                    <Route path='usersignup'element={<Signup></Signup>}  ></Route>
                    <Route path='usersignin' element={<Signin></Signin>} ></Route>
                    <Route path='homepage' element={<Homepage></Homepage>}></Route>
                    <Route path='send' element={<Payment></Payment> } ></Route>
                  </Routes>
                 </BrowserRouter>
            </div>
  )
}

export default App
