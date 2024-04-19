import {Appbar} from '../Components/Appbar'
import {Balance} from "../Components/Balance"
import {User} from "../Components/User"
export function Homepage(){
      return (
           <div>
            <Appbar></Appbar>
            <Balance></Balance>
            <User></User>
           </div>
      )
}