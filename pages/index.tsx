import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
//import Button from '@/components/Button'
import usetodos from '../hooks/usetodos'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const
  {
  
        description,
        setdescription,
 todos,
 settodos,

 submitHandler,
 gettodos,
  }=usetodos()
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-7">
        <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">@</span>
  <input type="text"  aria-placeholder='enter text'  value={description} onChange={(e)=>{setdescription(e.target.value)}} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
   {/* <button className='m-1'>choose file</button> */}
   <input type="file"  className='m-1' />
 

</div>
<div className='mt-3 justify-content-center'>

    {/* <Button data1='submit'/> */}
    <button onClick={ submitHandler}>submit</button>
  

<h3>list of todos : </h3>
{/* <Button data1='show todos'/> */}
<button  onClick={gettodos}>show todos</button>
     {
      todos.map((todos:any,index:any)=>
      {
   return(
    <div>
      <h2>{todos.id}  ---===--  {todos.description}</h2>
    </div>
   )
      }



      )
     }

</div>
        
        </div>
      </div>
    </>
  )
}
