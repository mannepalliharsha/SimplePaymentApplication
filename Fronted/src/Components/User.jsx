import {useState,useEffect} from 'react'
import axios from 'axios'
import { Numberofusers } from './Numberofusers';
export function User(){
    const[users,setUsers]=useState([]);
    const[value,setValue]=useState("");
        useEffect(()=>{
          setTimeout(function(){
            const fetchdata=async() => {
                const request= await axios.get("http://localhost:600/login/filter/match?name="+value);
                  setUsers(request.data.userdata);
                };  
                fetchdata();

            },2*1000);

      },[value]);
     return (
          <div className='mt-2' >
              <div className="font-bold text-lg ml-2">
                  Users
              </div>
              <div>
                <div className="flex flex-col justify-center" >
                <input onChange={async function(e){
                       setValue(e.target.value);
                }}  type="text" placeholder="Search users...." className="border rounded-md w-full ml-2 mt-2 pl-2 pt-2 pb-2 text-lg" />
              </div>  
              </div>
              <div>
                   {users.map(function(user){
                       return(
                        <Numberofusers endusers={user} ></Numberofusers>
                        )  
                   })}
              </div>
          </div>
     )
}