import {useNavigate} from 'react-router-dom'
export function Numberofusers({endusers}){
    const navigate=useNavigate();
    return(
       <div className="flex justify-between" >
        <div className="flex">
            <div className='rounded-full h-12 w-12 border bg-slate-200 flex justify-center mt-2 mr-2' >
                <div className="flex flex-col h-full justify-center text-xls" >
             <div className='' >
                {endusers.firstname[0]}
             </div>
             </div> 
             </div>  
           <div className="flex flex-col justify-center h-full">
               <div className="" >
              {endusers.firstname} {endusers.lastname}
              </div> 
           </div> 
           </div>   
           <div className="flex flex-col justify-center mt-4">
            <div>
              <button onClick={function(e){
                   navigate('/send?id='+endusers.id+"&name="+endusers.lastname);
              }}  className="border rounded-md bg-black text-white pl-2 pr-2 pb-2 mr-2 text-center" >SendMoney</button>
              </div>
           </div>
       </div>
    )
}