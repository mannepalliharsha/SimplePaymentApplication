import { Input } from "postcss";

export function Inputbox({name,placeholder,onChange}){
      return(
        <div>
           <div className='p-2'>
             <h2 className='text-sm font-semibold text-left'> {name}</h2>
           </div>
          <div>
            <input onChange={onChange} type="text" placeholder={placeholder} className=' rounded-md border w-full p-2' />
          </div>
          </div>  
      )
}