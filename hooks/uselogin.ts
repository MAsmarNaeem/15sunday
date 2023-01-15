import { async } from "@firebase/util"
import { useState } from "react"
import { toast } from "react-toastify"
import { auth,signInWithEmailAndPassword } from "../config/firebase"
import { useRouter } from "next/router"

export default function uselogin()
{
    const[email,setemail]=useState<string>('')
    const[password,setpassword]=useState<string>('')

    const router=useRouter()
    const onSubmitHandler=async()=>
    {
        try {
            await signInWithEmailAndPassword(auth,email,password)
            toast.success("login successfully")
         router.push("/")
        } catch (err) {
            console.error(err)
            toast.error(err.message);
        }
    }
    return(
        
        {
         email,
         setemail,
         password,
         setpassword,
         onSubmitHandler,
        }
        

        

    )
}