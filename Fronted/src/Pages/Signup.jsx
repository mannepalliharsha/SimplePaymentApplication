import {Heading} from '../Components/Heading'
import {Data} from '../Components/Data'
import { Inputbox } from '../Components/Inputbox'
import { BelowButton } from '../Components/BelowButton'
import { Finaltext } from '../Components/Finaltext'
import {useState} from 'react'
import  axios from 'axios'
import {useNavigate} from 'react-router-dom'
export function Signup(){
  const[firstname,setFirstname]=useState("");
  const[lastname,setLastname]=useState("");
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[error,setError]=useState("");
  const navigate=useNavigate();
      return(
          <div className=''>
            <div className=' bg-slate-300  flex justify-center h-screen'>
            <div className='flex flex-cols justify-center'>
            <div className='w-80 h-max border rounded-md p-2 px-4 text-center bg-white mt-16'>
           <Heading text={"Sign Up"}></Heading> 
           <Data text={"Enter your Information to create an account"}></Data> 
           <Inputbox name={"First Name"} placeholder={"mannepalli"} onChange={function(e){
               setFirstname(e.target.value);
           }}  ></Inputbox>
           <Inputbox name={"Last Name"} placeholder={"harsha"} onChange={function(e){
               setLastname(e.target.value);
           }}
            ></Inputbox>
           <Inputbox name={"Email"} placeholder={"harsha@gmail.com"} onChange={function(e){
                 setUsername(e.target.value);
           }} 
             ></Inputbox>
           <Inputbox name={"Password"} placeholder={"harsha123"} onChange={function(e){
                 setPassword(e.target.value);
           }}  ></Inputbox>
           <BelowButton text={"Sign Up"} onClick={async function(){
           try{
               const request=  await axios.post("http://localhost:600/login/user2/signup",
               {
                     firstname : firstname,
                     lastname : lastname,
                     username : username,
                     password : password
                 },
                 );
                  console.log(request.data.msg);
                   localStorage.setItem('token',request.data.token);
                   navigate("/usersignin");
                } catch(err){
                      setError(err.response.data.msg);
                } 
           }}  ></BelowButton>
           <Finaltext text="Already have an account ?" path={'/usersignin'} name={"Sign in"} ></Finaltext>
             {error!=="" && <div className="bg-red-600 font-bold " >{error}</div> }
           </div> 
           </div> 
          </div>
          </div>
      )
}