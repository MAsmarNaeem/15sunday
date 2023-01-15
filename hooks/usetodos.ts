import { async } from "@firebase/util"
import { useState } from "react"
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"
import { db, storage } from '../config/firebase'

export default function usetodos()
{
    const[description,setdescription]=useState('   ')
    const[todos,settodos]=useState<any>([])

    const submitHandler=async()=>
    {
        try {
  
     const newdoc=
     {
       description,
       createdAt:new Date(),


     }
       const docRef=await addDoc(collection(db,"my"),newdoc)
    //  settodos([...todos,{...newdoc,id:docRef.id}])

    settodos([...todos,{...newdoc,id:docRef.id}])
        } catch (error) {
            console.error(error)
        }
      

    }

    // const onFileChangeHandle = async (e:any) => {
    //    const file = new File([e.tar:anyget.files[0]], e.target.files[0].name)
    //    // setAttachmentImage(e.target.files[0])
    //     try {
            
    //     } catch (error) {
    //         console.log("error in file handling", error);

    //     }


    //}
    const gettodos=async()=>
    {
        const querysnapshot=await getDocs(collection(db,"my"))
        let todolist:any[]=[]
        querysnapshot.forEach((doc)=>
        {
            todolist.push(
                {
                    description: doc.data()?.description,
                    id: doc.id,
                    createdAt: doc.data()?.createdAt
                }
            )
        }

        )
        settodos(todolist)

       
    }
    return(
   {
        description,
        setdescription,
       // onFileChangeHandle ,
 todos,
 settodos,
 submitHandler,
 gettodos,


   }
    )
}