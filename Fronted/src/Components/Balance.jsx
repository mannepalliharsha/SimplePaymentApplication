import { useEffect,useState } from "react"
import axios from "axios"
export function Balance(){
    const[money,setMoney]=useState(0);
    useEffect(function(){
            const request=axios.get("http://localhost:600/login/account/getamount",
            {
                headers : {
                    "authorization" : localStorage.getItem('token')
                }
            })
              .then(function(res){
                   setMoney(res.data.amount)
              })
    },[])
    console.log(money);
      return(
           <div className='flex mt-2' >
               <div className='font-bold text-lg ml-2 ' >
                   Your Balance
               </div>
               <div className="pl-2 font-semibold text-lg" >
                   Rs {money}
               </div>
           </div>
      )
}