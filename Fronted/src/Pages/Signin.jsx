import { Heading } from "../Components/Heading"
import { Inputbox } from "../Components/Inputbox"
import { Finaltext } from "../Components/Finaltext"
import {Data} from '../Components/Data'
import { BelowButton } from "../Components/BelowButton"
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useEffect,useMemo} from 'react'
export function Signin(){
     const[username,setUsername]=useState("");
     const[password,setPassword]=useState("");
     const navigate=useNavigate();
     const[error,setError]=useState("");
     const handleclick = async function(){
          try {
               const response = await axios.post("http://localhost:600/login/user1/signin", {
                    username: username,
                    password: password
               }, {
                    headers: {
                         "Content-Type": 'application/json',
                         "authorization":  `${localStorage.getItem('token')}`
                    }
               });

             localStorage.setItem('token', response.data.token);
              // console.log(respo.data.token);
             //  console.log(headers.authorization)
               navigate('/homepage');
          } catch (err) {
               setError(err.response.data.msg);
          }
     };

     return(
          <div className='mt-10'>
               <div className='flex justify-center bg-slate-300 h-screen'>
               <div className='text-center w-80 h-max mt-32 bg-white border rounded-md pl-4 pr-4' >
             <Heading text={"Sign in"}></Heading>
             <Data text={"Enter credentials to access your account"} ></Data>
             <Inputbox onChange={function(e){
                    setUsername(e.target.value);
             }} name={"Email"} placeholder={'harsha@gmail.com'} ></Inputbox>
             <Inputbox onChange={function(e){
                  setPassword(e.target.value);
             }} name={"Password"} placeholder={'harsha@1'} ></Inputbox>
             <BelowButton onClick={handleclick} text={"Sign in"} ></BelowButton>
             <Finaltext text={"Don't have an account?"} name={"Sign Up"} path={"/usersignup"}  ></Finaltext>
             {error!=null && <div className="bg-red-500"> {error} </div>}
          </div>
          </div> 
          </div> 
     )
}