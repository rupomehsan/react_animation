import React from 'react'
import Sdata from '../Sdata'
import Card from '../Card/Card'
function Service() {
  return (
    <>
       <div className="heading">
         <h1 className="text-center py-5">Service</h1>
       </div>
       <div className="container-fluid">
         <div className="row">
           <div className="col-10 m-auto">
             <div className="row">
               {
                 Sdata.map((val,index)=>{
                   return (
                     <Card 
                        key={index}
                        title={val.title}
                        desc ={val.desc}
                        image ={val.image}
                     />
                   );
                 })
               }
             </div>
           </div>
         </div>
       </div>
    </>
  )
}

export default Service
