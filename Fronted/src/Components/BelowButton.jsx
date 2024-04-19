export function BelowButton({text,onClick}){
     return(
        <div className="mt-2">
          <button onClick={onClick} className='border w-full text-md font-bold text-white bg-slate-800 hover:bg-slate-900 rounded-md p-2' >{text}</button>
          </div>  
     )
}