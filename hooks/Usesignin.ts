

import { useState } from "react";
import { auth,createUserWithEmailAndPassword } from "../config/firebase";
import { toast } from "react-toastify";
import  {useRouter} from 'next/router' 

export default function signup()
{
   const[name,setname]=useState<string>('')
   const[email,setemail]=useState<string>('')
   const[password,setpassword]=useState<string>('')

   const router=useRouter()

      const onSubmitHandler=async()=>
      {
       try {
        await createUserWithEmailAndPassword(auth,email,password)
      //   toast.success("successfully signup");
      toast.success("successfully")
         router.push('/login')
       } catch (error) {
        console.log(error)
        toast.error(error.message)
       }


      }

    return(
       {
        name,
        setname,
        email,
        setemail,
        password,
        setpassword,
        onSubmitHandler,
       }
    )
}

