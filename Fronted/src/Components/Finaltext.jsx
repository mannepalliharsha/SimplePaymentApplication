import { Link } from "react-router-dom"
export  function Finaltext({text,path,name}){
     return(
           <div className='flex justify-center py-2'>
              <div>
                 <h4>{text}</h4>
              </div>
              <div className="ml-1">
                 <Link to={path} className="underline underline-offset-1 Pointer cursor-pointer" >{name}</Link>
              </div>
           </div>
     )
}