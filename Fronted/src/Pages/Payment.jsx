import { Heading } from "../Components/Heading"
import {useSearchParams} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
export function Payment(){
    const[searchParams]=useSearchParams();
      const id=searchParams.get('id');
      const name=searchParams.get('name');
      const[money,setMoney]=useState(0);
      console.log(typeof(money));
     return(
          <div className=' flex flex-col justify-center h-screen bg-slate-200'>
            <div className='' >
            <div className="flex justify-center">
            <div className='  w-96 rounded-md border bg-white '  >
                <div className="text-center" >
             <Heading text={"Send Money"} className="pl-4" ></Heading>
             </div>
             <div className="flex ml-2 mt-14 ">
                <div className=' rounded-full border bg-green-500 h-9 w-9 text-2xl text-center text-white' >
                    {name[0].toUpperCase()}
                </div>
                <div className="text-2xl font-bold pl-2 h-9 w-9 ">
                  {name.toUpperCase()}
                </div>
             </div>
             <div className="pl-2 ml-2 mt-2 text-lg">
                Amount in {"rs"}
             </div>
             <div className="mt-2 pl-2 pr-2">
                <input type="text" placeholder="enter amount" className="rounded-md border w-full font-bold text-lg pl-2" onChange={function(e){
                      setMoney(parseInt(e.target.value));
                }} />
             </div>
             <div className="mt-4 mb-10 flex flex-col justify-center pl-4 pr-4 ">
             <button className="text-lg border pl-2 pr-2 rounded-md bg-slate-500 hover:bg-slate-900 text-white" onClick={function(){
                 axios.post('http://localhost:600/login/account/transfer',{
                     userId : id,
                     amount :money
                 },
                 {
                        headers : {
                            authorization :  localStorage.getItem('token')
                        } 
                 })
             }} >Intiate transfer</button>
             </div>
             </div> 
             </div> 
             </div> 
          </div>
     )
}